import { Renderer2, Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AbstractControl, FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ApiService} from '../services/api.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  resisterForm: FormGroup;
  public city: any=[];
  public errorMessage: Boolean
  public errorMessageR: Boolean = false
  public serverErrorMessages: String
  public sexep: String=""
  public cityp: String=""




  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
    private _myservice: ApiService,
    private _router: Router,
    private fb: FormBuilder,
    private _activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      emailP: new FormControl(null, Validators.required),
      passwordP: new FormControl(null, Validators.required)
    });

    this.resisterForm = new FormGroup({
      lNameP: new FormControl(null, Validators.required),
      fNameP: new FormControl(null, Validators.required),
      emailP: new FormControl(null, Validators.required),
      passwordP: new FormControl(null,[Validators.required, Validators.minLength(8)]),
      confirmPasswordP: new FormControl(null, Validators.required),
      phoneP: new FormControl(null, [Validators.required, Validators.minLength(8) ]),
      cityP: new FormControl(null, Validators.required),
      sexeP: new FormControl(null, Validators.required),
    }
    );

  }


  ngOnInit(): void {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = '../../assets/js/login.js';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
    this.getCity()




  }
  getCity(){
    this._myservice.getC().subscribe((res) =>{
      this.city=res;

      console.log(res);
     })
    }

  login() {
    if (this.loginForm.valid) {
      this._myservice.signinP(this.loginForm.value)
        .subscribe(
          data => {

            this._myservice.id(data[2])
            this._router.navigate(['home']);
            localStorage.setItem('token', data[1])



          },
          error => {
            console.log(error)

            if (error.status === 404) {
              this.errorMessage=true
              this.serverErrorMessages = error.error.join('<br/>');


            }


          }
        );
    }else{
        this.errorMessageR=true
      }}

  signUp() {
    console.log(this.resisterForm)
    if (this.resisterForm.valid) {
      this._myservice.signUpP(this.resisterForm.value)
        .subscribe(
          data => {
            console.log(data);
            window.location.reload();
          },
          error => {
            if (error.status === 404) {
              console.log("hh")
              this.errorMessage=true
              this.serverErrorMessages = error.error.join('<br/>');

            }


          }
        );
    }else{
       console.log("hhh")
        this.errorMessageR=true


}}
  }
