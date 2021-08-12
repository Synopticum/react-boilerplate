import { CSSChunk } from 'src/features/App/GlobalStyle/theme';

// Use theme.offset() only for margins/paddings
const offset = (value: number): CSSChunk => {
  const multiplier = 8;
  return `${value * multiplier}px`;
};

export default offset;
