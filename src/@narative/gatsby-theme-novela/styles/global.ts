import { css } from "@emotion/core";

export const globalStyles = css`
  /**
   * Thanks to Benjamin De Cock
   * https://gist.github.com/bendc/ac03faac0bf2aee25b49e5fd260a727d
   */
  :root {
    --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  }

  @font-face {
    font-family: "-apple-system", "BlinkMacSystemFont", "San Francisco",
      "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
      "Arial", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-display: block;
  }

  :root {
    -ms-overflow-style: -ms-autohiding-scrollbar;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    cursor: default;
    font-size: 0.625rem;
    line-height: 1.4;
  }

  body {
    font-family: "-apple-system", "BlinkMacSystemFont", "San Francisco",
      "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
      "Arial", sans-serif;
    font-size: 1.6rem;
    margin: 0;
    font-weight: 400;
    height: 100%;
  }

  article {
    word-break: break-word;
  }

  button,
  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:focus {
    outline: none;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
    align-self: center;
  }

  input,
  textarea,
  select,
  button {
    font-family: "-apple-system", "BlinkMacSystemFont", "San Francisco",
      "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
      "Arial", sans-serif;
  }

  .underline {
    text-decoration: underline;
  }

  button,
  input,
  select,
  textarea {
    color: inherit;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
  }

  fieldset,
  button {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
  }

  audio:not([controls]) {
    display: none;
  }

  details {
    display: block;
  }

  input {
    &:focus,
    &:active {
      outline: none;
    }

    &[type="number"] {
      width: auto;
    }
  }

  img.Image__Zoom ~ div {
    background: transparent !important;
  }
  .prism-code{
    max-width:680px!important;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius:1px;
    background-color: rgba(128, 128, 128, 0.5);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background-color: rgba(128, 128, 128, 0.5);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: white;
  }
  
  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-thumb {
    -webkit-box-shadow: black;
    -webkit-transition: all 300ms ease-in-out;
  }
  
  ::-webkit-scrollbar-track {
    background-color: rgba(128, 128, 128, 0.2);
  }
  article{padding-top:20px!important;}
  .img-desc{
    width: 100%;
    max-width: 744px;
    margin:0 auto;
    margin-bottom:50px;
    color:rgba(128, 128, 128, 0.5);
    text-align:center;
  }
  .art-container {
    width: 100%;
    max-width: 680px;
    margin:0 auto;
  }
  h1{word-break: break-all!important;}
  h2{word-break: break-all!important;}
  h3{word-break: break-all!important;}
  h4{word-break: break-all!important;}
  img{border-radius:10px;}
`;
