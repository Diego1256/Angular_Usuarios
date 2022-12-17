import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminGuard } from './guards/admin-guard';
 
import { AppComponent } from './app.component';
import { CriarContaComponent } from './pages/criar-conta/criar-conta.component';
import { AcessarContaComponent } from './pages/acessar-conta/acessar-conta.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { AlterarSenhaComponent } from './pages/alterar-senha/alterar-senha.component';
import { ConsultarHistoricoComponent } from './pages/consultar-historico/consultar-historico.component';
 
@NgModule({
  declarations: [
    AppComponent,
    CriarContaComponent,
    AcessarContaComponent,
    RecuperarSenhaComponent,
    AlterarSenhaComponent,
    ConsultarHistoricoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }