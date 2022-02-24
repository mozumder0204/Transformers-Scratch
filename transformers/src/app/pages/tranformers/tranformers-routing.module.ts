import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranformerAddComponent } from './tranformer-add/tranformer-add.component';
import { TranformerListComponent } from './tranformer-list/tranformer-list.component';

const routes: Routes = [
  { path: '', component: TranformerListComponent, pathMatch: 'full' },
  { path: 'add', component: TranformerAddComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranformersRoutingModule {}
