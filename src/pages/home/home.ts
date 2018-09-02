import { Component } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  Marker,
  LatLng,
  GoogleMapsMapTypeId,
  KmlOverlay,
} from '@ionic-native/google-maps';
import { LoadingController, Loading } from 'ionic-angular';

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

  loading: Loading;

  constructor(public loadingCtrl: LoadingController) {
    //this.createMap();
  }

  ionViewDidLoad(){
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
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
    this.map.addKmlOverlay({
      url: 'assets/kml/test.kml'
    }).then( ( kmlOverlay :KmlOverlay ) => {
      this.loading.dismiss();
    }).catch( ( err: any ) => alert( 'Error :_(' ) );
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
