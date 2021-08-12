import React, { ChangeEvent, useCallback, useState } from 'react';
import { StyledStatefulUseState } from './parts';
import StatelessConfigurableProps from 'src/components/StatelessConfigurableProps';

const DEFAULT_COLOR = 'black';
const DEFAULT_BORDER_RADIUS = 10;

type Props = {
  onClick: React.MouseEventHandler;
};

const StatefulUseState: React.FC<Props> = ({ onClick }) => {
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [borderRadius, setBorderRadius] = useState(DEFAULT_BORDER_RADIUS);

  const changeColor = (e: ChangeEvent): void => {
    const { value } = e.nativeEvent.target as HTMLInputElement;
    setColor(value);
  };

  const changeBorderRadius = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.nativeEvent.target as HTMLInputElement;
    setBorderRadius(parseInt(value));
  };

  return (
    <StyledStatefulUseState>
      <StatelessConfigurableProps onClick={onClick} color={color} borderRadius={borderRadius}>
        I am a part of stateful component
      </StatelessConfigurableProps>

      <div>
        Change color: <input type="color" onChange={changeColor} />
      </div>

      <div>
        Change border-radius:{' '}
        <input type="range" min="0" max="20" onChange={changeBorderRadius} defaultValue={borderRadius} />
      </div>
    </StyledStatefulUseState>
  );
};

export default StatefulUseState;
