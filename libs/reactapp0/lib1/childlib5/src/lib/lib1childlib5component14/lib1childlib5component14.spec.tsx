import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component14 from './lib1childlib5component14';

describe('Lib1childlib5component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component14 />);
    expect(baseElement).toBeTruthy();
  });
});
