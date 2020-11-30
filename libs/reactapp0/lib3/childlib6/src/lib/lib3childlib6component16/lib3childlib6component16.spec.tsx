import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib6component16 from './lib3childlib6component16';

describe('Lib3childlib6component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib6component16 />);
    expect(baseElement).toBeTruthy();
  });
});
