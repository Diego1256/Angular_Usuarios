import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-acessar-conta',
  templateUrl: './acessar-conta.component.html',
  styleUrls: ['./acessar-conta.component.css']
})
export class AcessarContaComponent {
 
  //atributos
  mensagem_erro: string = '';
 
  //método construtor
  constructor(
    private httpClient: HttpClient //injeção de dependência
  ) {
 
    //verificar se o usuário já está autenticado
    if(localStorage.getItem('access-token') != null) {
      window.location.href = '/consultar-historico';
    }
  }
 
  //estrutura do formulário
  formLogin = new FormGroup({
    /* Campo email */
    email: new FormControl('',
      [Validators.required, Validators.email]),
    /* Campo senha */
    senha: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  });
 
  //função auxiliar para exibir as mensagens de erro de validação
  get form(): any {
    return this.formLogin.controls;
  }
 
  //função para capturar o SUBMIT do formulário
  onSubmit(): void {
 
    this.mensagem_erro = '';
 
    this.httpClient.post(
      environment.API_URL + "api/autenticar", //ENDPOINT
      this.formLogin.value, //dados do formulário
      { responseType: 'text' } //tipo de resposta
    )
      .subscribe({
        next: (data) => { //capturando sucesso
 
          //salvar o TOKEN do usuário no navegador
          localStorage.setItem('access-token', data);
 
          //salvar o email do usuário autenticado
          let email = this.formLogin.value.email;
          if(email != null)
            localStorage.setItem('email_usuario', email);
 
          this.formLogin.reset();
          window.location.href = "/consultar-historico";
        },
        error: (e) => { //capturando erro
          this.mensagem_erro = e.error;
        }
      });
  }
}