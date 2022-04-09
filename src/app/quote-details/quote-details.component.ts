import { Component, Input, OnInit } from '@angular/core';
// import { Quote } from '../quote';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() Quotes!: Quote;


  constructor() { }

  ngOnInit(): void {
  }

}
