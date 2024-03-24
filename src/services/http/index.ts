import { createClient } from './client';

const httpClient = createClient({
  config: {
    baseURL: '/mock',
  }
})

export default httpClient;