import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib6component31 from './lib2childlib6component31';

describe('Lib2childlib6component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib6component31 />);
    expect(baseElement).toBeTruthy();
  });
});
