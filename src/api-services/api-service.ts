import fetch from 'unfetch';

export interface IApiServiceOptions {
  url: string;
  body?: string;
}

export const checkStatusCode = (responseStatus: number) => {
  if (responseStatus >= 300) {
    throw new Error(`Error when making request. Status code - ${responseStatus}`);
  }
};

export const apiService = {
  async get(options: IApiServiceOptions) {
    const res = await fetch(options.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
    checkStatusCode(res.status);
    return res.json();
  },
  async post(options: IApiServiceOptions) {
    const res = await fetch(options.url, {
      method: 'POST',
      body: options.body,
    });
    checkStatusCode(res.status);
    return res.json();
  },
};
