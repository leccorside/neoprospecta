import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogData } from '../dashboard/inicio/inicio.component';

@Component({
  selector: 'app-modaldelete',
  templateUrl: './modaldelete.component.html',
  styleUrls: ['./modaldelete.component.sass']
})
export class ModaldeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModaldeleteComponent>, private _snackBar: MatSnackBar, ) { }

  ngOnInit(): void {
  }

  fechar(): void {
    this.dialogRef.close();
  }

  deletar(): void {
    this.dialogRef.close();

    this._snackBar.open('Costomer deletado com sucesso!', 'Fechar', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000
    });
  }

}
