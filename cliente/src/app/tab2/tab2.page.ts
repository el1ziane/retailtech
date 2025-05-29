import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  constructor(private navCtrl: NavController, private router: Router) {}
  ngOnInit() {}

  categoriaSelecionada: string = 'todas';

  categorias = [
    { nome: 'Todas', valor: 'todas', cor: 'default' },
    { nome: 'Vestuário', valor: 'vestuario', cor: 'rosa' },
    { nome: 'Restaurantes', valor: 'restaurantes', cor: 'vermelho' },
    { nome: 'Eletrônicos', valor: 'eletronicos', cor: 'azul' },
    { nome: 'Mercado', valor: 'mercado', cor: 'verde' },
    { nome: 'Beleza', valor: 'beleza', cor: 'roxo' },
    { nome: 'Pet', valor: 'pet', cor: 'laranja' },
    { nome: 'Departamento', valor: 'departamento', cor: 'marrom' },
    { nome: 'Presentes', valor: 'presentes', cor: 'ciano' },
  ];


  lojas = [
    { nome: 'China express', categoria: 'departamento', imagem: 'assets/chinaexpress.png' },
    { nome: 'Via Biju', categoria: 'vestuario', imagem: 'assets/viabiju.png' },
    { nome: 'Amo Jeans', categoria: 'vestuario', imagem: 'assets/amojeans.jpg' },
    { nome: 'Loja Favorita', categoria: 'vestuario', imagem: 'assets/lojafavorita.png' },
    { nome: 'MIMUZ Presentes', categoria: 'presentes', imagem: 'assets/mimuz.jpg' },
    { nome: 'Loja 7', categoria: 'departamento', imagem: 'assets/loja7.jpg' },
    { nome: 'Bela Moça', categoria: 'vestuario', imagem: 'assets/belamoca.jpg' },
    { nome: 'Mundomax Unidade Sonkey', categoria: 'eletronicos', imagem: 'assets/sonkey.png' },
    { nome: 'Bolivar Calçados', categoria: 'vestuario', imagem: 'assets/bolivar.png' },
  ];


  get lojasFiltradas() {
    if (this.categoriaSelecionada === 'todas') {
      return this.lojas;
    }
    return this.lojas.filter(loja => loja.categoria === this.categoriaSelecionada);
  }

  @ViewChild('categoriaContainer', { static: false }) categoriaContainer!: ElementRef;

  showLeftArrow = false;
  showRightArrow = true;

  ngAfterViewInit() {
    setTimeout(() => this.updateArrows(), 300);
  }

  @HostListener('window:resize')
  onResize() {
    this.updateArrows();
  }

  updateArrows() {
    const el = this.categoriaContainer.nativeElement;
    this.showLeftArrow = el.scrollLeft > 0;
    this.showRightArrow = el.scrollLeft + el.offsetWidth < el.scrollWidth;
  }

  scrollSegment(direction: 'left' | 'right') {
    const el = this.categoriaContainer.nativeElement;
    const scrollAmount = 150;
    if (direction === 'left') {
      el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    setTimeout(() => this.updateArrows(), 500);
  }

  abrirLoja(lojaNome: string) {
    this.router.navigate(['/loja-detalhe', lojaNome]);
  }

}
