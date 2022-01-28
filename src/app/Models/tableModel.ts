import { ColDef } from 'ag-grid-community';
import { ApplicantCardModel } from './cardModel';

export class TableModel {
  columnDefs!: ColDef[];
  rowData!: ApplicantCardModel[];
  test!: string;

  constructor(tab: TableModel) {
    console.log('hi from the tab model');
    return {
      columnDefs: tab.columnDefs ? tab.columnDefs : [],
      //create an array of object instantiated from the ApplicantCardModel class

      rowData: tab.rowData ? tab.rowData : [],
      test: tab.test ? tab.test : 'test word by the default value',
    };
  }
}
