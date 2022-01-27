import { Component, OnInit } from '@angular/core';
import productsData from './products.json';
import { HttpClient } from "@angular/common/http";
import $ from "jquery";

interface Product {
  id: Number;
  category: String;
  name: String;
  price: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'epos-system';

  products: Product[] = productsData;
  // data:any = []
  // console.log("logging");
  //
  // constructor(private http: HttpClient) {
  //
  // }

  addRow() {
    const tbody = document.getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");

    let cell1 = document.createElement("td");
    let cellText1 = document.createTextNode("name"); //testing if it displays something onclick

    let cell2 = document.createElement("td");
    let cellText2 = document.createTextNode("quantity");

    let cell3 = document.createElement("td");
    let cellText3 = document.createTextNode("price");

    cell1.appendChild(cellText1);
    cell2.appendChild(cellText2);
    cell3.appendChild(cellText3);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    tbody.appendChild(row);
  }

}
