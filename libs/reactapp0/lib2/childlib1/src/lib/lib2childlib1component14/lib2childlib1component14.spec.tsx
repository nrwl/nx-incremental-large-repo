import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component14 from './lib2childlib1component14';

describe('Lib2childlib1component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component14 />);
    expect(baseElement).toBeTruthy();
  });
});
