import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib1Childlib5 from './reactapp0-lib1-childlib5';

describe('Reactapp0Lib1Childlib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib1Childlib5 />);
    expect(baseElement).toBeTruthy();
  });
});
