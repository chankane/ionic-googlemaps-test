import { Attraction } from './attraction';
import { LatLng } from '@ionic-native/google-maps';

export class AttractionsFactory {

  attractions: Attraction[];

  constructor(){
      this.attractions = [
          <Attraction> {
            name: 'Attraction 1',
            latLng: new LatLng( 35.561088, 139.718404 ),
            waitTime: 30,
            youtubeUrl: 'https://www.youtube.com/watch?v=EBuAmN20JYc'
          },
          <Attraction> {
            name: 'Attraction 2',
            latLng: new LatLng( 35.560062, 139.717954 ),
            waitTime: 30,
            youtubeUrl: 'https://www.youtube.com/watch?v=M6LHTcjskZo'
          },
          <Attraction> {
            name: 'Attraction 3',
            latLng: new LatLng( 35.560365, 139.718789 ),
            waitTime: 30,
            youtubeUrl: 'https://www.youtube.com/watch?v=gz_hUjcj1ww'
          },
      ];
  }

  createAttractions(): Attraction[] {
    return this.attractions;
  }
}