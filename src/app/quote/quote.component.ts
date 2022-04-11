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
    new Quote('Inspirational','The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela',0,0,'Trevor', new Date(2022,1,15)),
    new Quote('Motivational','We cannot solve problems with the kind of thinking we employed when we came up with them.','Albert Einstein',0,0,'Noah',new Date(2022,3,22)),
    new Quote('Nature','I go to nature to be soothed and healed, and to have my senses put in order.','John Burroughs',0,0,'Terry',new Date(2019,4,15)),
    new Quote('Life','Let the rain kiss you. Let the rain beat upon your head with silver liquid drops. Let the rain sing you a lullaby.','Langston Hughes',0,0,'Eve',new Date(2022,12,30)),
    // new Quote('Famous','Children are great imitators. So give them something great to imitate.','Anonymous',0,0,'Malik Salim', new Date(2022,7,18)),
    // new Quote('Success','Money won’t create success, the freedom to make it will.','Nelson',0,0,'Ollie Mint',new Date(2022,4,8))
  ];
  


  yourQuote(quote: any){
    let QuoteLength= this.Quotes.length;
    quote.timeLapse = new Date(quote.timeLapse)
    quote.upVotes = quote.upVotes
    quote.downVotes = quote.downVotes
    quote.Qoutetitle = quote.Qoutetitle
    quote.Author = quote.Author
    quote.submittedBy = quote.submittedBy
    quote.Quote = quote.Quote

    this.Quotes.push(quote)
    

  }
  arr: number[]= this.Quotes.map(Quote1 => Quote1.upVotes)
  highest = Math.max(...this.arr)

  
  
              // hide and show Quote details
  findMore(index: number){
    this.Quotes[index].seeMore = !this.Quotes[index].seeMore
  }
             // Quote deletetion
  removeQuote(toDelete: any,index: number){
    if(toDelete){
      this.Quotes.splice(index,1)
      
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
