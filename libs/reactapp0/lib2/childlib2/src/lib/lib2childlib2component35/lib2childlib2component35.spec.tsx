import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component35 from './lib2childlib2component35';

describe('Lib2childlib2component35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component35 />);
    expect(baseElement).toBeTruthy();
  });
});
