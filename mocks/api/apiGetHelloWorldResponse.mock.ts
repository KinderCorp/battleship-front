import type { ApiGetHelloWorldResponse, ApiResponse } from '@api/models';

const apiGetHelloWorldResponse: ApiResponse<ApiGetHelloWorldResponse> = {
  data: {
    message: 'Hello world!',
    unknownProperty: 42,
  },
};

export default apiGetHelloWorldResponse;
