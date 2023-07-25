import { food } from "./foods";

export class CartItem{

    constructor(food:food){
        this.food=food;
        
    }
    food:food ;

    quantity:number =1;

    get price():number{
        return this.food.price * this.quantity;
    }
}