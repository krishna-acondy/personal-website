import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input()
  height: string;

  @Output()
  linkClick = new EventEmitter();

  links = [
    { class: '', text: 'Home', target: '/'},
    { class: 'web-development', text: 'Web Development', target: '/web-development'},
    { class: 'photography', text: 'Photography', target: '/photography'},
    { class: 'design', text: 'Design', target: '/design'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isSelected(route: string) {
    return this.router.url === `${route}`;
  }

  navigateTo(target: string) {
    this.router.navigateByUrl(target);
    this.linkClick.emit();
  }

}
