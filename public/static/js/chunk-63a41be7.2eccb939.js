(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63a41be7"],{"386b":function(t,e,o){var n=o("5ca1"),i=o("79e5"),r=o("be13"),a=/"/g,l=function(t,e,o,n){var i=String(r(t)),l="<"+e;return""!==o&&(l+=" "+o+'="'+String(n).replace(a,"&quot;")+'"'),l+">"+i+"</"+e+">"};t.exports=function(t,e){var o={};o[t]=e(l),n(n.P+n.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",o)}},5182:function(t,e,o){},"8dd9":function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"d",(function(){return r})),o.d(e,"a",(function(){return a})),o.d(e,"c",(function(){return l}));var n=o("b775");function i(t){return Object(n["a"])({url:"/set/home/video",method:"get"})}function r(t){return Object(n["a"])({url:"/set/home/video",method:"post",data:t})}function a(t){return Object(n["a"])({url:"/set/home/type",method:"get"})}function l(t){return Object(n["a"])({url:"/set/home/type",method:"post",data:t})}},"91b6":function(t,e,o){"use strict";o.d(e,"a",(function(){return i}));var n=o("b775");function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"img";return Object(n["a"])({url:"/upload/"+e,method:"post",data:t})}},b54a:function(t,e,o){"use strict";o("386b")("link",(function(t){return function(e){return t(this,"a","href",e)}}))},bb08:function(t,e,o){"use strict";var n=o("5182"),i=o.n(n);i.a},e979:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"home-video"},[o("div",{staticClass:"box"},[o("el-form",{ref:"form",attrs:{"label-position":"left",model:t.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"外部视频"}},[o("el-switch",{model:{value:t.form.isBool,callback:function(e){t.$set(t.form,"isBool",e)},expression:"form.isBool"}})],1),t._v(" "),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.form.isBool,expression:"form.isBool"}],attrs:{label:"视频链接"}},[o("el-input",{model:{value:t.form.outLink,callback:function(e){t.$set(t.form,"outLink",e)},expression:"form.outLink"}})],1),t._v(" "),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!t.form.isBool,expression:"!form.isBool"}],attrs:{label:"上传视频"}},[o("video-show",{ref:"video",attrs:{url:t.form.url}})],1),t._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确定")])],1)],1)],1)])},i=[],r=(o("b54a"),o("91b6")),a=o("8dd9"),l={name:"HomeVideo",data:function(){return{loading:!1,form:{_id:"",isBool:!1,outLink:"",url:""}}},mounted:function(){var t=this;Object(a["b"])().then((function(e){var o=e.data[0]||"",n=!!/(http)/.test(o.link);t.form._id=o?o._id:"",t.form.isBool=n,n?t.form.outLink=o.link:t.form.url=o.link}))},methods:{handleSubmit:function(){var t=this;if(this.loading=!0,this.form.isBool)this.handleSave(this.form.outLink);else{var e=this.$refs.video.$refs.file.files[0];if(e){var o=new FormData;o.append("file",e),Object(r["a"])(o,"video").then((function(e){t.handleSave(e.data[0])})).catch((function(){t.loading=!1}))}else this.loading=!1}},handleSave:function(t){var e=this;Object(a["d"])({_id:this.form._id,link:t}).then((function(t){e.$message.success(t.msg),e.loading=!1})).catch((function(){e.loading=!1}))},handleBlack:function(){}}},s=l,u=(o("bb08"),o("2877")),c=Object(u["a"])(s,n,i,!1,null,"37310b84",null);e["default"]=c.exports}}]);