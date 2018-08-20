import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subject } from 'rxjs';
import { Product } from '../product';
import { Identifiers } from '@angular/compiler';
import {Router, NavigationExtras} from "@angular/router";
import{ShareService} from '../share.service';


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
  constructor(public data:DataService,public data1:ShareService) { 
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
     if(this.listData[i])
     this.gtotal+=this.listData[i].total;
       }
     //  this.data1.setT(this.gtotal);

  }
}