import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { CreateInventoryInstanceModalComponent } from './modals/create-inventory-instance-modal/create-inventory-instance-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit{

  newInstance_name: string | null;
  newInstance_desc: string | null;

  constructor(
    private http: HttpClient,
    public modal_createInventoryInstance: MatDialog
  ) {
    this.newInstance_name = null;
    this.newInstance_desc = null;
  };
  
  ngOnInit(): void {
  };

  onClick_createInstance(): void {

    const dialogRef_createInventoryInstance = this.modal_createInventoryInstance
      .open(
        CreateInventoryInstanceModalComponent, {
        width: '500px',
        data: {name: this.newInstance_name, desc: this.newInstance_desc}
    });

    dialogRef_createInventoryInstance.afterClosed().subscribe(result => {
      console.log(`Result: ${JSON.stringify(result)}`);
      console.log("modal_createInventoryInstance closed");
    });
  };

  sendRequest_createInventoryInstance(): Subscription {
    
    let request = this.http.post(
      `http://localhost:37561/request/create-inventory-instance`, 
      {tableName: "test_table_1"}
    );
    return request.subscribe();
  };

}


