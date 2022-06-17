import { newSpecPage } from '@stencil/core/testing';
import { RealTime} from './real-time';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [RealTime],
      html: '<real-time></real-time>',
    });
    expect(root).toEqualHtml(`
      <real-time>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </real-time>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [RealTime],
      html: `<real-time></real-time>`,
    });
    expect(root).toEqualHtml(`
    <real-time></real-time>
    `);
  });
});
