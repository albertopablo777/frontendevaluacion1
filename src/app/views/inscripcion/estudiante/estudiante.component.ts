import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';

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

}
