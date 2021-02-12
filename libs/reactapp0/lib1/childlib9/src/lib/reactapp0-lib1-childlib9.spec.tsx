import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib1Childlib9 from './reactapp0-lib1-childlib9';

describe('Reactapp0Lib1Childlib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib1Childlib9 />);
    expect(baseElement).toBeTruthy();
  });
});
