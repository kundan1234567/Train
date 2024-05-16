export interface IStations{
    stationID:number,
    stationName:string,
    stationCode:number

}

export interface ResponseModel{
    
    message:string,
    result:boolean,
    data: any
    
}

export interface IsSearchTrain{
    trainId:number;
    trainNo:number;
    trainName:string;
    departureStationName:string;
    arrivalStationsName:string;
    arrivalTime:string;
    departureTime:string;
    totalSeats:number;
    departureDate:string;
    bookedSeat:number
}


export class IPassenger{
    passengerID:number;
    firstName:string;
    lastName:string;
    email:string;
    phone:string;
    password:string

    constructor(){
    this.passengerID=0
    this.firstName='',
    this.lastName='',
    this.email='';
    this.phone='';
    this.password=''
    }
}

