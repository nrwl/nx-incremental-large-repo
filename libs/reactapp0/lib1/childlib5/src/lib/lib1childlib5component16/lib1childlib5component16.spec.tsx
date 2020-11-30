import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component16 from './lib1childlib5component16';

describe('Lib1childlib5component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component16 />);
    expect(baseElement).toBeTruthy();
  });
});
