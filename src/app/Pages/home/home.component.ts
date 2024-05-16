import { Component, OnInit } from '@angular/core';
import { IStations, ResponseModel } from 'src/app/models/stations';
import { StationsService } from 'src/app/service/stations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  stationList:IStations[]=[]

  constructor(private stattionSrv:StationsService){

  }
  ngOnInit(): void {
   this.loadStations()
  }
  loadStations(){
    this.stattionSrv.getAllStations().subscribe((res:ResponseModel)=>{
  this.stationList=res.data
    },
    error=>{
      alert("Error Occured" +JSON.stringify(error))
    }
  )
  
  }
}
