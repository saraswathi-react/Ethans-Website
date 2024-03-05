import styled from "styled-components";

export const StyledChatbot = styled.div`
  right: 62px;
  bottom: 80px;
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
`;

export const StyledChat = styled.div`
  right: 120px;
  bottom: 120px;
  position: fixed;
  border-radius: 10px;
  .jUrkox {
    font-family: 'Poppins';
}
`;
