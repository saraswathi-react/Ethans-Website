import styled from "styled-components";

export const BottomTop = styled.div`
    right: 30px;
    bottom: 20px;
    position: fixed;
    background-color: #f96156;
    padding: 10px 15px;
    border-radius: 40px;
    border: 3px dashed #fff;
    & svg {
        color: #ffff;
    }
   &:hover {
        background-color: #162d6d;
        transition: all 0.3s ease-in-out;
    }
`