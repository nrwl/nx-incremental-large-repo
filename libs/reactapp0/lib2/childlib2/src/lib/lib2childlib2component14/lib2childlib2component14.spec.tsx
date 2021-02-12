import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component14 from './lib2childlib2component14';

describe('Lib2childlib2component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component14 />);
    expect(baseElement).toBeTruthy();
  });
});
