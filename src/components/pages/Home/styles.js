/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const card = css`
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
  padding: 5px;
`;

export const cardText = css`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const cardTitle = css`
  font-size: 1.25rem;
  font-weight: bold;
  padding: 10px;
`;

export const listGroup = css`
  width: 100%;
  text-align: left;
  overflow: hidden;
  white-space: normal;

  .list-group-item {
    padding-left: 20px;
    font-size: 1rem;
    display: flex;

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
      color: #007bff; /* Normal blue color */

      &:hover {
        text-decoration: underline; /* Optional: Adds underline on hover */
      }

      &:visited {
        color: #0056b3; /* Optional: Visited link color */
      }
    }
  }
`;
