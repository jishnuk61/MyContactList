import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { DataService } from '../../data.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  rForm : FormGroup;
  contacts: Array<any>;
  constructor(private fb:FormBuilder,private _dataService: DataService) { 
    console.log('hi from constructor');
        this.rForm=fb.group({
          'firstname':[null,Validators.compose([Validators.required,Validators.minLength(3)])],
          'lastname':[null,Validators.required] ,
          'emailid':   [null,Validators.required] ,
          'mobile': [null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])]    
        });




      }

  ngOnInit() {

  
  }

addContact(contact){

  console.log(contact.firstname);
  if(contact.firstname!=null){
    this._dataService.addContact(contact).subscribe(res => {console.log(res);
      this.contacts=res;
      });
      swal("Success","Contact has been added","success");
  }else{
    swal('some error occured');
  }

  

}



}
