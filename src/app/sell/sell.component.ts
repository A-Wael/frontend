import { Component } from '@angular/core';
import { ApiService } from '../api.service'


@Component({
  selector: 'sell',
  templateUrl:'./sell.component.html' 
  
})
export class SellComponent {
  productData = {}

  constructor(private apiService: ApiService){}

  post(){
      console.log(this.productData)
      this.apiService.sendProductRegistreation(this.productData)
  }
}
