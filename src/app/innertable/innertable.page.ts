import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-innertable',
  templateUrl: './innertable.page.html',
  styleUrls: ['./innertable.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class InnertablePage {
  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {
    this.setOpenLR(this.isModalOpenLR);
    // Chame as outras funções conforme necessário para os outros modais
  }

   // Função para fechar o modal e navegar para outra página
   async fecharModalENavegar() {
    await this.modalController.dismiss(); // Fecha o modal
    this.router.navigate(['../semlactose']); // Navega para a página 'semlactose'
  }

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
