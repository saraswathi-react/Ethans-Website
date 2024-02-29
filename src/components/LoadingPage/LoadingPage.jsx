import { THEME } from '@theme/index'
import React from 'react'
import styled from 'styled-components'

const PreLoadSec = styled.section`
 min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${THEME.dark_black};
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    opacity: 1;
    visibility: visible;
    transition: 2s;
`

const PreLoadTextHolder = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 50%;
    position: relative;

    & span{
        background:red;
        width: 50px;
        height: 50px;
    }
`

const LoadingPage = () => {
    return (
        <PreLoadSec>
            <PreLoadTextHolder>
                <span>Hi</span>
            </PreLoadTextHolder>
        </PreLoadSec>
    )
}

export default LoadingPage;
