// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

export async function currentUser(options?: { [key: string]: any }) {
  return request<{
    data: API.CurrentUser;
  }>('/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

export async function outLogin(options?: { [key: string]: any }) {
  const loginInfo = JSON.parse(localStorage.getItem('login-info') as any);
  return request<Record<string, any>>('http://localhost:3000/v1/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      refreshToken: loginInfo?.tokens?.refresh?.token
    },
    ...(options || {}),
  });
}

export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('http://localhost:3000/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

export async function users(
  params: {
    // query
    page?: number;
    limit?: number;
  },
  options?: { [key: string]: any },
) {
  const loginInfo = JSON.parse(localStorage.getItem('login-info') as any);
  const data = await request<API.RuleList>('http://localhost:3000/v1/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + loginInfo?.tokens?.access?.token
    },
    params: {
      ...params,
    },
    ...(options || {}),
  }) as any;
  return {
    "data": data?.results,
    "total": data?.totalResults,
    "success": true
  };
}

export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
