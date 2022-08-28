import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/shared/interfaces/details.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  details: Details[] = [];

  constructor() {
    this.details = [
      {title: "Smart Gas", contain: "Tarjeta siempre cargada para pagar y deducir tu gasto de combustible."},
      {title: "Smart Gas", contain: "Tarjeta siempre cargada para pagar y deducir tu gasto de combustible."},
      {title: "Smart Gas", contain: "Tarjeta siempre cargada para pagar y deducir tu gasto de combustible."},
      {title: "Smart Gas", contain: "Tarjeta siempre cargada para pagar y deducir tu gasto de combustible."},
    ];
   }

  ngOnInit(): void {
  }

}
