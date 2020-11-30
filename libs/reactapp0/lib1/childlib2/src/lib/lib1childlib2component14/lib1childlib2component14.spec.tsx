import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib2component14 from './lib1childlib2component14';

describe('Lib1childlib2component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib2component14 />);
    expect(baseElement).toBeTruthy();
  });
});
