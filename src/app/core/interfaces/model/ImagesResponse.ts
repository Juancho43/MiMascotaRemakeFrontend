import {Image} from '@model/model/image';

export interface ImagesResponse {
  id: string;
  images: { id: string , image : Image }[];
}
