import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from  '@angular/common/http';
import { resolve, reject } from '../../node_modules/@types/q';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ShareService {
  API_URL  =  'http://192.168.1.48:3000/';
 
  constructor(private  http:  HttpClient) { }
  postShop(credentials,type){
   // console.log(type)
   // console.log(credentials)
    return new Promise((resolve,reject) =>{
      let headers=new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
     // console.log(credentials) 
      this.http.post(this.API_URL+type, credentials,{headers: headers}).
      subscribe(data =>{
       // console.log(credentials);
        resolve(data);      
       // console.log(data);
      },(err) =>{
        reject(err);
      });
      });
    }
    public postUpdate(details,type){
      return  new Promise((resolve,reject)=>{
        let headers=new HttpHeaders();
        console.log(details);
        this.http.put(this.API_URL+type,details,{headers:headers}).
        subscribe(res=>{
          resolve(res);
        },(err)=>{
          reject(err);
        });
      });
    }
    
    setT(tot){
      console.log("haii"+tot)
      localStorage.setItem("total", JSON.stringify(tot));
      this.respon();
    }
    respon(){
      var jj=JSON.parse(localStorage.getItem("total"));
      return jj;
     //console.log(jj);
    }
}
