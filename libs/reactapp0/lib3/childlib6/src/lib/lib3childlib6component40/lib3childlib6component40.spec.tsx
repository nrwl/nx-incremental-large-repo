import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib6component40 from './lib3childlib6component40';

describe('Lib3childlib6component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib6component40 />);
    expect(baseElement).toBeTruthy();
  });
});
