import './index.js';
import { expect, fixture, html } from '@open-wc/testing';
import type { MyInput } from './input.js';

describe('MyInput', () => {
  describe('accessibility', () => {
    it('default is accessible', async () => {
      const el = await fixture<MyInput>(html`<my-input></my-input>`);
      await expect(el).to.be.accessible();
    });
  });
});
