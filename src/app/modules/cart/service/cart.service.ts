import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class CartService {
  constructor(private _formBuilder: FormBuilder, private _snackBar: MatSnackBar,private dialog: MatDialog) { }
  
  createProductDataForm() {
    return this._formBuilder.group({
      productData: this._formBuilder.array([])
    })
  }
  createCartForm() {
    return this._formBuilder.group({
      categoryName: [''],
      categoryId: [''],
      subCategory: this._formBuilder.array([]),
    });
  }
  createSubCategoryForm() {
    return this._formBuilder.group({
      categoryId: [''],
      subCategoryName: [''],
      subCategoryId: [],
      classTotal: [0],
      classes: this._formBuilder.array([]),
    });
  }

  createClassesForm(className: string, classCount: number) {
    return this._formBuilder.group({
      className: [className],
      classCount:[classCount]
    })
  }

  // authSnackBar(message: any, action: string, theme: string) {
  //   this._snackBar.open(message, action, {
  //     duration: 2000,
  //     panelClass: [theme],
  //     horizontalPosition: 'center',
  //     verticalPosition: 'top',
  //   });
  // }
}
