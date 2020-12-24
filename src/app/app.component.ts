import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

class Cliente {
  nome: string;
  email: string;
  profissao = '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario-angular';

  cliente = new Cliente();
  profissoes = ['Programador', 'Empresário', 'Outra'];

  salvar(form: NgForm) {
    //this.cliente.nome = form.value.primeiroNome;
    //this.cliente.email = form.value.emailAddress;
    //this.cliente.profissao = form.value.profissao;

    console.log(form.value);
    console.log(this.cliente);
  }
}
