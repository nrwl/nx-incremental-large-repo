import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib6component45 from './lib1childlib6component45';

describe('Lib1childlib6component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib6component45 />);
    expect(baseElement).toBeTruthy();
  });
});
