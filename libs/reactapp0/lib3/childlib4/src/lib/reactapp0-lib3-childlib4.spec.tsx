import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib3Childlib4 from './reactapp0-lib3-childlib4';

describe('Reactapp0Lib3Childlib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib3Childlib4 />);
    expect(baseElement).toBeTruthy();
  });
});
