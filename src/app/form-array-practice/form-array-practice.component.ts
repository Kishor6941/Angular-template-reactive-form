import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array-practice',
  templateUrl: './form-array-practice.component.html',
  styleUrls: ['./form-array-practice.component.scss']
})
export class FormArrayPracticeComponent implements OnInit {
  orderForm: FormGroup;
  items: FormArray;
  constructor(private fb :FormBuilder ) { }

  ngOnInit(): void {
    this.formControlMethod()
  }
formControlMethod(){
  this.orderForm = this.fb.group({
    customerName: '',
    email: '',
    items: this.fb.array([ this.createItem() ])
  });
}
createItem(): FormGroup {
  return this.fb.group({
    name: '',
    description: '',
    price: ''
  });
}

addItem(): void {
  this.items = this.orderForm.get('items') as FormArray;
  this.items.push(this.createItem());
}

}

// https://medium.com/aubergine-solutions/add-push-and-remove-form-fields-dynamically-to-formarray-with-reactive-forms-in-angular-acf61b4a2afe
// https://www.digitalocean.com/community/tutorials/angular-reactive-forms-formarray-dynamic-fields#:~:text=You%20can%20use%20FormArray%20in,set%20of%20form%20fields%20declaratively.