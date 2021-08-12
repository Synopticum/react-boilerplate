import React from 'react';
import { observer } from 'mobx-react-lite';
import { StyledSampleFeatureAdvanced } from './parts';
import StatelessWithEventHandler from 'src/components/StatelessWithEventHandler';
import { advancedFeatureStore } from 'src/stores/AdvancedFeatureStore';
import { SampleFeatureDto } from 'src/contracts/sample-feature';

export const AdvancedFeature: React.FC = observer(() => {
  return (
    <StyledSampleFeatureAdvanced>
      <div>
        <StatelessWithEventHandler onClick={(): Promise<SampleFeatureDto> => advancedFeatureStore.fetchData1()}>
          Fetch data 1
        </StatelessWithEventHandler>

        <StatelessWithEventHandler onClick={(): Promise<SampleFeatureDto> => advancedFeatureStore.fetchData2()}>
          Fetch data 2
        </StatelessWithEventHandler>

        <StatelessWithEventHandler onClick={(): Promise<SampleFeatureDto> => advancedFeatureStore.fetchData3()}>
          Fetch data 3
        </StatelessWithEventHandler>

        <StatelessWithEventHandler onClick={(): void => advancedFeatureStore.resetData()}>
          Reset data
        </StatelessWithEventHandler>
      </div>

      <pre>{advancedFeatureStore.data1 ? JSON.stringify(advancedFeatureStore.data1) : null}</pre>
      <pre>{advancedFeatureStore.data2 ? JSON.stringify(advancedFeatureStore.data2) : null}</pre>
      <pre>{advancedFeatureStore.data3 ? JSON.stringify(advancedFeatureStore.data3) : null}</pre>
    </StyledSampleFeatureAdvanced>
  );
});

export default AdvancedFeature;
