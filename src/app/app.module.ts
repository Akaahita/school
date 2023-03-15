import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './@shared/components/navbar/navbar.component';
import { SideBarComponent } from './@shared/components/side-bar/side-bar.component';
import { ContentComponent } from './@shared/components/content/content.component';
import { WarpperComponent } from './@shared/components/warpper/warpper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideBarComponent,
    ContentComponent,
    WarpperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
