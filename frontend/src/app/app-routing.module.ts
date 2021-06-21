import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FirstPhaseComponent} from "./first-phase/first-phase.component";
import {LoginComponent} from "./login/login.component";
import {SecondPhaseComponent} from "./second-phase/second-phase.component";
import {ResultsComponent} from "./results/results.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'first-phase', component: FirstPhaseComponent},
  {path: 'second-phase', component: SecondPhaseComponent},
  {path: 'results', component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }