import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './container/dashboard.component';
import { PortfolioComponent } from './portfolio/container/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'portfolio',
        pathMatch: 'full',
      },
      {
        path: 'portfolio',
        loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)
      },
      {
        path: 'buy-gas',
        loadChildren: () => import('./buy-gas/buy-gas.module').then(m => m.BuyGasModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
