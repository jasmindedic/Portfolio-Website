import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { WorkOneComponent } from './work-one/work-one.component';
import { WorkTwoComponent } from './work-two/work-two.component';
import { WorkThirdComponent } from './work-third/work-third.component';
import { WorkFourthComponent } from './work-fourth/work-fourth.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    MyWorkComponent,
    WorkOneComponent,
    WorkTwoComponent,
    WorkThirdComponent,
    WorkFourthComponent,
    ContactComponent,
    FooterComponent,
    MenuComponent,
    ImprintComponent,
    DataProtectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*  FormsModule,
     ReactiveFormsModule,
     HttpClientModule, */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
