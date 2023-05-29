import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TratamientosComponent } from './components/tratamientos/tratamientos.component';
import { SectoresComponent } from './components/sectores/sectores.component';
import { ProcesosComponent } from './components/procesos/procesos.component';
import { PlagasComponent } from './components/plagas/plagas.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EmpresarialComponent } from './components/empresarial/empresarial.component';
import { ResidencialComponent } from './components/residencial/residencial.component';


const routes: Routes = [
  { path: 'home', component: Component },
  { path: 'header', component: HeaderComponent},
  { path: 'tratamientos', component: TratamientosComponent},
  { path: 'sectores', component: SectoresComponent},
  { path: 'procesos', component: ProcesosComponent},
  { path: 'plagas', component: PlagasComponent},
  { path: 'noticias', component: NoticiasComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'empresarial', component: EmpresarialComponent},
  { path: 'residencial', component: ResidencialComponent},
  { path: '', redirectTo: '/home', pathMatch:'full' },
  // { path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
