import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUser } from '../models/interfaces/user.interface';
import { Observable, lastValueFrom } from 'rxjs';
import { SolicitudClase } from '../models/interfaces/peticion.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = "http://localhost:3000/api/usuarios/";

  httpClient = inject(HttpClient);

  constructor() { }

  getAll(): Promise<IUser[]>{
    return lastValueFrom(this.httpClient.get<IUser[]>(this.baseUrl));
  }

  getAlumnosByProfesorId(profesorId: number): Promise<SolicitudClase[]> {
    return lastValueFrom(this.httpClient.get<SolicitudClase[]>(`${this.baseUrl}${profesorId}/alumnos`));
  }

  getById(usuarioId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}${usuarioId}`);
  }

  insert(usuario: IUser) : Promise<IUser> {
    return lastValueFrom(this.httpClient.post<IUser>(this.baseUrl, usuario));
  }

  update(usuario: IUser) : Promise<IUser> {
    console.log(usuario)
    return lastValueFrom(this.httpClient.put<IUser>(`${this.baseUrl}${usuario.id}`, usuario)); 
  }

  delete(usuarioId: number): Promise<any>{
    return lastValueFrom(this.httpClient.delete<any>(`${this.baseUrl}${usuarioId}`));
  }

}
