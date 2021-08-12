import React from 'react';
import { observer } from 'mobx-react-lite';
import { StyledSampleFeature } from './parts';
import { sampleFeatureStore } from 'src/stores/SampleFeatureStore';
import StatelessWithEventHandler from 'src/components/StatelessWithEventHandler';

export const SampleFeature: React.FC = observer(() => {
  return (
    <StyledSampleFeature>
      <div>
        <StatelessWithEventHandler onClick={(): void => sampleFeatureStore.fetchApiData()}>
          Fetch data
        </StatelessWithEventHandler>

        <StatelessWithEventHandler onClick={(): void => sampleFeatureStore.resetData()}>
          Reset data
        </StatelessWithEventHandler>
      </div>

      <pre>{sampleFeatureStore.apiData.data ? JSON.stringify(sampleFeatureStore.apiData.data) : null}</pre>
    </StyledSampleFeature>
  );
});

export default SampleFeature;
