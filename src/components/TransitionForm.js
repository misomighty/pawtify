import styled from 'styled-components'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import { Page1, Page2, Page3, Page4, Page5, FormTitle } from './QuizComponent'
import { Breadcrumb } from './Breadcrumb'

const Wrapper = styled(animated.div)`
  height: auto;
  min-height: 300px;
  display: block;
  justify-content: center;
  align-items: center;
  position: relative;
`

const StyledPage = styled(animated.div)`
  width: 60%;
  height: 100%;
  display: block;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
`
const QuizContent = styled.div`
  display: block;
  width: 100%;
  clear: both;
  position: absolute;
  top: 0;
`

const QuizNav = styled.div`
  width: 100%;
  display: block;
  clear: both;
  margin: 20px auto;
  position: absolute;
  bottom: 0;
`

const Arrow = styled.div`
  visibility: ${({ isHidden }) => (isHidden ? 'hidden' : 'visible')};
  border: solid 1px #fff;
  width: 50px;
  padding: 10px;
  color: #fff;
  border-radius: 8px;
  text-align: center;
  margin: 0 auto;
`

const BreadcrumbContainer = styled.div`
  width: 68px;
  text-align: center;
  margin: 20px auto;
`

const pages = [
  ({ style }) => (
    <StyledPage style={style}>
      <Page1 />
    </StyledPage>
  ),

  ({ style }) => (
    <StyledPage style={style}>
      <Page2 />
    </StyledPage>
  ),

  ({ style }) => (
    <StyledPage style={style}>
      <Page3 />
    </StyledPage>
  ),

  ({ style }) => (
    <StyledPage style={style}>
      <Page4 />
    </StyledPage>
  ),
  ({ style }) => (
    <StyledPage style={style}>
      <Page5 />
    </StyledPage>
  ),
]

const TransitionForm = () => {
  const [index, set] = useState(0)
  const onForward = useCallback(() => set((state) => state + 1), [])
  const onBack = useCallback(() => set((state) => state - 1), [])
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: 'translate3d(100%,100%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <>
      <FormTitle>Find the Perfect Pet for You</FormTitle>
      <Wrapper className="simple-trans-main">
        <QuizContent>
          {transitions.map(({ item, props, key }) => {
            const Page = pages[item]
            return <Page key={key} style={props} />
          })}
        </QuizContent>
        <QuizNav>
          <Arrow
            style={{ float: 'left', marginLeft: '100px' }}
            isHidden={index === 0}
            onClick={onBack}
          >
            Back
          </Arrow>
          <Arrow
            style={{ float: 'Right', marginRight: '100px' }}
            onClick={index === pages.length - 1 ? null : onForward}
          >
            {index === pages.length - 1 ? 'Finish' : 'Next'}
          </Arrow>
          <BreadcrumbContainer>
            <Breadcrumb index={index} pages={pages} />
          </BreadcrumbContainer>
        </QuizNav>
      </Wrapper>
    </>
  )
}

export { TransitionForm }
