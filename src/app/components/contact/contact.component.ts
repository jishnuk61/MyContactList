import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import {OnDestroy} from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,OnDestroy {

  contacts: Array<any>;
  
 
 
     // Create an instance of the DataService through dependency injection
     constructor(private _dataService: DataService,private ref: ChangeDetectorRef) {
     // route.params.subscribe(val => this.initialize());
     // console.log('hi from constructor');
       
           
     }
     ngOnDestroy() {
      this.ref.detach(); // try this
       //this._dataService.unsubscribe(); // for me I was detect changes inside "subscribe" so was enough for me to just unsubscribe;
    }
     initialize(){

// Access the Data Service's getUsers() method we defined

     }

  ngOnInit() {
    console.log('hi from OnInit');
    var appstest = new Array();
    appstest.push({"firstname":"Jishnu","lastname":"koottala","emailid":"jishnu45@gmail.com","mobile":"7890678970"});
    appstest.push({"firstname":"Luvish","lastname":"yadav","emailid":"luvishyadav@gmail.com","mobile":"787447970"});
    appstest.push({"firstname":"Mohan","lastname":"singh","emailid":"mohan.singh3@gmail.com","mobile":"78906576770"});
    appstest.push({"firstname":"Anurag","lastname":"dwivedi","emailid":"anurag.dwivedi@gmail.com","mobile":"78975778970"});
    //this.initialize();
  //this.contacts=appstest;
  this._dataService.getContacts()
  .subscribe(res => {console.log(res);
  this.contacts=res;
  this.ref.detectChanges();
  });



  }

}
