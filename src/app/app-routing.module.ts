import { EditarregistroComponent } from './components/editarregistro/editarregistro.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  //QUANDO ENTRA NA PÁGINA CARREGA SOMENTE OS MÓDULOS NECESSÁRIOS
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule) },
  { path: 'editar-registro/:id', component: EditarregistroComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({                     
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
