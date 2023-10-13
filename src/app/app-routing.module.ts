import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TratamientosComponent } from './components/tratamientos/tratamientos.component';
import { SectoresComponent } from './components/sectores/sectores.component';
import { ProcesosComponent } from './components/procesos/procesos.component';
import { PlagasComponent } from './pages/plagas/index/plagas.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EmpresarialComponent } from './components/empresarial/empresarial.component';
import { ResidencialComponent } from './components/residencial/residencial.component';
import { HomeComponent } from './pages/home/home.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { BaseFundamentalComponent } from './components/base-fundamental/base-fundamental.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RuedaComponent } from './components/rueda/rueda.component';
import { JardineriaComponent } from './pages/jardineria/jardineria.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch:'full' },
  { path: 'inicio', component: InicioComponent, data: { animation: 'inicio' } },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'tratamientos', component: TratamientosComponent},
  { path: 'sectores', component: SectoresComponent},
  { path: 'procesos', component: ProcesosComponent },
  { path: 'plagas', component: PlagasComponent },
  { path: 'plagas/nosotros', component: NosotrosComponent },
  { path: 'noticias', component: NoticiasComponent},
  { path: 'servicios', component: ServiciosComponent, data: { animation: 'servicios' }},
  { path: 'empresarial', component: EmpresarialComponent},
  { path: 'residencial', component: ResidencialComponent},
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent, data: { animation: 'preguntas-frecuentes' }},
  { path: 'base-fundamental', component: BaseFundamentalComponent},
  { path: 'certificaciones', component: CertificacionesComponent},
  { path: 'rueda', component: RuedaComponent, data: { animation: 'rueda' }},
  { path: 'jardines', component: JardineriaComponent, data: { animation: 'rueda' }},
  { path: '**', component: InicioComponent}
  // { path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
