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
  public uid:string;
  constructor(public data:DataService,public router:Router,@Inject(LOCAL_STORAGE) private storage:WebStorageService) {
    //console.log(this.data.user_id);
      this.listData1= this.data.respon();
      console.log(this.listData1);
   }

  ngOnInit() {
   this.uid=this.storage.get('vicky_id');
   console.log(this.uid);
   this.getUser();
   this.getOrdersOfUser();
  }


  getUser(){
    this.data.getUsersById('users/user/'.concat(this.uid)).then((result)=>{
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
    this.data.postShop(this.uid, "orders/orderFilter").then((result) =>{
      
      this.ordersList=result;
        }, (err)=> {
       }).catch((err) =>{
          console.log("Unhandled rejection",err.message);
       
     alert("helloo");
  });
    
  }

logout(){
  //this.data.userLoggedIn=false;
  localStorage.clear();
  this.router.navigate(['/']);
}

}
