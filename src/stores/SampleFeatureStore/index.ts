import { makeObservable } from 'mobx';
import { AxiosInstance } from 'axios';
import { AsyncData, fetchData } from 'src/stores/helpers';
import { api, BaseAsyncStore, BaseStore } from 'src/stores';
import { map, SampleFeatureMapped } from 'src/stores/SampleFeatureStore/map';
import { SampleFeatureDto } from 'src/contracts/sample-feature';

export default class SampleFeatureStore
  extends BaseAsyncStore<SampleFeatureDto, SampleFeatureMapped>
  implements BaseStore {
  fetchApiData(): void {
    fetchData<SampleFeatureDto, SampleFeatureMapped>(
      'https://jsonplaceholder.typicode.com/todos/1',
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

export const sampleFeatureStore = new SampleFeatureStore(api);
