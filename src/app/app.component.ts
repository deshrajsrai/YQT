import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
// Offset for Site Navigation

ngOnInit(){
 $('#siteNav').affix({	offset: {		top: 100	}});

}
}
