import {Image} from '@model/model/image';

export interface ImagesResponse {
  //Animal ID
  id: string;
  //ID de la relacion entre el animal y la imagen
  images: {  id: string , image : Image }[];
}
