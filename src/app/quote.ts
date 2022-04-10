export class Quote {
    seeMore: boolean;
    constructor(public Qoutetitle:string,public Quote:string,public Author:string,public upVotes:number,public downVotes:number,public submittedBy:string, public timeLapse: Date){
        this.seeMore = false;

    }
}
