import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  usuario = {
    nome: 'Milena da Silva',
    idade: 21,
    cpf: '123.456.789-00',
    genero: 'feminino',
    email: 'milena@email.com',
    avatar: 'assets/user.jpg', // avatar caricato
  };

  constructor() {}

  editarAvatar() {
    console.log('Editar avatar clicado');
 
  }
  verFavoritos() {
    console.log('Abrir favoritos');
  }

}
