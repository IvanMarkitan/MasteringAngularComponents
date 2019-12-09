import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation
} from '@angular/core';
import { Tab } from '../../../model';


@Component({
  selector: 'mac-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input() tabs: Tab[];
  @Input() activeTab: Tab;
  @Output() outActivateTab = new EventEmitter<Tab>();

  activateTab(tab: Tab) {
    this.outActivateTab.emit(tab);
  }
}
