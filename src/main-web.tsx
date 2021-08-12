import React from 'react';
import { render } from 'react-dom';
import App from './features/App';

const el = document.getElementById('main');
render(<App />, el);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (process.env.NODE_ENV !== 'production' && typeof module.hot !== 'undefined') module.hot.accept();
