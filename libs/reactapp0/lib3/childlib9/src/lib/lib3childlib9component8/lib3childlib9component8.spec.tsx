import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib9component8 from './lib3childlib9component8';

describe('Lib3childlib9component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib9component8 />);
    expect(baseElement).toBeTruthy();
  });
});
