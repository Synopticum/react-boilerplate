import { globalStore, DEFAULT_HEADER_TEXT, DEFAULT_FOOTER_TEXT } from 'src/stores/GlobalStore';

describe('GlobalStore', () => {
  beforeEach(() => {
    globalStore.resetData();
  });

  test('Sets default values', () => {
    expect(globalStore.headerText).toBe(DEFAULT_HEADER_TEXT);
    expect(globalStore.footerText).toBe(DEFAULT_FOOTER_TEXT);
  });

  test('Changes global values', () => {
    globalStore.changeGlobalStuff();
    expect(globalStore.headerText).toBe('changed header text (global store)');
    expect(globalStore.footerText).toBe('changed footer text (global store)');
  });

  test('Returns computed value', () => {
    expect(globalStore.headerText).toBe(DEFAULT_HEADER_TEXT);
    expect(globalStore.footerText).toBe(DEFAULT_FOOTER_TEXT);

    globalStore.changeGlobalStuff();

    expect(globalStore.someOtherGlobalValue).toBe(
      'changed header text (global store) & changed footer text (global store)',
    );
  });

  test('Resets data', () => {
    expect(globalStore.headerText).toBe(DEFAULT_HEADER_TEXT);
    expect(globalStore.footerText).toBe(DEFAULT_FOOTER_TEXT);

    globalStore.changeGlobalStuff();

    expect(globalStore.headerText).toBe('changed header text (global store)');
    expect(globalStore.footerText).toBe('changed footer text (global store)');

    globalStore.resetData();

    expect(globalStore.headerText).toBe(DEFAULT_HEADER_TEXT);
    expect(globalStore.footerText).toBe(DEFAULT_FOOTER_TEXT);
  });
});
