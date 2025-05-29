import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page  implements OnInit{

  constructor() {}

  ngOnInit(): void {
    this.initMap();
  }

  initMap(){
    const map = L.map('map').setView([-23.906, -46.317], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Mapa'
    }).addTo(map);

   map.whenReady(() => {
     setTimeout(() => {
       map.invalidateSize();
     },1000)
   })
  }
}
