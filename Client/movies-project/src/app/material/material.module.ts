import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'; 
import {MatInputModule} from '@angular/material/input'; 
const materialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
  MatMenuTrigger,
  MatTabsModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule
];

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [materialComponents],
})
export class MaterialModule {}
