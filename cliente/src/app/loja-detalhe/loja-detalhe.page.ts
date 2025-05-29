import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Produto {
  nome: string;
  imagem: string;
  interesse?: boolean;
}

interface Loja {
  nome: string;
  categoria: string;
  imagem: string;
  endereco: string;
  catalogo: Produto[];
}
@Component({
  selector: 'app-loja-detalhe',
  templateUrl: './loja-detalhe.page.html',
  styleUrls: ['./loja-detalhe.page.scss'],
  standalone: false
})


export class LojaDetalhePage implements OnInit {
  loja: Loja | undefined;

  lojas = [
    {
      nome: 'China express',
      categoria: 'departamento',
      imagem: 'assets/chinaexpress.png',
      endereco: 'Av. Paraná, 181 - Centro, Londrina - PR, 86010-390',
      catalogo: [
        { nome: 'Luminária Panda', imagem: 'assets/lumichina.png' },
        { nome: 'Mini Impressora', imagem: 'assets/chinaimpre.png' },
      ],
    },
    {
      nome: 'Via Biju',
      categoria: 'vestuario',
      imagem: 'assets/viabiju.png',
      endereco: 'Av. Paraná, - Centro, Londrina',
      catalogo: [
        { nome: 'Brinco Preto', imagem: 'assets/brinco2viabiju.png' },
        { nome: 'Brinco Azul', imagem: 'assets/brincoviabiju.png' },
      ],
    },
    {
      nome: 'Amo Jeans',
      categoria: 'vestuario',
      imagem: 'assets/amojeans.jpg',
      endereco: 'Av. Paraná, 443 - Calçadão - Centro, Londrina - PR, 86010-390',
      catalogo: [
        { nome: 'Calça Feminina', imagem: 'assets/calcaamo.png' },
        { nome: 'Short Jeans', imagem: 'assets/shortamo.png' },
      ],
    },
    {
      nome: 'Loja Favorita',
      categoria: 'vestuario',
      imagem: 'assets/lojafavorita.png',
      endereco: 'Av. Paraná, 646 - sala 3 - Centro, Londrina - PR, 86010-390',
      catalogo: [
        { nome: 'Vestido', imagem: 'assets/vestidofavorita.png' },
        { nome: 'Camisa', imagem: 'assets/camisafavorita.png' },
      ],
    },
    {
      nome: 'MIMUZ Presentes',
      categoria: 'presentes',
      imagem: 'assets/mimuz.jpg',
      endereco: 'Av. Paraná, 467 - Centro, Londrina - PR, 86010-390',
      catalogo: [
        { nome: 'Bolsa rosa', imagem: 'assets/bolsamimuz.png' },
        { nome: 'Livro Boobie Goods', imagem: 'assets/boobiegmimuz.png' },
      ],
    },
    {
      nome: 'Loja 7',
      categoria: 'departamento',
      imagem: 'assets/loja7.jpg',
      endereco: 'Avenida Paraná, Calçadão, n° 21 - Centro, Londrina - PR, 86020-360',
      catalogo: [
        { nome: 'Meia Infantil', imagem: 'assets/meias7.png' },
        { nome: 'Triturador de Temperos', imagem: 'assets/triturador.png' },
      ],
    },
    {
      nome: 'Bela Moça',
      categoria: 'vestuario',
      imagem: 'assets/belamoca.jpg',
      endereco: 'EDIFICIO COMERCIAL PANORAMA, Av. Paraná, 149 - Centro, Londrina - PR, 86020-360',
      catalogo: [
        { nome: 'Parka Verde', imagem: 'assets/parkabela.png' },
        { nome: 'Blusa Marrom', imagem: 'assets/blusabela.png' },
      ],
    },
    {
      nome: 'Mundomax Unidade Sonkey',
      categoria: 'eletronicos',
      imagem: 'assets/sonkey.png',
      endereco: 'R. Sen. Souza Naves, 9 - Centro, Londrina - PR, 86010-921',
      catalogo: [
        { nome: 'Cabo de Audio P3', imagem: 'assets/caboaudio.png' },
        { nome: 'Antena Interna', imagem: 'assets/antena.png' },
      ],
    },
    {
      nome: 'Bolivar Calçados',
      categoria: 'vestuario',
      imagem: 'assets/bolivar.png',
      endereco: 'Praça Gabriel Martins - Calçadão de Londrina, 59 - Centro, Londrina - PR, 86010-010',
      catalogo: [
        { nome: 'Bota', imagem: 'assets/bota.png' },
        { nome: 'Salto', imagem: 'assets/salto.png' },
      ],
    },
    // outras lojas...
  ];

  constructor(private route: ActivatedRoute) {}

  toggleInteresse(item: any): void {
    item.interesse = !item.interesse;
  }

  ngOnInit() {

      const nomeLoja = this.route.snapshot.paramMap.get('nome');
      this.loja = this.lojas.find(l => l.nome === nomeLoja);

      if (!this.loja) {
        console.warn('Loja não encontrada para o nome:', nomeLoja);
      } else {
        this.loja.catalogo.forEach(item => item.interesse = false);
      }
    }

  }

