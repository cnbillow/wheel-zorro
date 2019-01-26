import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DataService } from 'app/providers/data.service';
import { NzModalService } from 'ng-zorro-antd';
import { DataEditComponent } from './edit/data-edit.component';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [`
  .table-operations {
    margin-bottom: 16px;
  }

  .table-operations > button {
    margin-right: 8px;
  }
  .ant-advanced-search-form {
    padding: 24px;
    background: #fbfbfb;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
  }

  .search-result-list {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  [nz-form-label] {
    overflow: visible;
  }

  button {
    margin-left: 8px;
  }
`]
})
export class DataComponent implements OnInit {
  searchNameList = [];
  searchAddressList = [];
  filterNameList = [
    { text: 'Joe', value: 'Joe' },
    { text: 'Jim', value: 'Jim' }
  ];
  filterAddressList = [
    { text: 'London', value: 'London' },
    { text: 'Sidney', value: 'Sidney' }
  ];
  sortMap = {
    name: null,
    age: null,
    address: null
  };
  sortName = null;
  sortValue = null;

  data = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park'
    }
  ];
  displayData = [...this.data];

  sort(sortName: string, value: string): void {
    this.sortName = sortName;
    this.sortValue = value;
    for (const key in this.sortMap) {
      this.sortMap[key] = (key === sortName ? value : null);
    }
    this.search(this.searchNameList, this.searchAddressList);
  }

  search(searchNameList: string[], searchAddressList: string[]): void {
    this.searchNameList = searchNameList;
    this.searchAddressList = searchAddressList;
    const filterFunc = item => (this.searchAddressList.length ? this.searchAddressList.some(address => item.address.indexOf(address) !== -1) : true) && (this.searchNameList.length ? this.searchNameList.some(name => item.name.indexOf(name) !== -1) : true);
    const data = this.data.filter(item => filterFunc(item));
    if (this.sortName && this.sortValue) {
      this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[this.sortName] > b[this.sortName] ? 1 : -1) : (b[this.sortName] > a[this.sortName] ? 1 : -1));
    } else {
      this.displayData = data;
    }
  }

  resetFilters(): void {
    this.filterNameList = [
      { text: 'Joe', value: 'Joe' },
      { text: 'Jim', value: 'Jim' }
    ];
    this.filterAddressList = [
      { text: 'London', value: 'London' },
      { text: 'Sidney', value: 'Sidney' }
    ];
    this.searchNameList = [];
    this.searchAddressList = [];
    this.search(this.searchNameList, this.searchAddressList);
  }

  resetSortAndFilters(): void {
    this.sortName = null;
    this.sortValue = null;
    this.sortMap = {
      name: null,
      age: null,
      address: null
    };
    this.resetFilters();
    this.search(this.searchNameList, this.searchAddressList);
  }

  constructor(private dataService: DataService, private modalService: NzModalService) {

  }

  ngOnInit(): void {
    this.queryInfo = {
      name: "test",
      date: new Date()
    }
  }

  /**
   * 修改
   * @param id 
   */
  edit(id?: string) {
    this.dataService.getDataById("feadr4t3q").subscribe(
      res => {
        let info = res.result;
        console.log(info.name);
      }
    )


    const modal = this.modalService.create({
      nzTitle: '修改轮子',
      nzContent: DataEditComponent,
      nzFooter: null,//需要设置为null，否则会在footer显示确定、取消按钮
      nzComponentParams: {
        id: 'feadr4t3q',
      },
      nzMaskClosable: false,//false为modal对话框

    });

    // Return a result when closed
    modal.afterClose.subscribe((result) => this.query());

  }

  queryInfo: any;//查询条件

  resetForm(): void {
    // this.validateForm.reset();
    this.queryInfo = {};
  }

  /**
   * 查询
   */
  query() {
    console.log(JSON.stringify(this.queryInfo));
  }

}
