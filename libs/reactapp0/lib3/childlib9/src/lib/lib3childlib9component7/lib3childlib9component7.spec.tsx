import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib9component7 from './lib3childlib9component7';

describe('Lib3childlib9component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib9component7 />);
    expect(baseElement).toBeTruthy();
  });
});
