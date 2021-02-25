import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatepostComponent } from './createpost/createpost.component';
import { DetailsCatComponent } from './details-cat/details-cat.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { ListCatsComponent } from './list-cats/list-cats.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'create', component: CreatepostComponent, canActivate: [AuthGuardService]},
  { path: 'cats', component: ListCatsComponent, canActivate: [AuthGuardService] },
  { path: 'cats/:id', component: DetailsCatComponent},
  { path: 'cats/:id/edit', component: EditCatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
