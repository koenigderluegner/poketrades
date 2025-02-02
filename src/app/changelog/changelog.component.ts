import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import pageMarkdown from '../../../CHANGELOG.md';
import { MarkdownComponent } from "ngx-markdown";

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    MarkdownComponent
  ]
})
export class ChangelogComponent {

  markdown: string;
  @HostBinding('class.container') private setClass = true;

  constructor() {
    this.markdown = this._convertPokemonIconTokens(pageMarkdown);
  }

  private _convertPokemonIconTokens(markdown: string): string {
    return markdown.replace(/::(?<pokemon>[\.\d\w-]+)(?<shiny>:shiny)?::/gm, (...args) => {
      const {pokemon, shiny}: { pokemon: string, shiny?: string } = args[args.length - 1];
      return `<i class="pokesprite pokemon ${pokemon.toLowerCase()}${!!shiny ? ' shiny' : ''}"></i>`;
    });
  }

}
