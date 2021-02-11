import styled from 'styled-components'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import { Page1, FormTitle } from './QuizComponent'
import { Breadcrumb } from './Breadcrumb'

const Wrapper = styled(animated.div)`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledPage = styled(animated.div)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 80%;
`

const Arrow = styled.div`
  visibility: ${({ isHidden }) => (isHidden ? 'hidden' : 'visible')};
`

const pages = [
  ({ style }) => (
    <StyledPage style={style}>
      <Page1 />
    </StyledPage>
  ),
  ({ style }) => <StyledPage style={{ ...style, background: 'lightblue' }}>B</StyledPage>,
  ({ style }) => <StyledPage style={{ ...style, background: 'lightgreen' }}>C</StyledPage>,
]

const TransitionForm = () => {
  const [index, set] = useState(0)
  const onForward = useCallback(() => set((state) => state + 1), [])
  const onBack = useCallback(() => set((state) => state - 1), [])
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <>
      <FormTitle>Find the Perfect Pet for You</FormTitle>
      <Breadcrumb index={index} pages={pages} />
      <Wrapper className="simple-trans-main">
        <Arrow isHidden={index === 0} onClick={onBack}>
          Back
        </Arrow>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item]
          return <Page key={key} style={props} />
        })}
        <Arrow isHidden={index === pages.length - 1} onClick={onForward}>
          Go
        </Arrow>
      </Wrapper>
    </>
  )
}

export { TransitionForm }
