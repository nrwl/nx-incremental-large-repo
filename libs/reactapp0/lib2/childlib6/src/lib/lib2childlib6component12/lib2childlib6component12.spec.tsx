import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib6component12 from './lib2childlib6component12';

describe('Lib2childlib6component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib6component12 />);
    expect(baseElement).toBeTruthy();
  });
});
