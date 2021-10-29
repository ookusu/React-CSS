/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #e8d3d1;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const titleStyle = css({
    margin: "0",
    color: "#c8b3b1"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion</p>
      <Styled>perfect!</Styled>
    </div>
  );
};

const Styled = styled.button`
  background-color: #f8e3e1;
  border: none;
  padding: 8px;
  border-radius: 8px;
`;
