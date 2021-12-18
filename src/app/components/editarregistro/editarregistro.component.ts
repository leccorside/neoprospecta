import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CostomersService } from 'src/app/services/costomers.service';

@Component({
  selector: 'app-editarregistro',
  templateUrl: './editarregistro.component.html',
  styleUrls: ['./editarregistro.component.sass']
})
export class EditarregistroComponent implements OnInit {

  form: FormGroup;

  id!: number;
  name!: string;
  age!: string;
  city!: string;

  pessoa: any;

  constructor(
    public dialogRef: MatDialogRef<EditarregistroComponent>, 
    private _snackBar: MatSnackBar, 
    private fb: FormBuilder,
    private _costomers: CostomersService,
    @Inject(MAT_DIALOG_DATA) public data: {name: string, age: string, city: string}
    ) {
      this.form = this.fb.group({
        name: ['', Validators.required],
        age: ['', Validators.required],
        city: ['', Validators.required]
      })
     }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(){
    this._costomers.getCostomers().subscribe(data => {
      this.pessoa = data;
    });
  }

  salvar(): void {

      this.dialogRef.close();

      this._snackBar.open('Cliente '+this.data.name+' atualizado com sucesso!', 'Fechar', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 4000
      });
  }

}
