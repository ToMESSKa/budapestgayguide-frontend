/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const card = css`
  border-radius: 8px;
  background-color: #fff;
  padding-top: 0px;

`;

export const accordion = css`
  margin: 10px 10px 10px 10px !important;
`;


export const cardText = css`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const cardBody = css`
  padding: 0;
`;

export const cardTitle = css`
  font-size: 1.25rem;
  font-weight: bold;
  padding: 10px;
`;

export const eventImage = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const listGroup = css`
  width: 100%;
  text-align: left;
  overflow: hidden;
  white-space: normal;

  .list-group-item {
    font-size: 1rem;
    display: flex;
    padding: 2px;

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

export const listGroupForEvents = css`
  width: 100%;
  text-align: left;
  overflow: hidden;
  white-space: normal;
  margin-bottom: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  padding: 5px;


  .list-group-item {
    font-size: 1rem;
    display: flex;
    padding: 2px;

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
