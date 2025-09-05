import {Entity} from '@model/model/entity';

export interface Location extends Entity{
  city?: string;
  country?: string;
  slug?: string;
  latitude: string;
  longitude: string;
}
