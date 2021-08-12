import React from 'react';
import { StyledStatefulMobxGlobal } from './parts';
import { observer } from 'mobx-react-lite';
import StatelessWithEventHandler from 'src/components/StatelessWithEventHandler';
import { globalStore } from 'src/stores/GlobalStore';

const StatefulMobxGlobal: React.FC = observer(() => {
  return (
    <StyledStatefulMobxGlobal>
      <StatelessWithEventHandler onClick={globalStore.changeGlobalStuff.bind(globalStore)}>
        Click me and we ll do a lot of things
      </StatelessWithEventHandler>

      <div>{globalStore.someOtherGlobalValue}</div>
    </StyledStatefulMobxGlobal>
  );
});

export default StatefulMobxGlobal;
