import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PerfilPage implements OnInit {
  
    constructor() { }
  
    ngOnInit() {}
   
    handleCurtirClick() {
      const iconeCurtir = document.getElementById('curti');
      const iconeFavorito = document.getElementById('favos');
  
      if (iconeCurtir && iconeFavorito) {
        iconeCurtir.style.background = 'black';
        iconeFavorito.style.background = 'transparent';
      }
    }
  
    handleFavoritoClick() {
      const iconeCurtir = document.getElementById('curti');
      const iconeFavorito = document.getElementById('favos');
  
      if (iconeCurtir && iconeFavorito) {
        iconeCurtir.style.background = 'transparent';
        iconeFavorito.style.background = 'black';
      }
    }
  }
 
  
  
  
  
  