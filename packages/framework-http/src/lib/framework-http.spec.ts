import { Server } from '@mz3/framework';
import { frameworkHttp, createServer } from './framework-http';

describe('frameworkHttp', () => {
  it('should work', () => {
    expect(frameworkHttp()).toEqual('framework-http');
  });
});

describe('createServer', () => {
  it('should create a server', () => {
    const server: Server = createServer()
    expect(server).toEqual({})
  })
});
