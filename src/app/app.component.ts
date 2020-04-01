import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GBarenaTask';

  fields = [
    {
    label:'Full Name',
    key:'name',
    value:null,
    placeholder:'Please Enter your name',
    required:true,
    type:'text'
  },

    { 
      label:'Language',
      key:'language',
      value:null,
      placeholder:'Please Choose your language',
      required:false,
      type:'select',
      items:['Arabic','English']
     }

  ];

  form :FormGroup

  constructor(private fb: FormBuilder){}

 ngOnInit(){
  let formGroupObject = {};
  for(let item of this.fields ){
    formGroupObject[item.key] = new FormControl('');
  }

  this.form =this.fb.group(formGroupObject);
 }


 onSubmit(form:FormGroup){
   console.log(form.value);
 }
}
