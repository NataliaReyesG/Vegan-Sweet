import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/Product/product.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductService]
})
export class HomeComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }


  getAllProduct(){
    this.productService.getAllProduct().subscribe(
      (res) => {
        console.log(res)
        this.productService.Products = res.product
        
      }
    )
    }
  }
 
 