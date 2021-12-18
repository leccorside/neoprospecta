import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Costumers } from 'src/app/interfaces/costomers';
import { CostomersService } from 'src/app/services/costomers.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModaldeleteComponent } from '../../modaldelete/modaldelete.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NovoregistroComponent } from '../../novoregistro/novoregistro.component';
import { EditarregistroComponent } from '../../editarregistro/editarregistro.component';

export interface DialogData {
  id: number;
  name: string;
  age: number;
  city: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit  {

  desktop: any;
  mobile: any;
  
  id!: number;
  name!: string;
  age!: number;
  city!: string;

  dataSource: any;
  
  displayedColumns: string[] = ['id', 'name', 'age', 'city', 'acao'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _costomers: CostomersService, 
    public dialog: MatDialog,
    private _snackBar: MatSnackBar, 
    ) {

   }

  ngOnInit(): void {
    this.carregarCostomers();
    this.verificarDispositivo();
  }

  carregarCostomers(){
    this._costomers.getCostomers().subscribe(data => {
      //console.log(data);
      this.dataSource = data;
      this.dataSource = new MatTableDataSource(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  novo(){
    this.dialog.open(NovoregistroComponent, {
      width: '350px'
    });
  }

  deletar(index: number){
    console.log(index);
    this.dialog.open(ModaldeleteComponent);
  }

  editar(index: any){
    console.log(index.name);

    this.dialog.open(EditarregistroComponent, {
      width: '350px',
      data: { id: index.id, name: index.name, age: index.age, city: index.city }
    });

  }

  verificarDispositivo(){
    var largura = window.screen.width;
    console.log(largura);
    
    if(largura >= 768){
      this.desktop = true;
      this.mobile = false;
    }
    else{
      this.desktop = false;
      this.mobile = true;
    }
  }


}
