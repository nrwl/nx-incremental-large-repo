import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib6component6 from './lib3childlib6component6';

describe('Lib3childlib6component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib6component6 />);
    expect(baseElement).toBeTruthy();
  });
});
