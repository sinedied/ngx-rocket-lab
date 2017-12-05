import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from './core/route.service';
import { ShellComponent } from './core/shell/shell.component';
import { AuthenticationGuard } from './core/authentication/authentication.guard';

const routes: Routes = Route.withShell([
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' }
]);
routes.push({ path: '**', redirectTo: '', pathMatch: 'full' });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
