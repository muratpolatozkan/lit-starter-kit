import { css } from 'lit';

export default css`
  :host {
    --button-bg-color: #f0f0f0;
    --button-fg-color: #333;
    --button-border-color: transparent;
    --button-padding: 8px 16px;
    --button-font-size: 14px;

    display: inline-flex;
  }

  button {
    cursor: pointer;
    background-color: var(--button-bg-color);
    border: 1px solid var(--button-border-color);
    border-radius: 4px;
    color: var(--button-fg-color);
    padding: var(--button-padding);
    font-size: var(--button-font-size);
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  :host([variation='primary']) {
    --button-bg-color: #024996;
    --button-fg-color: white;
    --button-border-color: #024996;
  }

  :host([variation='hollow']) {
    --button-bg-color: transparent;
    --button-fg-color: #024996;
    --button-border-color: #024996;
  }

  :host([variation='transparent']) {
    --button-bg-color: transparent;
    --button-fg-color: #024996;
    --button-border-color: transparent;
  }

  :host([size='small']) {
    --button-padding: 4px 8px;
    --button-font-size: 12px;
  }

  :host([size='medium']) {
    --button-padding: 8px 16px;
    --button-font-size: 14px;
  }

  :host([size='large']) {
    --button-padding: 12px 24px;
    --button-font-size: 16px;
  }
`;
