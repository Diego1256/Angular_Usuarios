import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
 
@Injectable()
export class AdminGuard implements CanActivate {
 
    constructor(
        private router: Router //navegação de rotas
    ) {
 
    }
 
    canActivate() {
       
        //verificar se há um token salvo para o usuário
        if(localStorage.getItem('access-token') != null) {
            return true;
        }
        else {
            this.router.navigate(['/acessar-conta']);
            return false;
        }
    }
}