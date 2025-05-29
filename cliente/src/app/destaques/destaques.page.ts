import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.page.html',
  styleUrls: ['./destaques.page.scss'],
  standalone: false,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ]),
    ])
  ]
})
export class DestaquesPage {
  abaSelecionada = 'lojas';

  lojasDestaque = [
    {
      nome: 'China Express',
      descricao: 'Produtos incríveis com descontos.',
      imagem: 'assets/chinaexpress.png' // pode ser uma URL ou local assets
    },
    {
      nome: 'Bela Moça',
      descricao: 'Moda e acessórios modernos.',
      imagem: 'assets/belamoca.jpg'
    },
  ];

  cupons = [
    { titulo: 'Cupom 10% OFF', loja: 'China Express', validade: new Date('2025-12-31'), codigo: 'DESCONTO10' },
    { titulo: '5% Off Estacionamento/Conv.', loja: 'Bela Moça', validade: new Date('2025-06-30'), codigo: 'ESTACIONAMENTO5' },
    { titulo: '15% OFF em Moda', loja: 'Bela Moça', validade: new Date('2025-08-15'), codigo: 'MODA15' },
    { titulo: '20% OFF em Eletrônicos', loja: 'China Express', validade: new Date('2025-09-30'), codigo: 'ELETR20' }
  ];


  favoritos = [
    {
      nome: 'Fone Bluetooth X200',
      descricao: 'Qualidade de som e bateria de 12h.',
    },
    {
      nome: 'Blusa Estampada Feminina',
      descricao: 'Estilo moderno, ideal para o dia a dia.',
    },
    {
      nome: 'Tênis Esportivo Runner Pro',
      descricao: 'Confortável e resistente para treinos.',
    }
  ];


  constructor() {}

  onSegmentChange(event: any) {
    console.log('Aba selecionada:', this.abaSelecionada);
  }
  usarCupom(cupom: any) {
    console.log('Cupom usado:', cupom);
    // Aqui você pode adicionar lógica para copiar código, aplicar cupom, etc.
  }

  verFavorito(fav: any) {
    console.log('Ver favorito:', fav);
    // Aqui você pode abrir detalhes, etc.
  }
  getCuponsPorLoja(nomeLoja: string) {
    return this.cupons.filter(c => c.loja === nomeLoja);
  }


}
