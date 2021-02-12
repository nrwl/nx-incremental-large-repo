import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component14 from './lib2childlib4component14';

describe('Lib2childlib4component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component14 />);
    expect(baseElement).toBeTruthy();
  });
});
