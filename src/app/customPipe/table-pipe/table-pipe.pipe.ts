import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tablePipe',
  pure:false
})
export class TablePipePipe implements PipeTransform {
  transform(value: any , searchtearm:any): any {
    console.log(value);
    
     if(value.length === 0){
       return value;
     }
     else{     
         return value.filter(function(search:any){
             return search.category.toLowerCase().indexof(searchtearm.toLowerCase())>1
         })
        }
    // console.log(value,"pipe",type,"va",idx,value.length-1);
    // switch (type) {
    //   case 'Sub-Category':
    //     return value.subCategoryName;
    //     break;
    //     case 'Class A':
    //     return value.classes[0].classCount;
    //     break;
    //   case 'Class B':
    //     return value.classes[1].classCount;
    //     break;
    //   case 'Class C':
    //     return value.classes[2].classCount;         
    //     break;
    //   case 'Total':
    //     return value.classTotal;
    //     // return value.classTotal=value.classes[0].classCount + value.classes[1].classCount + value.classes[2].classCount;
    //     break;

    //   default:
    //     break;
    // }
    
  }
}
