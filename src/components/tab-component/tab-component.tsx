import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'tab-component',
  styleUrl: 'tab.scss',
  shadow: true,
})
export class TabComponent {
  @State() tabCnt: number;
  @State() activeTab: number;


  render() {
    return (
      <div aria-label='tab'>
        <div aria-label='tabs__navigation' class={`tabs__navigation`}>
          <slot name="tab__label" />
        </div>
        <div class="tabs__accent">
          <div class="tabs__accent-active"
            aria-selected={this.activeTab}
            style={{ width: `calc(100%/${this.tabCnt})`, transform: `translateX(${100 * this.activeTab}%)` }}>
          </div>
        </div>
        <div aria-label='contents' class="tabs__box">
          <slot name="tab__content" />
        </div>
      </div>
    );
  }
}
