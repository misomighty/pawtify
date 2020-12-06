import React from 'react'
import styled from 'styled-components'


const ContactCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: #ffffff;
    flex-wrap: nowrap;
    width: max-content;
    font-size: 14px;
    margin-right: 22px;
`

const ContactCard = (props) => {
    return (
      <ContactCardContainer>
        <div><span style={{ marginRight: '7px'}}>
          <props.icon style={{ color: '#F2726F'}} />
          </span>
        </div>
        <div>
          <span>{props.header}</span>
          <p style={{ marginTop: '6px', marginBottom: 0 }}>{props.subheader}</p>
        </div>
    </ContactCardContainer>
    )
  }

  export { ContactCard }
