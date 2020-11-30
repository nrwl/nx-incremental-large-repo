import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component14 from './lib2childlib5component14';

describe('Lib2childlib5component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component14 />);
    expect(baseElement).toBeTruthy();
  });
});
