import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Project, Tab } from 'src/app/model';

@Component({
  selector: 'mac-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Input() tabs: Tab[];
  @Input() activeTab: Tab;
  @Output() outActivateTab = new EventEmitter<Tab>();

  activateTab(tab: Tab) {
    this.outActivateTab.emit(tab);
  }
  constructor() { }

  ngOnInit() {
  }

}
