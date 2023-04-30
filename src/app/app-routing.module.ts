import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'mlbb',
    loadChildren: () => import('./mlbb/mlbb.module').then( m => m.MLBBPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'our-sponsers',
    loadChildren: () => import('./our-sponsers/our-sponsers.module').then( m => m.OurSponsersPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'tournament',
    loadChildren: () => import('./tournament/tournament.module').then( m => m.TournamentPageModule)
  },
  {
    path: 'registered-people',
    loadChildren: () => import('./registered-people/registered-people.module').then( m => m.RegisteredPeoplePageModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('./components/signup/signup.module').then( m => m.SignupPageModule)
  // },
  {
    path: 'matchshedule',
    loadChildren: () => import('./matchshedule/matchshedule.module').then( m => m.MatchshedulePageModule)
  },
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then( m=> m.AuthPageModule)
  },
  {
    path: '**',component:PagenotfoundComponent}
  // {
  //   path: 'modal',
  //   loadChildren: () => import('./registration/modal/modal.module').then( m => m.ModalPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
