import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib9component45 from './lib3childlib9component45';

describe('Lib3childlib9component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib9component45 />);
    expect(baseElement).toBeTruthy();
  });
});
