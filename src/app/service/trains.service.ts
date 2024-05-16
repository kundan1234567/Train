import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { CONSTANT } from '../constant/constant';
import { Observable } from 'rxjs';
import { IPassenger, IStations, ResponseModel } from '../models/stations';

@Injectable({
  providedIn: 'root'
})
export class TrainsService {
  apiEndPoint:string='';


  constructor( private http:HttpClient) {
// this.apiEndPoint=environment.ApiEndPoint
   }

   getTrainsBetweenSatations(searchObj:any):Observable<ResponseModel>{
    return this.http.get<ResponseModel>(this.apiEndPoint +CONSTANT.ENDPOINTS.GET_TRAINS_BETWEEN_STATIONS+ `?departureStationsId=${searchObj.fromStationId}&arrivalStationId=${searchObj.toStationId}$departureDate=${searchObj.dateOfTravel}`)
   }

   createPassenger(obj:IPassenger):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(this.apiEndPoint +CONSTANT.ENDPOINTS.ADD_UPDATE_PASSENGER,obj)

   }

}
