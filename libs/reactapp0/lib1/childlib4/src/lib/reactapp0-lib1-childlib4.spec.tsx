import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib1Childlib4 from './reactapp0-lib1-childlib4';

describe('Reactapp0Lib1Childlib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib1Childlib4 />);
    expect(baseElement).toBeTruthy();
  });
});
