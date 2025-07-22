import {Entity} from '@model/model/entity';

export interface Image extends Entity {
  name : string;
  path: string;
  size: number;
  type: string;

}
