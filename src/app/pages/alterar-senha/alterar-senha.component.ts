import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent {
 
  //atributos
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
 
  //método construtor
  constructor(
    private httpClient: HttpClient //injeção de dependência
  ) {
 
  }
 
  //estrutura do formulário
  formAlterarSenha = new FormGroup({
    /* Campo senha atual */
    senhaAtual: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    /* Campo nova senha */
    novaSenha: new FormControl('',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  });
 
  //função auxiliar para exibir as mensagens de erro de validação
  get form(): any {
    return this.formAlterarSenha.controls;
  }
 
  //função para capturar o SUBMIT do formulário
  onSubmit(): void {
 
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';
 
    const httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    });
 
    this.httpClient.put(
      environment.API_URL + "api/alterar-senha", //ENDPOINT
      this.formAlterarSenha.value, //dados do formulário
      { responseType: 'text', headers: httpHeaders }
    )
      .subscribe({
        next: (data) => { //capturando sucesso
          this.mensagem_sucesso = data;
          this.formAlterarSenha.reset();
        },
        error: (e) => { //capturando erro
          this.mensagem_erro = e.error;
        }
      });
  }
}
 


