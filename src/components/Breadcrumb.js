import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const Pip = styled.div`
  height: 10px;
  width: 10px;
  border: 1px solid #fff;
  border-radius: 100%;
  margin-right: 5px;
`
const FilledPip = styled(Pip)`
  background: #fff;
`

const Breadcrumb = ({ index, pages }) => {
  return (
    <Wrapper>
      {pages.map((page, i) => {
        return i <= index ? <FilledPip /> : <Pip />
      })}
    </Wrapper>
  )
}

export { Breadcrumb }
