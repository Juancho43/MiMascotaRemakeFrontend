import {Entity} from '@model/model/entity';
import {Journal} from '@model/model/journal';

export interface Entry extends Entity {
  title: string;
  content: string;
  date: string;
  journal?: Journal;
  journal_id?: string;
}
