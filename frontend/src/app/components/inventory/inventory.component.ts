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
    this.getRequest_getInventoryInstances();
  };

  onClick_createInstance(): void {

    const dialogRef_createInventoryInstance = this.modal_createInventoryInstance
      .open(
        CreateInventoryInstanceModalComponent, {
        width: '500px',
        data: {name: this.newInstance_name, desc: this.newInstance_desc}
    });

    dialogRef_createInventoryInstance.afterClosed().subscribe(result => {

      let valid = true;
      for (let property in result) {
        property == undefined ? valid = false : null; 
      };

      console.log("INVALID FIELDS IN RESULT");

      this.postRequest_createInventoryInstance(result);
    });
  };

  private postRequest_createInventoryInstance(data: object): void {
    this.http.post(`http://localhost:37561/request/define-inventory-instance`, data)
      .subscribe(result => {
        console.log(result);
    });
  };
  
  private getRequest_getInventoryInstances(): void {
    this.http.get(`http://localhost:37561/request/get-inventory-instances`)
      .subscribe(result => {
        console.log(result);
    });
  };

}


