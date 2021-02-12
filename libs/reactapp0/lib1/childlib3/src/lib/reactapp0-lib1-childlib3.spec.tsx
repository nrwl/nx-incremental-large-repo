import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib1Childlib3 from './reactapp0-lib1-childlib3';

describe('Reactapp0Lib1Childlib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib1Childlib3 />);
    expect(baseElement).toBeTruthy();
  });
});
