import { Component, OnInit,AfterViewChecked,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE,WebStorageService } from 'angular-webstorage-service';
import { DataService } from '../data.service';
declare let paypal: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public responseData: any;
  public listData: any;
  public listData1: any;
  ordersList:any;
  public uid:string;
  public address:String;
  newaddress:boolean=false;
  public response1:any;
  show:boolean=false;
  public total:number;
  public finalAmount:number;
  show1:boolean=false;
  public providerDetail1={"address":""};
  isLoggedOut:boolean=true;
  public username:string;
  constructor(public router:Router,public data:DataService,@Inject(LOCAL_STORAGE) private storage:WebStorageService) {
   
    //getting user status
   if( this.storage.get('vicky')){
     this.isLoggedOut=false;
   }
   console.log("hello")
   this.uid=this.storage.get('vicky_id');
//    this.data.getitems("cart/show/"+this.uid).then((result)=>{
//     this.response1=result;
//     //localStorage.setItem("quentinTarantino", JSON.stringify(this.responseData));
//     console.log(this.response1);
//     if(this.response1){
//   this.listData1=this.response1;
  
//   console.log("success");
   

//     }

//     else{
//         console.log()
//     }
// },(err)=>{console.log("rejection")
// }).catch((err)=>{
// console.log("unhandledRejection",err.message);
// }); 
 
}
   

  ngOnInit() {
    this.total=this.storage.get('vicky_total');
    this.finalAmount=this.total;
    //this.listData1= this.data.respon();
   // console.log(this.listData1);
    //getting pre given address
    this.listData1=this.data.respon();
     console.log(this.listData1)
    this.username=this.storage.get('vicky_uname');
    console.log(this.storage.get('vicky_total'));
    console.log(this.uid);
   this.getUser();
   this.getOrdersOfUser();
  }
  //new address show or hide
  addrtoggle() {
    this.newaddress = !this.newaddress;
   }

   //login and signup toggle
   logintoggle(){
     this.show=!this.show;
     this.show1=false
   }

   signuptoggle(){
    this.show1=!this.show1;
    this.show=false
  }

  //new adress add
  changeaddr(){
    console.log(this.providerDetail1);
  }
  //  payment tab

  addScript: boolean = false;
  paypalLoad: boolean = true;
  //finalAmount: number= this.total;
  paypalConfig = {
    env: 'sandbox',
    style: {
      label: 'buynow',
      fundingicons: true, // optional
      branding: true, // optional
      size:  'small', // small | medium | large | responsive
      shape: 'rect',   // pill | rect
      color: 'gold'   // gold | blue | silver | black
  },
    client: {
      sandbox: 'AZOydPphjOEGhm-gS8iPiBdESForP9ExEeUsUXQkOg4Y_TM97VH9ZKUrpUbkt_ePXbmCEm1wVC1-2vHm',
      production: '<your-production-key-here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'INR' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
        alert('your transaction is successful');
        this.router.navigate(['/']);
      })
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }


  
  getOrdersOfUser(){
    this.data.getshopbyid("cart/show/"+this.uid).then((result) =>{
      
      this.ordersList=result;
        }, (err)=> {
       }).catch((err) =>{
          console.log("Unhandled rejection",err.message);
       
     alert("helloo");
  });
   console.log(this.ordersList) 
  }

  getUser(){
    this.data.getUsersById('users/'.concat(this.uid)).then((result)=>{
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData) {
       
       this.listData=this.responseData;
       this.address=this.listData.address;
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

}
