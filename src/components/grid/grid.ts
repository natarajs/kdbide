import {Component} from 'angular2/core';
import {Injectable} from 'angular2/core';

@Injectable()
@Component({
    selector: 'grid1',
    template: `<ag-grid-ng2 class="ag-fresh" style="height: 600px; width: 800px;"  
            [gridOptions]="gridOptions" enableColResize
                     enableSorting
                     enableFilter
                     groupHeaders showToolPanel
            [columnDefs]="columnDefs"   [rowData] = "rowData"    
            (cellClicked)="onCellClicked($event)"></ag-grid-ng2>
     `,
    directives: [(<any>window).ag.grid.AgGridNg2]
})
export class GridComponent {
    gridOptions = {};
    columnDefs = [];
    // put data directly onto the controller
    rowData = [];

    public refresh(data): void {
       var rowData = data;
       var row1=data[0];
       var defs=[];
       for (var x in row1) {
           defs.push({headerName: x, field: x});
       }
    this.columnDefs = defs;
        this.rowData = rowData;
        //this.gridOptions.api.refreshView();
     }
    public onCellClicked(event): void {
          console.log('onCellClicked: ' + event.rowIndex + ' ' + event.colDef.field);
    };

}



