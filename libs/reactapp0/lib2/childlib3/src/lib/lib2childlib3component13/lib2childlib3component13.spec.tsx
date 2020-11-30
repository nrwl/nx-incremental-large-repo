import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component13 from './lib2childlib3component13';

describe('Lib2childlib3component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component13 />);
    expect(baseElement).toBeTruthy();
  });
});
