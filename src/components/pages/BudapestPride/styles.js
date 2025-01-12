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
    display: flex;
    margin-bottom: 8px; 

    span {
      display: inline-flex; 
      justify-content: center;
      align-items: center;
      margin-right: 8px;
    
    }
    a {
      display: flex; /* Makes the link behave as a flex container */
      align-items: center; /* Ensures vertical alignment within the link */
      text-decoration: none; /* Optional: Style the link */
    }
  }
`;
