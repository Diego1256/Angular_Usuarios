import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PasswordValidation } from 'src/app/validations/password-match.validation';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent {
 
  //atributos
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
 
  //método construtor
  constructor(
    private httpClient: HttpClient //injeção de dependência
  ) {
 
  }
 
  //estrutura do formulário
  formCadastro = new FormGroup({
    /* Campo nome */
    nome: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(150)]),
    /* Campo email */
    email: new FormControl('',
      [Validators.required, Validators.email]),
    /* Campo senha */
    senha: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    /* Campo senhaConfirmacao */
    senhaConfirmacao: new FormControl('',
      [Validators.required])
  }, {
    validators: [PasswordValidation.MatchPassword]
  });
 
  //função auxiliar para exibir as mensagens de erro de validação
  get form(): any {
    return this.formCadastro.controls;
  }
 
  //função para capturar o SUBMIT do formulário
  onSubmit(): void {
 
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';
 
    this.httpClient.post(
      environment.API_URL + "api/criar-conta", //ENDPOINT
      this.formCadastro.value, //dados do formulário
      { responseType: 'text' } //tipo de resposta
    )
      .subscribe({
        next: (data) => { //capturando sucesso
          this.mensagem_sucesso = data;
          this.formCadastro.reset();
        },
        error: (e) => { //capturando erro
          this.mensagem_erro = e.error;
        }
      });
  }
 
}
 


