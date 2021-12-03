import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finddoctor',
  templateUrl: './finddoctor.component.html',
  styleUrls: ['./finddoctor.component.css']
})
export class FinddoctorComponent implements OnInit {
  public city: any=[];
  public doctor: any=[];
  emailD :string;
  public x = true ;
  specialityD :string = "";
  sexeD : string= "";
  cityD :string= "";
  public doctorList:any=[];
  name :String;
  token = localStorage.getItem('token')
  id = localStorage.getItem('id')
  public valide:boolean=false
  public DateVide:any=[];
  public items: any;
  public speciality: any=[];
  public Calendar: any=[];
  public patient:any
  public idDoctor:any


  constructor( private _myservice: ApiService,
    private _router: Router ,
   ) { }

  ngOnInit(): void {
    this.getS()
    this.getD()
    this.Vtoken()
    this.getPatient()
    this.getCity()


}

  getPatient(){

    this._myservice.getPatient(this.id).subscribe((res) =>{
      this.patient=res;


      console.log(res);
     })
    }


  getCity(){
    this._myservice.getC().subscribe((res) =>{
      this.city=res;

      console.log(this.city);
     })
    }
    getS(){
      this._myservice.getS().subscribe((res) =>{
        this.speciality=res;

        console.log(res);
       })
      }
      getCalendar(){
        this._myservice.getCalendarVide().subscribe((res) =>{
          this.Calendar=res;
          console.log(res);
          this.calendardoctor()

         })
        }
      getD(){
        this._myservice.getD().subscribe((res) =>{
          this.doctor=res;
          this.doctorList=res;
          console.log(res);
          this.getCalendar()

        })
           }
         search(){

              this.doctorList=this.doctor.filter(res=>{
                this.name=res.lNameD +" "+res.fNameD
              return ( ((this.emailD==undefined) ||(this.emailD=="") ||this.name.toLocaleLowerCase().match(this.emailD.toLocaleLowerCase()))
                    &&((this.specialityD=="") ||(this.specialityD==undefined) || res.specialityD.speciality.toLocaleLowerCase().match(this.specialityD.toLocaleLowerCase()))
                    &&((this.sexeD=="")  || (this.sexeD==undefined) || res.sexeD.toLocaleLowerCase().match(this.sexeD.toLocaleLowerCase()))
                    &&((this.cityD=="")  || (this.cityD==undefined) || res.cityD.city.toLocaleLowerCase().match(this.cityD.toLocaleLowerCase()))
                    )})
         }


   Vtoken(){
     if(this.token==null){
       this.valide=false
      }else {
       this.valide=true}}

  getDateVide(doctorID){
    this._myservice.getDateVide(doctorID).subscribe((res) =>{
      this.DateVide=res;
      console.log(this.DateVide);})

    }
  getid(x){
    console.log(x)

  }


  calendardoctor(){

    for(var i=0 ; i<this.doctorList.length; i++){
      var z=0
      for(var j=0 ; j<this.Calendar.length; j++){

        if(this.doctorList[i]._id==this.Calendar[j].doctorID){
            this.doctorList[i].calendar[z]={ date: this.Calendar[j].date ,
                                             _id: this.Calendar[j]._id}

            z=z+1


           ;}}
  }console.log(this.doctorList)
  }
  public idDate:any
  public date:any={}
  rendezVous(idRV){
    console.log(idRV)
    this.idDate=idRV
    this.date.patientID=this.patient[0]._id
    console.log(this.date)
    console.log(this.idDate)


  }
  prendRV() {
    this._myservice.prendRV(this.idDate,this.date)
    .subscribe(() => {
       window.location.reload()
       console.log(this.date)
    }),error=>{
       console.log(error)};
    }
  login(){
    this._router.navigate(['/loginPatient']);
  }
  public profil:boolean=false
  public doctorP :any =[]

  valider(id,fNameD,lNameD,emailD,phoneD,cityD,specialityD,prix,Cabinet,diplome,training,picture){
    this.profil=true
    this.doctorP.fNameD=fNameD
    this.doctorP.lNameD=lNameD
    this.doctorP.emailD=emailD
    this.doctorP.phoneD=phoneD
    this.doctorP.cityD=cityD
    this.doctorP.specialityD=specialityD
    this.doctorP.prix=prix
    this.doctorP.Cabinet=Cabinet
    this.doctorP.diplome=diplome
    this.doctorP.training=training
    this.doctorP.picture=picture
    console.log(this.doctorP)


    console.log(id,fNameD,lNameD,emailD,phoneD,cityD,specialityD,prix,Cabinet,diplome,training)

    

  }









}
