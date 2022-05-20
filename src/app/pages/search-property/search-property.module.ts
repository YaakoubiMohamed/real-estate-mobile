import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPropertyPageRoutingModule } from './search-property-routing.module';

import { SearchPropertyPage } from './search-property.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPropertyPageRoutingModule
  ],
  declarations: [SearchPropertyPage]
})
export class SearchPropertyPageModule {}
