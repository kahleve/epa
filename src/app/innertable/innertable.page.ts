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
export class InnertablePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
