import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component14 from './lib2childlib3component14';

describe('Lib2childlib3component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component14 />);
    expect(baseElement).toBeTruthy();
  });
});
