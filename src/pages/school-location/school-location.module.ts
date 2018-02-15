import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolLocationPage } from './school-location';

import { GoogleMaps } from "@ionic-native/google-maps";

@NgModule({
  declarations: [
    SchoolLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolLocationPage),
  ],
  providers:[GoogleMaps]
})
export class SchoolLocationPageModule {}
