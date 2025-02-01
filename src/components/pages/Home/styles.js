/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import '@fontsource/ubuntu'; // Install via npm: npm install @fontsource/ubuntu



export const card = css`
  border-radius: 8px;
  background-color: #fff;
  padding-top: 0px;
`;

export const loaderContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  width: 100vw;
  color: 'red;
`;

export const accordion = css`
  margin: 10px 10px 10px 10px !important;
`;

export const accordionDesktop = css`
  margin: 10px 10px 10px 10px !important;
  width: 70%;
  text-wrap: pretty;
`;

export const filter = css`
  margin: 30px 30px 30px 30px; 
`;

export const filters = css`
  display: flex;
  flex-direction: column;
  min-width: 15%;
`;

export const homeContainer = css`
  margin: 20px;
  font-family: 'Ubuntu', sans-serif;
 
`;

export const heading = css`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  width: 70%;
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
  padding: 2%;

  .list-group-item {
    font-size: 1rem;
    display: flex;
    padding: 2px;
    max-width: 100%
    text-wrap: wrap;
    overflow-wrap: break-word;

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
