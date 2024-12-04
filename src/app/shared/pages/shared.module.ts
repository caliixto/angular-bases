import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ContactPageComponent } from './contact-page/contact-page.component';




@NgModule({
  declarations: [HomePageComponent, AboutPageComponent, SidebarComponent, ContactPageComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [HomePageComponent,AboutPageComponent,SidebarComponent, ContactPageComponent]
})
export class SharedModule { }
