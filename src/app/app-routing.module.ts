import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ClasesAlumnoComponent } from './pages/clases-alumno/clases-alumno.component';
import { ClasesCardComponent } from './components/clases-card/clases-card.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';
import { FormUsuariosComponent } from './components/form-usuarios/form-usuarios.component';
import { ListaAlumnosComponent } from './pages/lista-alumnos/lista-alumnos.component';
import { PeticionCardComponent } from './components/peticion-card/peticion-card.component';
import { P404Component } from './pages/p404/p404.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'clases'},
  { path: 'usuarios/:usuarioId', component: UsuarioComponent },
  { path:'clases', component: ClasesAlumnoComponent },
  { path: 'clasesCard', component: ClasesCardComponent },
  { path: 'alumnoCard', component: AlumnoCardComponent},
  { path: 'updateUsuario/:usuarioId', component: FormUsuariosComponent },
  { path: ':profesorId/alumnos', component: ListaAlumnosComponent },
  { path: 'peticionCard', component: PeticionCardComponent },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
