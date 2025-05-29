import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false
})
export class Tab2Page {
  produtos: any[] = [];

  novoProduto = {
    descricao: '',
    imagem: ''
  };

  editandoIndex: number | null = null;
  exibindoFormulario = false; // 👈 Flag de visibilidade do formulário

  constructor() {}

  mostrarFormularioCadastro() {
    this.novoProduto = { descricao: '', imagem: '' };
    this.editandoIndex = null;
    this.exibindoFormulario = true;
  }

  salvarProduto() {
    if (this.editandoIndex !== null) {
      this.produtos[this.editandoIndex] = { ...this.novoProduto };
    } else {
      this.produtos.push({ ...this.novoProduto });
    }

    this.novoProduto = { descricao: '', imagem: '' };
    this.editandoIndex = null;
    this.exibindoFormulario = false;
  }

  editarProduto(index: number) {
    this.novoProduto = { ...this.produtos[index] };
    this.editandoIndex = index;
    this.exibindoFormulario = true;
  }

  excluirProduto(index: number) {
    this.produtos.splice(index, 1);
  }

  carregarImagem(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.novoProduto.imagem = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
