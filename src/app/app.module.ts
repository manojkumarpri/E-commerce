import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HttpClientModule } from  '@angular/common/http';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
//import * as $ from 'jquery'
import { RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { MapComponent } from './map/map.component';
import { MapPipe } from './map.pipe';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { SliderModule } from 'angular-image-slider';
import { NavbarComponent } from './navbar/navbar.component';
import { Map1Pipe } from './map1.pipe';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CheckoutComponent } from './checkout/checkout.component';
//import { CheckoutComponent } from './checkout/checkout.component';
//import {SlideshowModule} from 'ng-slideshow'; // IMPORT THE SLIDESHOW MODU



const appRoutes:Routes= [
    {
    path:'',
    component:HomeComponent
  },
  {
    path:'map',
    component:MapComponent
  },

  {
    path:'pro',
    component:ProductdetailsComponent
  },
  
  {
    path: 'prolist',
    component: ProductlistComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'updatepassword',
    component: UpdatepasswordComponent
  }, 
  {
    path: 'dashboard',
    component: UserdashboardComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    HomeComponent,
    FilterPipe,
   
    MapComponent,
    MapPipe,
    NavbarComponent,
    Map1Pipe,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    UpdatepasswordComponent,
    UserdashboardComponent,
    CheckoutComponent,
    //CheckoutComponent,
  

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    //SlideshowModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
  //  SliderModule,
    StorageServiceModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyC3mqobdHT6Czt6GDPsNGSeHOBFLVAJRdA'
    })
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
