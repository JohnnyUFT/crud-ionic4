import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  constructor(
    // atributo recebido no construtor
    private router: Router
    ) { }

  ngOnInit() {
  }

  addCustomer() {
    // manipulacao do atributo recebido no construtor
    // manipulacao de rotas
    this.router.navigate(['/addcustomer']);
  }

}
