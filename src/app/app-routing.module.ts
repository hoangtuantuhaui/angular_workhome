import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
    {path: '', component: HomepageComponent },
    { path: 'blog', component: BlogListComponent },
    { path: 'blog-detail', component: BlogDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  // { path: "", redirectTo: "/home", pathMatch: "full" },
  // {
  //   path: "home",
  //   component: AppComponent,
  //   children: [
  //     { path: "list", component: FormDetailComponent },
  //     { path: "create", component: FormExampleComponent }
  //   ]
  // }
];
console.log(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule,],
  exports: [RouterModule],
})
export class AppRoutingModule { 
  
}
