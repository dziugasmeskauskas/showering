(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){},162:function(e,t,n){},164:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(50),r=n.n(i),s=n(19),l=n(20),c=n(32),u=n(31),d=n(33),p=n(25),f=(n(96),n(79)),h=function(){function e(){Object(s.a)(this,e),this.url="https://sound-sequencer.herokuapp.com/sounds"}return Object(l.a)(e,[{key:"post",value:function(e){return fetch(this.url,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)})}},{key:"get",value:function(){return fetch(this.url,{method:"GET",headers:{"Content-Type":"application/json; charset=utf-8"}})}},{key:"delete",value:function(e){return fetch("".concat(this.url,"/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json; charset=utf-8"}})}},{key:"update",value:function(e,t){return fetch("".concat(this.url,"/").concat(e),{method:"PATCH",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(t)})}}]),e}(),m=n(51),v=n.n(m),E=n(73),b=(n(100),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).changeMode=function(e){return n.setState({mode:e})},n.update=Object(E.a)(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.onUpdate(n.props.file.id,n.state.value);case 2:n.view();case 3:case"end":return e.stop()}},e,this)})),n.edit=function(){return n.changeMode("edit")},n.view=function(){return n.changeMode("view")},n.delete=function(e){return n.props.onDelete(e)},n.state={mode:"view",value:n.props.file.attributes.data.name||""},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return"view"===this.state.mode?o.a.createElement("li",null,o.a.createElement("div",{className:"info"},o.a.createElement("span",null,"Name: ",this.props.file.attributes.data.name),o.a.createElement("small",null,"File name: ",this.props.file.attributes.filename)),o.a.createElement("div",{className:"actions"},o.a.createElement("button",{onClick:this.edit},"Edit"),o.a.createElement("button",{onClick:this.delete.bind(null,this.props.file.id)},"Delete"))):o.a.createElement("li",null,o.a.createElement("div",null,o.a.createElement("span",null,"Name: "),o.a.createElement("input",{type:"text",value:this.state.value,onChange:function(t){var n=t.target.value;return e.setState({value:n})}})),o.a.createElement("div",{className:"actions"},o.a.createElement("button",{onClick:this.update},"Save"),o.a.createElement("button",{onClick:this.view},"Cancel")))}}]),t}(a.Component)),g=n(74),w=(n(162),function(e){var t=e.loading;return o.a.createElement("div",{className:"cover ".concat(t?"show":"")},o.a.createElement("span",{className:"text"}," File uploading! ",o.a.createElement("br",null)," Please wait"),o.a.createElement(g.ScaleLoader,{sizeUnit:"px",size:400,color:"white",loading:!0}))}),y=(n(164),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).upload=function(t){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){e.post(n.result,t)},n.onerror=function(){e.setState({isUploading:!1})}},e.getItems=function(){e.service.get().then(function(e){return e.json()}).then(function(t){var n=t.data;e.setState({files:n}),console.log(e.state)})},e.post=function(t,n){var a={sound:{data:t,content_type:n.type,filename:n.name}};e.service.post(a).then(function(t){if(t.ok)return e.setState({isUploading:!1}),e.getItems();p.toast.error("Upload failed !"),e.setState({isUploading:!1})})},e.delete=function(t){e.service.delete(t).then(function(t){if(t.ok)return e.getItems();p.toast.error("Delete failed !")})},e.update=function(t,n){var a={sound:{data:{name:n}}};e.service.update(t,a).then(function(t){if(t.ok)return e.getItems();p.toast.error("Update failed !")})},e.service=new h,e.state={files:[],isUploading:!1},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onDrop",value:function(e){var t=this;e.forEach(function(e){t.setState({isUploading:!0}),t.upload(e)})}},{key:"componentDidMount",value:function(){this.getItems()}},{key:"render",value:function(){var e=this,t=this.state.isUploading;return o.a.createElement("div",{className:"dropzone"},o.a.createElement(w,{loading:t}),o.a.createElement(f.a,{onDrop:this.onDrop.bind(this),style:{width:500,border:"1px solid rgba(0, 0, 0, 0.5)",borderRadius:11}},o.a.createElement("h1",null,"Drop the sounds !")),o.a.createElement("h2",null,"Dropped files"),o.a.createElement("ul",null,this.state.files.map(function(t){return o.a.createElement(b,{key:t.id,file:t,onDelete:e.delete,onUpdate:e.update})})),o.a.createElement(p.ToastContainer,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,t,n){e.exports=n(166)}},[[80,2,1]]]);
//# sourceMappingURL=main.e37bb21e.chunk.js.map