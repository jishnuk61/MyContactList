import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class DataService {

  result:any;
  
    constructor(private http: Http) { }
  
    getContacts() {
     
      return this.http.get('/api/contacts')
      .map(res => res.json());

    }

    addContact(newContact){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('/api/contacts', JSON.stringify(newContact), {headers: headers})
          .map(res => res.json());
  }
  
  deleteContact(id){
      return this.http.delete('/api/contacts/'+id)
          .map(res => res.json());
  }
  
  updateStatus(contact){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.put('/api/contacts/'+contact.id, JSON.stringify(contact), {headers: headers})
          .map(res => res.json());
  }




}
