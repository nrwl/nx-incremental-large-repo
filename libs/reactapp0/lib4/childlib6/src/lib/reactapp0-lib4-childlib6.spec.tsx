import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib4Childlib6 from './reactapp0-lib4-childlib6';

describe('Reactapp0Lib4Childlib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib4Childlib6 />);
    expect(baseElement).toBeTruthy();
  });
});
