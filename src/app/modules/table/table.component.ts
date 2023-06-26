import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() columns!: any;
  @Input() dataSource!: FormGroup;
  @Output() subCatValue: EventEmitter<any> = new EventEmitter();
  @Output() actionButton: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataSource,"table dataa!");
  }

  handleClick(data: any, type: any) {
    const iconData = {
      data: data,
      iconType: type
    }
    this.subCatValue.emit(iconData);
  }
  actionBtn(btn: any, row: any, action: any) {
    const actionData = {
      data: btn,
      subCatClass: 0,
      action:action
    };
    switch (row) {
      case 'Class A':
        actionData['subCatClass'] = 0;
        break;
      case 'Class B':
        actionData['subCatClass'] = 1;
        break;
      case 'Class C':
        actionData['subCatClass'] = 2;
        break;
      default:
        break;
    }
    this.actionButton.emit(actionData);
  }
}
