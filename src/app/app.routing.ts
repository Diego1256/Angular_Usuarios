import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from "./guards/admin-guard";
 
import { AcessarContaComponent } from "./pages/acessar-conta/acessar-conta.component";
import { AlterarSenhaComponent } from "./pages/alterar-senha/alterar-senha.component";
import { ConsultarHistoricoComponent } from "./pages/consultar-historico/consultar-historico.component";
import { CriarContaComponent } from "./pages/criar-conta/criar-conta.component";
import { RecuperarSenhaComponent } from "./pages/recuperar-senha/recuperar-senha.component";
 
//mapeando as rotas
const routes: Routes = [
    { path : '', pathMatch: 'full', redirectTo: 'acessar-conta' },
    { path: 'acessar-conta', component: AcessarContaComponent },    
    { path: 'criar-conta', component: CriarContaComponent },
    { path: 'recuperar-senha', component: RecuperarSenhaComponent },
    { path: 'alterar-senha', component: AlterarSenhaComponent, canActivate: [AdminGuard] },
    { path: 'consultar-historico', component: ConsultarHistoricoComponent, canActivate: [AdminGuard] },
];
 
//registrando as rotas no angular
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
 
 


