import type { APIRequestContext, APIResponse } from '@playwright/test';

/**
 * BaseApi
 */
export interface BaseApi {
  sessionGet(url: string): Promise<APIResponse>;
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
  public async sessionGet(url: string): Promise<APIResponse> {
    const response = await this.request.get(url);
    return response;
  }
}
