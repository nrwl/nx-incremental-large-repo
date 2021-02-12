import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component30 from './lib2childlib5component30';

describe('Lib2childlib5component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component30 />);
    expect(baseElement).toBeTruthy();
  });
});
