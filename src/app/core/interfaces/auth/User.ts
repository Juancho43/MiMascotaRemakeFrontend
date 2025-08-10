import {Journal} from '@model/model/journal';
import {Image} from '@model/model/image';
import {Entity} from '@model/model/entity';

export interface User extends  Entity {
  name: string;
  email: string;
  telephone: string;
  location?: string;
  role?: string;
  latitude?: number;
  longitude?: number;
  journals? : Journal[];
  image?: Image;
}
