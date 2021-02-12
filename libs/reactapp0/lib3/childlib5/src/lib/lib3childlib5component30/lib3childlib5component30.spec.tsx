import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib5component30 from './lib3childlib5component30';

describe('Lib3childlib5component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib5component30 />);
    expect(baseElement).toBeTruthy();
  });
});
