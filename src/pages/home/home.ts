import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  Marker,
  LatLng,
  GoogleMapsMapTypeId,
  KmlOverlay,
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // readonly is const(final)
  readonly CENTER: LatLng = new LatLng( 35.549415, 139.779842 );
  map: GoogleMap;
  myMarker: Marker;
  osaka: Marker;

  constructor( public navCtrl: NavController ) {
   this.createMap();
   this.readKml();
  }

  createMap(){
    // create a map
    this.map = GoogleMaps.create('map_canvas', {
      mapType: GoogleMapsMapTypeId.SATELLITE,
      camera: {
        target: this.CENTER,
        zoom: 5
      }
    });

    // create a marker
    this.myMarker = this.map.addMarkerSync({
      title: 'Haneda Airport',
      animation: 'BOUNCE',
      position: this.CENTER
    });
  }

  readKml() {
    //alert('before');
    this.map.addKmlOverlay( {
      url: 'assets/kml/test.kml'
    } ).then( ( kmlOverlay :KmlOverlay ) => {
      alert('success');
    } ).catch( (err: any) => alert('Error :_(') );
    //alert('after');

    // create a marker (Osaka Airport)
    /*this.myMarker = this.map.addMarkerSync({
      title: 'Haneda Airport',
      animation: 'BOUNCE',
      position: new LatLng( 34.789580, 135.438089 ),
      icon: 'skyblue'
    });*/
  }
}
