import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib3Childlib9 from './reactapp0-lib3-childlib9';

describe('Reactapp0Lib3Childlib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib3Childlib9 />);
    expect(baseElement).toBeTruthy();
  });
});
