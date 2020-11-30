import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component45 from './lib2childlib3component45';

describe('Lib2childlib3component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component45 />);
    expect(baseElement).toBeTruthy();
  });
});
