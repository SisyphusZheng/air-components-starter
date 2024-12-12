import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "air-row",
  styleUrl: "air-row.css",
  shadow: true,
})
export class SwcRow {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
