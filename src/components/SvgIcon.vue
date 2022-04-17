<template>
  <!-- 显示外部传入的svg -->
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    :class="className"
  />
  <!-- 显示项目内部的svg -->
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import { isExternal } from '../utlis/validate'

export default {
  name: 'SvgIcon',
  props: {
    // icon 图标
    icon: {
      type: String,
      required: true
    },
    // 图标类名
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    /**
     * 判断是否为外部图标
     */
    isExternal() {
      return isExternal(this.icon)
    },
    /**
     * 外部图标样式
     */
    styleExternalIcon() {
      return {
        mask: `url(${this.icon}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.icon}) no-repeat 50% 50%`
      }
    },
    /**
     * 项目内图标
     */
    iconName() {
      return `#icon-${this.icon}`
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  /* 因icon大小被设置为和字体大小一致，而span等标签的下边缘会和字体的基线对齐，故需设置一个往下的偏移比例，来纠正视觉上的未对齐效果 */
  vertical-align: -0.15em;
  /* fill 是SVG元素的一种属性;SVG元素的这些属性，用于指定如何处理或者呈现元素的详细信息
  比如，fill ,对于形状元素和文本，它定义了绘制元素的颜色。对于动画，它定义了动画的最终状态。在下面的例子中，它定义了图标的颜色。
  在css中，currentColor是一个变量，这个变量的值是当前元素的color值。
  如果当前元素没有在CSS里显示地指定一个color值，那它的颜色值就遵从CSS规则，从父元素继承而来。 */
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
