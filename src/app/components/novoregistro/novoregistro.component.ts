import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-novoregistro',
  templateUrl: './novoregistro.component.html',
  styleUrls: ['./novoregistro.component.sass']
})
export class NovoregistroComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NovoregistroComponent>, 
    private _snackBar: MatSnackBar, 
    private fb: FormBuilder
    ) {
      this.form = this.fb.group({
        name: ['', Validators.required],
        age: [
          '',
            Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(3)
          ])
        ],
        city: ['', Validators.required]
      })
     }

  ngOnInit(): void {

  }


  fechar(): void {
    this.dialogRef.close();
  }

  salvar(): void {

      this.dialogRef.close();

      this._snackBar.open('Cliente cadastrado com sucesso!', 'Fechar', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 4000
      });
  }



}
