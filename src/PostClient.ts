import { APIRequestContext } from '@playwright/test';

export interface BaseApi {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sessionGet(url: string): Promise<any>;
}
export class BaseApiHelper implements BaseApi {
  private request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async sessionGet(url: string): Promise<any> {
    const response = await this.request.get(url);
    return response;
  }
}
