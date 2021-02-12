import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib1Childlib1 from './reactapp0-lib1-childlib1';

describe('Reactapp0Lib1Childlib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib1Childlib1 />);
    expect(baseElement).toBeTruthy();
  });
});
