import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component30 from './lib2childlib1component30';

describe('Lib2childlib1component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component30 />);
    expect(baseElement).toBeTruthy();
  });
});
