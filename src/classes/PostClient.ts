import { APIRequestContext } from '@playwright/test';

/**
 * BaseApi
 */
export interface BaseApi {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sessionGet(url: string): Promise<any>;
}
/**
 * BaseApiHelper
 */
export class BaseApiHelper implements BaseApi {
  private request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }
  /**
   * sessionGet
   *
   * @param url
   * @returns
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async sessionGet(url: string): Promise<any> {
    const response = await this.request.get(url);
    return response;
  }
}
