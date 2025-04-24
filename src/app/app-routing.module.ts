import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAddComponent} from './components/formAdd/formAdd.component';
import { AllBooksComponent } from './components/all-books/all-books.component';

const routes: Routes = [
  {path: "adicionar", component: FormAddComponent},
  {path: "livros", component: AllBooksComponent},
  {path: "", redirectTo: "adicionar", pathMatch: "full"},
  {path: "**", redirectTo: "adicionar", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
