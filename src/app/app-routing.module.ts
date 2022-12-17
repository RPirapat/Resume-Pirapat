import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  // ตั้ง Url เริ่มต้น
  { path: '', redirectTo: '', pathMatch: 'full' },
  // ตั้ง Url ในการค้นหา
  { path: 'navbar', component: NavbarComponent},
  // ตั้ง Url หากใส่ Url มั่ว
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
