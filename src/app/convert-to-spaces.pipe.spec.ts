import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

describe('ConvertToSpacesPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertToSpacesPipe();
    expect(pipe).toBeTruthy();
  });

  it('replaces - with a space', () => {
    const pipe = new ConvertToSpacesPipe();
    const input = 'sample-input';
    const expected = 'sample input';
    expect(pipe.transform(input,'-')).toEqual(expected);
  })
});
