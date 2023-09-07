import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule}  from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SectoresComponent } from './components/sectores/sectores.component';
import { PlagasComponent } from './components/plagas/plagas.component';
import { FooterComponent } from './components/footer/footer.component';
import { TratamientosComponent } from './components/tratamientos/tratamientos.component';
import { ProcesosComponent } from './components/procesos/procesos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { BaseFundamentalComponent } from './components/base-fundamental/base-fundamental.component';
import { ResidencialComponent } from './components/residencial/residencial.component';
import { EmpresarialComponent } from './components/empresarial/empresarial.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Header2Component } from './components/header2/header2.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { RuedaComponent } from './components/rueda/rueda.component';
import { CardComponentComponent } from './components/card-component/card-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectoresComponent,
    PlagasComponent,
    FooterComponent,
    TratamientosComponent,
    ProcesosComponent,
    NosotrosComponent,
    NoticiasComponent,
    ContactoComponent,
    HomeComponent,
    CertificacionesComponent,
    ServiciosComponent,
    BaseFundamentalComponent,
    ResidencialComponent,
    EmpresarialComponent,
    PreguntasFrecuentesComponent,
    InicioComponent,
    Header2Component,
    PreloaderComponent,
    RuedaComponent,
    CardComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
