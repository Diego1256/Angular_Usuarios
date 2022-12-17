import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  //atributos
  isAuthenticated: boolean = false;
  emailUsuario: string = '';
 
  //evento executado sempre que a página é carregada
  ngOnInit(): void {
 
    //capturar o token do usuário salvo na localstorage
    var token = localStorage.getItem('access-token');
 
    if(token != null){
 
      this.isAuthenticated = true;
 
      let email = localStorage.getItem('email_usuario');
      if(email != null) {
        this.emailUsuario = email;
      }
    }
  }
 
  //função para realizar o logout do usuário
  logout(): void {
 
    if(window.confirm('Deseja realmente sair da aplicação?')) {
     
      //apagar os dados gravados na local storage
      localStorage.removeItem('access-token');
      localStorage.removeItem('email_usuario');
 
      //redirecionar de volta para a página de login
      window.location.href = "/acessar-conta";
    }
  }
 
}
 


