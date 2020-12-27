import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnounceServiceService {
  httpOptionsNoAuth : any;
  announceData : any;
  aboutData:any;
  menuData:any;
  formData: any;


  constructor(private http: HttpClient) { 
    this.httpOptionsNoAuth = {
      headers: new HttpHeaders().set('No-Auth', 'true')
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set("Access-Control-Allow-Methods" , 'GET,POST,PATCH,DELETE,PUT,OPTIONS') 
      .set ("Access-Control-Allow-Headers" , 'Origin, Content-Type, X-Auth-Token, content-type')
  };
  }

  SERVER_URL = environment.SERVER_URL

 getAnnounceData() {
   return this.announceData
 }

 getAboutData() {
  return this.aboutData
}

getFormData() {
  return this.formData
}

 public setdata(value: any) {
  this.announceData = value;
  console.log('here in service')
  console.log(this.announceData)
}

public setdata2(value: any) {
  this.aboutData = value;
  console.log('here in service')
  console.log(this.aboutData)
}

public setdata3(value: any) {
  this.menuData = value;
  console.log('here in service')
  console.log(this.menuData)
}

public setdata4(value: any) {
  this.formData = value;
  console.log('here in service')
  console.log(this.formData)
}



  postAnnounce (): Observable <any> {
    return this.http.post<any>(this.SERVER_URL+ 'announce/add', this.announceData); //this will return observable (stream of data contiously)
  }

  getAnnounce(): Observable <any> {
    return this.http.get<any>(this.SERVER_URL+ 'announce', { headers: this.httpOptionsNoAuth.headers}); //this will return observable (stream of data contiously)
  }

  postAbout(): Observable <any> {
    return this.http.post<any>(this.SERVER_URL+ 'home/add', this.aboutData); //this will return observable (stream of data contiously)
  }

  postMenu(): Observable <any> {
    return this.http.post<any>(this.SERVER_URL+ 'menu/add', this.menuData); //this will return observable (stream of data contiously)
  }

  getCustomer(): Observable <any> {
    return this.http.get<any>(this.SERVER_URL+ 'customer', { headers: this.httpOptionsNoAuth.headers}); //this will return observable (stream of data contiously)
  }
}
 


