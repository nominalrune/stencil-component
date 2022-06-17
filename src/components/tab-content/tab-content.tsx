import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tab-content',
  styleUrl: 'tab-content.scss',
  shadow: true,
})
export class TabContent {
  @Prop() activeTab: number;
  @Prop() tabId: number;


  render() {
    return (
      <div aria-selected={this.activeTab === this.tabId} class="tabs__content">
        <slot />
      </div>
    );
  }
}
