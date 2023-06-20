import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { BASE_URL } from './base-url.const';
import { environment } from 'src/environments/environment.development';

interface ParamDto {
  key: string;
  value: string | number | boolean;
}

export abstract class BaseService {
  private _http!: HttpClient;
  private _baseUrl!: string;

  constructor(injector: Injector, baseUrl?: string) {
    this._http = injector.get(HttpClient);
    this._baseUrl = baseUrl ?? injector.get(BASE_URL);
  }

  protected get baseUrl(): string {
    return this._baseUrl + environment.apiVersion;
  }

  protected get$<Out = any>(
    url: string,
    params: ParamDto[] = []
  ): Observable<Out> {
    return this._http.get<Out>(this.baseUrl + url + this._getParams(params));
  }

  protected post$<In = any, Out = any>(
    url: string,
    body: In,
    params: ParamDto[] = []
  ): Observable<Out> {
    return this._http.post<Out>(
      this.baseUrl + url + this._getParams(params),
      body
    );
  }

  protected delete$<Out = any>(
    url: string,
    id: string | number
  ): Observable<Out> {
    return this._http.delete<Out>(`${this.baseUrl}${url}/${id}`);
  }

  protected put$<In = any, Out = any>(
    url: string,
    body: In,
    params: ParamDto[] = [],
    id: string | number
  ): Observable<Out> {
    return this._http.put<Out>(
      `${this.baseUrl}${url}/${id}` + this._getParams(params),
      body
    );
  }

  protected patch$<In = any, Out = any>(
    url: string,
    body: In,
    params: ParamDto[] = []
  ): Observable<Out> {
    return this._http.patch<Out>(
      this.baseUrl + url + this._getParams(params),
      body
    );
  }

  private _getParams(params: ParamDto[]): string {
    return (
      '?' +
      params.map((param: ParamDto) => param.key + '=' + param.value).join('&')
    );
  }
}
