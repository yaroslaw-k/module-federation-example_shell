import { Component } from '@angular/core';
import { StService } from './service/st.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';
  constructor(private st: StService, private route: ActivatedRoute) {
    // @ts-ignore
    window['shellRoute'] = this.route;
  }
}
