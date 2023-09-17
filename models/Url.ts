export class Url {

    public url:string;
    public count:number;
    public userId:string;

    constructor(url: string, count:number, userId: string) {
        this.url = url;
        this.count = count;
        this.userId = userId;
    }

}