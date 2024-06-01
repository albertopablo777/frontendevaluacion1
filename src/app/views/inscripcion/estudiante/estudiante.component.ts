import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormFloatingDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';
import { EstudianteModel} from '../models/estudiante.model';
import { EstudianteService} from '../services/estudiante.service' 

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, 
            DocsExampleComponent, ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, 
            FormControlDirective, ButtonDirective, NgStyle, TextColorDirective, FormSelectDirective,
            TableDirective, TableColorDirective, TableActiveDirective],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.scss'
})
export class EstudianteComponent {
  listaEstudiantes : EstudianteModel [] = []; 
  estudiantemodelo : EstudianteModel = new EstudianteModel(); 
r: any;
  /**
   * 
   * @param estudianteService 
   */
  constructor (private estudianteService: EstudianteService) {
    this.getEstudiante ();
  }
  getEstudiante(){
    this.estudianteService.getTodosLosEstudiantes().subscribe({
      next : (respuesta) => {
        console.log(respuesta);
        this.listaEstudiantes = respuesta;
    },
    error: (error) => {
      console.log(error);
    }
  })
  }
  guardarestudiante (){
      console.log(this.estudiantemodelo);
      this.estudianteService.agregarEstudiante(this.estudiantemodelo).subscribe({
        next : (respuesta) =>{
          console.log("Se guardo Exitosamente", respuesta);
        },
        error: (error) => {
          console.log(error);
          this.getEstudiante();
        }   
      })
  }
};
