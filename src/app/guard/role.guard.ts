import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private route: Router) {}
  canActivate() {
    if (this.auth.haveAccess() === "string") {
      
      return true;
    } else {
      this.route.navigate(['/login']);
      return false;
    }
  }
}
