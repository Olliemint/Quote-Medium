import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  header= 'Quote-Medium'

  Quotes: Quote[] =[
    new Quote('Inspirational','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela',0,0,'Trevor K.'),
    new Quote('Motivational','We cannot solve problems with the kind of thinking we employed when we came up with them.','Albert Einstein',0,0,'Collins Leteipa'),
    new Quote('Nature','I go to nature to be soothed and healed, and to have my senses put in order.','John Burroughs',0,0,'Terry Wambui'),
    new Quote('Life','Let the rain kiss you. Let the rain beat upon your head with silver liquid drops. Let the rain sing you a lullaby.','Langston Hughes',0,0,'Eve Bet'),
    new Quote('Famous','Children are great imitators. So give them something great to imitate.','Anonymous',0,0,'Malik Salim'),
    new Quote('Success','Money won’t create success, the freedom to make it will.','Nelson',0,0,'Ollie Mint')
  ];

  findMore(index: number){
    this.Quotes[index].seeMore = !this.Quotes[index].seeMore
  }

  constructor() { }

  ngOnInit(): void {
  }

}
