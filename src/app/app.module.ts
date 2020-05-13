import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryPipe } from './summary.pipe';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';

@NgModule({
  declarations: [AppComponent, SummaryPipe, LikeComponent, InputFormatDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
