import { Component, OnInit } from '@angular/core';
import productsData from './products.json';
import { HttpClient } from "@angular/common/http";
import $ from "jquery";

interface Product {
  id: Number;
  category: string;
  name: string;
  price: string;
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

  addRow(name: string, price: string) {

    const tbody = document.getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");

    let cell1 = document.createElement("td");
    let cellText1 = document.createTextNode(name); //testing if it displays something onclick
    //cell1.innerHTML(doc);

    let cell2 = document.createElement("td");
    let input = document.createElement("input");
    input.setAttribute("class", "quantity");
    let quantity = input.value = "1";

    let deleteRow = document.createElement("button");
    deleteRow.innerText = "Delete";
    deleteRow.setAttribute("class", "btn btn-danger deleteRow");

  //  let cellText2 = document.createTextNode("quantity");
    let sTotal = this.getSubtotal(Number(quantity), Number(price));
    let cell3 = document.createElement("td");
    let cellText3 = document.createTextNode("£" + sTotal);

    let total = document.getElementsByTagName("h4")[0];
    let totalSum = 0;
    totalSum = totalSum + Number(sTotal);
    total.innerText = "Total: " + "£" + totalSum;

    cell1.appendChild(cellText1);
    cell2.appendChild(input);
    cell2.appendChild(deleteRow);
    cell3.appendChild(cellText3);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    tbody.appendChild(row);

    deleteRow.addEventListener('click', function() {
      tbody.removeChild(row);
    });

  }
  getSubtotal(quantity: Number, price: Number) {
    return (Number(quantity) * Number(price)).toFixed(2);
  }
  cancel(){
    const tbody = document.getElementsByTagName("tbody")[0];
    tbody.innerHTML = " ";
    let total = document.getElementsByTagName("h4")[0];
    total.innerHTML = "Total: £0.00";

  }

}
