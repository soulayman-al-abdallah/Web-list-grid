import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

import { ButtonModel } from '../Models/buttonModel';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements ICellRendererAngularComp, OnInit {
  localObject: ButtonModel = {
    buttonName: 'Approved',
    width: '5rem',
    height: '1.55rem',
    backgroundColor: 'green',
    color: 'white',
    fontSize: '12px',
  };

  styleObject!: {};
  myButtonInstance!: ButtonModel;

  //-------------------------------------------------------------------
  private rendererParameters: any;
  agInit(params: any): void {
    this.rendererParameters = params;
  }

  //refresh(params: ICellRendererParams): boolean;

  refresh(params: any): boolean {
    this.rendererParameters = params;
    return true;
  }

  btnClickedHandler() {
    this.rendererParameters.clicked(this.rendererParameters.value);
  }
  //-------------------------------------------------------------------

  constructor() {
    console.log('ana el render parameters', this.rendererParameters);
  }

  ngOnInit(): void {
    this.myButtonInstance = new ButtonModel(this.localObject);
    //console.log('returning from the model', this.myButtonInstance);

    // Property binding of styles using [style]="aStringOfStylesOrAnObjectOfStyles"
    this.styleObject = {
      width: this.myButtonInstance.width,
      height: this.myButtonInstance.height,
      fontSize: this.myButtonInstance.fontSize,
      backgroundColor: this.myButtonInstance.backgroundColor,
      color: this.myButtonInstance.color,
    };

    //console.log('the styleObject', this.styleObject);
  }
}
