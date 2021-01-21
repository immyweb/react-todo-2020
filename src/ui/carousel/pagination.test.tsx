import { rearrangeItems } from './pagination';

const items = [{ key: 'dot1' }, { key: 'dot2' }, { key: 'dot3' }, { key: 'dot4' }, { key: 'dot5' }];

describe('<Pagination />', () => {
  it('rearrangeItems function sorts array in correct order', () => {
    const result = rearrangeItems(items, 0, 4);
    expect(result).toEqual([
      { key: 'dot2' },
      { key: 'dot3' },
      { key: 'dot4' },
      { key: 'dot5' },
      { key: 'dot1' },
    ]);
    const result2 = rearrangeItems(items, 4, 0);
    expect(result2).toEqual([
      { key: 'dot1' },
      { key: 'dot2' },
      { key: 'dot3' },
      { key: 'dot4' },
      { key: 'dot5' },
    ]);
  });
});
