import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
  Apiturl = 'http://localhost:8000/notes'
  ApiturlId = 'http://localhost:8000/notes/${id}'
  

  constructor(private http:HttpClient) { }
  getall(){
    return this.http.get(this.Apiturl).pipe(
      tap({
        next: (data) => console.log('succed', data),
        error: (err) => console.error('حدث خطأ أثناء جلب البيانات:', err)
      }),
      catchError((error) => {
        console.error('خطأ في الطلب:', error);
        return throwError(() => new Error('حدث خطأ في جلب البيانات'));
      })
    )
  } 


deleteall(){
  return this.http.delete(this.Apiturl).pipe(tap({
    next:(data) => console.log('all data are deleted' ,data),
    error:(err)  => console.error('data not deleted' , err)
    
  }),

    catchError((erorr) => {
      console.log(erorr);
      return throwError(() => {new Error('error in delete data')})
      
    })

    )
}


  deletenote(id){
    return this.http.delete(`http://localhost:8000/notes/${id}`).pipe(tap({
      next:(data) => console.log('note deleted' , data),
      error:(err) => console.log('nothing has been deleted' , err),
      
      
    }),
      catchError((error) =>{
        console.log(error);
        return throwError(() => {new Error('error in delete note')})
        
      })    )
  }


  showOneNote(id){
    return this.http.get(`http://localhost:8000/notes/${id}`).pipe(tap({
      next:(data) => console.log('note appear' , data),
      error:(err) => console.log('err in get note' , err)
    }),
  
      catchError((erorr) => {
        return throwError(() => {new Error('no note to show' , erorr)})
      })      )

    
    
    
  }

}





