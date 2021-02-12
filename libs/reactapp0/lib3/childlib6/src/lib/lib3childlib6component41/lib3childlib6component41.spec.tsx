import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib6component41 from './lib3childlib6component41';

describe('Lib3childlib6component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib6component41 />);
    expect(baseElement).toBeTruthy();
  });
});
