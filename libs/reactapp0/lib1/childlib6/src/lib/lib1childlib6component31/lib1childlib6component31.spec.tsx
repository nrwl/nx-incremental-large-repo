import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib6component31 from './lib1childlib6component31';

describe('Lib1childlib6component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib6component31 />);
    expect(baseElement).toBeTruthy();
  });
});
