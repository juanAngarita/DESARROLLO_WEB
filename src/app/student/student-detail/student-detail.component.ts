import { Component, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {

  @Input()
  student!:Student;

  //Inyectar dependencias
  constructor() { }

  //Se llama una única vez cuando el componente se renderiza en pantalla
  ngOnInit(): void {
    console.log("ngOnInit de detail");
    //LLamar un API
  }

  //Dado que el componente tiene una propiedad input se llama despues del constructor
  ngOnChanges(): void {
    console.log("ngOnChanges de detail");
  }

}
