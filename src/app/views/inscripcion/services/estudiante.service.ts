import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EstudianteModel } from "../models/estudiante.model";
import { Observable } from "rxjs";

//import { url } from "inspector";
@Injectable({
    providedIn :'root'
})
export  class EstudianteService {
   //
   private API_URL = 'http://localhost:3000/estudiante'
   constructor(private http:HttpClient) {

    }
    getTodosLosEstudiantes (): Observable <EstudianteModel[]> {
      console.log('se ejecuta el metodo ver todos los estudiantes');  
      return this.http.get<EstudianteModel[]>(`${this.API_URL}/getestudiante`);
      }
    agregarEstudiante(estudiante: EstudianteModel) : Observable<EstudianteModel> {
        console.log('se llama al metodo agregar',estudiante);
        return this.http.post<EstudianteModel>(`${this.API_URL}/crear`, estudiante);
      }
    
    editarEstudiante(estudiante: EstudianteModel) : Observable<EstudianteModel> {
      console.log('se llama al metodo editar', estudiante);  
      return this.http.put<EstudianteModel>(`${this.API_URL}/editar/${estudiante._id}`, estudiante);
      }
    
    eliminarEstudiante(idestudiante : string) : Observable<EstudianteModel> {
        console.log('se llama al metodo eliminar', idestudiante);
         //return this.http.delete<EstudianteModel>(`${this.API_URL}/eliminar/${idestudiante}`);
        return this.http.delete<EstudianteModel>(this.API_URL+'/eliminar/'+idestudiante);
    
      }
}
