import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component49 from './lib2childlib2component49';

describe('Lib2childlib2component49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component49 />);
    expect(baseElement).toBeTruthy();
  });
});
