import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PlaceorderComponent } from 'src/app/components/placeorder/placeorder.component';
import { CartlistService } from 'src/app/service/cartlist/cartlist.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentForm!: FormGroup;
  months: any = [];
  years: any = [];
  gpay:any
  constructor(private _fb: FormBuilder,private payment_amount:CartlistService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.creatForm();
    this.date();
    // this.gpay=this.payment_amount.gpay_amount;
    this.paymentRequest.transactionInfo.totalPrice=this.gpay;
    console.log(this.paymentRequest.transactionInfo.totalPrice,'price');
    this.payment_amount.gpay.subscribe(res=>{
      this.gpay=res
    })
    
  }
  openDialog():any {
    this.dialog.open(PlaceorderComponent, {
    });
  }

  creatForm() {
    this.paymentForm = this._fb.group({
      paymentOption: ['', Validators.required],
      cardNumber: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      cvv: ['', Validators.required],
      cardHolderName: ['', Validators.required],
      upiId: ['', Validators.required],
    });
  }

  date() {
    var year = new Date().getFullYear();
    for (var i = 1; i < 7; i++) {
      this.years.push(year + i);
    }
    for (var i = 1; i <= 12; i++) {
      this.months.push(i);
    }
  }
  buttonColor = "white";
  buttonType = "buy";
  isCustomSize = false;
  buttonWidth = 240;
  buttonHeight = 40;

  paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice:'100.00',
      currencyCode: "USD",
      countryCode: "US"
    }
  };

  onLoadPaymentData(event:any) {
    console.log("load payment data", event.detail);
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

}
