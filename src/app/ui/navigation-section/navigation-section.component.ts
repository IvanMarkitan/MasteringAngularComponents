import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mac-navigation-section',
  templateUrl: './navigation-section.component.html',
  styleUrls: ['./navigation-section.component.css']
})
export class NavigationSectionComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
