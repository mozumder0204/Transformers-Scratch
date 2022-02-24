import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranformersRoutingModule } from './tranformers-routing.module';
import { TranformerAddComponent } from './tranformer-add/tranformer-add.component';
import { TranformerListComponent } from './tranformer-list/tranformer-list.component';


@NgModule({
  declarations: [TranformerAddComponent, TranformerListComponent],
  imports: [
    CommonModule,
    TranformersRoutingModule
  ]
})
export class TranformersModule { }
