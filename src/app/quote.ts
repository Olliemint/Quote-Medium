export class Quote {
    seeMore: boolean;
  static upVotes: any;
    constructor(public Qoutetitle:string,public Quote:string,public Author:string,public upVotes:number,public downVotes:number,public submittedBy:string, public timeLapse: Date){
        this.seeMore = false;

    }
}
