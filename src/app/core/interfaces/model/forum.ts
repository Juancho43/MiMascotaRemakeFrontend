import {Entity} from '@model/model/entity';

export interface Forum extends Entity{
  slug?: string;
  name: string;
  image?: string;
  description: string;
  postsCount?: number;
}
