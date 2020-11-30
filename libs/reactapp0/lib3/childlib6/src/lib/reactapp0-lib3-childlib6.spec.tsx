import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib3Childlib6 from './reactapp0-lib3-childlib6';

describe('Reactapp0Lib3Childlib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib3Childlib6 />);
    expect(baseElement).toBeTruthy();
  });
});
