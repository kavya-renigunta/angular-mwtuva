import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from './employee-data.service';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {
  // Declaration of variables
  public empStaticData : any;

  constructor(private _empService: EmployeeDataService) {
    // Initialization
    this.empStaticData = [];
  }

  ngOnInit() {
    // Assign with data
    this.subscribeEmployeeData();
  }
  subscribeEmployeeData() {
    // Subscribe data from service
    // this._empService.getEmployees().subscribe(model => {
    //   console.log("emp model", model);
    // });
    // Above code throwing some error, so taken static data
    this.empStaticData = [{
      "id":1,
      "name":"Leanne Graham 1",
      "username":"Bret1",
      "emailID":"Sincere1@april.biz"
    },
    {
      "id":2,
      "name":"Ervin Howell 2",
      "username":"Antonette2",
      "emailID":"Shanna2@melissa.tv"
    }];
    // Should render data using jqx grid - installed from npm
    $("#grid").jqGrid({
      datatype: "local",
      colNames: ['ID', 'Full Name', 'User Name', 'Email', 'Actions'],
      colModel: [{
          name: 'ID',
          index: 'id',
          sorttype: "int"
      },
      {
          name: 'Full Name',
          index: 'name',
          sorttype: "string"
      },
      {
          name: 'User Name',
          index: 'username',
        sorttype: "string"
      },
      {
          name: 'Email',
          index: 'emailID',
          sorttype: "string"
      },
      {
          name: 'Actions',
          // index: 'actions',
          // sorttype: "string"
      }],
      caption: "Stack Overflow Example",
      // ondblClickRow: function(rowid,iRow,iCol,e){alert('double clicked');}
    });

    var names = ["id", "name", "username", "emailID"];
    var mydata = [];

    for (var i = 0; i < this.empStaticData.length; i++) {
        mydata[i] = {};
        for (var j = 0; j < this.empStaticData[i].length; j++) {
            mydata[i][names[j]] = this.empStaticData[i][j];
        }
    }

    for (var i = 0; i <= mydata.length; i++) {
        $("#grid").jqGrid('addRowData', i + 1, mydata[i]);
    }
  }
}