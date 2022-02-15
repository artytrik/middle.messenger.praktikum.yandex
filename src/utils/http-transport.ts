import {Options} from '../types';

const METHOD = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
};

function queryStringify(data: Record<string, unknown>): string {
  const str = Object.entries(data).reduce((acc: string[], [key, value]) => {
    acc.push(`${key}=${value}`);
    return acc;
  }, []).join('&');

  return `?${str}`;
}

export default class HTTPTransport {
  get = (url: string, options: Options = {}) =>
    this.request(url, {...options, method: METHOD.GET}, options.timeout);

  put = (url: string, options: Options = {}) =>
    this.request(url, {...options, method: METHOD.GET}, options.timeout);

  post = (url: string, options: Options = {}) =>
    this.request(url, {...options, method: METHOD.GET}, options.timeout);

  delete = (url: string, options: Options = {}) =>
    this.request(url, {...options, method: METHOD.GET}, options.timeout);


  request = (url: string, options: Options, timeout = 5000) => {
    const {method, data} = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGet = method === METHOD.GET;

      xhr.open(method ?? METHOD.GET, isGet && data ? `${url}${queryStringify(data)}` : url);

      xhr.onload = function() {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
