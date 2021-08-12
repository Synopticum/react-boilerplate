import { makeAutoObservable } from 'mobx';
import { api } from 'src/stores';
import { AxiosRequestConfig } from 'axios';

export class AsyncData<T> {
  isFetching: boolean;
  isDataLoaded: boolean;
  error: string;
  data: T;

  constructor() {
    this.isFetching = false;
    this.isDataLoaded = false;
    this.error = null;
    this.data = null;

    makeAutoObservable(this);
  }
}

type FetchDataOptions<Dto, Mapped> = {
  apiData: AsyncData<Mapped>;
  map: (data: Dto) => Mapped;
};

export const fetchData = async function <Dto, Mapped>(
  url: string,
  options: FetchDataOptions<Dto, Mapped>,
  config?: AxiosRequestConfig,
): Promise<void> {
  const { apiData, map } = options;

  apiData.isFetching = true;

  try {
    const { data } = await api.get<Dto>(url, config);

    apiData.error = null;
    apiData.data = map(data);
    apiData.isFetching = false;
    apiData.isDataLoaded = true;
  } catch (e) {
    apiData.error = e.message;
    apiData.isFetching = false;
  }
};

const contentTypes = {
  json: 'application/json',
  formData: 'multipart/form-data',
};

export const get = async function <Dto, Mapped>(url: string, type: 'json' | 'formData'): Promise<Dto> {
  const { data } = await api.get<Dto>(url, {
    headers: {},
  });

  return data;
};

export const put = async function <Dto, Mapped>(url: string, model: Mapped, type: 'json' | 'formData'): Promise<Dto> {
  const { data } = await api.put<Dto>(url, model, {
    headers: {},
  });

  return data;
};

export const del = async function (url: string): Promise<void> {
  const { data } = await api.delete(url, {
    headers: {},
  });

  return data;
};
