import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib3Childlib8 from './reactapp0-lib3-childlib8';

describe('Reactapp0Lib3Childlib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib3Childlib8 />);
    expect(baseElement).toBeTruthy();
  });
});
