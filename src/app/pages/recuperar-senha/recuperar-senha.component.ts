import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent {
 
  //atributos
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
 
  //método construtor
  constructor(
    private httpClient: HttpClient //injeção de dependência
  ) {
 
  }
 
  //estrutura do formulário
  formRecuperarSenha = new FormGroup({
    /* Campo email */
    email: new FormControl('',
      [Validators.required, Validators.email]),
  });
 
  //função auxiliar para exibir as mensagens de erro de validação
  get form(): any {
    return this.formRecuperarSenha.controls;
  }
 
  //função para capturar o SUBMIT do formulário
  onSubmit(): void {
 
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';
 
    this.httpClient.post(
      environment.API_URL + "api/recuperar-senha", //ENDPOINT
      this.formRecuperarSenha.value, //dados do formulário
      { responseType: 'text' } //tipo de resposta
    )
      .subscribe({
        next: (data) => { //capturando sucesso
          this.mensagem_sucesso = data;
          this.formRecuperarSenha.reset();
        },
        error: (e) => { //capturando erro
          this.mensagem_erro = e.error;
        }
      });
  }
}
 



