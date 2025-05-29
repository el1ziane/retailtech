import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.page.html',
  styleUrls: ['./destaques.page.scss'],
  standalone: false
})
export class DestaquesPage implements OnInit {
  abaSelecionada: string = 'cupons';
  cupons: any[] = [];
  anuncios: any[] = [];
  exibindoFormulario: boolean = false;
  codigoParaValidar: string = '';
  cupomValidado: any = null;

  mostrarFormulario() {
    this.exibindoFormulario = true;
  }

  cancelarFormulario() {
    this.exibindoFormulario = false;
  }
  onSegmentChange(event: any) {
    console.log('Aba selecionada:', this.abaSelecionada);
  }
  adicionarCupom(form: any) {
    if (form.valid) {
      this.cupons.push({
        ...form.value,
        validade: new Date(form.value.validade)
      });
      this.exibindoFormulario = false;
      form.reset();
    }
  }

  adicionarAnuncio(form: any) {
    if (form.valid) {
      this.anuncios.push({ ...form.value });
      this.exibindoFormulario = false;
      form.reset();
    }
  }

  validarCupom() {
    const encontrado = this.cupons.find(c => c.codigo === this.codigoParaValidar);
    this.cupomValidado = encontrado || { invalido: true };
  }

  ngOnInit() {}
}
