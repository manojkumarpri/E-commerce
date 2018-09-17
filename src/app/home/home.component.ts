import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE,WebStorageService } from 'angular-webstorage-service';
import { DataService } from '../data.service';
import { Product } from '../product';
import { Combine } from '../combine';
import{ShareService} from '../share.service';
import { Product1 } from '../product1';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeComponent]
})
export class HomeComponent implements OnInit {
  /**
    */
  public listData:any;
  public imagesUrl;

  public searchTex:any;
  public responseData:any;   
  public technologies : any;
  total : number;
  product : Product[];
  product1 : Product1[];
  combine:Combine[];
  combine1:any={};
  public responseData2:Product1;
  public response:any;
  public resp:any;
  public listData1:any;
  public response1:any;
  public count:number=0;
  public lat:number;//=11.2163635;
  public lng:number;//=77.49003499999999;
  public listData2:any;
  display='none';
  public popup:any;
  public cust_id:number;
  constructor(public data:DataService,public data1:ShareService,@Inject(LOCAL_STORAGE) private storage:WebStorageService) {
    console.log("mano");  
//     this.data.getitems("textile/Chennai").then((result)=>{
//       this.responseData=result;
//       localStorage.setItem("quentinTarantino", JSON.stringify(this.responseData));
//       console.log(this.responseData);
//       if(this.responseData){
//     this.listData=this.responseData;
//   //  this.join();
//     console.log("success");
          
//       }
//       else{
//           console.log()
//       }
// },(err)=>{console.log("rejection")
// }).catch((err)=>{
// console.log("unhandledRejection",err.message);
// });




    this.getcontacts();
    this.product=new Array();
    this.product1=new Array();
    this.combine=new Array();
    this.product=[];
    //this.join();
       
  
        
    
   }

  ngOnInit() {
    
   
//     this.data.getitems("commerce/shope").then((result)=>{
//       this.response1=result;
//       //localStorage.setItem("quentinTarantino", JSON.stringify(this.responseData));
//       console.log(this.response1);
//       if(this.responseData){
//     this.listData1=this.response1;
    
//     console.log("success");
//    this.join();
  
//       }
  
//       else{
//           console.log()
//       }
// },(err)=>{console.log("rejection")
// }).catch((err)=>{
// console.log("unhandledRejection",err.message);

// }); 
 //this.getshop();
    
  }
  getshop(){
  this.data.getitems("shops").then((result)=>{
    this.response1=result;
    //localStorage.setItem("quentinTarantino", JSON.stringify(this.responseData));
    console.log(this.response1);
    if(this.responseData){
  this.listData1=this.response1;
  
  console.log("success");
 this.join();

    }

    else{
        console.log()
    }
},(err)=>{console.log("rejection")
}).catch((err)=>{
console.log("unhandledRejection",err.message);

}); 
  }
  getcontacts(){
  this.data.getitems("products").then((result)=>{
    this.responseData=result;
    localStorage.setItem("quentinTarantino", JSON.stringify(this.responseData));
    console.log(this.responseData);
    if(this.responseData){
  this.listData=this.responseData;

  console.log("success");
  this.getshop();        
    }
    else{
        console.log()
    }
},(err)=>{console.log("rejection")
}).catch((err)=>{
console.log("unhandledRejection",err.message);
});

}
  join(){
     console.log(this.listData)
     console.log(this.listData1)
    var k=this.listData.length;
    console.log(k)
   this.combine=[];
   for(var i=0;i<k;i++)
      {
        // console.log(this.listData[i].id)
        this.combine1.Id1 =this.listData[i].Id1;
        this.combine1.id =this.listData[i].id;
        this.combine1.img =this.listData[i].img;;
        this.combine1.name=this.listData[i].name;
        this.combine1.price =this.listData[i].price;
         this.combine1.quantity=0;
          this.combine1.prodCategory=this.listData[i].prodCategory;
       this.combine1.shopCategory=this.listData[i].shopCategory;
          this.combine1.shortDesc=this.listData[i].shortDesc;
         this.combine1.longDesc=this.listData[i].longDesc;
         this.combine1.size=this.listData[i].size;
          this.combine1.rating=this.listData[i].rating;
       this.combine1.discount=this.listData[i].discount;
       this.combine1.brandName=this.listData[i].brandName;
       this.combine1.sku=this.listData[i].sku;
            this.combine1.tax=this.listData[i].tax;
       this.combine1.prodId=this.listData[i].prodId;
       this.combine1.total=this.listData[i].total;
       this.combine1.available=this.listData[i].available;
       var l2=0;
     for(var j=0;j<this.listData1.length;j++){
     if(this.listData[i].shopName==(this.listData1[j].shopname)){
        this.combine1.shopName=this.listData[i].shopName;
        this.combine1.lat=this.listData1[j].latitude;
        this.combine1.lng=this.listData1[j].longitude;
        console.log("manoooo")
        l2++;
     }
    }
     if(l2==0){
       this.combine1.shopName="empty";
       this.combine1.lat="120";
       this.combine1.lng="120";
     }
    //  else{
    //   this.combine1.shopName="empty";
    //   this.combine1.lat=120;
    //   this.combine1.lng=120;
    //   console.log("heyyyy")
    //  }
    
     // console.log(this.combine1);
     //this.combine = this.combine.concat(this.combine1);

      this.combine.push(this.combine1);
      
      this.combine1={};
    }
    //this.count=9000;
   // this.count=10000;
    console.log(this.combine);
    //this.product=[];
  }


