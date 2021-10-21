import { Injectable } from '@angular/core';
// cliente
import { HttpClient } from '@angular/common/http';
// modelo de producto
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProduct:Product  
  Products: Product[]=[]; 
  readonly URL_API = "http://localhost:5000"

  constructor(private http: HttpClient) {
    this.selectedProduct = new Product()
}

//obtener usuarios
getAllProduct(){
  console.log(`${this.URL_API}/Product/getAllProduct`)
  return this.http.get<any>(`${this.URL_API}/Product/getAllProduct`)
  

}
//crear usuarios
createProduct(Product:Product){
  console.log(`${this.URL_API}/Product/createProduct`)
  return this.http.post(`${this.URL_API}/Product/createProduct`,Product)

}

updateProduct(Product:Product){
  console.log(`${this.URL_API}/Product/updateProduct/${Product._id}`)
  return this.http.put(`${this.URL_API}/Product/updateProduct/${Product._id}`,Product)
}
deleteProduct(_id: string){
 console.log(`${this.URL_API}/Product/deleteProduct/${_id}`)
 return this.http.delete(`${this.URL_API}/Product/deleteProduct/${_id}`)
}
}