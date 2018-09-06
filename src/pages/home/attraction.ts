import { LatLng } from '@ionic-native/google-maps';

export interface Attraction {
  name: string;
  latLng: LatLng;
  waitTime: number;
  youtubeUrl: string;
}