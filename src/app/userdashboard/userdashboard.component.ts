import { Component, OnInit,Inject } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { LOCAL_STORAGE,WebStorageService } from 'angular-webstorage-service';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  responseData:any;
  listData: any;
  ordersList:any;
  listData1:any;
  gtotal:any;
  public uid:string;
  constructor(public data:DataService,public router:Router,@Inject(LOCAL_STORAGE) private storage:WebStorageService) {
    //console.log(this.data.user_id);
      // this.listData1= this.data.respon();
      // console.log(this.listData1);
      this.uid=this.storage.get('vicky_id');
      this.getOrdersOfUser();
   }

  ngOnInit() {
   this.uid=this.storage.get('vicky_id');
  this.gtotal=this.storage.get('vicky_total');
  console.log(this.gtotal)
   console.log(this.uid);
   this.getUser();
 //  this.getOrdersOfUser();
  }


  getUser(){
    this.data.getitems('users/'.concat(this.uid)).then((result)=>{
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData) {
       
       this.listData=this.responseData;
       console.log(this.listData);
      }else {
        console.log();
      }
    }, (err) => {
        console.log("Rejection");
    }).catch((err)=>{
      console.log('unHandledRejection', err.message);
    });
    
  }

  getOrdersOfUser(){
    this.data.getitems('orders/'.concat(this.uid)).then((result)=>{
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData) {
       
       this.listData1=this.responseData;
       console.log(this.listData1);
      }else {
        console.log();
      }
    }, (err) => {
        console.log("Rejection");
    }).catch((err)=>{
      console.log('unHandledRejection', err.message);
    });
    
    
  }

logout(){
  //this.data.userLoggedIn=false;
  localStorage.clear();
  window.location.reload(true);
  this.router.navigate(['/']);
}

}
