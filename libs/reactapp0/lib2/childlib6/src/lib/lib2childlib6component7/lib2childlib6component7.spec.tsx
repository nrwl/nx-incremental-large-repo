import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib6component7 from './lib2childlib6component7';

describe('Lib2childlib6component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib6component7 />);
    expect(baseElement).toBeTruthy();
  });
});
