
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

Vue.component("todo-item-test", {
	
	props: ["tt", "isComplate"],
	
	// 데이터와 마찬가지로 prop는 템플릿 내부에서 사용 할 수 있다
	//vm의 this.message로 사용 할 수 있다.
	template: "<span>{{isComplate}}</span>"
})

Vue.component("propcheck", {
	props: {
		// 기본 타입 확인 (`null` 은 어떤 타입이든 가능하다는 뜻입니다)
		propa: Number,
		// 여러개의 가능한 타입
		propb: [String, Number],
		propf: {
			validator: function (value) {
				return value > 10
			}
		}
	},
	
	template: "<span>{{propf}}</span>"
	
})

var app32 = new Vue({
	el : "#app-32",
	data: {
		parentMsg : "낰낰",
		todo: {
			tt : "티티",
			isComplate: false
		},
		prop11: "",
		prop22: ""
	}	
})


Vue.component("button-counter33", {
	template: "<button v-on:click='incrementCounter'>{{counter}}</button>",
	data: function () {
		return {
			counter: 0
		}
	},
	methods: {
		incrementCounter: function(){
			this.counter += 1 
			this.$emit("increment")
		}
	}
})

Vue.component("comp-dothething", {
	template: "<button v-on:click='incrementCounter'>{{counter}}</button>",
	data: function () {
		return {
			counter: 0
		}
	},
	methods: {
		incrementCounter: function(){
			console.log("do-the-thing-console");
			this.$emit('update:foo', "cs")
		},
		test: function(){
			console.log("#### -- tttt");
		}
	}
})


var app33 = new Vue({
	el: "#app-33",
	data : {
		total: 0,
		totalbind: 0
	},
	methods: {
		incrementTotal: function(){
			this.total += 1
		},
		doTheThing: function(event){
			console.log("33## -- " + event)
		}
	}
})


Vue.component("currency-input", {
	template: '\
				<span>\
					$\
					<input\
						ref="input"\
						v-bind:value="value"\
						v-on:input="updateValue($event.target.value)">\
				</span>\
			  ',
	props: ["value"],
	methods: {
		//값을 직접 업데이트하는 대신 이 메소드를 사용하여 입력값에 대한 서식을 지정하고 배치 할 수 있습니다.
		updateValue: function(value){
			var formattedValue = value
					//공백을 제거합니다.
					.trim()
					//소수 자릿수 2자리로 줄입니다.
					.slice(
						0,
						value.indexOf("0") === -1 ? value.length : value.indexOf(".") + 3
					)
			
			//값이 아직 정규화 되지 않은 경우
			//이를 수동으로 재정의하여 조건을 충족시킵니다.
			if(formattedValue != value) {
				this.$refs.input.value = formattedValue
			}
			
			//입력 이벤트를 통해 숫자 값을 내보냅니다.
			this.$emit("input", Number(formattedValue))
		}
	}
						
})

var app34 = new Vue({
	el: "#app-34",
	data : {
		price: 0
	},
	methods: {
		
	}
})


Vue.component("child-slot-test", {
	template: '\
		<div>\
			<h2>나는 자식 컴포넌트의 제목입니다.</h2>\
			<slot>제공된 컨텐츠가 없는 경우에만 보실 수 있습니다.</slot>\
		</div>\
	'
})

var app35 = new Vue({
	el: "#app-35",
	data : {  
		
	},
	methods: {
		
	}
})

Vue.component("base-checkbox", {
	model: {
		prop: "checked",
		event: "change"
	},
	props: {
		checked: Boolean
	},
	template: `
		<input
			type="checkbox"
			v-bind:checked="checked"
			v-on:change="$emit('change', $event.target.checked)"
		>
	`
})

var app36 = new Vue({
	el: "#app-36",
	data : {
		lovingVue: true
	}, 
	methods: {
		
	}
})

Vue.component("event-listener-input", {
	inheriAttrs: false,
	props: ["label", "value"],
	computed: {
		inputListeners: function(){
			var vm = this
			// "object.assign"는 오브젝트를 새로운 오브젝트로 병합합니다
			return Object.assign({},
			//우선 부모 엘리먼트의 모든 리스너를 추가합니다.
				this.$listeners,
				//그 다음, 기존 리스너를 override하는
				//커스텀 리스너를 추가 할 수 있습니다.
				{
					//아래 구문을 사용하면 v-model과 같이 동작하도록 만들 수 있습니다
					input: function(event) {
						console.log("냠냠 이벤트리스너 받아오기!!");
						vm.$emit("input", event.target.value)
					}
				}
			)
		}
	},
	template: `
		<label>
			{{label}}
			<input
				v-bind="$attrs"
				v-bind:value="value"
				v-on="inputListeners"
			>
		</label>
	`
})

var app37 = new Vue({
	el: "#app-37"
})



























 






