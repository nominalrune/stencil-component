import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tab-content',
  styleUrl: 'tab-content.scss',
  shadow: true,
})
export class TabContent {
  @Prop() activeTab: number;
  @Prop() tabIndex: number;


  render() {
    return (
      <div aria-selected={this.activeTab === this.tabIndex} class="tabs__content">
        <slot />
      </div>
    );
  }
}
