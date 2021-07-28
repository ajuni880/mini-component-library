/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const SIZES = {
  small: {
    '--height': '8px',
    '--borderRadius': '4px'
  },
  medium: {
    '--height': '12px',
    '--borderRadius': '4px'
  },
  large: {
    '--height': '16px',
    '--borderRadius': '8px',
    '--padding-top': '4px',
    '--padding-right': '4px',
    '--padding-bottom': '4px',
    '--padding-left': '4px'
  }
}

const ProgressBar = ({ value = 0, size }) => {
  const styles = SIZES[size]
  const hasEndBorder = value > 95
  return (
    <Wrapper style={styles}>
      <div
        className={`fill ${hasEndBorder ? 'has-end-border' : ''}`}
        style={{ '--value': value + '%' }}
      ></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  width: 370px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  position: relative;
  background-color: ${COLORS.transparentGray15};

  .fill {
    position: absolute;
    top: var(--padding-top, 0);
    right: var(--padding-right, 0);
    bottom: var(--padding-bottom, 0);
    left: var(--padding-left, 0);
    background-color: ${COLORS.primary};
    width: var(--value);
    border-top-left-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);

    &.has-end-border {
      border-top-right-radius: var(--borderRadius);
      border-bottom-right-radius: var(--borderRadius);
    }
  }
`

export default ProgressBar
