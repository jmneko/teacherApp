import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/models/interfaces/user.interface';

@Component({
  selector: 'app-peticion-card',
  templateUrl: './peticion-card.component.html',
  styleUrls: ['./peticion-card.component.css']
})
export class PeticionCardComponent {

  @Input() miUsuario!: IUser;

  ngOnInit() {
    console.log(this.miUsuario);
  }

}
