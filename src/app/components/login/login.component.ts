import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder, 
    private _snackBar: MatSnackBar,
    private router: Router
    ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  entrar(){
    const usuario = this.form.value.usuario;
    const senha = this.form.value.senha;
    console.log(usuario);
    console.log(senha);

    if(usuario == 'teste' && senha == '123'){
      //redireciona para o dashboard
      this.fakeLogin();
    }
    else{
      //mostra msg de erro
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Usuário ou senha inválidos!!', 'Fechar', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000
    });
  }

  fakeLogin(){
    this.loading = true;

    setTimeout(()=> {
      this.router.navigate(['dashboard']);
    }, 2000)
  }

}
