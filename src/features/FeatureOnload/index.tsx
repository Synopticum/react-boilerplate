import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { StyledFeatureOnload } from './parts';
import { featureOnloadStore } from 'src/stores/FeatureOnloadStore';

export const FeatureOnload: React.FC = observer(() => {
  const { data } = featureOnloadStore.apiData;

  useEffect(() => {
    featureOnloadStore.fetchApiData();

    return (): void => {
      featureOnloadStore.resetData();
    };
  }, []);

  return (
    <StyledFeatureOnload>
      <pre>{data ? JSON.stringify(data) : 'loading...'}</pre>
    </StyledFeatureOnload>
  );
});

export default FeatureOnload;
