import { Renderer2, Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {ApiService} from '../services/api.service'




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public patientid:any
  public patient:any
  public doctorid:any
  public doctor:any
  public auth:Boolean

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
    private _myservice: ApiService,
    private router :Router
  ) { }

  ngOnInit(): void {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = '../../assets/js/navbarprofil.js';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
    this.getid()
    this.getidD()


  }
  getid(){
    this.patientid=localStorage.getItem('id')
    console.log(this.patientid)
    if(this.patientid!=null){
      this.getPatient()
      this.auth=false
    }

  }
  getPatient(){
    this._myservice.getPatient(this.patientid).subscribe((res) =>{
      this.patient=res;

      console.log(res);
     })
    }
   getidD(){
    this.doctorid=localStorage.getItem('idD')
    console.log(localStorage.getItem('idD'))
     if(this.doctorid!=null){
      this.getDoctor()
      this.auth=true
    }


  }
  getDoctor(){
    this._myservice.getDoctor(this.doctorid).subscribe((res) =>{
      this.doctor=res;

      console.log(res);
     })
    }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('idD');
    localStorage.removeItem('idO');
    localStorage.removeItem('room');
    this.router.navigate(['']);

  }


}
