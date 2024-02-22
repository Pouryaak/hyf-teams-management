import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

interface TableColumn {
  key: string;
  title: string;
}

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() isLoading: boolean = false;
   @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @ContentChild(TemplateRef) customRowTemplate?: TemplateRef<any>;

  displayedColumns: string[] = [];

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(c => c.key);
    this.displayedColumns.push('actions');
  }
  onEdit(item: any): void {
    this.edit.emit(item);
  }

  onDelete(item: any): void {
    this.delete.emit(item);
  }
}
