import { SampleFeatureDto } from 'src/contracts/sample-feature';

export type SampleFeatureMapped = SampleFeatureDto;

export const map = (data: SampleFeatureDto): SampleFeatureMapped => data;
