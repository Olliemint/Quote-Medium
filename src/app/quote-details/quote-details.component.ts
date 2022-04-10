import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';
// import { Quote } from '../quote';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() Quotes!: Quote;

  @Output() toDelete = new EventEmitter<boolean>();
  // @Output() Upvote = new EventEmitter();

          deleteQuote(Delete:boolean){
            this.toDelete.emit(Delete)
          }

          up(){
            this.Quotes.upVotes+= 1;
            
          }
          down(){
            this.Quotes.downVotes+= 1;
            
            
          }
          
          


  constructor() { }

  ngOnInit(): void {
  }

}
