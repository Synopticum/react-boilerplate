import { makeObservable, observable } from 'mobx';
import { AxiosInstance } from 'axios';
import { api, BaseStore } from 'src/stores';
import { SampleFeatureDto } from 'src/contracts/sample-feature';

export default class AdvancedFeatureStore implements BaseStore {
  data1: SampleFeatureDto = null;
  data2: SampleFeatureDto = null;
  data3: SampleFeatureDto = null;

  private api: AxiosInstance;

  resetData(): void {
    this.data1 = null;
    this.data2 = null;
    this.data3 = null;
  }

  async fetchData1(): Promise<SampleFeatureDto> {
    try {
      const { data } = await this.api.get('https://jsonplaceholder.typicode.com/todos/1');
      this.data1 = data;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  async fetchData2(): Promise<SampleFeatureDto> {
    try {
      const { data } = await this.api.get('https://jsonplaceholder.typicode.com/todos/2');
      this.data2 = data;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  async fetchData3(): Promise<SampleFeatureDto> {
    try {
      const { data } = await this.api.get('https://jsonplaceholder.typicode.com/todos/3');
      this.data3 = data;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  constructor(api: AxiosInstance) {
    this.api = api;

    makeObservable(this, {
      data1: observable,
      data2: observable,
      data3: observable,
    });
  }
}

export const advancedFeatureStore = new AdvancedFeatureStore(api);
