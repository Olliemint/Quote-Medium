import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLapse'
})
export class TimeLapsePipe implements PipeTransform {

  transform(value: any): number {
      // getting user date
//     
// transform(value: any): number {
  let myDate:Date = new Date();
  let noTime:any = new Date(myDate.getFullYear(),myDate.getMonth(),myDate.getDate())
  var dateGap = Math.abs(noTime - value)
  const seconds = 86400;

  var timeLapsSeconds = dateGap  *0.001; 
  var timeLapse = timeLapsSeconds / seconds;
  return Math.ceil(timeLapse)-1;

  // if (timeLapse >= 1 && noTime > value){
  //     return timeLapse;
  // }else{
  //     return 0;
  // }
}

}
