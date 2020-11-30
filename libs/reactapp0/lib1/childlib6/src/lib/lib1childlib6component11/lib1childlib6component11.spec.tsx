import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib6component11 from './lib1childlib6component11';

describe('Lib1childlib6component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib6component11 />);
    expect(baseElement).toBeTruthy();
  });
});
