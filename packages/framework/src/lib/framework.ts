export function framework(): string {
  return 'framework';
}

export function createServer(app: App): Server {
  return {};
}

export interface Server {}

export function createApp({ name }: AppOptions): App {
  return { name };
}

export interface App {
  name: string;
}
export interface AppOptions {
  name: string;
}
