import {ApiResponse} from '@model/ApiResponse';
import {ApiResponseCollection} from '@model/ApiResponseCollection';
import {Observable} from 'rxjs';

export interface ICrudeable<T>{
  create(item: T): Observable<ApiResponse<T>>;
  update(item: T): Observable<ApiResponse<T>>;
  delete(id: string) : any;
  getAll(): Observable<ApiResponseCollection<T[]>>;
  getById(id: string): Observable<ApiResponse<T>>;
}
