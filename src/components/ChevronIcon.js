import React from 'react'
import styled from 'styled-components'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { makeStyles } from '@material-ui/core'

const Wrapper = styled.div`
    position: relative;
    font-size: 5px;
    display: inline-block;
    color: ${( props ) => props.color ? props.color : '#ffffff'};
    top: 5px;
`

const useStyles = makeStyles((theme) => ({
    leftChevron: {
        fontSize: '20px',
        width: '17px'
    },
    rightChevron: {
        position: 'relative',
        fontSize: '26px',
        fontFamily: 'Roboto',
        right: '16px',
        top: '3px'
    }
  }));

  const Title = styled.span`
  color: ${( props ) => props.color ? props.color : '#ffffff'};
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
`

const ChevronIcon = (props) => {
    const classes = useStyles()

    return(
        <div style={{ marginBottom: '33px' }}>
        <Wrapper color={props.color} style={props.style}>
            <ChevronLeftIcon fontSize="inherit" className={classes.leftChevron} />
            <ChevronRightIcon fontSize="inherit" className={classes.rightChevron} />
        </Wrapper>
        <Title color={props.color}>{props.children}</Title>
        </div>
    )
}

export { ChevronIcon }
