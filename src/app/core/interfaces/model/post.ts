import {Entity} from '@model/model/entity';
import {Animal} from '@model/model/animal';
import {Location} from '@model/model/location';
import {User} from '@model/auth/User';

export interface Post extends Entity{
  title: string;
  content: string;
  animal_id: string;
  forum_slug: string;
  user? : User
  animal? : Animal;
  location?: Location;
  location_id? : string;
}
