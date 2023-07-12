import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSplitDisabled = false;
  pageSplitDirection: 'vertical' | 'horizontal' = 'vertical';
  headerSizeInPercent = 20;
  bodySizeInPercent = 80;
  contentSplitDirection: 'vertical' | 'horizontal' = 'horizontal';
  leftChildSizeInPercent = 50;
  rightChildSizeInPercent = 50;
}
