import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib3Childlib2 from './reactapp0-lib3-childlib2';

describe('Reactapp0Lib3Childlib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib3Childlib2 />);
    expect(baseElement).toBeTruthy();
  });
});
