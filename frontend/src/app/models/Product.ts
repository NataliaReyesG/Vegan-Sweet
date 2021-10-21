export class Product {
    //constructor
    constructor(_id = "", name = "", price = "", description = "", type = "", file=" "){
        //inicializa los valores del atributo
        this._id = _id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.type = type;
        this.file = file;
    }

    //atributos -  definicion
    _id:string
    name:string
    price:string
    description:string
    type:string
    file: string
}