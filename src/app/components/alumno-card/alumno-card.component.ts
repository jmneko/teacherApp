import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/models/interfaces/user.interface';

@Component({
  selector: 'app-alumno-card',
  templateUrl: './alumno-card.component.html',
  styleUrls: ['./alumno-card.component.css']
})
export class AlumnoCardComponent {

  @Input() miUsuario!: IUser;

}
