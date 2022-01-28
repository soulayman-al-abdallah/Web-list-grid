import { Component, Input, OnInit } from '@angular/core';
import { ApplicantCardModel } from '../Models/cardModel';

@Component({
  selector: 'app-applicant-card',
  templateUrl: './applicant-card.component.html',
  styleUrls: ['./applicant-card.component.scss'],
})
export class ApplicantCardComponent implements OnInit {
  @Input() oneObj!: ApplicantCardModel;

  myInstance: any;

  constructor() {
    //console.log(' const of the comp');
  }

  ngOnInit(): void {
    this.myInstance = new ApplicantCardModel(this.oneObj);

    //console.log(this.myInstance);
    
    // this.oneObj.type = this.oneObj.type ? this.oneObj.type : '';
    // this.oneObj.ref = this.oneObj.ref ? this.oneObj.ref : '';
    // this.oneObj.submissionDateTime = this.oneObj.submissionDateTime
    //   ? this.oneObj.submissionDateTime
    //   : new Date('02-01-2000');
    // this.oneObj.name = this.oneObj.name ? this.oneObj.name : 'sami mnl comp';
    // this.oneObj.familyName = this.oneObj.familyName
    //   ? this.oneObj.familyName
    //   : '';
    // this.oneObj.gender = this.oneObj.gender ? this.oneObj.gender : '';
    // this.oneObj.age = this.oneObj.age ? this.oneObj.age : 0;
    // this.oneObj.nationality = this.oneObj.nationality
    //   ? this.oneObj.nationality
    //   : '';
    // this.oneObj.flightNum = this.oneObj.flightNum ? this.oneObj.flightNum : '';
    // this.oneObj.arrivalDate = this.oneObj.arrivalDate
    //   ? this.oneObj.arrivalDate
    //   : new Date('02-01-2000');
    // this.oneObj.image = this.oneObj.image ? this.oneObj.image : '';
  }
}
