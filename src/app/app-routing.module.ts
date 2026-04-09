import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verif',
    loadChildren: () => import('./auth/verif/verif.module').then( m => m.VerifPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./task/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./task/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./task/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'statiscs',
    loadChildren: () => import('./statiscs/statiscs.module').then( m => m.StatiscsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./auth/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
