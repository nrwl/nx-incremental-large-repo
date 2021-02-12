import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib6component33 from './lib1childlib6component33';

describe('Lib1childlib6component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib6component33 />);
    expect(baseElement).toBeTruthy();
  });
});
