import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  open = false;

  @Output()
  toggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    this.open = !this.open;
    this.toggle.emit(this.open);
  }

  close() {
    this.open = false;
    this.toggle.emit(this.open);
  }

}
