import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component49 from './lib2childlib3component49';

describe('Lib2childlib3component49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component49 />);
    expect(baseElement).toBeTruthy();
  });
});
