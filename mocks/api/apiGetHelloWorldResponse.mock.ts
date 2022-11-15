import type { ApiGetHelloWorldResponse, ApiResponse } from '@api/models';

const apiGetHelloWorldResponse: ApiResponse<ApiGetHelloWorldResponse> = {
  data: 'Hello world!',
};

export default apiGetHelloWorldResponse;
