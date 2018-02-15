import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StaticDataSource } from '../../model/static-datasource';
import { SchoolLocationPage } from '../school-location/school-location';
import { School } from '../../model/school';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  schools:School[];

  constructor(public navCtrl: NavController, 
  			  private dataSource:StaticDataSource) {

  }

  ionViewDidLoad(){
  	console.log('View Did Loaded');
  	this.dataSource.getSchoolsList()
  				   .subscribe((data)=>{ 
  				   			   this.schools = data;
  				   			   console.log(data);
  				   			  },
  				   			  (err)=> console.log(err),
  				   			  ()=>console.log('Schools list loaded...'));
  }

  viewOnGoogleMap(selectedSchool:School):void{
  	this.navCtrl.push(SchoolLocationPage, { school: selectedSchool});
  }
}
