export class Menu {
    //constructor
    constructor(_id = "", name = "", price = "", description = "", type = ""){
        //inicializa los valores del atributo
        this._id = _id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.type = type;
    }

    //atributos -  definicion
    _id:string
    name:string
    price:string
    description:string
    type:string
}