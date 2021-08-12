import { makeObservable } from 'mobx';
import { AxiosInstance } from 'axios';
import { AsyncData, fetchData } from 'src/stores/helpers';
import { api, BaseAsyncStore, BaseStore } from 'src/stores';
import { map, SampleFeatureMapped } from 'src/stores/SampleFeatureStore/map';
import { SampleFeatureDto } from 'src/contracts/sample-feature';

export default class FeatureOnloadStore
  extends BaseAsyncStore<SampleFeatureDto, SampleFeatureMapped>
  implements BaseStore {
  async fetchApiData(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 2000));

    fetchData<SampleFeatureDto, SampleFeatureMapped>(
      'https://jsonplaceholder.typicode.com/todos/4',
      this.getApiOptions(map),
    );
  }

  resetData(): void {
    this.apiData = new AsyncData<SampleFeatureMapped>();
  }

  constructor(api: AxiosInstance) {
    super(api);

    makeObservable(this, {});
  }
}

export const featureOnloadStore = new FeatureOnloadStore(api);
