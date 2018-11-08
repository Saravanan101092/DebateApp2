import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {SpinnerComponent} from '../spinner/spinner.component';
@Component({
  selector: 'app-createdebate',
  templateUrl: './createdebate.component.html',
  styleUrls: ['./createdebate.component.css']
})
export class CreatedebateComponent implements OnInit {

  format: string;
  sides: number;
  sideTitle1: string;
  sideTitle2: string;
  sideTitle3: string;
  debateDesc: string;
  formdata;
  public load: boolean;

  constructor() { }

  ngOnInit() {
    this.formdata = new FormGroup({
      sideTitle1: new FormControl("", Validators.compose([
        Validators.required
      ])), sideTitle2: new FormControl("", Validators.compose([
        Validators.required
      ])), sideTitle3: new FormControl("", Validators.compose([
        Validators.required
      ])),
      debateDesc: new FormControl("", Validators.compose([Validators.required]))
    });
  }
  formatSelect(format: string): void {
    this.format = format;
  }
  sidesSelect(sides: number): void {
    this.sides = sides;
  }
  createDebate(data){
    data.format = this.format;
    data.sides = this.sides;
    console.log(JSON.stringify(data));
    this.load = true;
  }
}

