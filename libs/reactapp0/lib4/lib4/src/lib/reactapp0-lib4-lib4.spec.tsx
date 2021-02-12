import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib4Lib4 from './reactapp0-lib4-lib4';

describe('Reactapp0Lib4Lib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib4Lib4 />);
    expect(baseElement).toBeTruthy();
  });
});
