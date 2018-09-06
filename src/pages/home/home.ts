import { Component } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  Marker,
  LatLng,
  GoogleMapsMapTypeId,
  KmlOverlay,
  LocationService,
  MyLocation,
  GoogleMapsEvent,
  ILatLng,
  VisibleRegion,
  HtmlInfoWindow
} from '@ionic-native/google-maps';
import { Attraction } from './attraction';
import { AttractionsFactory } from './attractions-factory';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  readonly CENTER: ILatLng = new LatLng ( 35.560615, 139.718146 );
  map: GoogleMap;
  me: Marker;

  constructor () {}

  ionViewDidLoad () {
    this.createMap ();
    this.searchLocation();
    this.readAttractions();
  }

  createMap(){
    this.map = GoogleMaps.create ('map_canvas', {
      camera: {
        target: this.CENTER,
        zoom: 18
      }
    });
  }

  searchLocation(){
    this.me = this.map.addMarkerSync({
      title: 'I am here',
      position: this.CENTER
    });
  }

  readAttractions(){
    new AttractionsFactory().createAttractions().forEach( ( element: Attraction ) => {
      let htmlInfoWindow = new HtmlInfoWindow();
      let frame: HTMLElement = document.createElement('div');
      frame.innerHTML = [
        '<h3>',
        element.name,
        '</h3>',
        '<iframe width="150" src="',
        element.youtubeUrl,
        '" frameborder="0" encrypted-media"></iframe>',
        '<table border="1">',
        '<tr><td>wait time</td><td>',
        element.waitTime,
        '</td></tr>',
        '</table>'
      ].join("");
      htmlInfoWindow.setContent( frame, { width: "150px" } );
      this.map.addMarker({
        position: element.latLng,
        icon: 'blue',
        disableAutoPan: true
      }).then( ( marker: Marker ) => {
        marker.on( GoogleMapsEvent.MARKER_CLICK ).subscribe( () => {
          htmlInfoWindow.open( marker );
        });
      });
    });
  }

}
