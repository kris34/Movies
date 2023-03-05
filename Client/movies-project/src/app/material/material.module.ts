import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav'; 
const materialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
  MatMenuTrigger,
  MatTabsModule,
  MatSidenavModule
];

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatSidenavModule
  ],
  exports: [materialComponents],
})
export class MaterialModule {}
