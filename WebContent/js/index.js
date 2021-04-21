
var app = new Vue({
	el: "#app",
	data: {
		message: "안냥~ 안냥ㅁㄴ~ vue~"
	}
})

var app2 = new Vue({
	el: "#app-2",
	data: {
		message : "요런 페이지는 " + new Date() + "에 로드됨~"
	}
})

var app3 = new Vue({
	el: "#app-3",
	data: {
		seen : true
	}
})

var app4 = new Vue ({
	el: "#app-4",
	data: {
		todos: [
			{ text: "JavaScript 배우기"},
			{ text: "Vue 배우기"},
			{ text: "무조건 멋진 것을 만들기"}
		]
	}
})

var app5 = new Vue({
	el: "#app-5",
	data : {
		message: "안녕하세요! Vue~. js"
	},
	methods: {
		reverseMessage: function (){
			this.message = this.message.split("").reverse().join("");
		}
	}
})

var app6 = new Vue({
	el: "#app-6",
	data: {
		message: "안녕하세요 Vue!"
	}
})

Vue.component("todo-item", {
	// 이제 todo-item 컴포넌트는 "prop" 이라고 하는
	// 사용자 정의 속성 같은 것을 입력받을 수 있습니다.
	// 이 prop은 todo라는 이름으로 정의했습니다.
	props: ["todo"],
	template: "<li>{{todo.text}}</li>"
})

var app7 = new Vue({
	el: "#app-7",
	data: {
		groceryList: [
			{id:0, text: "vegetables"},
			{id:1, text: "Cheese"},
			{id:2, text: "Whatever else humans are supposed to eat"}
		]
	}
})

var obj = {
	foo: "bar"
}

//Object.freeze(obj);

var app8 = new Vue({
	el: "#app-8",
	data: obj
})

var data = { a:1 }
var vm = new Vue({
	el: "#example",
	data: data
})


vm.$watch("a", function(newVal, oldVal){
	console.log("vm.a 변경");
})

var app9 = new Vue({
	el: "#app-9",
	data: {
		message: "hello java"
	},
	computed: {
		//계산된 getter
		reversedMessage: function (){
			//this.는 vm 인스턴스를 가르킵니다.
			return this.message.split("").reverse().join("")
		},
		now: function(){
			return Date.now()
		}
	},
	//컴포넌트 내부
	methods: {
		reversedMessage2: function(){
			return this.message.split("").reverse().join("")
		},
		now2: function(){
			return Date.now()
		}
	}
	
})

var app10 = new Vue ({
	el: "#app-10",
	data : {
		firstName: "한길",
		lastName: "백",
		fullName: "한길 백"
	},
	watch: {
		firstName: function(val) {
			this.fullName = val + " " + this.lastName
		},
		lastName: function(val){
			this.fullName = this.firstName + " " + val
		}
	}
})

var app11 = new Vue ({
	el: "#app-11",
	data: {
		question: "",
		answer: "질문을 하기 전까지는 대답할 수 없습니다."
	},
	watch: {
		//질문이 변경될때마다 이기능이 실행됩니다.
		question: function(newQuestion){
			this.answer = "입력을 기다리는 중..."
			this.debouncedGetAnswer()
		}
	},
	created: function(){
		
	}
})

















