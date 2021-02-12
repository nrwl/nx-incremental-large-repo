import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib4Childlib5 from './reactapp0-lib4-childlib5';

describe('Reactapp0Lib4Childlib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib4Childlib5 />);
    expect(baseElement).toBeTruthy();
  });
});
