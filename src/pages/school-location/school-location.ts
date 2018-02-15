import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { School } from '../../model/school';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
} from '@ionic-native/google-maps';
/**
 * Generated class for the SchoolLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-school-location',
  templateUrl: 'school-location.html',
})
export class SchoolLocationPage {
  
  mapReady: boolean = false;
  map: GoogleMap;	
  selectedSchool:School;

  constructor(public navCtrl: NavController, 
  	          public navParams: NavParams,
  	          public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
  	this.selectedSchool = this.navParams.get('school');

   	this.loadMap();
  }

  
    loadMap() {
    
	    this.map = GoogleMaps.create('map_canvas', {
	      camera: {
	        target: {
	          lat: this.selectedSchool.latitude,
	          lng: this.selectedSchool.longitude
	        },
	        zoom: 18,
	        tilt: 30
	      }
	    });

	    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
	      console.log(`Map is Ready!!!`);	
	      this.mapReady = true;
	    });
  }

  

}
