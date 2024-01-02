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
import { JardineriaComponent } from './pages/jardineria/index/jardineria.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { LimpiezaComponent } from './pages/limpieza/index/limpieza.component';
import { DesinfeccionComponent } from './pages/desinfeccion/index/desinfeccion.component';
import { CertificadosComponent } from './pages/certificados/index/certificados.component';
import { BaseFundamentalPlagas } from './pages/plagas/base-fundamental/base-fundamental.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch:'full' },
  { path: 'inicio', component: InicioComponent},
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'tratamientos', component: TratamientosComponent},
  { path: 'sectores', component: SectoresComponent},
  { path: 'procesos', component: ProcesosComponent },
  { path: 'plagas', component: PlagasComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'base-fundamental', component: BaseFundamentalPlagas },
  { path: 'limpieza', component: LimpiezaComponent },
  { path: 'noticias', component: NoticiasComponent},
  { path: 'servicios', component: ServiciosComponent },
  { path: 'empresarial', component: EmpresarialComponent},
  { path: 'residencial', component: ResidencialComponent},
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent},
  { path: 'base-fundamental', component: BaseFundamentalComponent},
  { path: 'certificaciones', component: CertificacionesComponent},
  { path: 'rueda', component: RuedaComponent},
  { path: 'jardines', component: JardineriaComponent},
  { path: 'desinfeccion', component: DesinfeccionComponent},
  { path: 'certificados', component: CertificadosComponent},

  { path: '**', component: InicioComponent}
  // { path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
