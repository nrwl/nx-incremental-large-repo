import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib4Childlib8 from './reactapp0-lib4-childlib8';

describe('Reactapp0Lib4Childlib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib4Childlib8 />);
    expect(baseElement).toBeTruthy();
  });
});
