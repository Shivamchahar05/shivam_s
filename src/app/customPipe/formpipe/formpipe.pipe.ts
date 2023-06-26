import { Pipe, PipeTransform } from '@angular/core';
import { FormArray, FormControl, FormGroup } from 'user_13/node_modules/@angular/forms/forms';

@Pipe({
  name: 'formpipe'
})
export class FormpipePipe implements PipeTransform {

  transform(forms:any, value:string,arr:any): any{
    switch(forms.constructor.value){
      case FormGroup:{
        return FormGroup;
      }
      case FormControl:{
        return FormControl;
      }
      case FormArray:{
        
      }
    }
  }

}
