import { Component, OnInit } from '@angular/core';

//alertas
import Swal from 'sweetalert2';

//servicios
import { ProductService } from '../../services/Product/product.service';
//modelo
import {Product} from '../../models/Product';

//formuario
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-productsmenu',
  templateUrl: './productsmenu.component.html',
  styleUrls: ['./productsmenu.component.css'],
  providers: [ProductService]
})
export class productsmenuComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProduct()
  }
  getAllProduct(){
    this.productService.getAllProduct().subscribe(
      (res) => {
        console.log(res)
        this.productService.Products = res.product
        
      }
    )
  
  }
  /*createUser(user:NgForm){
    this.UserService.createUser(user.value).subscribe(
      (res) => {
        alert("usuario creado")
        this.clean(user)
        this.getAllUsers()
        console.log(res)
      }
    )
  }*/

  save(Product: NgForm) {
    if (Product.value._id) {
      //actualizar el formulario
      this.productService.updateProduct(Product.value).subscribe((res) => {
        alert("Producto actualizado")
        this.getAllProduct()
        this.clean(Product)
      })
    } else {
      // crear un nuevo usuario
      Product.value.file = this.productService.selectedProduct.file
        this.productService.createProduct(Product.value).subscribe((res) => {
          console.log(res)
          alert('Producto creado');
          this.getAllProduct();
          this.clean(Product);
        },
        (err) => {
         Swal.fire({
           position: 'center',
           icon:'error',
           title:'El producto ya existe',
           showConfirmButton: false,
           timer: 1500
         })
        }
        );
    }

    /**/
  }

  clean(form?: NgForm) {
    if (form) {
      form.reset();
      this.productService.selectedProduct = new Product();
    }
  }

  fillFields(Product: Product) {
    this.productService.selectedProduct = Product;
  }

  deleteProduct(_id: string){
    Swal.fire({
      title:'¿Desea eliminar este Producto?',
      text:"Se eliminará este Producto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!',
    }).then ((result)=> {
      if(result.isConfirmed){

        Swal.fire({
          position: 'center',
          icon:'success',
          title:'Producto eliminado con exito',
          showConfirmButton: false,
          timer: 1500
        })
        this.productService.deleteProduct(_id).subscribe((res)=> {
          this.getAllProduct()
         })
        }else{
          Swal.fire({
            position: 'center',
            icon:'error',
            title:'Acción cancelada',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
   
//cargar imagen
  loadImage(event:any){// recibe evento de cualquer tipo
    console.log(event);

    let limit =2 * 1024 * 1024; // conversion de 2mb
    console.log(limit, event[0].size)

    if (event[0].size <= limit) {
    this.productService.selectedProduct.file = event[0].base64;
    alert("Imagen cargada");
      
    }else{
      alert("Imagen demasiado grande");
    }
    console.log(this.productService.selectedProduct);
  }

}