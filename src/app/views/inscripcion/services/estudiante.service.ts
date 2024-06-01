import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EstudianteModel } from "../models/estudiante.model";
import { Observable } from "rxjs";
@Injectable({
    providedIn :'root'
})
export  class EstudianteService {
   //
   private API_URL = 'http://localhost:3000/estudiante'
   constructor(private http:HttpClient) {

    }
    getTodosLosEstudiantes (): Observable <EstudianteModel[]> {
        return this.http.get<EstudianteModel[]>(`${this.API_URL}/getestudiante`);
      }
    agregarEstudiante(estudiante: EstudianteModel) : Observable<EstudianteModel> {
        return this.http.post<EstudianteModel>(`${this.API_URL}/crear`, estudiante);
      }
    
    //editarEstudiante(estudiante: EstudianteModel) : Observable<EstudianteModel> {
      //  return this.http.put<EstudianteModel>(`${this.API_URL}/editar/${estudiante}`, estudiante);
      //}
    
    //eliminarEstudiante(idestudiante : string) : Observable<EstudianteModel> {
      //  console.log(idestudiante);
        // return this.http.delete<RecetaModel>(`${this.API_URL}/eliminar/${idReceta}`);
        //return this.http.delete<EstudianteModel>(this.API_URL+'/eliminar/'+idestudiante);
    
      //}
}
