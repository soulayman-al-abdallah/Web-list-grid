import { Injectable } from '@angular/core';

export class ApplicantCardModel {
  type!: string;
  ref!: string;
  submissionDateTime!: Date;
  name!: string;
  familyName!: string;
  gender!: string;
  age!: number;
  nationality!: string;

  flightNum!: string;
  arrivalDate!: Date;
  image!: string;
  //tester!:string;

  constructor(card: ApplicantCardModel) {
    //console.log('Hello From the constructor of the model');
    return {
      type: card.type ? card.type : '',
      ref: card.ref ? card.ref : '',
      submissionDateTime: card.submissionDateTime
        ? card.submissionDateTime
        : new Date(),
      name: card.name ? card.name : '',
      familyName: card.familyName ? card.familyName : '',
      gender: card.gender ? card.gender : '',
      age: card.age ? card.age : 0,
      nationality: card.nationality ? card.nationality : '',
      flightNum: card.flightNum ? card.flightNum : '',
      arrivalDate: card.arrivalDate ? card.arrivalDate : new Date('02-01-2000'),
      image: card.image ? card.image : '',
    };
  }

  // I do not want to use this way of the constructor because I dont want to create
  // a same  instance of the model class used by whoever uses the model.
  // I want when I create an instance of the model anywhere, to pass an object,
  // and the constructor of the model takes takes the object and returns
  // with default values or any customized model I want

  // constructor(card: ApplicantCardModel) {

  //         console.log("Hello from the no return constructor")

  //         this.type= card.type ? card.type :'',
  //         this.ref= card.ref? card.ref: '',
  //         this.submissionDateTime= card.submissionDateTime? card.submissionDateTime:new Date('02-01-2000'),
  //         this.name= card.name? card.name: 'sami mnl bala return model',
  //         this.familyName= card.familyName? card.familyName : '',
  //         this.gender= card.gender? card.gender: '',
  //         this.age= card.age? card.age: 0,
  //         this.nationality= card.nationality? card.nationality: '',
  //         this.flightNum= card.flightNum? card.flightNum: '',
  //         this.arrivalDate= card.arrivalDate? card.arrivalDate: new Date('02-01-2000'),
  //         this.image= card.image? card.image: ''
  //         // return{}
  // }
}
