import { framework, createApp, App, AppOptions } from './framework';

enum Apps {
  TEST = 'TEST',
}

describe('framework', () => {
  it('should work', () => {
    expect(framework()).toEqual('framework');
  });
});

describe('createApp', () => {
  it('should create a app with a name', () => {
    const testAppOptions: AppOptions = { name: Apps.TEST };
    const testApp: App = createApp(testAppOptions);
    expect(testApp.name).toEqual(Apps.TEST);
  });
});
