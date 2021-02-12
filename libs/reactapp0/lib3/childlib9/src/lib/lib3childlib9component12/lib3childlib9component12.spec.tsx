import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib9component12 from './lib3childlib9component12';

describe('Lib3childlib9component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib9component12 />);
    expect(baseElement).toBeTruthy();
  });
});
