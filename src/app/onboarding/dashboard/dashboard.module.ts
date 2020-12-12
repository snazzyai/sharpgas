import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './container/dashboard.component';

// import {HeaderComponent} from './components/header/header.component';
// import {SidebarComponent} from './components/sidebar/sidebar.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { BuyGasModule } from './buy-gas/buy-gas.module';






@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule],

})
export class DashboardModule {}
