
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
		fullName: ""
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
		// _.debounce는 lodash가 제공하는 기능으로
	    // 특히 시간이 많이 소요되는 작업을 실행할 수 있는 빈도를 제한합니다.
	    // 이 경우, 우리는 yesno.wtf/api 에 액세스 하는 빈도를 제한하고,
	    // 사용자가 ajax요청을 하기 전에 타이핑을 완전히 마칠 때까지 기다리길 바랍니다.
	    // _.debounce 함수(또는 이와 유사한 _.throttle)에 대한
	    // 자세한 내용을 보려면 https://lodash.com/docs#debounce 를 방문하세요
		this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
		
		console.log("## -- " + this.debouncedGetAnswer());
		console.log("## -- " + this.debouncedGetAnswer);
		
	},
	methods: {
		getAnswer: function(){
			if(this.question.indexOf("?") === -1){
				this.answer = "질문에는 일반적으로 물음표가 포함됩니다. ;-)";
				return;
			}
			
			this.answer = "생각중..."
			var vm = this
			axios.get("https://yesno.wtf/api")
				.then(function(response){
					vm.answer=_.capitalize(response.data.answer)
				})
				.catch(function(error){
					vm.answer = "에러 ! API 요청에 오류가 있습니다." + error
				})
			
		}
	}
	
})


var app12 = new Vue ({
	el: "#app-12",
	data: {
		classObject: {
			active: true,
			"text-danger": false,
			error: null,
			tt: true
		}
	},
	computed: {
		whatTheClassObj: function(){
			return {
				classObj1: this.active && !this.error,
				"classObj2": this.active && this.error == null,
				classObj3: this.active && this.tt
			}
		}
	}
	
	
})


var app13 = new Vue ({
	el: "#app-13",
	data: {
		active: true,
		error: null
	},
	computed: {
		classObject: function(){
			return {
				classObj1: this.active && !this.error,
				"classObj2": this.active && this.error == null,
				classObj3: this.active && this.tt
			}
		}
	}
})

var app14 = new Vue ({
	el: "#app-14",
	data: {
		activeClass: "kill",
		errorClass: "한글?",
		isActive: true
	}
})

var app15 = new Vue ({
	el: "#app-15",
	data: {
		activeClass: "kill",
		errorClass: "한글?",
		isActive: true
	}
})

var app16 = new Vue ({
	el: "#app-16",
	data: {
		styleObject : {
			color: "red"
		},
		styleObject2 : {
			fontSize: "45px"
		}	
	}
})

var app17 = new Vue ({
	el: "#app-17",
	data: {
		awesome: false,
		aweso: "B"
	}
})

var app18 = new Vue ({
	el: "#app-18",
	data: {
		loginType: "username",
		ok: false
	},
	methods: {
		chgLoginTypeClick : function(){
			if(this.loginType == "email"){
				this.loginType = "username"
			}else{
				this.loginType = "email"
			}
		}
	}
})

var app19 = new Vue ({
	el: "#app-19",
	data: {
		items: [
			{message: "Foo11", id:"nana"},
			{message: "Bar11", id:"koko"}
		]
	}
})

var app20 = new Vue ({
	el: "#app-20",
	data: {
		parentMessage: "Parent",
		items: [
			{message: "Foo22"},
			{message: "Bar22"}
		]
	}
})

var app21 = new Vue ({
	el: "#app-21",
	data: {
		objobj: {
			title: "how how how",
			author: "되는거맞니?",
			publishedAt: "2021-04-22"
		}
	}
})

var app22 = new Vue ({
	el: "#app-22",
	data: {
		numbers: [1,2,3,4,5]
	},
	computed: {
		evenNumbers: function(){
			return this.numbers.filter(function(number){
				return number % 2 ===0
			})
		}
	},
	methods: {
		even: function (numbers) {
			return numbers.filter(function(number){
				return number % 2 === 1
			})
		}
	}
})

Vue.component("todo-item-for", {
	template: '\
		<li>\
			{{title}}\
			<button v-on:click="$emit(\'remove\')">Remove</button>\
		<li>\
	',
	props: ["title"]
})

var app23 = new Vue ({
	el: "#app-23",
	data: {
		newTodoText: "",
		todos: [
			{ id: 1, title: "Do the dishes"},
			{ id: 2, title: "take out the trash"},
			{ id: 3, title: "mow the lawn"},			
		],
		nextTodoId: 4
	},
	methods: {
		addNewTodo: function(){
			this.todos.push({
				id: this.nextTodoId++,
				title: this.newTodoText
			})
			this.newTodoText = ""
		}
	}
})

var app24 = new Vue ({
	el: "#app-24",
	data: {
		counter: 0
	}
})

var app25 = new Vue({
	el: "#app-25",
	data: {
		name: "나코땅땅"
	},
	methods: {
		greet: function (event) {
			alert("헬로~ " + this.name + " 씨!");
			if(event) {
				alert(event.target.tagName)
			}
			
		}
	}
})

var app26 = new Vue({
	el: "#app-26",
	data: {
		name: "나코땅땅"
	},
	methods: {
		say: function (message, event) {
			console.log("## -- " + event);
			alert(message);			
		}
	}
})

var app27 = new Vue({
	el: "#app-27",
	data: {
		message: "나코땅땅"
	}
})

var app28 = new Vue({
	el: "#app-28",
	data: {
		checkedNames: ["jack"],
		soloChecked: true
	}
})

var app29 = new Vue({
	el: "#app-29",
	data: {
		radio : "two"
	}
})

var app30 = new Vue({
	el: "#app-30",
	data: {
		option : "b",
		option2: "333",
		options : [
			{text: "one", value: "1"},
			{text: "two", value: "22"},
			{text: "three", value: "333"},
			{text: "four", value: "4444"},
			{text: "five", value: "55555"}
		],
		age : 0
		
	}
})


Vue.component("my-component", {
	template: "<div>사용자 정의 컴포넌트 입니다!.</div>"
})

var child = {
	template: "<div>사용자 내부 정의 컴포넌트 입니다.</div>"
}

//루트 인스턴스 생성
var app31 = new Vue({
	el: "#app-31",
	components: {
		"inner-component": child
	}
})




var counterData = {counter:0}

Vue.component("simple-counter-component", {
	template: "<button v-on:click='counter += 1'> {{ counter }} </button>",
	//counterData는 기술적으로 함수이므로 Vue는 따지지 않지만 
	//각 컴포넌트는 인스턴스에 대해 같은 객체 참조를 반환
	data: function(){
		return {
			counter: 0	
		}
	}
})


Vue.component("propTest", {
	//props 정의
	props: ["myMessage"],
	// 데이터와 마찬가지로 prop는 템플릿 내부에서 사용 할 수 있다
	//vm의 this.message로 사용 할 수 있다.
	template: "<span>{{myMessage}}</span>"
})

Vue.component("nakonako", {
	//props 정의
	props: ["myMessage"],
	// 데이터와 마찬가지로 prop는 템플릿 내부에서 사용 할 수 있다
	//vm의 this.message로 사용 할 수 있다.
	template: "<span>{{myMessage}}</span>"
})

var app32 = new Vue({
	el : "#app-32",
	data: {
		parentMsg : "낰낰",
		todo: {
			text: "Learn Vue",
			isComplate: false
		}
	}
	
})































 






