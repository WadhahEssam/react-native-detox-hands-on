/* eslint-disable no-undef */

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative(); // works just like when you press command + r
  });

  it('Should have a stepOne text', async () => {
    await expect(element(by.id('stepOne'))).toBeVisible();
  });

  it('Circle should be hidden', async () => {
    await expect(element(by.id('circle'))).toBeHidden();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
});
