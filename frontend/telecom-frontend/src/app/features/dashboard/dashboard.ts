import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth';


@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent{

constructor(
private router:Router,
private authService:AuthService
){}

logout():void{
this.authService.logout();
this.router.navigate(['/']);
}

}
