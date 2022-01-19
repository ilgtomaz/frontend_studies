import styled from "styled-components";

export const Container = styled.article`
  background-color: rgba(254, 254, 254, 0.8);
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 0 10px 5px 10px;
  margin: 10px auto 0 auto;
  max-width: 80%;

  @media(max-width: 420px) {
    margin: 10px 2px 10px 2px;
    padding: 20px;
    max-width: 100%;
  }
`;

export const ContainerTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;

  svg:nth-child(2) {
    cursor: pointer;
    position: absolute;
    right: 45px;
  }

  svg:nth-child(3) {
    cursor: pointer;
    position: absolute;
    right: 20px;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
`;

export const Author = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
  font-style: italic;
  text-transform: capitalize;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 16px;
  text-align: justify;
  text-indent: 30px;
  text-transform: capitalize;

  &:first-letter {
    font-size: 22px;
    font-weight: bold;
  }
`;