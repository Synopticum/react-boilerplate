import { SampleFeatureDto } from 'src/contracts/sample-feature';

export type SampleFeatureMapped = {
  title: string;
  completed: boolean;
};

export const map = (data: SampleFeatureDto): SampleFeatureMapped => {
  const { title, completed } = data;
  return { title, completed };
};
