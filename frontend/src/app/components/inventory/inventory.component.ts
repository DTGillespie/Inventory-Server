import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit{

  constructor(private http: HttpClient) {
  };
  
  ngOnInit(): void {
  };

  createInventoryInstance(): void {
    let request = this.http.post(`http://localhost:37561/request/create-table`, {tableName: "test_table_1"});
    request.subscribe();
  };



}
