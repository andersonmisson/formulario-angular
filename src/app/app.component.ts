import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario-angular';

  profissoes = ['Programador', 'Empresário', 'Outra'];

  salvar(form: NgForm) {
    console.log(form);
    console.log(form.value.nome);
  }
}
