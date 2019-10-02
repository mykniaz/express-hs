export default class Request {
  public get(url: string, data: object = {}): Promise<Response> {

    return this.fetch(url, { qs: data });
  }

  public post(url: string, data: object = {}): Promise<Response> {
    return this.fetch(url, this.getInit({ data }));
  }

  private getInit (init: { data?: object }): object {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      ...init,
      body: init.data && JSON.stringify(init.data),
    };
  }

  private fetch(url: string, init?: object): Promise<Response> {
    return new Promise((resolve, reject) => {
      fetch(url, init)
        .then(resolve)
        .catch(reject);
    });
  }
}
