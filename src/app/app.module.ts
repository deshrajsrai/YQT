import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContantComponentComponent } from './contant-component/contant-component.component';
import { BlogsComponentComponent } from './blogs-component/blogs-component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { ServicesComponentComponent } from './services-component/services-component.component';
import { IntroComponentComponent } from './intro-component/intro-component.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes :Routes=[
{    path:'', redirectTo:'home', pathMatch:'full' },
{    path:'home', component: HomeComponentComponent ,
        children:[
        {    path:'', component: IntroComponentComponent},
        {    path:'intro', component: IntroComponentComponent},
        {    path:'product', component: ProductsComponentComponent},
        {    path:'blogs', component: BlogsComponentComponent},
        {    path:'contant', component: ContantComponentComponent},
        {    path:'services', component: ServicesComponentComponent},
        {    path:'help', component: HelpComponent},
        {    path:'about-us', component: AboutUsComponent},
        {    path:'contact-us', component: ContactUsComponent}
            ]
}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ContantComponentComponent,
    BlogsComponentComponent,
    ProductsComponentComponent,
    ServicesComponentComponent,
    IntroComponentComponent,
    AboutUsComponent,
    HelpComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
