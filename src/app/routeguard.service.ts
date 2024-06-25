import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {
  identified=false;

  constructor(private router: Router) {}
  canActivate(): boolean {
   return this.identified;
   }
}
