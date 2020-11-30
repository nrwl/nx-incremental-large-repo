import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib9component20 from './lib3childlib9component20';

describe('Lib3childlib9component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib9component20 />);
    expect(baseElement).toBeTruthy();
  });
});
