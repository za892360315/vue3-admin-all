<template>
	<div class="user">
		<div class="greet">{{ getTimeState() }}~ buduo 学前端</div>
		<img
			class="image"
			src="https://p6-pc-sign.douyinpic.com/aweme-avatar/tos-cn-avt-0015_e7e88568ac2dcb215ec5fca0114ef2f8~tplv-8yspqt5zfm-300x300.webp?x-expires=1704531600&x-signature=LKmA5Y8zOLuSY%2B04CVEXHi3BXL4%3D&from=2480802190"
			alt="buduo 学前端"
		/>
		<div class="info">
			<div class="name">buduo 学前端</div>
			<div class="introduce">
				<el-link type="primary">Vite + Vue3 + Typescript + Axios + Element-Plus + 打包优化 + 权限管理</el-link>

				<p>✅包管理： pnpm</p>
				<p>✨ 脚手架工具：最新 高效、快速的 Vite4，从0到1如何配置</p>
				<p>🔥前端框架：最流行的 Vue3，大厂里面的setup流行语法糖</p>
				<p>🍍状态管理器：Vue3新秀 Pinia，犹如 react zustand般的体验，友好的api和异步处理</p>
				<p>🎺 Axios： 如何从0到1封装</p>
				<p>🎉UI组件库：Element-Plus</p>
				<p>🎨Css样式：Less 、Postcss</p>
				<p>📖代码规范：Eslint、Prettier、StyleLInt StyleLint</p>
				<p>🌵提交规范：CommitLint、Husky、LintStaged</p>
				<p>🔐企业级中后台最佳模板：Vite4 Pinia Vue3 Element-Plus TypeScript</p>
				<p>✅ Package.json：每个依赖项具体配置和作用</p>
				<p>💪打包优化最佳配置：Vite.config.ts，dist目录最优解, chunk分包和拆包</p>
				<p>✊图标库的依赖加载：unplugin-icons/vite</p>
				<p>👌🏻依赖按需加载：unplugin-auto-import/vite，可自动导入使用到的Vue、Vue-router、 Pinia API等依赖</p>
				<p>
					💪组件按需导入：unplugin-vue-components，无论是第三方UI组件还是自定义组件都可实现自动按需导入以及TS语法提示,
					全局引入组件库，使用起来就非常方便，但是坏处就是产物体积大，对性能要求较高的项目不友好;按需引入，可以减少体积大小;
				</p>
				<p>🎁脚手架工具：如何从0到1开发一个脚手架，类比业界流行的 Vue-cli, Create-React-App</p>
				<p>🌔VScode使用技巧，代码和浏览器调试技巧</p>
			</div>
			<div class="introduce">
				作者主页: <el-link :href="url" target="_blank" type="danger">{{ url }}</el-link>
			</div>
		</div>
	</div>
</template>
<script setup>
const url = "https://www.douyin.com/user/MS4wLjABAAAA8QUJd4uIDW7LiACoHAqzoxRNDovw-9dttxAyBb6hIWI";
import { getTimeState } from "@/utils/util.js";
</script>
<style lang="less" scoped>
.user {
	background: #fff;
	text-align: center;
	padding: 5px;
	overflow: auto;
	.greet {
		text-align: left;
		display: flex;
		align-items: center;
	}
	.image {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	.info {
		max-height: 256px;
		.name {
			font-weight: bold;
			margin-top: 8px;
		}
		.introduce {
			font-size: 13px;
			color: #92959b;
			margin: 8px 0;
		}
	}
}
</style>
