import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f5f5;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  ${(props) => (props.isShow ? "display: block;" : "display: none;")}
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  height: 70vh;
  position: absolute;
  top: 10%;
  left: 25%;
  width: 50vw;
  z-index: 1;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 65vh;
`;

export const ModalHeader = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: space-between;
  width: 100%;
`;

export const ModalTitle = styled.p`
  background-color: #000000;
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
  margin-left: 10px;
  margin-top: 30px;
  padding: 5px;
  text-transform: capitalize;
`;

export const ModalContentMain = styled.section`
  height: 100%;
  padding: 10px 40px 0 40px;
`;

export const ModalContentHeaderExit = styled.div`
  svg {
    color: #ff0000;
    cursor: pointer;
    font-size: 18px;
    margin-right: 5px;
    transition: background-color 400ms, color 400ms, border-radius 400ms;
    padding: 5px;
    width: 40px;
    height: 30px;
  }

  svg:hover {
    color: #f5f5f5;
    background-color: #ff0000;
    border-radius: 5px;
  }
`;
