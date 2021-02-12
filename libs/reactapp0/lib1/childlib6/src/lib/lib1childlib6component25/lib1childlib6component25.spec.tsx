import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib6component25 from './lib1childlib6component25';

describe('Lib1childlib6component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib6component25 />);
    expect(baseElement).toBeTruthy();
  });
});
