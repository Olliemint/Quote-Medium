import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';
import { Quote } from '../quote';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  addQuote = new Quote('','','',0,0,'',new Date())

  @Output() myQuote= new EventEmitter<Quote>();

  addnewQuote(){
    this.myQuote.emit(this.addQuote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
