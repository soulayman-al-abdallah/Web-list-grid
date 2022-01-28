import { Component, Input, OnInit } from '@angular/core';
import { rowData } from '../info';
import {
  ColDef,
  RowClassParams,
  CellClassParams,
  SideBarDef,
  CellStyle,
  RowStyle,
} from 'ag-grid-community';
import { TableModel } from '../Models/tableModel';
import { ApplicantCardModel } from '../Models/cardModel';
import { ButtonComponent } from '../button/button.component';
//import { type } from 'os';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  frameworkComponents: any;
  localObject: any;
  myTabInstance: any;
  getRowStyle!: (params: RowClassParams) => RowStyle;
  //getCellStyle!: (params: CellClassParams) => CellStyle;
  public defaultColDef: {
    flex: number;
    minWidth: number;
    enableValue: boolean;
    enableRowGroup: boolean;
    enablePivot: boolean;
    sortable: boolean;
    filter:boolean;
  };
  //public sideBar: {};
  //--------------------------------------------------------
  //rowStyle: RowStyle = { background: 'white' };
  //cellStyle: CellStyle = { };
  //--------------------------------------------------------

  columnDefs: ColDef[] = [
    { field: 'ref',  cellStyle: this.getCellStyle },
    { field: 'name',  cellStyle: this.getCellStyle },
    { field: 'age',  cellStyle: this.getCellStyle },
    { field: 'nationality',  cellStyle: this.getCellStyle },
    { field: 'gender',  cellStyle: this.getCellStyle },
    { field: 'countryOrigin', cellStyle: this.getCellStyle },
    { field: 'residenceCountry',  cellStyle: this.getCellStyle },
    { field: 'arrivalDate',  cellStyle: this.getCellStyle },
    { field: 'submissionDateTime',  cellStyle: this.getCellStyle },
    { field: 'flightNum',  cellStyle: this.getCellStyle },
    { field: 'type',  cellStyle: this.getCellStyle },
    {
      field: 'Status',filter: true,cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        clicked: function (field: any) {
          alert(`The button was clicked`);
        },
      },
    },
  ];

  // rowData: ApplicantCardModel[] = rowData;
  @Input() rowData!: ApplicantCardModel[];



  //--------------------------------------------------------
  gridApiActive: any;
  searchInput: any;
  onGridReady1(params: any) {
    // this.rowData;
    this.gridApiActive = params.api;}
  changeOccured() {
    this.gridApiActive.setQuickFilter(this.searchInput);
  }
  //--------------------------------------------------------

  constructor() {
    this.frameworkComponents = {
      btnCellRenderer: ButtonComponent,
    };

    this.defaultColDef = {
      flex: 1,
      minWidth: 150,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
      sortable: true,
      filter:false    };

    // this.sideBar = {
    //   toolPanels: [
    //     {
    //       id: 'columns',labelDefault: 'Columns',
    //       labelKey: 'columns',iconKey: 'columns',
    //       toolPanel: 'agColumnsToolPanel',minWidth: 225,
    //       maxWidth: 225,width: 225,
    //     },
    //     {
    //       id: 'filters',labelDefault: 'Filters',
    //       labelKey: 'filters',iconKey: 'filter',
    //       toolPanel: 'agFiltersToolPanel',
    //       minWidth: 180,maxWidth: 400,width: 250,
    //     },
    //   ],
    //   position: 'right',
    //   defaultToolPanel: 'columns',
    // };
  }

  ngOnInit() {
    console.log('abl el ngonit w instance', this.rowData);
    this.createInstance();
  }

  createInstance() {
    console.log('abl el instance', this.rowData);
    this.myTabInstance = new TableModel({
      columnDefs: this.columnDefs,
      rowData: this.rowData,
      test: '',
    });
    console.log('ana el create instance', this.myTabInstance);
  }
  
  getCellStyle(params: CellClassParams) {
    return { color: '' };
  }
}
