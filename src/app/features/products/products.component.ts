import { Component } from '@angular/core';
interface Card {
  title: string;
  image: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 cards: Card[] = [
    { title: 'Card 1', image: '../../../assets/images/OIP.jfif' },
    { title: 'Card 2', image: '../../../assets/images/OIP.jfif' },
    { title: 'Card 3', image: '../../../assets/images/OIP.jfif' },
    { title: 'Card 4', image: '../../../assets/images/OIP.jfif' },
    { title: 'Card 5', image: '../../../assets/images/OIP.jfif' },
    { title: 'Card 6', image: '../../../assets/images/OIP.jfif' },
    { title: 'Card 7', image: '../../../assets/images/OIP.jfif' },
    { title: 'Card 8', image: '../../../assets/images/OIP.jfif' },
    { title: 'Card 9', image: '../../../assets/images/OIP.jfif' },
  ];
}
