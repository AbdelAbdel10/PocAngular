import { HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Injectable, ModuleWithComponentFactories } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ClientModel } from '../model/client';





@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http:HttpClient) { }
  
  
 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'     
    })
  };



// Get All Client
  getAll(): Observable<ClientModel[]>{
    let host=environment.host;
    return this.http.get<ClientModel[]>(host+"/GetAll",
    this.httpOptions
    );
  }


  getById(postId: number): Observable<ClientModel> {
    let host=environment.host;
    return this.http.get<ClientModel>(host+"");
}


//Save client this.uri
save(client: any): Observable<ClientModel> {
  let host = environment.host;
  //const body = JSON.stringify(client);
  console.log(client);
    return this.http.post<ClientModel>(host+'/Post', client);
}





//Update Client
update(client: any): Observable<ClientModel> {
  let host=environment.host;
    return this.http.put<ClientModel>(host+"/Put", client);
}



//Delete Client
deletClient(code: Number): Observable<ClientModel> {
  let host=environment.host;
  console.log(host+"/Delete/" + code);
    return this.http.delete<ClientModel>(host+"/Delete/" + code);
}



  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

















/*
  getAll(): Observable<ClientModel[]>{
    let host=environment.host;
    return this.http.get<ClientModel[]>(host+"/commandes");
  }


  onSearch(value: any){
    let host=environment.host;
    return this.http.get<ClientModel[]>(host+"/commandes");
  }
*/

}


