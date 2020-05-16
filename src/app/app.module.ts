import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryPipe } from './summary.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import { AppErrorHandler } from './Error-Handler/app-error-handler';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenusComponent } from './menus/menus.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    HomeComponent,
    MenusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'httpservice',
        component: PostsComponent,
      },
      {
        path: 'templatederive',
        component: ContactFormComponent,
      },
      {
        path: 'reactiveforms',
        component: NewCourseFormComponent,
      },
      {
        path: 'reactiveformssingin',
        component: SignupFormComponent,
      },
      {
        path: '**',
        component: NotfoundComponent,
      },
    ]),
  ],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}
