import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component41 from './lib2childlib2component41';

describe('Lib2childlib2component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component41 />);
    expect(baseElement).toBeTruthy();
  });
});
