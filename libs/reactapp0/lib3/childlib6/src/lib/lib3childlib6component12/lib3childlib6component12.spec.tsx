import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib6component12 from './lib3childlib6component12';

describe('Lib3childlib6component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib6component12 />);
    expect(baseElement).toBeTruthy();
  });
});
