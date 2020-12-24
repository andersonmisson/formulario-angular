import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario-angular';

  profissoes = ['Programador', 'Empresário', 'Outra', 'Teste'];
  profissao = 'Teste'; // Esse é o NgModel, valor padrão que vai aparecer no OPTIONS

  salvar(form: NgForm) {
    console.log(this.profissao);

    console.log(form.value.profissao);
  }
}
