import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  addQuote = new Quote('','','',0,0,'',new Date())

  constructor() { }

  ngOnInit(): void {
  }

}
