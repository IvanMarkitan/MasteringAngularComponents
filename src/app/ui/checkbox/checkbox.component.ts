import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mac-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent implements OnInit {

  @Input() label: string;
  @Input() checked: boolean;
  @Output() outCheck = new EventEmitter<boolean>();

  check(checked: boolean) {
    this.outCheck.emit(checked);
  }

  ngOnInit() {
  }

}
