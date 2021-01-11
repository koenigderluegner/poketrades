import {Pipe, PipeTransform} from '@angular/core';
import {SlugifyPipe} from '@shared/pipes/slugify.pipe';

@Pipe({
  name: 'nameToSlug'
})
export class NameToSlugPipe extends SlugifyPipe implements PipeTransform {

  transform(original: string, ...args: unknown[]): string {
    let slug = original.toLowerCase().replace('nidoran ♀', 'nidoran-f');
    slug = slug.replace('nidoran ♂', 'nidoran-m');
    slug = slug.replace('-antique', '');
    return super.transform(slug);
  }

}
