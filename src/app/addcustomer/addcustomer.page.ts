import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {
  name_customer: string="";
  desc_customer: string="";
  constructor() { }

  ngOnInit() {
  }

  createdProses() {
    console.log('Ok');
  }

}
