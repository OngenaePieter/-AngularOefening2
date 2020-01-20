import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ToevoegenComponent } from './toevoegen/toevoegen.component';
import { LijstComponent } from './lijst/lijst.component';

const appRoutes: Routes = [
  { path: 'toevoegen', component: ToevoegenComponent },
  {path: 'lijst', component: LijstComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ToevoegenComponent,
    LijstComponent,
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
