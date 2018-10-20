import { Component, OnInit } from '@angular/core';
import { TabItem } from '../../_models/tab-item';
import { TabData } from '../../../assets/object/tab-data';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  tabs = TabData;

  size = 'small';
  index = 0;

  constructor() { }

  ngOnInit() {
  }

  prevTab(tab: TabItem): void {
    if ( this.index > 0 ) {
      this.index = this.index - 1;
    }
  }

  nextTab(tab: TabItem): void {
    if ( this.index < this.tabs.length - 1 ) {
      this.index = this.index + 1;
    }
  }

  closeTab(tab: TabItem): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  closeAllTab(tab: TabItem): void {
    this.tabs.splice(1, this.tabs.length - 1);
  }

  newTab(): void {
    this.tabs.push({tabName: 'New Tab'});
  }

}
