webpackJsonp([16],{BDoA:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"topic",data:function(){return{now:-1,questionList:[],question:"",answer:[],Aanswer:"",color:"",type:["single","multi","judge"],typeid:"",msg:"提交"}},methods:{vueTable:function(){var t=this;this.typeid=Math.floor(3*Math.random());this.$axios.get("train/tp?type="+this.type[this.typeid]+"&label="+this.$route.query.f).then(function(e){t.questionList.push({typeid:t.typeid,question:e.data.data[0],Aanswer:null}),t.now=t.questionList.length-1,t.question=t.questionList[t.now].question,t.answer=[]}).catch(function(e){t.$notify.error({title:"网络错误",message:"稍后重试",duration:1e3})})},getAnswer:function(t){if(this.questionList.length>0&&(this.questionList[this.now].Aanswer=t),t instanceof Array){var e=[];for(var s in t)e.push(t[s]);return e.sort().toString()}return t},countDone:function(t){},format:function(t){this.typeid=t.typeid,this.answer=t.Aanswer,this.question=t.question},next:function(){this.now++,this.format(this.questionList[this.now]),window.scrollTo(0,0)},prev:function(){this.now--,this.format(this.questionList[this.now]),window.scrollTo(0,0)},getNew:function(){"提交"==this.msg?this.msg="获取新题":(window.scrollTo(0,0),this.vueTable(),this.msg="提交")},getTitle:function(){return"single"==this.type[this.typeid]?"单选题":"multi"==this.type[this.typeid]?"多选题":"judge"==this.type[this.typeid]?"判断题":void 0}},created:function(){this.vueTable()}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"exam"},[s("el-card",[s("div",{staticClass:"clearfix",staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[s("span",[t._v(t._s(t.getTitle()))])]),t._v(" "),s("span",{staticClass:"title"},[t._v(t._s(t.now+1)+". "+t._s(t.question.title))]),t._v(" "),"single"==t.type[t.typeid]?s("div",{staticClass:"answer"},[s("el-radio-group",{attrs:{size:"medium",disabled:t.now<t.questionList.length-1||"提交"!=t.msg},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}},[s("el-radio",{attrs:{label:"A"},on:{change:t.countDone}},[t._v("A. "+t._s(t.question.optionA))]),t._v(" "),s("br"),t._v(" "),s("el-radio",{attrs:{label:"B"},on:{change:t.countDone}},[t._v("B. "+t._s(t.question.optionB))]),t._v(" "),s("br"),t._v(" "),s("el-radio",{attrs:{label:"C"},on:{change:t.countDone}},[t._v("C. "+t._s(t.question.optionC))]),t._v(" "),s("br"),t._v(" "),s("el-radio",{attrs:{label:"D"},on:{change:t.countDone}},[t._v("D. "+t._s(t.question.optionD))]),t._v(" "),s("br"),t._v(" "),s("el-radio",{directives:[{name:"show",rawName:"v-show",value:""!=t.question.optionE,expression:"question.optionE != ''"}],attrs:{label:"E"},on:{change:t.countDone}},[t._v("E. "+t._s(t.question.optionE))])],1)],1):t._e(),t._v(" "),"multi"==t.type[t.typeid]?s("div",{staticClass:"answer"},[s("el-checkbox-group",{attrs:{size:"mini",disabled:t.now<t.questionList.length-1||"提交"!=t.msg},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}},[s("el-checkbox",{attrs:{label:"A"},on:{change:t.countDone}},[t._v("A. "+t._s(t.question.optionA))]),t._v(" "),s("br"),t._v(" "),s("el-checkbox",{attrs:{label:"B"},on:{change:t.countDone}},[t._v("B. "+t._s(t.question.optionB))]),t._v(" "),s("br"),t._v(" "),s("el-checkbox",{attrs:{label:"C"},on:{change:t.countDone}},[t._v("C. "+t._s(t.question.optionC))]),t._v(" "),s("br"),t._v(" "),s("el-checkbox",{staticClass:"aaa",attrs:{label:"D"},on:{change:t.countDone}},[t._v("D. "+t._s(t.question.optionD))]),t._v(" "),s("br"),t._v(" "),s("el-checkbox",{directives:[{name:"show",rawName:"v-show",value:""!=t.question.optionE,expression:"question.optionE != ''"}],attrs:{label:"E"},on:{change:t.countDone}},[t._v("E. "+t._s(t.question.optionE))])],1)],1):t._e(),t._v(" "),"judge"==t.type[t.typeid]?s("div",{staticClass:"answer"},[s("el-radio-group",{attrs:{disabled:t.now<t.questionList.length-1||"提交"!=t.msg},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}},[s("el-radio",{attrs:{label:"T"}},[t._v(t._s(t.question.optionT))]),t._v(" "),s("el-radio",{attrs:{label:"F"}},[t._v(t._s(t.question.optionF))])],1)],1):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.now<t.questionList.length-1||"提交"!=t.msg,expression:"now < questionList.length - 1 || msg != '提交'"}],staticClass:"hint"},[s("el-tag",{staticClass:"tag",attrs:{type:t.getAnswer(t.answer)==t.question.answer?"success":"danger"}},[t._v(t._s(t.getAnswer(t.answer)==t.question.answer?"正确":"错误"))]),t._v(" "),s("el-row",{staticClass:"mt"},[s("el-tag",{attrs:{effect:"plain",type:"info"}},[t._v("你的答案：")]),t._v(" "),s("el-tag",{attrs:{effect:"plain"}},[t._v(t._s(t.getAnswer(t.answer)))])],1),t._v(" "),s("el-row",{staticClass:"mt"},[s("el-tag",{attrs:{effect:"plain",type:"info"}},[t._v("正确答案：")]),t._v(" "),s("el-tag",{attrs:{effect:"plain",type:"success"}},[t._v(t._s(t.question.answer))])],1),t._v(" "),s("el-row",{staticClass:"mt"},[s("el-tag",{attrs:{effect:"plain",type:"info"}},[t._v("备  注：")]),t._v(" "),s("span",{staticStyle:{color:"red"}},[t._v(t._s(t.question.hint))])],1)],1)]),t._v(" "),s("div",{staticStyle:{margin:"10px",float:"left"}},[s("el-button",{attrs:{size:"medium",type:"primary",icon:"el-icon-d-arrow-left",disabled:0==t.now},on:{click:function(e){return t.prev()}}},[t._v("上一题")])],1),t._v(" "),s("div",{staticStyle:{margin:"10px",float:"left"}},[s("el-button",{attrs:{size:"medium",type:"primary",disabled:t.now>=t.questionList.length-1},on:{click:function(e){return t.next()}}},[t._v("\n      下一题\n      "),s("i",{staticClass:"el-icon-d-arrow-right"})])],1),t._v(" "),s("div",{staticStyle:{margin:"10px 5px 10px 0px",float:"right"}},[s("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(e){return t.getNew()}}},[t._v(t._s(t.msg))])],1),t._v(" "),s("div",{staticStyle:{margin:"10px",float:"left"}},[s("el-input",{staticStyle:{width:"110px"},attrs:{disabled:"",value:t.now+1}},[s("template",{slot:"prepend"},[t._v("当前")])],2),t._v(" "),s("el-input",{staticStyle:{"margin-left":"20px",width:"110px"},attrs:{disabled:"",value:t.questionList.length}},[s("template",{slot:"prepend"},[t._v("共计")])],2)],1)],1)},staticRenderFns:[]};var o=s("VU/8")(n,i,!1,function(t){s("hpwK")},"data-v-21939df8",null);e.default=o.exports},hpwK:function(t,e){}});
//# sourceMappingURL=16.8363ce865abf18fe8695.js.map