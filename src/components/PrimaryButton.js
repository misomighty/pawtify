import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const StyledButton = styled(Button)`
  background: #F2726F !important;
  font-size: 12px;
  padding: 10px;
  width: 211px;
  &:hover {
      background: #5D62B5 !important;
  }
`

const PrimaryButton = (props) => <StyledButton {...props} variant="contained" color="secondary">{props.children}</StyledButton>

export { PrimaryButton }
