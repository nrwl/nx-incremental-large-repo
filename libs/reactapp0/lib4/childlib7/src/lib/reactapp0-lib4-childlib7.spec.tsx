import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib4Childlib7 from './reactapp0-lib4-childlib7';

describe('Reactapp0Lib4Childlib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib4Childlib7 />);
    expect(baseElement).toBeTruthy();
  });
});
