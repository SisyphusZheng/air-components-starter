import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "air-card",
  styleUrl: "air-card.css",
  shadow: true,
})
export class AirCard {
  // 定义组件属性（Props），用于接收动态内容
  @Prop() title: string; // 卡片标题
  @Prop() description: string; // 卡片描述
  @Prop() imageUrl: string; // 卡片图片 URL
  @Prop() tags: string[] = []; // 标签列表，默认为空数组
  @Prop() showButton: boolean = true; // 是否显示按钮，默认为显示

  render() {
    return (
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
        {/* 动态渲染图片 */}
        <img
          class="w-full"
          src={this.imageUrl || "https://via.placeholder.com/300"}
          alt="Card Image"
        />

        <div class="px-6 py-4">
          {/* 动态渲染标题 */}
          <div class="font-bold text-xl mb-2">{this.title || "Card Title"}</div>

          {/* 动态渲染描述 */}
          <p class="text-gray-700 text-base">
            {this.description || "This is a description of the card content."}
          </p>
        </div>

        <div class="px-6 pt-4 pb-2">
          {/* 动态渲染标签 */}
          {this.tags.map((tag) => (
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>

        {this.showButton && (
          <div class="px-6 pt-4 pb-2">
            <slot name="button"></slot> {/* 使用 slot 来插入自定义按钮 */}
          </div>
        )}
      </div>
    );
  }
}
