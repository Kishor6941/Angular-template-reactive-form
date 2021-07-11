import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm : FormGroup;

  constructor(private fb : FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      // emailAddress: new FormControl(''),
      // quantity: new FormControl(''),
      // terms: new FormControl('')
      emailAddress: ['',Validators.required],
      quantity: ['',Validators.required],
      terms: ['',Validators.required]
    })
    // this.checkoutForm = this.fb.group({
    //   // emailAddress: new FormControl(''),
    //   // quantity: new FormControl(''),
    //   // terms: new FormControl('')
    //   emailAddress: ['kishor@gmail.com',Validators.required],
    //   quantity: ['2',Validators.required],
    //   terms: ['true',Validators.required]
    // })

 
  }
  checkout() {
    console.log(this.checkoutForm.value);
    
    
  }
  edit(){
    const ObjValue = {
      emailAddress : 'kishor.phawade@gmail.com',
      quantity : 4,
      terms : true
    }
    this.checkoutForm.setValue(ObjValue)
  }
  editPatch() {
    const ObjValue = {
      emailAddress : 'kishor.phawade@gmail.com',
      quantity : 4,
      // terms : true
    }
    this.checkoutForm.patchValue(ObjValue)
  }
  clear() {
    this.checkoutForm.reset()
  }

}
