(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(21),r=t.n(s),o=t(29),i=t(30),c=t(32),u=t(31),m=t(33),d=(t(82),function(e){return l.a.createElement("form",{action:"submit",onSubmit:e.handleSubmit},l.a.createElement("fieldset",null,l.a.createElement("label",{htmlFor:"postCode"},"Enter a postal code to find local representatives:"),l.a.createElement("input",{className:"headerInput",type:"text",placeholder:"(e.g. A1A1A1)",onChange:e.handleChange,value:e.userPostalCode,pattern:"[A-Z][0-9][A-Z][0-9][A-Z][0-9]|[A-Z][0-9][A-Z] [0-9][A-Z][0-9]",required:!0,name:"postal"}),l.a.createElement("button",{className:"formSubmit headerInput",type:"submit",onClick:e.handleClick},"Show me!")))}),p=function(e){return l.a.createElement("div",{className:"Header"},l.a.createElement("header",null,e.user?l.a.createElement("p",{className:"userName"},"Hi, ",e.user.displayName,"!",e.savedReps.length>0?l.a.createElement("button",{onClick:e.repsHandleClick,className:"button"},"Click here to see your list of saved reps (",e.savedReps.length,")."):l.a.createElement("span",null," You haven't saved any reps yet, start a new search to do so.")):null,e.user?l.a.createElement("button",{onClick:e.logout,className:"login button"},"Logout"):l.a.createElement("button",{className:"login button",onClick:e.login},"Login"),l.a.createElement("div",{className:"wrapper formHeader"},l.a.createElement("h1",null,"Know Your Reps"),l.a.createElement(d,{handleSubmit:e.handleSubmit,handleChange:e.handleChange,userPostalCode:e.userPostalCode,handleClick:e.handleClick}))))},h=function(e){return l.a.createElement("div",{className:"Representatives"},l.a.createElement("div",{className:"repCard"},l.a.createElement("h2",null,e.name),l.a.createElement("p",{className:"riding"},e.office),l.a.createElement("p",null,e.riding),l.a.createElement("p",null,e.party),l.a.createElement("div",{className:"repContact clearfix"},e.phone?l.a.createElement("a",{href:"tel://"+e.phone},l.a.createElement("i",{className:"fas fa-phone","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Call ",e.name),e.phone):l.a.createElement("p",null,"Phone number unavailable"),e.email?l.a.createElement("a",{href:"mailto:"+e.email},l.a.createElement("i",{className:"fas fa-envelope","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Email ",e.name),e.email):l.a.createElement("p",null,"Email unavailable"),e.url?l.a.createElement("a",{href:e.url,className:"url"},"Visit ",e.name,"'s website")||l.a.createElement("a",{href:e.personalUrl,className:"url"},"Visit ",e.name,"'s website"):null)))},f=function(e){return l.a.createElement("div",{className:"Representatives savedRep"},l.a.createElement("div",{className:"repCard"},l.a.createElement("h2",null,e.name),l.a.createElement("p",{className:"riding"},e.office),l.a.createElement("p",null,e.riding),l.a.createElement("p",null,e.party),l.a.createElement("div",{className:"repContact clearfix"},e.phone?l.a.createElement("a",{href:"tel://"+e.phone},l.a.createElement("i",{className:"fas fa-phone","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Call ",e.name),e.phone):l.a.createElement("p",null,"Phone number unavailable"),e.email?l.a.createElement("a",{href:"mailto:"+e.email},l.a.createElement("i",{className:"fas fa-envelope","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Email ",e.name),e.email):l.a.createElement("p",null,"Email unavailable"),e.url?l.a.createElement("a",{href:e.url,className:"url"},"Visit ",e.name,"'s website")||l.a.createElement("a",{href:e.personalUrl,className:"url"},"Visit ",e.name,"'s website"):null)))},v=function(e){return l.a.createElement("main",{className:"Main"},l.a.createElement("div",{className:"wrapper"},!0===e.show?l.a.createElement("section",null,l.a.createElement("h2",{className:"titlePC"},"Representatives for: ",e.userPostalCode),l.a.createElement("ul",{className:"repInfo"},e.userReps.map(function(e){if("string"!==typeof e)return l.a.createElement("li",{key:e.key},l.a.createElement(h,{name:e.name,office:e.office,riding:e.riding,party:e.party,email:e.email,phone:e.phone,url:e.url,personalUrl:e.personalUrl}))})),e.user?l.a.createElement("button",{className:"button",value:e.userPostalCode,onClick:e.saveButton},"Save reps for ",e.userPostalCode):l.a.createElement("button",{onClick:e.login,className:"button"},"Login to save reps"),e.user&&e.savedReps.length>0?l.a.createElement("button",{className:"button",onClick:e.repsHandleClick},"Show my saved reps"):null,l.a.createElement("button",{className:"button",onClick:e.handleClickTop},"Back to top")):null,e.user&&e.savedReps.length>0&&!0===e.showSaved?l.a.createElement("section",{className:"savedRepsSection"},l.a.createElement("h2",{className:"titlePC"},"My Saved Reps"),l.a.createElement("form",null,l.a.createElement("label",{htmlFor:"savedRep"},"Select a postal code to see saved reps:"),l.a.createElement("select",{id:"savedRep",onChange:e.handleChangeSelect,value:e.selectedPostalCode,name:"savedRep"},l.a.createElement("option",{value:""}),e.savedReps.map(function(e){return e.title.map(function(e){if("string"===typeof e)return l.a.createElement("option",{value:e},e)})}))),l.a.createElement("ul",{className:"repInfo"},e.savedReps.map(function(a){return a.title.map(function(t){if(t===e.selectedPostalCode)return a.title.map(function(e){if("object"===typeof e)return l.a.createElement("li",{key:e.key},l.a.createElement(f,{name:e.name,office:e.office,riding:e.riding,party:e.party,email:e.email,phone:e.phone,url:e.url,personalUrl:e.personalUrl}))})})})),e.savedReps.map(function(a){return a.title.map(function(t){if(t===e.selectedPostalCode)return l.a.createElement("button",{className:"button",onClick:function(a){return e.removeButton(a)},id:a.key},"Remove ",e.selectedPostalCode," reps from MyReps")})}),l.a.createElement("button",{className:"button",onClick:e.handleClickTop},"Back to top")):null))},E=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"Footer"},l.a.createElement("footer",null,"Know Your Reps | Data Provided by ",l.a.createElement("a",{href:"https://represent.opennorth.ca/"},"Represent")))}}]),a}(n.Component),C=t(34),g=t(56),b=t.n(g);b.a.initializeApp({apiKey:"AIzaSyB35apiwRzurbwgK47HavC3uT4YUlkAHsM",authDomain:"know-your-government-35104.firebaseapp.com",databaseURL:"https://know-your-government-35104.firebaseio.com",projectId:"know-your-government-35104",storageBucket:"know-your-government-35104.appspot.com",messagingSenderId:"690763001616"});var k=b.a,y=t(35),N=t.n(y),w=t(76),S=t.n(w),R=new k.auth.GoogleAuthProvider,P=k.auth();R.setCustomParameters({prompt:"select_account"});var A=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(c.a)(this,Object(u.a)(a).call(this))).login=function(){P.signInWithPopup(R).then(function(a){var t=a.user,n=a.user.uid;e.initialFirebaseCall(n),e.setState({user:t,userId:n})})},e.logout=function(){P.signOut().then(function(){e.setState({user:null})})},e.handleClick=function(){C.animateScroll.scrollMore(700,{duration:2800,delay:200,smooth:!0})},e.repsHandleClick=function(){console.log("hi"),C.animateScroll.scrollMore(700,{duration:2800,delay:200,smooth:!0}),e.setState({showSaved:!0})},e.handleClickTop=function(){C.animateScroll.scrollToTop({duration:2800,delay:200,smooth:!0})},e.initialFirebaseCall=function(a){k.database().ref("".concat(a)).on("value",function(a){var t=[],n=a.val();for(var l in n)t.push({key:l,title:n[l]});var s={};t.forEach(function(e){e.title.forEach(function(e){"string"===typeof e&&(s.code=e)})}),e.setState({savedReps:t}),P.onAuthStateChanged(function(a){a&&e.setState({user:a,userId:a.uid})})})},e.checkUserList=function(a){return e.state.savedReps.map(function(e){return e.title.findIndex(function(e){return e===a})})},e.saveButton=function(a){a.preventDefault();var t=a.target.value,n=e.checkUserList(t),l=[],s=e.state.userId;if(n.forEach(function(e){-1!==e&&l.push(e)}),e.state.userPostalCode.length<6)N.a.fire("Oops! The postal code you entered has been altered. Double check to ensure it's correct and try again.");else if(l.length>0)N.a.fire("Reps for ".concat(e.state.userPostalCode," have already been saved. See your list!"));else if(e.state.userReps){k.database().ref("".concat(s)).push(e.state.userReps),N.a.fire("Reps for ".concat(e.state.userPostalCode," have been saved."))}},e.removeButton=function(a){var t=e.state.userId,n=a.target.id;k.database().ref("".concat(t,"/").concat(n)).remove()},e.handleSubmit=function(a){a.preventDefault(),S()({method:"GET",url:"https://proxy.hackeryou.com",dataResponse:"json",params:{reqUrl:"https://represent.opennorth.ca/postcodes/".concat(e.state.userPostalCode),xmlToJSON:!1}}).then(function(a){var t=a.data.representatives_centroid,n=a.data.code,l=[],s=[],r=[];t.forEach(function(e){!1===s.includes(e.name)&&(s.push(e.name),l.push(e))}),l.forEach(function(e){var a={key:e.last_name,name:e.name,office:e.elected_office,riding:e.district_name,party:e.party_name,email:e.email,phone:e.offices[0].tel,url:e.url,personalUrl:e.personal_url};r.push(a)}),r.push(n),e.setState({userReps:r,userPostalCode:n,show:!0})})},e.handleChange=function(a){a.target.value=a.target.value.toUpperCase(),a.target.value.indexOf(" ")>=0?e.setState({userPostalCode:a.target.value.replace(/\s/g,"")}):e.setState({userPostalCode:a.target.value})},e.handleChangeSelect=function(a){e.setState({selectedPostalCode:a.target.value})},e.state={userReps:[],savedReps:[],selectedPostalCode:"",userPostalCode:"",show:!1,showSaved:!1,user:null,userId:""},e}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,userPostalCode:this.state.userPostalCode,handleClick:this.handleClick,repsHandleClick:this.repsHandleClick,login:this.login,user:this.state.user,logout:this.logout,savedReps:this.state.savedReps}),!0===this.state.show||!0===this.state.showSaved?l.a.createElement(v,{id:"results",handleClickTop:this.handleClickTop,userReps:this.state.userReps,savedReps:this.state.savedReps,handleClick:this.handleClick,repsHandleClick:this.repsHandleClick,handleChangeSelect:this.handleChangeSelect,selectedPostalCode:this.state.selectedPostalCode,userPostalCode:this.state.userPostalCode,saveButton:this.saveButton,removeButton:this.removeButton,login:this.login,user:this.state.user,show:this.state.show,showSaved:this.state.showSaved}):null,l.a.createElement(E,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},77:function(e,a,t){e.exports=t(165)},82:function(e,a,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.ed23c761.chunk.js.map