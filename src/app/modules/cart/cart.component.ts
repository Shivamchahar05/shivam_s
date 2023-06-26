import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { constantData } from 'src/app/constant/constant-data';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { CartService } from './service/cart.service';
import { tableHeading } from '../../constant/constant-data';
import { ApiService } from 'src/app/service/api.service';
import { CartlistService } from 'src/app/service/cartlist/cartlist.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  productDataForm!: FormGroup;
  categoryControl = new FormControl();
  subCategoryControl = new FormControl();
  categoryData = constantData;
  subCatData: any = [];
  isEnable = true;
  showFinalData = false; 
  displayTable = false
  columns = tableHeading;
  cart=true;
  newcart=false;
  previewImg=""
  addcart=0;
  searchCategories:string=''
  constructor(private dialog: MatDialog, private cartService: CartService,private apiservice:ApiService ,private cartlist:CartlistService,
    private router:Router) { }

  ngOnInit(): void {
    // this.addcart=this.cartlist.countaddcart
    // console.log(this.addcart,'ssssssssss');
    this.productDataForm = this.cartService.createProductDataForm();
  }

  get productData(): FormArray {
    return this.productDataForm.get('productData') as FormArray;
  }

  getSubCategory(categoryIndex: number) {
    return this.productData.at(categoryIndex).get('subCategory') as FormArray;
  }
  
  getSubcategoryClasses(subCatForm: any) {
    return subCatForm.controls['classes'].controls;
  }

  onCategoryChange() {
    this.cart=true
    this.newcart=false
    this.subCatData = this.categoryControl.value.subCat;
  }

  addSubCategoryClasses(subCatForm: FormGroup, classes: Array<any>) {
    classes.forEach((item: any) => {
      (<FormArray>subCatForm.get('classes')).push(this.cartService.createClassesForm(item.className, item.classCount));
    })
  }

  subCategoryTotal(subCatForm: FormGroup) {
    let sum = 0;
    subCatForm.controls.classes.value.forEach((element: any) => {
      sum += element.classCount;
    });
    return sum;
  }

  isCategoryAvailable(productData: FormArray, categoryForm: FormGroup) {
    const categoryIndex = productData.value.findIndex((element: any) => element.categoryId === categoryForm.get('categoryId')?.value);
    return categoryIndex;
  }

  isSubCategoryAvailable(categoryData: any, subCatForm: FormGroup) {
    const subCatIndex = categoryData.get('subCategory').value.findIndex((element: any) => element.subCategoryId === subCatForm.get('subCategoryId')?.value);
    return subCatIndex;
  }

  addData() {
    if (this.categoryControl.value && this.subCategoryControl.value) {
      const categoryForm = this.cartService.createCartForm();
      categoryForm.patchValue({
        categoryName: this.categoryControl.value.category,
        categoryId: this.categoryControl.value.catId
      });
      const subCatForm = this.cartService.createSubCategoryForm();
      subCatForm.patchValue({
        categoryId: this.subCategoryControl.value.catId,
        subCategoryName: this.subCategoryControl.value.subCatName,
        subCategoryId: this.subCategoryControl.value.subCatId,
        classes: this.addSubCategoryClasses(subCatForm, this.subCategoryControl.value.classes),
        classTotal: this.subCategoryTotal(subCatForm)
      });
      const categoryIndex = this.isCategoryAvailable(this.productData, categoryForm);
      if (categoryIndex == -1) {
        (<FormArray>categoryForm.get('subCategory')).push(subCatForm)
        this.productData.push(categoryForm);
      } else {
        let categoryData = this.productData.at(categoryIndex);
        const subCatIndex = this.isSubCategoryAvailable(categoryData, subCatForm);
        if (subCatIndex == -1) {
          (<FormArray>this.productData.at(categoryIndex).get('subCategory')).push(subCatForm);
        }
      }
    }
  }

  tab(){
    console.log(this.productDataForm.value, "final Dataaaa");
    this.displayTable = true;
    this.router.navigate(['/newtab'])
  }

 
  deleteData(catIdx: number, subCatIdx: number) {
    (<FormArray>this.productData.at(catIdx).get('subCategory')).removeAt(subCatIdx);
   if( (<FormArray>this.productData.at(catIdx).get('subCategory')).length==0){
     this.productData.removeAt(catIdx);
   }
  }

  
  actionButton(catIdx: number, subCatIdx: number,classIdx:number,action:number) {
    let currentVal = (<FormGroup>(<FormArray>(<FormArray>this.productData.at(catIdx).get('subCategory')).at(subCatIdx).get('classes')).at(classIdx)).get('classCount')?.value;
    if (currentVal > 0) {
      (<FormArray>(<FormArray>this.productData.at(catIdx).get('subCategory')).at(subCatIdx).get('classes')).at(classIdx).patchValue({
        classCount:currentVal+action
      })
    } else if (action == 1) {
      (<FormArray>(<FormArray>this.productData.at(catIdx).get('subCategory')).at(subCatIdx).get('classes')).at(classIdx).patchValue({
        classCount:currentVal+action
      })
    }
    (<FormGroup>(<FormArray>this.productData.at(catIdx).get('subCategory')).at(subCatIdx)).patchValue({
      classTotal: this.subCategoryTotal((<FormGroup>(<FormArray>this.productData.at(catIdx).get('subCategory')).at(subCatIdx)))
    })
  }
  
  finalSubmit() {
    this.showFinalData =!this.showFinalData;
    this.subCategoryControl.reset();
    this.categoryControl.reset();
  }
  openDialog(catIdx: any,subCatIdx:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.minWidth = '600px';
    dialogConfig.data = {
      title: "Delete?",
      description: "Are your sure to delete this product?",
      acceptButton: 'Yes',
      rejectButton: 'No'
    }
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      if (res == 1) {
        this.deleteData(catIdx,subCatIdx);
        console.log(res, "After Close");
      }
    });
  }

  nextcart(){
    this.cart=false
    this.newcart=true
    this.subCategoryControl.reset();
    this.categoryControl.reset();
  }
  applyFilter(filtervalue:any){
    console.log(filtervalue.target.value,'value'); 
    this.productData.value.filter=filtervalue.target.value.trim().toLowerCase();
    console.log( this.productDataForm.value.filter,'filter');
    console.log(this.productData,'productdata');
    
  }
}
