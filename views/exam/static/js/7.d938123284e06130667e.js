webpackJsonp([7],{bhS8:function(t,e){},bmuo:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{label:"专题名称",width:"280",prop:"label"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",[t._v(t._s(e.row.label))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"数量",width:"180",prop:"count"}}),t._v(" "),a("el-table-column",{attrs:{label:"进入练习",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(a){return t.handleClick(e.row)}}})]}}])})],1)],1)},staticRenderFns:[]};var l=a("VU/8")({name:"subject",data:function(){return{tableData:[],total:0}},methods:{vueTable:function(){var t=this;this.$axios.get("train/topiclist").then(function(e){t.tableData=e.data.data,t.total=e.data.data.length}).catch(function(e){t.$notify.error({title:"网络错误",message:"稍后重试",duration:1e3})})},handleClick:function(t){this.$router.push({path:"/topic",query:{f:t.label}})}},created:function(){this.vueTable()}},n,!1,function(t){a("bhS8")},"data-v-d08438c6",null);e.default=l.exports}});
//# sourceMappingURL=7.d938123284e06130667e.js.map