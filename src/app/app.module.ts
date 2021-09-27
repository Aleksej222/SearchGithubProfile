import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeeProfileComponent } from './components/see-profile/see-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SafePipeModule } from 'safe-pipe';
import { SafePipe } from 'safe-pipe/lib/safe-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SeeProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SafePipeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
