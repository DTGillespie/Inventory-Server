import { Component, EventEmitter, Inject, Output} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData_CreateInventoryInstance {
  name: string | null;
  desc: string | null;
};

@Component({
  selector: 'app-create-inventory-instance-modal',
  templateUrl: './create-inventory-instance-modal.component.html',
  styleUrls: ['./create-inventory-instance-modal.component.css']
})

export class CreateInventoryInstanceModalComponent {

  constructor(
    public dialogRef_createInventoryInstance: MatDialogRef<CreateInventoryInstanceModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData_CreateInventoryInstance) {};
};