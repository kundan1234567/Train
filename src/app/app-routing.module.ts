import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SearchComponent } from './Pages/search/search.component';
import { BookingComponent } from './Pages/booking/booking.component';
import { AdminComponent } from './Pages/admin/admin.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
{
  path:'home',component:HomeComponent
},
{
  path:'search',component:SearchComponent
},
{
  path:'booking',component:BookingComponent
},
{
  path:'admin',component:AdminComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
