import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib6component23 from './lib1childlib6component23';

describe('Lib1childlib6component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib6component23 />);
    expect(baseElement).toBeTruthy();
  });
});
