import { Component, OnInit } from '@angular/core';
import { Tab } from '../../_lib/tab_type'

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  tabs: Tab[] = [
    {
      tabName  : 'Welcome',
      tabIcon  : 'anticon anticon-global'
    },
    {
      tabName  : 'Tab 1',
      tabIcon  : 'anticon anticon-github'
    },
    {
      tabName  : 'Tab 2',
      tabIcon  : 'anticon anticon-android'
    }
  ];

  size = 'small';
  index = 0;

  constructor() { }

  ngOnInit() {
  }

  prevTab(tab: Tab): void {
    if ( this.index > 0 ) {
      this.index = this.index - 1;
    }
  }

  nextTab(tab: Tab): void {
    if ( this.index < this.tabs.length ) {
      this.index = this.index + 1;
    }
  }

  closeTab(tab): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  closeAllTab(tab): void {
    this.tabs.splice(1, this.tabs.length-1);
  }

}
