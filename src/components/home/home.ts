import {ViewChild,  Component, Inject, forwardRef} from 'angular2/core';
//import {MdPatternValidator, MdMinValueValidator, MdNumberRequiredValidator,
//       MdMaxValueValidator, MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
//import {ag} from 'ag-grid/dist/ag-grid';
import {  FormBuilder,
  ControlGroup,
  Validators,
  AbstractControl
 } from 'angular2/common';


import {Http, Response} from 'angular2/http';
import {GridComponent} from '../grid/grid';


@Component({
  selector: 'simple-http',
  template: `
   <div *ngIf="loading">loading...</div>
`
})
export class SimpleHTTPComponent {
  data: Object;
  loading: boolean;
  json: Object;


  constructor(public http: Http, @Inject(forwardRef(() => HomeCmp)) private _parent:HomeCmp) {
console.log(_parent);
}


  makeRequest(connect): void {
    this.loading = true;
    this.http.post('http://'+connect.server+':'+connect.port+'/.jxo?'+connect.query)
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
        this._parent.setGrid(this.data);
      });
  }
}


@Component({
  selector: 'home',
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css'],
  directives: [SimpleHTTPComponent,GridComponent,MATERIAL_DIRECTIVES
  ,(<any>window).ag.grid.AgGridNg2
  ]
})
export class HomeCmp {
  @ViewChild('grid1')
   grid2: GridComponent;

  @ViewChild('http1')
   http1: SimpleHTTPComponent;

  kdbConnect = {
    server: 'localhost',
    port: 80,
    query: 'select from state'
  };

  myForm: ControlGroup;
  kdbURL: AbstractControl;



  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'kdbURL':  ['', Validators.required],
      'kdbQuery':  ['', Validators.required],
      'port': ['', Validators.compose([
          Validators.required
      /*  ,MdNumberRequiredValidator.inline(),
        MdPatternValidator.inline('^[0-9]+$'),
        MdMinValueValidator.inline(80),
        MdMaxValueValidator.inline(99999)*/
      ])]
    });

    this.kdbURL = this.myForm.controls['kdbURL'];

/*
    this.kdbURL.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to: ', value);
      }
    );
    this.myForm.valueChanges.subscribe(
      (value: string) => {
        console.log('form changed to: ', value);
     }
*/


//    );

  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
//    console.log(this.kdbConnect);
    this.http1.makeRequest(this.kdbConnect);
  }

  setGrid(val) {
    this.grid2.refresh(val);
  }


}


