import { Injectable } from '@angular/core';
//cliente de http
import { HttpClient } from '@angular/common/http';
//modelo de datos
import { Menu } from 'src/app/models/Menu';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  selectedMenu: Menu
  users: Menu[] = [];
  readonly URL_API = "http://localhost:5000"

  constructor(private http: HttpClient) { 
    this.selectedMenu = new Menu
  }

  getAllMenus(){
    return this.http.get(`${this.URL_API}/menu/showAll`)
  }
}
