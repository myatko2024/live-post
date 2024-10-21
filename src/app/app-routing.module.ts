import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostEditComponent } from './post-edit/post-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/post-list',
    pathMatch: 'full'
  },
  {
    path: 'post-list',
    component: PostListComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'post-add',
    component: PostAddComponent
  },
  {
    path: 'post-edit/:index',
    component: PostEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
