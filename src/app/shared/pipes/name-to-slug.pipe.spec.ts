import { NameToSlugPipe } from './name-to-slug.pipe';

describe('NameToSlugPipe', () => {
  it('create an instance', () => {
    const pipe = new NameToSlugPipe();
    expect(pipe).toBeTruthy();
  });
});
