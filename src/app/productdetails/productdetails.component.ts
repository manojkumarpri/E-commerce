import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../product';
import { ProductlistComponent } from '../productlist/productlist.component';
import { Inject, Injector, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { ShareService } from '../share.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {

  @Input() list : Subject<any>;
 // fulldetails : any[];
  product : Product[];
  response:any;
  responseData:any;
  listData:any;
  // id : number;
  // name : string;
  // price : number;
  // image : string;
  // quality : number;

  constructor(public data:DataService,public data1:ShareService ) {
    //console.log("servi");
    // this.response=this.data.respon();
    // console.log(this.response);
    // this.toObject(this.response);
    this.data.getitems("orders").then((result)=>{
      this.responseData=result;
      console.log(this.responseData);
      if(this.responseData){
    this.listData=this.responseData;
     console.log(this.listData);
      }
      else{
          console.log()
      }
},(err)=>{console.log("rejection")
}).catch((err)=>{
console.log("unhandledRejection",err.message);
});

  //   this.data1.postShop(this.response, "create").then((result) =>{
  //     var results = this.response;
  //     console.log(this.response);
  //     console.log("Successfully updated");
  //       }, (err)=> {
  //      }).catch((err) =>{
  //         console.log("Unhandled rejection",err.message);
        
  //    alert("helloo");
  // });

    }
  //    toObject(response) {
  //     var rv = {};
  //     // rv=this.response;
  //     console.log(response.length);
  //      for (var i = 0; i < response.length; i++){
  //        rv = response[i];
        
       
       
  //     this.data1.postShop(rv, "cart/create").then((result) =>{
  //            var results = this.response;
  //            console.log(this.response);
  //            console.log("Successfully updated");
  //              }, (err)=> {
  //             }).catch((err) =>{
  //                console.log("Unhandled rejection",err.message);
              
  //           alert("helloo");
  //        });
      
  //   }
    
     
  // }
}

