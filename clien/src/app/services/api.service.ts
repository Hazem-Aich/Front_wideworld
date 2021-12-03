import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable  } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
    constructor(private http : HttpClient ,private router: Router) { }
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
   //Patient
   signinP(body:any){
    return this.http.post('http://localhost:9100/users/signinP', body,{
      observe:'body'
    }
    );}
    signUpP(user) {
      return this.http.post<any>('http://localhost:9100/users/addP', user,);
    }
      //=> id patient
    public x:any
    id(idP:any){
       this.x=idP
       localStorage.setItem('id', this.x);
    }

    getPatient(id) {
      return this.http.get(`http://localhost:9100/users/getPID/${id}`)
    }
    getPatientO(idO) {
      return this.http.get(`http://localhost:9100/users/getPID/${idO}`)
    }
    updateP(id,data){
      return this.http.patch(`http://localhost:9100/users/updateP/${id}`,data)
    }
    //Doctor
    signinD(body:any){
      return this.http.post('http://localhost:9100/users/signinD', body,{
        observe:'body'
      }
      );}
       //=> id doctor
    public idd:any
    idD(idD:any){
       this.idd=idD
       localStorage.setItem('idD',this.idd);
    }
     getDoctor(id) {
      return this.http.get(`http://localhost:9100/users/getDID/${id}`)
    }

    signUpD(user) {
      return this.http.post<any>('http://localhost:9100/users/addD', user,);
      }
    getD(){
      return this.http.get<any>('http://localhost:9100/users/getD2')
      }
    updateD(id,data){
        return this.http.patch(`http://localhost:9100/users/updateD/${id}`,data)
      }
    //Calendar
      getDateVide(id) {
        return this.http.get(`http://localhost:9100/users/getdateVide/${id}`)
      }
      getCalendarVide() {
        return this.http.get(`http://localhost:9100/users/getCVide`)
      }
      getRendez_vous(id) {
        return this.http.get(`http://localhost:9100/users/getDateNV/${id}`)
      }
      getRendez_vousValide(id) {
        return this.http.get(`http://localhost:9100/users/getDate/${id}`)
      }
      valideDRV(id,data){
        return this.http.patch(`http://localhost:9100/users/ValiderRV/${id}`, data,)

      }
      prendRV(id,data){
        return this.http.patch(`http://localhost:9100/users/rendez_vous/${id}`, data,)

      }
      delete(id: string) {
        return this.http.delete(`http://localhost:9100/users//deleteDate/${id}`)
      }

     //City
     getC(){
      return this.http.get('http://localhost:9100/users/getC')
    }
    //Speciality
    getS(){
      return this.http.get('http://localhost:9100/users/getS')
    }
    //Avis
    getAvis(id: string) {
      return this.http.get(`http://localhost:9100/users/getAvis/${id}`)
    }
    postAvis(avis) {
      return this.http.post<any>('http://localhost:9100/users/avis', avis,);
    }
    //ordonnace
     getOrdonnace(id: string) {
      return this.http.get(`http://localhost:9100/users/ordonnance/${id}`)
    }
    ordonnance(user) {
      return this.http.post<any>('http://localhost:9100/users/ordonnance', user,);
    }



    //token
    loggedIn() {
      return !!localStorage.getItem('token');
    }
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      this.router.navigate(['/login']);
    }
    getToken() {
      return localStorage.getItem('token');
    }







}