  openModalDialog(i){
    this.display='block'; //Set block css
    //console.log('hello3');
    this.popup=i;
    console.log(i);
 }

 closeModalDialog(){
  //console.log('hello1');
  this.display='none'; //set none css after close dialog
  console.log('hello2');
 }

  view(){
   this.cust_id= this.storage.get('vicky_id');
   console.log("here add to cart");
     this.data.getp(this.product);  
  console.log(this.cust_id)
  if(this.cust_id!=null){
        
     
    console.log(this.product);
    var rv = {};
     this.resp=this.product;
     console.log(this.resp);
     console.log(delete this.resp[0].id);
     console.log(this.resp);
     for(var d=0;d<this.resp.length;d++){
       this.resp[d].cust_id=this.cust_id;
       this.resp[d].checked=0;   
     }
    console.log(this.resp);    
    
    for (var i = 0; i < this.resp.length; i++){
      rv = this.resp[i];
     
    
    
   this.data1.postShop(rv, "orders").then((result) =>{
          var results = this.response;
          console.log(this.response);
          console.log("Successfully updated");
          this.products();
  
        }, (err)=> {
           }).catch((err) =>{
              console.log("Unhandled rejection",err.message);
           
         alert("helloo");
      });
    }
  }else{
    alert("Please sign in first!");
  }
  }
  
   products(){
     console.log("home");
    var jj=JSON.parse(localStorage.getItem("manoj"));
    console.log(jj[this.j])
    this.data1.postUpdate(jj[this.j], "products/".concat(jj[this.j].Id1)).then((result) =>{
      var results = this.response;
      console.log(this.response);
      console.log("Successfully updated");
      this.getcontacts();
      

      
        }, (err)=> {
       }).catch((err) =>{
          console.log("Unhandled rejection",err.message);
       
     alert("helloo");
  });

}
 
//   getcontacts(){
//     this.data.getitems("textile/Chennai").then((result)=>{
//         this.responseData=result;
//         localStorage.setItem("quentinTarantino", JSON.stringify(this.responseData));
//         console.log(this.responseData);
//         if(this.responseData){
//       this.listData=this.responseData;
//       console.log("success");
//      // this.getshops();
//       // this.technologies=this.listData;
//         }
//         else{
//             console.log()
//         }
// },(err)=>{console.log("rejection")
// }).catch((err)=>{
//   console.log("unhandledRejection",err.message);
// });

// }


