import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component24 from './lib2childlib5component24';

describe('Lib2childlib5component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component24 />);
    expect(baseElement).toBeTruthy();
  });
});
