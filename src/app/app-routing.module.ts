import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cart', pathMatch: 'full' },
  {
    path: 'cart',
    loadChildren: () =>
      import('./modules/cart/cart.module').then(
        (m) => m.CartModule
      ),
  },
  {
    path: 'Proceed',
    loadChildren: () =>
      import('./modules/proceed/proceed.module').then((m) => m.ProceedModule),
  },
  {
    path: 'newtab',
    loadChildren: () =>
      import('./modules/newtab/newtab.module').then((m) => m.NewtabModule),
  },
  { path: '**', redirectTo: 'cart', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
