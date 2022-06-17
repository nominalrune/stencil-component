import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'real-time',
  styleUrl: 'realtime.css',
  shadow: true,
})
export class RealTime {
  @Prop() resolution: "y"|"M"|"d"|"h"|"m"|"s";

  private formatTime(): string {
    const now = new Date();
    if(this.resolution === "y") {
      return now.getFullYear().toString();
    } else if(this.resolution === "M") {
      return `${now.getFullYear()}-${now.getMonth() + 1}`;
  }
}

  render() {
    return <div>{this.formatTime()}</div>
  }
}
