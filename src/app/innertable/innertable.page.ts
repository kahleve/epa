import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-innertable',
  templateUrl: './innertable.page.html',
  styleUrls: ['./innertable.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InnertablePage {
  constructor() { }

 // Função para abrir ou fechar o modal
 isModalOpenLR = false;
 isModalOpenIR = false;
 isModalOpenAR = false;
 isModalOpenER = false;



 setOpenLR(isOpen: boolean) {
    this.isModalOpenLR = isOpen;
  }

  setOpenIR(isOpen: boolean) {
    this.isModalOpenIR = isOpen;
  }

  setOpenAR(isOpen: boolean) {
    this.isModalOpenAR = isOpen;
  }

  setOpenER(isOpen: boolean) {
    this.isModalOpenER = isOpen;
  }
}
