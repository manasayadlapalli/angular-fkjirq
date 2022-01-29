import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RedmiComponent } from './redmi/redmi.component';
import { PocoComponent } from './poco/poco.component';
import { OneplusComponent } from './oneplus/oneplus.component';
import { RealmeComponent } from './realme/realme.component';
import { HonourComponent } from './honour/honour.component';

const routes: Routes = [
  {
    path: 'redmi',
    component: RedmiComponent,
  },
  {
    path: 'poco',
    component: PocoComponent,
  },
  {
    path: 'oneplus',
    component: OneplusComponent,
  },
  {
    path: 'realme',
    component: RealmeComponent,
  },
  {
    path: 'honour',
    component: HonourComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }