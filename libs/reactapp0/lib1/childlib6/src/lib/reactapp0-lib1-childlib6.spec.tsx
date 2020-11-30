import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib1Childlib6 from './reactapp0-lib1-childlib6';

describe('Reactapp0Lib1Childlib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib1Childlib6 />);
    expect(baseElement).toBeTruthy();
  });
});
