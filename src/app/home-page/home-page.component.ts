import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { rowData } from '../info';
import { ApplicantCardModel } from '../Models/cardModel';


import { TableComponent } from '../table/table.component';
//import 'rxjs/add/observable/of';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  gridView = true;
  localArray: ApplicantCardModel[] = rowData;
  breakpoint = 0;
  newArray!: ApplicantCardModel[];
  featuredArray!: ApplicantCardModel[];



  constructor(private tableDI: TableComponent) {}

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 4;

    this.featuredArray = this.newArray ? this.newArray : this.localArray;

  }

  onResize(event: any) {
    if (event.target.innerWidth <= 700) {
      this.breakpoint = 1;
    } else if (event.target.innerWidth <= 1000) {
      this.breakpoint = 2;
    } else if (event.target.innerWidth <= 1300) {
      this.breakpoint = 3;
    } else if (event.target.innerWidth <= 2000) {
      this.breakpoint = 4;
    }
  }

  changeView() {
    this.gridView = !this.gridView;
  }

  getFilteredValues(param: any) {
    setTimeout(() => {
      this.newArray = this.localArray.filter(function (obj) {
        var searcho = (param.target as HTMLInputElement).value;
        console.log(searcho);

Object.keys(obj)
Object.values(obj)
        //for (const key in obj) {
        if (obj.name.toLowerCase().includes(searcho.toLowerCase())) {
          return obj;
        } else if (
          obj['familyName'].toLowerCase().includes(searcho.toLowerCase())
        ) {
          return obj;
        } else if (
          obj['gender'].toLowerCase().includes(searcho.toLowerCase())
        ) {
          return obj;
        } else if (
          obj['arrivalDate']
            .toString()
            .toLowerCase()
            .includes(searcho.toLowerCase())
        ) {
          return obj;
        } else if (
          obj['nationality']
            .toString()
            .toLowerCase()
            .includes(searcho.toLowerCase())
        ) {
          return obj;
        }
        //}

        // for (const key in obj) {
        //   if (obj['name'].toLowerCase().includes('Sami'.toLowerCase())) {
        //     return obj;
        //   }
        // }

        // return (obj.image || obj.familyName || obj.name).toLowerCase()
        // .includes('male'.toLowerCase());
      });

      this.featuredArray = this.newArray ? this.newArray : this.localArray;
      this.tableDI.createInstance();
      console.log(this.newArray);
      console.log(this.featuredArray);
    }, 600);
  }


}
