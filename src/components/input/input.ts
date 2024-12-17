import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './input.styles.js';

/**
 * Add a description here
 *
 * @tag my-input
 * @since 0.0.0
 * @status experimental
 *
 **/
export class MyInput extends LitElement {
  static override styles = styles;

  @property() 
  heading = 'Hello, word!';

  override render() {
    return html`
      <h1>${this.heading}</h1>
    `;
  }
}

export default MyInput;
