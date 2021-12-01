import styled from 'styled-components'
import constants from '~utils/constants'

const { TEXT_COLORS } = constants

export const SubMenu = styled.div.attrs(({ open }) => ({
  style: {
    display: open ? 'block' : 'none',
  },
}))`
  position: absolute;
  top: 36px;
  width: 150%;
  left: -1px;
  z-index: 10;
  background-color: #fff;
  border: 1px solid #b5b5b5;
  border-top: none;
  .btn {
    justify-content: flex-start;
  }
`

/**
 * BaseWysiwyg
 * @component
 *
 */
const BaseWysiwyg = styled.div`
  font-family: 'Helvetica Neue', 'Helvetica', arial, sans-serif;
  width: 60rem;
  min-height: 18rem;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  border-top: 6px solid #4a4a4a;
  border-radius: 3px;
  margin: 0.5rem;
  font-size: 1em;
  .toolbar {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    user-select: none;
  }
  .toolbar .line {
    display: flex;
    border-bottom: 1px solid #e2e2e2;
  }
  .toolbar .line:last-child {
    border-bottom: none;
  }
  .toolbar .line .box {
    display: flex;
    border-left: 1px solid #e2e2e2;
  }
  .toolbar .line .box .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: 0.2s ease all;
    color: ${({ theme }) => theme.COLORS.FOREGROUND};
    cursor: pointer;
    text-decoration: none;
  }
  .toolbar .line .box .btn:hover {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
  .toolbar.line .box .btn:active {
    color: ${({ theme }) => theme.COLORS.SUCCESS};
  }
  .toolbar .line .box .btn:visited {
    color: ${({ theme }) => theme.COLORS.FOREGROUND};
  }
  .toolbar .line .box .btn i,
  .toolbar .line .box .btn span {
    padding: 8px;
    text-align: left;
  }
  .toolbar .line .box .btn i.default {
    color: #174f69;
  }
  .toolbar .line .box input[type='color'] {
    cursor: pointer;
  }
  .textbox {
    display: none;
    padding: 0.5em;
    background: ${({ theme }) =>
      `linear-gradient(45deg,${theme.COLORS.BACKGROUND}, transparent)`};
    border-radius: 4px;
    flex-direction: column;
    button {
      cursor: pointer;
      margin-right: 4px;
    }
    button:disabled {
      opacity: 0.5;
    }
    border-left: ${({ theme }) => `1px solid ${theme.COLORS.FOREGROUND}`};
    border-bottom: ${({ theme }) => `1px solid ${theme.COLORS.FOREGROUND}`};
  }
  .textbox.visible {
    display: flex;
  }
  .toolbar .line .box .btn i.highlight {
    color: rgb(0, 102, 204);
  }
  .toolbar .btn.has-submenu {
    width: 20px;
    padding: 0 10px;
  }
  .toolbar .btn.has-submenu::after {
    content: '';
    width: 6px;
    height: 6px;
    position: absolute;
    background-image: url(https://image.flaticon.com/icons/svg/25/25243.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    right: 4px;
  }
  .content-area {
    padding: 15px 12px;
    line-height: 1.5;
    min-height: 10rem;
  }
  .content-area .visuell-view {
    outline: none;
    cursor: text;
  }
  .content-area .visuell-view p {
    margin: 12px 0;
  }
  .content-area .html-view {
    border: none;
    display: none;
    height: 200px;
    outline: none;
    resize: none;
    width: 100%;
  }
  /* ico menu  class */
  .ico.md-18 {
    font-size: 18px;
  }
  .ico.md-20 {
    font-size: 20px;
  }
  .ico.md-24 {
    font-size: 24px;
  }
  .ico.md-28 {
    font-size: 28px;
  }
  .ico.md-32 {
    font-size: 32px;
  }
  .ico.md-36 {
    font-size: 36px;
  }
  .ico.md-40 {
    font-size: 40px;
  }
  .ico.md-48 {
    font-size: 48px;
  }
  ${Object.entries(TEXT_COLORS).map(
    ([name, color]) => `.ico.${name} { color: ${color}; } `,
  )}
`

export default BaseWysiwyg
