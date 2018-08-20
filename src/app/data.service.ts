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
export class DataService {
  public result1;id:any
  API_URL  =  'http://localhost:8080/';
 public product:any;
  constructor(private  http:  HttpClient) { }

public getProduct(type){
  return  new Promise((resolve,reject)=>{
    let headers=new HttpHeaders();
    this.http.get(this.API_URL+type,{headers:headers}).
    subscribe(res=>{
      resolve(res);
    },(err)=>{
      reject(err);
    });
  });
}
public postShop(details,type){
  return  new Promise((resolve,reject)=>{
    let headers=new HttpHeaders();
    console.log(details);
    this.http.post(this.API_URL+type,details,{headers:headers}).
    subscribe(res=>{
      resolve(res);
    },(err)=>{
      reject(err);
    });
  });
}


public getp(p){
  console.log(p);
  this.product=p;
  //localStorage.setItem("quentinTarantino", JSON.stringify(p));
  this.respon();
}
public respon(){
  //var jj=JSON.parse(localStorage.getItem("quentinTarantino"));
  return this.product;
}
getitems(type){
  console.log(type);
  return  new Promise((resolve,reject)=>{
    let headers=new HttpHeaders();
    this.http.get(this.API_URL+type,{headers:headers}).
    subscribe(res=>{
      resolve(res);
    },(err)=>{
      reject(err);
    });
  });
}// postShop(credentials,type){
//   console.log(type)
//   return new Promise((resolve,reject) =>{
//     let headers=new HttpHeaders();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');
//     console.log(credentials) 
//     this.http.post(this.API_URL+type, credentials,{headers: headers}).
//     subscribe(data =>{
//       console.log(credentials);
//       resolve(data);      
//       console.log(data);
//     },(err) =>{
//       reject(err);
//     });
//     });
//   }

//users get

getAdmin(details,type){
  return new Promise((resolve , reject) =>{
    let headers =new HttpHeaders();
    //headers.append("Content-Type","application/json");
    console.log(details);
    this.http.get(this.API_URL+type,details).
    subscribe (data =>{
      console.log("success");
      resolve(data);
    },(err)=>{
      reject(err);  
    });
  });

}

getUsers(type){
  return new Promise((resolve, reject)=>{
    let headers = new HttpHeaders();
    this.http.get(this.API_URL+type, {headers: headers}).
    subscribe(res =>{
     resolve(res);
    },(err)=>{
      reject(err);
    });
  });
}

getUsersById(type){
  return new Promise((resolve, reject)=>{
    let headers = new HttpHeaders();
    this.http.get(this.API_URL+type, {headers: headers}).
    subscribe(res =>{
     resolve(res);
    },(err)=>{
      reject(err);
    });
  });
}

postDetails(details,type){
  return new Promise((resolve , reject) =>{
    let headers =new HttpHeaders();
    //headers.append("Content-Type","application/json");
    console.log(details);
    this.http.post(this.API_URL+type,details,{headers:headers}).
    subscribe (data =>{
      console.log(this.result1);
      console.log("success");
      resolve(data);
    },(err)=>{
      reject(err);  
    });
  });
}
}

 