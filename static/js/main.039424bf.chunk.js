(this["webpackJsonpmy-react-todo"]=this["webpackJsonpmy-react-todo"]||[]).push([[0],{22:function(t,e,a){t.exports=a(33)},27:function(t,e,a){},33:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(19),l=a.n(r),c=a(16),i=a(6),d=a(7),u=a(9),s=a(8),p=a(12),m=a(1),f=(a(27),function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).getStyle=function(){return{backgroundColor:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props.todo,e=t.id,a=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ","  ",a,o.a.createElement("button",{style:b,onClick:this.props.delTodo.bind(this,e)},"x")))}}]),a}(o.a.Component)),b={backgroundColor:"#ff0000",color:"#fff",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},h=f,y=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return o.a.createElement(h,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),a}(o.a.Component),v=a(20),E=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={title:""},t.titleChange=function(e){return t.setState(Object(v.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add an item to the list",value:this.state.title,onChange:this.titleChange,style:{flex:"10",padding:"5px"}}),o.a.createElement("input",{type:"submit",value:"Add",className:"add-btn",style:{flex:"1"}}))}}]),a}(o.a.Component);var g={color:"#fff",textDecoration:"none"},j={backgroundColor:"#3939ac",color:"#fff",textAlign:"center",padding:"10px"},O=function(){return o.a.createElement("header",{style:j},o.a.createElement("h1",null,"Todo List"),o.a.createElement(p.b,{to:"/",style:g},"Home")," ","|"," ",o.a.createElement(p.b,{to:"/about",style:g},"About"))},k=a(35);var x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"A simple todo list app created with React"))},C=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todos:[{id:Object(k.a)(),title:"Type in the text area to add an item",completed:!1},{id:Object(k.a)(),title:"Click the delete button to delete item",completed:!1},{id:Object(k.a)(),title:"Click the checkbox to cross out an item",completed:!1}]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){t.setState({todos:Object(c.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodo=function(e){var a={id:Object(k.a)(),title:e,completed:!1};e?t.setState({todos:[].concat(Object(c.a)(t.state.todos),[a])}):alert("Kindly enter text")},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return o.a.createElement(p.a,null,o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement(O,null),o.a.createElement(m.a,{path:["/","/React-todo-list-app"],exact:!0,render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{addTodo:t.addTodo}),o.a.createElement(y,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}})," ",o.a.createElement(m.a,{path:"/about",exact:!0,component:x}))))}}]),a}(o.a.Component);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.039424bf.chunk.js.map