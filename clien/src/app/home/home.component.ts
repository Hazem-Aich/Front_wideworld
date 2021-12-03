import { Component, Inject, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { AbstractControl, FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ApiService} from '../services/api.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 
  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private _document: Document,
    private _myservice: ApiService,
    private _router: Router,
    private fb: FormBuilder,
    private _activatedRoute: ActivatedRoute) {
    translate.setDefaultLang('en');

  }

  ngOnInit(): void {

  
}
/*get(){
  this._myservice.get().subscribe((res) =>{
    this.city=res;

    console.log(res);
   })
  }*/
  }
