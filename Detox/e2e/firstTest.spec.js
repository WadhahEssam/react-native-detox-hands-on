/* eslint-disable no-undef */

describe('Detox Hands On', () => {
  beforeEach(async () => {
    await device.reloadReactNative(); // works just like when you press command + r
  });

  it('Should have a stepOne text', async () => {
    await expect(element(by.id('stepOne'))).toBeVisible();
  });

  it('Circle should be hidden', async () => {
    await expect(element(by.id('circle'))).toBeNotVisible();
  });

  it('Circle will show after pressing the button', async () => {
    await expect(element(by.id('circle'))).toBeNotVisible();
    await element(by.id('button')).tap();
    await expect(element(by.id('circle'))).toBeVisible();
  });
});
