//Librerias
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


//Componentes
import { AppComponent } from './app.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { P404Component } from './pages/p404/p404.component';
import { ListaAlumnosComponent } from './pages/lista-alumnos/lista-alumnos.component';
import { ClasesAlumnoComponent } from './pages/clases-alumno/clases-alumno.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';
import { ClasesCardComponent } from './components/clases-card/clases-card.component';
import { FormUsuariosComponent } from './components/form-usuarios/form-usuarios.component';
import { MenuComponent } from './components/menu/menu.component';
import { PeticionCardComponent } from './components/peticion-card/peticion-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    P404Component,
    ListaAlumnosComponent,
    ClasesAlumnoComponent,
    AlumnoCardComponent,
    ClasesCardComponent,
    FormUsuariosComponent,
    MenuComponent,
    PeticionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
