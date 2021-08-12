import { CSSChunk, CSSVariable } from 'src/features/App/GlobalStyle/theme';

export default {
  sample: (baseColor: CSSVariable, secondaryColor: CSSVariable): CSSChunk => {
    return `
       color: red;
      `;
  },
};
