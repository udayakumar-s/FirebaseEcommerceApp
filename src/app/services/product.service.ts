import { Injectable } from '@angular/core';
import { Productdetail } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private myProduct: Array<Productdetail> = [
  {
    name: 'OPPO f5',
    image: 'https://images-na.ssl-images-amazon.com/images/I/418oQm0-kFL.jpg',
    description: '4gb ram,64gb ROM',
    imageAlt: 'mobile',
    Price: 20000,
    isAvailable: true
},
  {
    name: 'ONE PLUS 7',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61x5tBufniL._SL1001_.jpg',
    description: 'a good mobile',
    imageAlt: '',
    Price: 39999 ,
    isAvailable: false
},
    {
    name: 'iPHONE 11',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81HSzsIkJdL._SX679_.jpg',
    description: 'a good mobile',
    imageAlt: 'mobile',
    Price: 110000,
    isAvailable: true
},
    {
    name: 'SAMSUNG S8',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71vr2Ck4z2L._SL1500_.jpg',
    description: 'a good mobile',
    imageAlt: 'mobile',
    Price: 48999,
    isAvailable: true
}
  ];

getnewproduct() {
 return this.myProduct;
}

// tslint:disable-next-line: whitespace
addProduct(forms:Productdetail)
{
   this.getnewproduct().push(forms);
}




}