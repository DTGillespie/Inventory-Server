import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit{

  constructor() {
  };
  
  ngOnInit(): void {
  };

  async createDatabaseInstance(): Promise<any> {
    let result = await axios.post(`http://localhost:37561/request/create-table`, {test: "test"});
  };



}
