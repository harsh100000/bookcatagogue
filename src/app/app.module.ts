import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { DetailpostComponent } from './detailpost/detailpost.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatePostComponent,
    ShowPostComponent,
    DetailpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path:'home',component:HomeComponent},
        {path:'createpost',component:CreatePostComponent},
        {path:'showpost',component:ShowPostComponent},
        {path:'detail/:id',component:DetailpostComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
