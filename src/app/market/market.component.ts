import { Component } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'BIT-COIN', weight: 27861.60, symbol: 'H'},
  {position: 2, name: 'ETHIRIUM', weight: 1793.67, symbol: 'He'},
  {position: 3, name: 'LITE-COIN', weight: 74.39, symbol: 'Li'},
  {position: 4, name: 'VIA-COIN', weight: 0.027450, symbol: 'Be'},
  {position: 5, name: 'ETH 2.0', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'PJND', weight: 12.0107, symbol: 'C'},

];


