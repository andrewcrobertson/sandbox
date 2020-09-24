declare module "@sapper.ext/app" {
}

declare module "@sapper.ext/server" {
  interface PreloadPage {
    params: Record<string, string>,
    query: Record<string, string | string[]>,
  }
  
  interface PreloadContext {
    fetch: typeof fetch,
    error: (status: number, message: string) => void,
    redirect: (status: number, url: string) => void
  }
  
  export type Params = Record<string, string>;
  export type Query = Record<string, string | string[]>;
  export type PreloadResult = object | Promise<object>;
  export interface Preload {
    (this: PreloadContext, page: PreloadPage, session: any): PreloadResult;
  }
}

declare module "@sapper.ext/service-worker" {
}
