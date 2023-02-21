import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


const materialComponents = [ 
  MatButtonModule,
  MatToolbarModule
]

@NgModule({
  imports: [MatButtonModule],
  exports: [materialComponents]
})
export class MaterialModule {}
