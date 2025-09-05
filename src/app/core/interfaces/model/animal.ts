import {Entity} from '@model/model/entity';

export interface Animal extends Entity {
  name: string;
  description?: string;
  color?: string;
  gender?: 'male' | 'female';
  birthdate?: string;
  weight?: number;
  breed?: string;
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'extra-large';
  journal_id?: string;
  journal_slug?: string;
  path?:string;
  user_id?: string;
}
