import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent {

  //atributos
  selectedStudent!: Student;

  //Base de datos falsa con varios estudiantes.
  studentList: Student[] = [
    {
      name: 'Sebastian',
      lastName: 'Angarita',
      age: 24,
      email: 'juseanto@me.com',
      phone: '3002112575',
      ppa: 4.7,
      activated: true,
      fechaPago: new Date(),
    },
    {
      name: 'Sebastian2',
      lastName: 'Angarita2',
      age: 25,
      email: 'juseanto@me.com',
      phone: '3002112575',
      ppa: 4.3,
      activated: false,
      fechaPago: new Date(),
    },
    {
      name: 'Sebastian3',
      lastName: 'Angarita3',
      age: 22,
      email: 'juseanto3@me.com',
      phone: '3122112575',
      ppa: 4.1,
      activated: true,
      fechaPago: new Date(),
    },
    {
      name: 'Sebastian4',
      lastName: 'Angarita4',
      age: 19,
      email: 'juseanto4@me.com',
      phone: '3122112535',
      ppa: 3.5,
      activated: true,
      fechaPago: new Date(),
    },
  ];

  //metodos
  mostrarEstudiante(student: Student){
    this.selectedStudent = student;
  }

  //este metodo se llama cuando se emite un evento desde el hijo.
  agregarEstudiante(student: Student){
      this.studentList.push(student);
  }

}
