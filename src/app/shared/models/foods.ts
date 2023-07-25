export class food{

    // constructor( id:number, name:string, price:number, tags:string, favorite:boolean, stars:number, imageUrl:string,
    //     origin:string, cookTime:string){
    //     this.id =id;
    //     this.name= name;
    //     this.price= price;

    // }
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    favorite:boolean = false;
    stars:number = 0;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
}