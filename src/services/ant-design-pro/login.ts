// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

export async function getFakeCaptcha(
  params: {
    // query
    phone?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.FakeCaptcha>('/api/login/captcha', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
