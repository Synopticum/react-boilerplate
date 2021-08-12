import React, { useState } from 'react';
import { StyledStatefulMobxLocal } from './parts';
import StatelessConfigurableProps from 'src/components/StatelessConfigurableProps';
import SimpleLocalStore from 'src/components/StatefulMobxLocal/store';
import { observer } from 'mobx-react-lite';

type Props = {
  onClick: React.MouseEventHandler;
};

const StatefulMobxLocal: React.FC<Props> = observer(({ onClick }) => {
  const [store] = useState(new SimpleLocalStore());

  return (
    <StyledStatefulMobxLocal>
      <StatelessConfigurableProps onClick={onClick} color={store.color} borderRadius={store.borderRadius}>
        I am also a part of stateful component
      </StatelessConfigurableProps>

      <div>
        Change color: <input type="color" onChange={store.changeColor.bind(store)} />
      </div>

      <div>
        Change border-radius:{' '}
        <input
          type="range"
          min="0"
          max="20"
          onChange={store.changeBorderRadius.bind(store)}
          defaultValue={store.borderRadius}
        />
      </div>
    </StyledStatefulMobxLocal>
  );
});

export default StatefulMobxLocal;
