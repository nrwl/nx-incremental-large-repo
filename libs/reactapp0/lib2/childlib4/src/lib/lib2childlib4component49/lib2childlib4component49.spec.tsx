import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component49 from './lib2childlib4component49';

describe('Lib2childlib4component49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component49 />);
    expect(baseElement).toBeTruthy();
  });
});
