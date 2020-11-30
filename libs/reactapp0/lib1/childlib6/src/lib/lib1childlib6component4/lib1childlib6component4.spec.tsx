import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib6component4 from './lib1childlib6component4';

describe('Lib1childlib6component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib6component4 />);
    expect(baseElement).toBeTruthy();
  });
});
