import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {default as pageMarkdown} from 'raw-loader!../../../CHANGELOG.md';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChangelogComponent implements OnInit {

  @HostBinding('class.container') private setClass = true;

  markdown: string;

  constructor() {
    this.markdown = pageMarkdown;
    console.log(pageMarkdown);
  }

  ngOnInit(): void {

  }

}
