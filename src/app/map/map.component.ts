
import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { DataService } from  '../data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  
  responseData:any;
  listData:any;
  constructor(private  apiService:  DataService) {
   
   this.getshops();
}
   
  public count:number=10000;
  public length:number;
  public zoom: number = 15;
  public lat:number=11.2163635;
  public lng:number=77.49003499999999;
  // initial center position for the map
  findMe() {
    console.log("Hello");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    this.setLocations();
  }
  showPosition(position) {
    console.log( position.coords.latitude);
    console.log( position.coords.longitude);
  this.lat=position.coords.latitude;
  this.lng=position.coords.longitude;
   
  }
  getshops(){
    this.apiService.getitems("shops").then((result)=>{
    this.responseData = result;
    console.log(this.responseData);
    if (this.responseData) {
    this.listData = this.responseData;
    console.log(this.listData);
    this.length=this.listData.length;
    console.log(this.length);
    
    console.log("hai");
    }else {
    console.log()
    }
    }, (err) => {
    console.log("Rejection");
    }).catch((err)=>{
    console.log('unHandledRejection', err.message);
    });
    }
    setLocations(){
      console.log("manomap");
      console.log(this.length);
    
      for(let c of this.listData){
      console.log(c);
      this.markers.push({
      lat:c.latitude,
      lng:c.longitude ,
    
      draggable: false})
      }
    
      }
    add(){
  
    this.count=this.count+1000;
    console.log(this.count);
    }
  
    sub(){
    //--this.count;
    this.count=this.count-1000;
    console.log(this.count);
    }
  
  

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 57.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}



