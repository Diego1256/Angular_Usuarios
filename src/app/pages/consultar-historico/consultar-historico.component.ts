import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-consultar-historico',
  templateUrl: './consultar-historico.component.html',
  styleUrls: ['./consultar-historico.component.css']
})
export class ConsultarHistoricoComponent implements OnInit {
 
  //atributos
  historico: any[] = [];
 
  //método construtor
  constructor(
    private httpClient: HttpClient
  ) {
 
  }
 
  //método executando quando o componente é carregado
  ngOnInit(): void {
 
    const httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('access-token')
    });
 
    this.httpClient.get(environment.API_URL + "api/historico", { headers: httpHeaders })
      .subscribe(
        (data) => {
          this.historico = data as any[];
        }
      );
  }
 
}