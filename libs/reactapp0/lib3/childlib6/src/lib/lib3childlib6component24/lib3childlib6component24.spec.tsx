import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib6component24 from './lib3childlib6component24';

describe('Lib3childlib6component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib6component24 />);
    expect(baseElement).toBeTruthy();
  });
});
