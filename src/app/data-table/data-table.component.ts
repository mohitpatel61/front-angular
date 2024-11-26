import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';  // Import NgxDatatableModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [NgxDatatableModule, CommonModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnDestroy {
  @Input() columns: any[] = []; // Columns definition (name, id, etc.)
  @Input() apiEndpoint: string = ''; // API endpoint to fetch data
  @Input() tableName: string = ''; // Optional table name
  @Input() tableId: string = '';
  @Input() customParams: any = {};

  rows = [];  // Store rows data
  count = 0;  // Total records count
  pageSize = 10;  // Page size
  offset = 0;  // Offset for pagination
  isLoading: boolean = false;  // Loading indicator flag

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch initial data on component load
    this.fetchData();
  }

  // Fetch data from the API with pagination, sorting, and search parameters
  fetchData() {
    const params = new HttpParams()
      .set('page', (this.offset + 1).toString())  // Page number (1-indexed)
      .set('pageSize', this.pageSize.toString())  // Number of rows per page
      .set('search', this.customParams.search || '')  // Search term
      .set('sortBy', this.customParams.sortBy || '')  // Column to sort by
      .set('sortOrder', this.customParams.sortOrder || '');  // Sort order

    this.http.get<any>(this.apiEndpoint, { params }).subscribe((data) => {
      // Update rows and pagination details
      this.rows = data.items;
      this.count = data.totalCount;
    });
  }

  // Handle pagination change
  onPage(event: any) {
    this.offset = event.offset;  // Update the offset based on the page number
    this.fetchData();  // Fetch the data for the new page
  }

  ngOnDestroy(): void {
    // Clean up if necessary (for example, unsubscribing from any observable if used)
  }
}