   /**
    */
   

  

delpopup(pid:Product){
  console.log(pid);
  for(var i=0;i<this.listData.length;i++){
    if(this.listData[i].id === pid)
    {  
      this.listData.splice(i,1);
    }           
  }
  //this.totalPrice(pid);
  console.log(this.listData);
}
totalPrice(pid,j){
  // for(var i=0;i<this.listData.length;i++){
  //   this.total += (this.listData[i].price * this.listData[i].quantity);
  // }
  pid.total = (pid.price * pid.quantity);
  this.listData[j].total=pid.total;
  
}
public j:any;
public com:any;
add(pid:Product){
  //this.product=[];
  console.log("Hai");
  console.log(pid);
  var jj=JSON.parse(localStorage.getItem("quentinTarantino"));
  console.log(jj)
  this.com=jj;
  localStorage.setItem("refer", JSON.stringify(this.com));
   for(var i=0;i<this.listData.length;i++){
    if(this.listData[i].Id1 === pid.Id1)
    {  
      this.j=i;
      if(this.combine[i].quantity<this.listData[i].available){
           
  
 

      //this.listData[i].quantity += 1;
       this.combine[i].quantity+=1;
       this.listData[i].available-=1;
      this.combine[i].available=this.listData[i].available;
      }
    }           
  }
  
   for(var i=0;i<this.listData.length;i++){
     if(this.listData[i].id==pid.id){
       if(this.combine[i].quantity<this.listData[i].available){
         // console.log(jj[i].quantity);
  //       // console.log(this.listData[i].quantity)
       jj[i].quantity+=1;
       jj[i].available-=1;
       }
       else{
         jj[i].quantity=0;
       }
     }  
     }

 // console.log(pid);
 this.totalPrice(pid,this.j);
 
 this.product.push(pid);
 //this.data.getp(this.product);

  alert("Your selected:"+this.combine[this.j].quantity+"itemsAnd Total Price is:$"+this.listData[this.j].total);
 // console.log(jj[this.j].quantity);
  localStorage.setItem("manoj", JSON.stringify(jj));

  console.log(this.product);
  console.log(this.responseData)
  }

del(pid:Product){
  console.log(pid);
  
  for(var i=0;i<this.listData.length;i++){
    if(this.listData[i].id === pid.id)
    {
       this.j=i;
      // var s=pid.quantity;
       console.log("vicky mano" ); 
       console.log(pid.quantity );
      // console.log(this.technologies[i].quantity) 
       console.log(this.listData[i].quantity );      
       var mm=JSON.parse(localStorage.getItem("refer"));
       console.log(this.responseData[i].q);
       if(pid.quantity>0){
         console.log("hello")
     // this.listData[i].quantity -= 1;
      this.combine[i].quantity-=1;
      this.listData[i].available+=1;      
      this.combine[i].available=this.listData[i].available;

       }
    
    }           
  }
  this.totalPrice(pid,this.j);

  this.product.pop();
  this.data.getp(this.product);
  console.log(this.combine[this.j].quantity)
  var jj=JSON.parse(localStorage.getItem("quentinTarantino"));
  jj[this.j].quantity+=this.listData[this.j].quantity;
  alert("Your selected:"+this.listData[this.j].quantity+"items And Total Price is:$"+this.listData[this.j].total);
  localStorage.setItem("manoj", JSON.stringify(jj));
  console.log(this.listData);
  
}
addc(){
  
  this.count=this.count+1000;
  console.log(this.count);
  }

  sub(){
  //--this.count;
  this.count=this.count-1000;
  console.log(this.count);
  }
  findMe() {
    console.log("Hello");
  
    console.log(this.combine)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    
  }
  showPosition(position) {
    console.log( position.coords.latitude);
    console.log( position.coords.longitude);
  this.lat=position.coords.latitude;
  this.lng=position.coords.longitude;
   
  }
    
    }
  






  




   




   


   


