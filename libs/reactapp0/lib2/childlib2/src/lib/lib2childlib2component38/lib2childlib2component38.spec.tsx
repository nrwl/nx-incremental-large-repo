import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib2component38 from './lib2childlib2component38';

describe('Lib2childlib2component38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib2component38 />);
    expect(baseElement).toBeTruthy();
  });
});
