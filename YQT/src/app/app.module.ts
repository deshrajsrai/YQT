import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContantComponentComponent } from './contant-component/contant-component.component';
import { BlogsComponentComponent } from './blogs-component/blogs-component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { ServicesComponentComponent } from './services-component/services-component.component';

const routes :Routes=[
{    path:'',    component: AppComponent},
{    path:'appcomp',    component: AppComponent},
{    path:'home',    component: HomeComponentComponent,    },
{    path:'product',    component: ProductsComponentComponent,    },
{    path:'blogs',    component: BlogsComponentComponent,    },
{    path:'contant',    component: ContantComponentComponent,    },
{    path:'services',    component: ServicesComponentComponent,    }
            ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ContantComponentComponent,
    BlogsComponentComponent,
    ProductsComponentComponent,
    ServicesComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
