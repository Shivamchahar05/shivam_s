import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  addressForm!: FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.addressForm = this._fb.group({
      houseNo: ['', Validators.required],
      area: ['', Validators.required],
      city: ['', Validators.required],
      pincode: [null, Validators.required],
      phoneNumber:[null,Validators.required ,]
    })
  }
  onSubmit() {
    console.log(this.addressForm.value,"User Address!");
  }
  keyPressNumbers(event:any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  keyPressAlphanumeric(event:any) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

}
