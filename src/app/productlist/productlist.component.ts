import { Component, OnInit,Inject } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';
import { Product } from '../product';
import { Identifiers } from '@angular/compiler';
import {Router, NavigationExtras} from "@angular/router";
import{ShareService} from '../share.service';
import { LOCAL_STORAGE,WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
product : Product[];
 responseData : any;
 listData : any;
 gtotal:any=0; 

 selectedProduct : Subject<any> = new Subject;
  constructor(public data:DataService,public data1:ShareService,@Inject(LOCAL_STORAGE) private storage:WebStorageService) { 
    console.log("hai");
    this.product=new Array();
    this.listData=this.data.respon();
     console.log(this.listData)
  }

  ngOnInit() {
    
  }
  cal(){
   for(var i=0;i<this.listData.length;i++){
     
    // console.log(this.listData[i].total)
     if(this.gtotal==0)
     this.gtotal+=this.listData[i].total;
     this.storage.set('vicky_total',this.gtotal);
       }
     //  this.data1.setT(this.gtotal);

  }
}