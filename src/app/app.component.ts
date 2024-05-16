import { Component } from '@angular/core';
import { IPassenger } from './models/stations';
import { TrainsService } from './service/trains.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trainapp';
  registerObj: IPassenger = new IPassenger()
  loggedUserData: any
  constructor(private trainSrv: TrainsService) {

  }

  openRegister() {
    const model = document.getElementById('registerModel');
    if (model != null) {
      model.style.display = 'block'
    }

  }

  closeRegister() {
    const model = document.getElementById('registerModel');
    if (model != null) {
      model.style.display = 'none'
    }


  }

  logOff(){
    localStorage.removeItem('trainsUser')
    this.loggedUserData=undefined
  }
  onRegister() {
    this.trainSrv.createPassenger(this.registerObj).subscribe((res: any) => {
      if (res.result) {
        alert("Registration successfull")
        localStorage.setItem('trainsUser', JSON.stringify(res.data))
        this.loggedUserData = res.data
      } else {
        alert(res.message)
      }
    })
  }

}
