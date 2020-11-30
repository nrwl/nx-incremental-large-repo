import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component45 from './lib2childlib5component45';

describe('Lib2childlib5component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component45 />);
    expect(baseElement).toBeTruthy();
  });
});
