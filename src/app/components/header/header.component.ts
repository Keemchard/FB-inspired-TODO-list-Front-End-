import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  headerTitle: string = "KEEMCHARD'S TO-DO LIST VERSION 0.0.1+";
  constructor() {}

  ngOnInit(): void {}
}
