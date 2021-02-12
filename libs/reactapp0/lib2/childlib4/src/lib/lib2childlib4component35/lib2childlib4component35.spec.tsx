import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib4component35 from './lib2childlib4component35';

describe('Lib2childlib4component35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib4component35 />);
    expect(baseElement).toBeTruthy();
  });
});
