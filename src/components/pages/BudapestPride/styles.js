/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const card = css`
  margin: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
`;


export const listGroup = css`
  width: 100%;
  text-align: left;
  overflow: hidden; 
  word-wrap: break-word; 
  white-space: normal;

  .list-group-item {
    padding-left: 20px;
    font-size: 1rem;
  }
`;