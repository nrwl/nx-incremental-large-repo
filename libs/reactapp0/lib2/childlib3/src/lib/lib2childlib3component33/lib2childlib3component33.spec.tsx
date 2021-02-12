import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component33 from './lib2childlib3component33';

describe('Lib2childlib3component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component33 />);
    expect(baseElement).toBeTruthy();
  });
});
