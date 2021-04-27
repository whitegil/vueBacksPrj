




Vue.component("tab-posts", {
	name: "tabatb",
	data: function (){
		return {
			posts: [
				{
					id: 1,
					title: "1번제목",
					content: "11111111111111111111"
				},
				{
					id: 2,
					title: "2번제목",
					content: "22222222222222222222"
				},
				{
					id: 3,
					title: "3번제목",
					content: "333333333333333333333"
				}
			],
			selectedPost: null
		}
	},
	template: `
		<div class="posts-tab">
			<ul class="posts-sidebar">
				<li
					v-for="post in posts"
					v-bind:key="post.id"
					v-bind:class="{selected: post === selectedPost}"
					v-on:click="selectedPost=post"
				>
					{{post.title}}
				</li>
			</ul>
			<div class="selected-post-container">
				<div
					v-if="selectedPost"
					class="selected-post"
				>
					<h3>{{selectedPost.title}}</h3>
					<div v-html="selectedPost.content"></div>
				</div>
				<strong v-else>
					Click on a blog title to the left to view it
				</strong>
			</div>
		</div>
	`
})

Vue.component("tab-archive", {
	template: `<div>Archive component</div>`
})

var app39 = new Vue({
	el: "#app-39",
	name: "apapapaa",
	data: {
		currentTab: "Posts",
		tabs: ["Posts", "Archive"]
	},
	computed: {
		currentTabComponent: function () {
			console.log("parent computed -- " + this.currentTab)
			return "tab-" + this.currentTab.toLowerCase();
		}
	}
})






















 






