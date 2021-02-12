import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib1Childlib7 from './reactapp0-lib1-childlib7';

describe('Reactapp0Lib1Childlib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib1Childlib7 />);
    expect(baseElement).toBeTruthy();
  });
});
