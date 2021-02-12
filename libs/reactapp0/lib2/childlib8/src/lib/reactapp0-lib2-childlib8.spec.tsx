import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib2Childlib8 from './reactapp0-lib2-childlib8';

describe('Reactapp0Lib2Childlib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib2Childlib8 />);
    expect(baseElement).toBeTruthy();
  });
});
