import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appQuoteHighlight]'
})
export class QuoteHighlightDirective {

  constructor(private highlight: ElementRef) {
    highlight.nativeElement.style.backgroundColor= 'yellow'
   }

}
