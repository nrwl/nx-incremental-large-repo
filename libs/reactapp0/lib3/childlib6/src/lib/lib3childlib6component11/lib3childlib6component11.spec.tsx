import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib6component11 from './lib3childlib6component11';

describe('Lib3childlib6component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib6component11 />);
    expect(baseElement).toBeTruthy();
  });
});
