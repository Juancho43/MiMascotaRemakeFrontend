import {Entity} from '@model/model/entity';
import {Animal} from '@model/model/animal';
import {User} from '@model/auth/User';
import {Entry} from '@model/model/entry';

export interface Journal extends Entity {
  animal: Animal;
  user?: User;
  user_id?: string;
  entries?: Entry[];
  entryCount?: number;
  journal_slug?: string;
}
