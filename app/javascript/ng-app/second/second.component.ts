import { Component } from '@angular/core';
import templateString from './second.html';
// import { MyDataService } from '../my_data/my_data.service';
import { MyData2Service } from '../my_data/my_data2.service';
import { MyData } from '../my_data/my_data';

@Component({
  template: templateString,
  providers: [ MyData2Service ]
})
export class SecondComponent {
  private myDatas: any;
  private attrs: any
  private newMyData: MyData;

  constructor(private myData2Service: MyData2Service) { }

  ngOnInit() {
    this.getAll();
    this.newMyData = new MyData();
  }

  getAll() {
    this.myData2Service.all().subscribe(resp => {
      console.log(resp);
      this.myDatas = resp;
    }, e => {
      console.log(e);
    })
  }

  update(id, string_test, integer_test, boolean_test) {
    this.attrs = {
      string_test: string_test,
      integer_test: integer_test,
      boolean_test: boolean_test
    }
    this.myData2Service.update(id, this.attrs).subscribe(resp => {
      console.log(resp);
      this.myDatas = resp;
    }, e => {
      console.log(e);
    })
  }

  create(newMyData) {
    console.log(newMyData.getCreateParam())
    this.myData2Service.create(newMyData.getCreateParam()).subscribe(resp => {
      console.log(resp);
      this.myDatas = resp;
      this.newMyData = new MyData();
    }, e => {
      console.log(e);
    })
  }

  delete(id) {
 
    this.myData2Service.delete(id).subscribe(resp => {
      console.log(resp);
      this.myDatas = resp;
    }, e => {
      console.log(e);
    })
  }


}
