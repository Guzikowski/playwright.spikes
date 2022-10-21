import { APIRequestContext } from "@playwright/test";

export interface BaseApi {
    
    sessionGet(url: string, headers: any, data?: any): Promise<any>;

}
export class BaseApiHelper implements BaseApi {
    private request: APIRequestContext;
    constructor(request: APIRequestContext) {
      this.request = request;
    }
    public async sessionGet(url: string, headers: any, data?: any): Promise<any> {
        const response = await this.request.get(url);
        return response;
    }
}