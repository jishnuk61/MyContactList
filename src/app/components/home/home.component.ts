import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import swal from 'sweetalert2';
import { ChangeDetectorRef } from '@angular/core';
import {OnDestroy} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit,OnDestroy {
  
  contacts: Array<any>;
 
  

    // Create an instance of the DataService through dependency injection
    constructor(private _dataService: DataService,private ref: ChangeDetectorRef) {
      
     
      // Access the Data Service's getUsers() method we defined
  
          
    }
    ngOnDestroy() {
      this.ref.detach(); // try this
      // this.authObserver.unsubscribe(); 
    
    }
  ngOnInit() {


    var contact={"firstname":"jishnu","lastname":"koottala","email":"jishnu45@gmail.com","mobile":"7890678970"};

var appstest = new Array();
    appstest.push({"firstname":"Jishnu","lastname":"koottala","emailid":"jishnu45@gmail.com","mobile":"7890678970"});
    appstest.push({"firstname":"Luvish","lastname":"yadav","emailid":"luvishyadav@gmail.com","mobile":"787447970"});
    appstest.push({"firstname":"Mohan","lastname":"singh","emailid":"mohan.singh3@gmail.com","mobile":"78906576770"});
    appstest.push({"firstname":"Anurag","lastname":"dwivedi","emailid":"anurag.dwivedi@gmail.com","mobile":"78975778970"});
console.log('hi from on init');
  // this.contacts=appstest;
  this._dataService.getContacts()
  .subscribe(res => {console.log(res);
 this.contacts=res;
 this.ref.detectChanges();
 });
  }
  

confirmDel(id){
  
  console.log('id is = '+id);
  swal({
    title: 'Are you sure want to delete this contact?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(() => {
    //this._dataService.deleteContact(id);



    var cts = this.contacts;
    
    this._dataService.deleteContact(id).subscribe(data => {
        if(data.n == 1){
    var cts = this.contacts;
            for(var i = 0;i < cts.length;i++){
                if(cts[i]._id == id){
                  cts.splice(i, 1);
                }
            }
            this.contacts=cts;
        }
    });


    swal(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    );
  })
}


}
