(this["webpackJsonpreact-social"]=this["webpackJsonpreact-social"]||[]).push([[0],{51:function(e,s,t){},53:function(e,s,t){},77:function(e,s,t){},78:function(e,s,t){},79:function(e,s,t){},80:function(e,s,t){},81:function(e,s,t){},82:function(e,s,t){},83:function(e,s,t){},84:function(e,s,t){},85:function(e,s,t){},86:function(e,s,t){},87:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t.n(a),r=t(38),n=t.n(r),i=(t(51),t(4)),l=t.n(i),o=t(10),j=(t(53),t(101)),b=t(102),u=t(103),d=t(104),p=t(105),m=t(11),h=t(7),O=t(45),x=t(15),f=function(e,s){switch(s.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":case"IS_AUTHENTICATED":return{user:s.payload,isFetching:!1,error:!1};case"LOGIN_FAILED":return{user:null,isFetching:!1,error:s.payload};case"FOLLOW":return Object(x.a)(Object(x.a)({},e),{},{user:Object(x.a)(Object(x.a)({},e.user),{},{following:[].concat(Object(O.a)(e.user.following),[s.payload])})});case"UNFOLLOW":return Object(x.a)(Object(x.a)({},e),{},{user:Object(x.a)(Object(x.a)({},e.user),{},{following:e.user.following.filter((function(e){return e!==s.payload}))})});default:return e}},g=t(5),N=t.n(g),v=t(0),I={user:JSON.parse(localStorage.getItem("auth"))||null,isFetching:!1,error:!1},y=Object(a.createContext)(I),w=function(e){var s=e.children,t=Object(a.useReducer)(f,I),c=Object(h.a)(t,2),r=c[0],n=c[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("auth");e&&(r.user=JSON.parse(e))}),[r]),Object(a.useEffect)((function(){N.a.get("/authenticated").then((function(e){if(401!==e.status){var s=e.data.user,t=JSON.stringify(s);localStorage.setItem("auth",t),n({type:"IS_AUTHENTICATED",payload:s})}})).catch((function(e){n({type:"LOGIN_FAILED",payload:e})}))}),[]),console.log("STATE: ",r),Object(v.jsx)(y.Provider,{value:{user:r.user,isFetching:r.isFetching,error:r.error,dispatch:n},children:s})};function L(){var e=Object(a.useContext)(y).user,s="http://localhost:8800/images/",t=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/auth/logout");case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"topbarContainer",children:[Object(v.jsx)("div",{className:"topbarLeft",children:Object(v.jsx)(m.b,{to:"/",style:{textDecoration:"none"},children:Object(v.jsx)("span",{className:"logo",children:"Socially"})})}),Object(v.jsx)("div",{className:"topbarMid",children:Object(v.jsxs)("div",{className:"searchbar",children:[Object(v.jsx)(j.a,{className:"searchIcon"}),Object(v.jsx)("input",{placeholder:"Search on Socially",className:"searchInput"})]})}),Object(v.jsxs)("div",{className:"topbarRight",children:[Object(v.jsxs)("div",{className:"topbarLinks",children:[Object(v.jsx)("span",{className:"topbarLink",children:"Homepage"}),Object(v.jsx)("span",{className:"topbarLink",children:"Timeline"})]}),Object(v.jsxs)("div",{className:"topbarIcons",children:[Object(v.jsxs)("div",{className:"topbarIconItem",children:[Object(v.jsx)(b.a,{}),Object(v.jsx)("span",{className:"topbarIconBadge",children:"1"})]}),Object(v.jsxs)("div",{className:"topbarIconItem",children:[Object(v.jsx)(u.a,{}),Object(v.jsx)("span",{className:"topbarIconBadge",children:"1"})]}),Object(v.jsxs)("div",{className:"topbarIconItem",children:[Object(v.jsx)(d.a,{}),Object(v.jsx)("span",{className:"topbarIconBadge",children:"1"})]}),Object(v.jsx)("div",{className:"topbarIconItem",children:Object(v.jsx)(p.a,{onClick:t})})]}),Object(v.jsx)(m.b,{to:"/profile/".concat(e.username),children:Object(v.jsx)("img",{src:e.profilePicture?s+e.profilePicture:s+"/person/noAvatar.png",alt:"",className:"topbarImage"})})]})]})}t(77);var k=t(106),C=t(107),T=t(108),S=t(109),F=t(110),P=t(111),A=t(112),R=t(113),_=[{id:1,profilePicture:"person/1.jpeg",username:"Shannon Black"},{id:2,profilePicture:"person/2.jpeg",username:"Janell Shrum"},{id:3,profilePicture:"person/3.jpeg",username:"Alex Durden"},{id:4,profilePicture:"person/4.jpeg",username:"Dora Hawks"},{id:5,profilePicture:"person/5.jpeg",username:"Thomas Holden"},{id:6,profilePicture:"person/6.jpeg",username:"Shirley Beauchamp"},{id:7,profilePicture:"person/7.jpeg",username:"Travis Bennett"},{id:8,profilePicture:"person/8.jpeg",username:"Kristen Thomas"},{id:9,profilePicture:"person/9.jpeg",username:"Gary Duty"},{id:10,profilePicture:"person/10.jpeg",username:"Gracy Violet"}];t(78);function B(e){var s=e.user;return Object(v.jsxs)("li",{className:"sidebarFriend",children:[Object(v.jsx)("img",{className:"sidebarFriendImg",src:"http://localhost:8800/images/"+s.profilePicture,alt:""}),Object(v.jsx)("span",{className:"sidebarFriendName",children:s.username})]})}function E(){return Object(v.jsx)("div",{className:"sidebar",children:Object(v.jsxs)("div",{className:"sidebarWrapper",children:[Object(v.jsxs)("ul",{className:"sidebarList",children:[Object(v.jsxs)("li",{className:"sidebarListItem",children:[Object(v.jsx)(k.a,{className:"sidebarIcon"}),Object(v.jsx)("span",{className:"sidebarListItemText",children:"Feed"})]}),Object(v.jsxs)("li",{className:"sidebarListItem",children:[Object(v.jsx)(u.a,{className:"sidebarIcon"}),Object(v.jsx)("span",{className:"sidebarListItemText",children:"Chats"})]}),Object(v.jsxs)("li",{className:"sidebarListItem",children:[Object(v.jsx)(C.a,{className:"sidebarIcon"}),Object(v.jsx)("span",{className:"sidebarListItemText",children:"Videos"})]}),Object(v.jsxs)("li",{className:"sidebarListItem",children:[Object(v.jsx)(T.a,{className:"sidebarIcon"}),Object(v.jsx)("span",{className:"sidebarListItemText",children:"Groups"})]}),Object(v.jsxs)("li",{className:"sidebarListItem",children:[Object(v.jsx)(S.a,{className:"sidebarIcon"}),Object(v.jsx)("span",{className:"sidebarListItemText",children:"Bookmarks"})]}),Object(v.jsxs)("li",{className:"sidebarListItem",children:[Object(v.jsx)(F.a,{className:"sidebarIcon"}),Object(v.jsx)("span",{className:"sidebarListItemText",children:"Questions"})]}),Object(v.jsxs)("li",{className:"sidebarListItem",children:[Object(v.jsx)(P.a,{className:"sidebarIcon"}),Object(v.jsx)("span",{className:"sidebarListItemText",children:"Jobs"})]}),Object(v.jsxs)("li",{className:"sidebarListItem",children:[Object(v.jsx)(A.a,{className:"sidebarIcon"}),Object(v.jsx)("span",{className:"sidebarListItemText",children:"Events"})]}),Object(v.jsxs)("li",{className:"sidebarListItem",children:[Object(v.jsx)(R.a,{className:"sidebarIcon"}),Object(v.jsx)("span",{className:"sidebarListItemText",children:"Courses"})]})]}),Object(v.jsx)("button",{className:"sidebarButton",children:"Show More"}),Object(v.jsx)("hr",{className:"sidebarHr"}),Object(v.jsx)("ul",{className:"sidebarFriendList",children:_.map((function(e){return Object(v.jsx)(B,{user:e},e.id)}))})]})})}t(79),t(80);var D=t(114),U=t(115),W=t(116),G=t(117),H=t(118);function J(){var e=Object(a.useContext)(y).user,s="http://localhost:8800/images/",t=Object(a.useRef)(),c=Object(a.useState)(),r=Object(h.a)(c,2),n=r[0],i=r[1],j=function(){var s=Object(o.a)(l.a.mark((function s(a){var c,r,i;return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(a.preventDefault(),c={userId:e._id,desc:t.current.value},!n){s.next=16;break}return r=new FormData,i=Date.now()+n.name,r.append("name",i),r.append("file",n),c.img=i,s.prev=8,s.next=11,N.a.post("/upload",r);case 11:s.next=16;break;case 13:s.prev=13,s.t0=s.catch(8),console.log(s.t0);case 16:return s.prev=16,s.next=19,N.a.post("/posts",c);case 19:window.location.reload(),s.next=25;break;case 22:s.prev=22,s.t1=s.catch(16),console.log(s.t1);case 25:case"end":return s.stop()}}),s,null,[[8,13],[16,22]])})));return function(e){return s.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"share",children:Object(v.jsxs)("div",{className:"shareWrapper",children:[Object(v.jsxs)("div",{className:"shareTop",children:[Object(v.jsx)("img",{src:e.profilePicture?s+e.profilePicture:s+"/person/noAvatar.png",alt:"",className:"shareProfileImg"}),Object(v.jsx)("input",{type:"text",placeholder:"What's in your mind, ".concat(e.username,"?"),className:"shareInput",ref:t})]}),Object(v.jsx)("hr",{className:"shareHr"}),n&&Object(v.jsxs)("div",{className:"shareImgContainer",children:[Object(v.jsx)("img",{src:URL.createObjectURL(n),alt:"",className:"shareImg"}),Object(v.jsx)(D.a,{className:"shareCancelling",onClick:function(){return i(null)}})]}),Object(v.jsxs)("form",{className:"shareBottom",onSubmit:j,children:[Object(v.jsxs)("div",{className:"shareOptions",children:[Object(v.jsxs)("label",{htmlFor:"file",className:"shareOption",children:[Object(v.jsx)(U.a,{htmlColor:"tomato",className:"shareIcon"}),Object(v.jsx)("span",{className:"shareOptionText",children:"Photo or Video"}),Object(v.jsx)("input",{style:{display:"none"},type:"file",id:"file",accept:".png,.jpeg,.jpg",onChange:function(e){return i(e.target.files[0])}})]}),Object(v.jsxs)("div",{className:"shareOption",children:[Object(v.jsx)(W.a,{htmlColor:"blue",className:"shareIcon"}),Object(v.jsx)("span",{className:"shareOptionText",children:"Tag"})]}),Object(v.jsxs)("div",{className:"shareOption",children:[Object(v.jsx)(G.a,{htmlColor:"green",className:"shareIcon"}),Object(v.jsx)("span",{className:"shareOptionText",children:"Location"})]}),Object(v.jsxs)("div",{className:"shareOption",children:[Object(v.jsx)(H.a,{htmlColor:"goldenrod",className:"shareIcon"}),Object(v.jsx)("span",{className:"shareOptionText",children:"Feelings"})]})]}),Object(v.jsx)("button",{className:"shareButton",type:"submit",children:"Share"})]})]})})}t(81);var V=t(119),q=t(44);function K(e){var s=e.post,t=Object(a.useState)(s.likes.length),c=Object(h.a)(t,2),r=c[0],n=c[1],i=Object(a.useState)(!1),j=Object(h.a)(i,2),b=j[0],u=j[1],d=Object(a.useState)({}),p=Object(h.a)(d,2),O=p[0],x=p[1],f=Object(a.useContext)(y).user,g=function(){try{N.a.post("/posts/"+s._id+"/like",{userId:f._id})}catch(e){console.log(e)}n(b?r-1:r+1),u(!b)},I="http://localhost:8800/images/";return Object(a.useEffect)((function(){u(s.likes.includes(f._id))}),[f._id,s.likes]),Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/users?userId=".concat(s.userId));case 2:t=e.sent,x(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s.userId]),Object(v.jsx)("div",{className:"post",children:Object(v.jsxs)("div",{className:"postWrapper",children:[Object(v.jsxs)("div",{className:"postTop",children:[Object(v.jsxs)("div",{className:"postTopLeft",children:[Object(v.jsx)(m.b,{to:"/profile/".concat(O.username),children:Object(v.jsx)("img",{src:O.profilePicture?I+O.profilePicture:I+"person/noAvatar.png",className:"postProfileImg",alt:""})}),Object(v.jsx)("span",{className:"postUsername",children:O.username}),Object(v.jsx)("span",{className:"postDate",children:Object(q.a)(s.createdAt)})]}),Object(v.jsx)("div",{className:"postTopRight",children:Object(v.jsx)(V.a,{})})]}),Object(v.jsxs)("div",{className:"postCenter",children:[Object(v.jsx)("span",{className:"postText",children:null===s||void 0===s?void 0:s.desc}),Object(v.jsx)("img",{src:I+s.img,alt:"",className:"postImg"})]}),Object(v.jsxs)("div",{className:"postBottom",children:[Object(v.jsxs)("div",{className:"postBottomLeft",children:[Object(v.jsx)("img",{className:"likeIcon",src:"".concat(I,"like.png"),onClick:g,alt:""}),Object(v.jsx)("img",{className:"likeIcon",src:"".concat(I,"heart.png"),onClick:g,alt:""}),Object(v.jsxs)("span",{className:"postLikeCounter",children:[r," people like it"]})]}),Object(v.jsx)("div",{className:"postBottomRight",children:Object(v.jsxs)("span",{className:"postCommentText",children:[s.comment," comments"]})})]})]})})}function M(e){var s=e.username,t=Object(a.useState)([]),c=Object(h.a)(t,2),r=c[0],n=c[1],i=Object(a.useContext)(y).user;return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=6;break}return e.next=3,N.a.get("/posts/profile/"+s);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,N.a.get("posts/timeline/"+i._id);case 8:e.t0=e.sent;case 9:t=e.t0,n(t.data.sort((function(e,s){return new Date(s.createdAt)-new Date(e.createdAt)})));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s,i._id]),Object(v.jsx)("div",{className:"feed",children:Object(v.jsxs)("div",{className:"feedWrapper",children:[(!s||s===i.username)&&Object(v.jsx)(J,{}),r.map((function(e){return Object(v.jsx)(K,{post:e},e._id)}))]})})}t(82),t(83);function z(e){var s=e.user;return Object(v.jsxs)("li",{className:"rightbarFriend",children:[Object(v.jsxs)("div",{className:"rightbarProfileImgContainer",children:[Object(v.jsx)("img",{src:"http://localhost:8800/images/"+s.profilePicture,alt:"",className:"rightbarProfileImg"}),Object(v.jsx)("span",{className:"rightbarOnline"})]}),Object(v.jsx)("span",{className:"rightbarUsername",children:s.username})]})}var Q=t(120),Y=t(121);function X(e){var s=e.user,t="http://localhost:8800/images/",c=Object(a.useState)([]),r=Object(h.a)(c,2),n=r[0],i=r[1],j=Object(a.useContext)(y),b=j.user,u=j.dispatch,d=Object(a.useState)(!1),p=Object(h.a)(d,2),O=p[0],x=p[1];Object(a.useEffect)((function(){var e=b.following.includes(null===s||void 0===s?void 0:s._id);x(e)}),[b,s]),Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("/users/friends/"+s._id);case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[s]);var f=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!O){e.next=7;break}return e.next=4,N.a.post("/users/".concat(s._id,"/unfollow"),{userId:b._id});case 4:u({type:"UNFOLLOW",payload:s._id}),e.next=10;break;case 7:return e.next=9,N.a.post("/users/".concat(s._id,"/follow"),{userId:b._id});case 9:u({type:"FOLLOW",payload:s._id});case 10:x(!O),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),g=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"birthdayContainer",children:[Object(v.jsx)("img",{src:"".concat(t,"gift.png"),alt:"",className:"birthdayImg"}),Object(v.jsxs)("span",{className:"birthdayText",children:[Object(v.jsx)("b",{children:"Pola Foster"})," and ",Object(v.jsx)("b",{children:"3 other friends"})," have birthday today."]})]}),Object(v.jsx)("img",{src:"".concat(t,"/ad.png"),alt:"",className:"rightbarAd"}),Object(v.jsx)("h4",{className:"rightbarTitle",children:"Online Friends"}),Object(v.jsx)("ul",{className:"rightbarFriendsList",children:_.map((function(e){return Object(v.jsx)(z,{user:e},e.id)}))})]})},I=function(){return Object(v.jsxs)(v.Fragment,{children:[s.username!==b.username&&Object(v.jsxs)("button",{className:"rightbarFollowButton",onClick:f,children:[O?"Unfollow":"Follow",O?Object(v.jsx)(Q.a,{}):Object(v.jsx)(Y.a,{})]}),Object(v.jsx)("h4",{className:"rightbarTitle",children:"User information"}),Object(v.jsxs)("div",{className:"rightbarInfo",children:[Object(v.jsxs)("div",{className:"rightbarInfoItem",children:[Object(v.jsx)("span",{className:"rightbarInfoKey",children:"City: "}),Object(v.jsx)("span",{className:"rightbarInfoValue",children:s.city||"Not Announced"})]}),Object(v.jsxs)("div",{className:"rightbarInfoItem",children:[Object(v.jsx)("span",{className:"rightbarInfoKey",children:"From: "}),Object(v.jsx)("span",{className:"rightbarInfoValue",children:s.from||"Not Announced"})]}),Object(v.jsxs)("div",{className:"rightbarInfoItem",children:[Object(v.jsx)("span",{className:"rightbarInfoKey",children:"Relationship: "}),Object(v.jsx)("span",{className:"rightbarInfoValue",children:1===s.relationship?"Single":2===s.relationship?"Commited":"Not Announced"})]})]}),Object(v.jsx)("h4",{className:"rightbarTitle",children:"User friends"}),Object(v.jsx)("div",{className:"rightbarFollowings",children:n.map((function(e){return Object(v.jsx)(m.b,{to:"/profile/"+e.username,style:{textDecoration:"none"},children:Object(v.jsxs)("div",{className:"rightbarFollowing",children:[Object(v.jsx)("img",{src:e.profilePicture?t+e.profilePicture:t+"person/noAvatar.png",alt:"",className:"rightbarFollowingImg"}),Object(v.jsx)("span",{className:"rightbarFollowingName",children:e.username})]})},e._id)}))})]})};return Object(v.jsx)("div",{className:"rightbar",children:Object(v.jsx)("div",{className:"rightbarWrapper",children:s?Object(v.jsx)(I,{}):Object(v.jsx)(g,{})})})}function Z(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(L,{}),Object(v.jsxs)("div",{className:"homeContainer",children:[Object(v.jsx)(E,{}),Object(v.jsx)(M,{}),Object(v.jsx)(X,{})]})]})}t(84);var $=function(){var e=Object(o.a)(l.a.mark((function e(s,t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOGIN_START"}),e.prev=1,e.next=4,N.a.post("/auth/login",s);case 4:a=e.sent,console.log("RES DATA: ",a.data),t({type:"LOGIN_SUCCESS",payload:a.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:"LOGIN_FAILED",payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(s,t){return e.apply(this,arguments)}}(),ee=t(122);function se(){var e=Object(a.useRef)(),s=Object(a.useRef)(),t=Object(a.useContext)(y),c=t.isFetching,r=t.dispatch;return Object(v.jsx)("div",{className:"login",children:Object(v.jsxs)("div",{className:"loginWrapper",children:[Object(v.jsxs)("div",{className:"loginLeft",children:[Object(v.jsx)("h3",{className:"loginLogo",children:"Socially"}),Object(v.jsx)("span",{className:"loginDesc",children:"Connect with friends and the world around you on socially."})]}),Object(v.jsx)("div",{className:"loginRight",children:Object(v.jsxs)("form",{className:"loginBox",onSubmit:function(t){t.preventDefault(),$({username:e.current.value,password:s.current.value},r)},children:[Object(v.jsx)("input",{type:"text",placeholder:"Email/Username",className:"loginInput",ref:e,required:!0}),Object(v.jsx)("input",{type:"password",placeholder:"Password",className:"loginInput",ref:s,minLength:"8",required:!0}),Object(v.jsx)("button",{className:"loginButton",disabled:c,children:c?Object(v.jsx)(ee.a,{color:"white",size:"25px"}):"Log In"}),Object(v.jsx)("span",{className:"loginForgot",children:"Forgot Password?"}),Object(v.jsx)(m.b,{to:"/register",className:"loginRegisterButtonLink",children:Object(v.jsx)("button",{className:"loginRegisterButton",disabled:c,children:c?Object(v.jsx)(ee.a,{color:"white",size:"25px"}):"Create a New Account"})})]})})]})})}t(85);var te=t(3);function ae(){var e="http://localhost:8800/images/",s=Object(a.useState)({}),t=Object(h.a)(s,2),c=t[0],r=t[1],n=Object(te.h)().username;return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/users?username=".concat(n));case 2:s=e.sent,r(s.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),console.log(c),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(L,{}),Object(v.jsxs)("div",{className:"profile",children:[Object(v.jsx)(E,{}),Object(v.jsxs)("div",{className:"profileRight",children:[Object(v.jsxs)("div",{className:"profileRightTop",children:[Object(v.jsxs)("div",{className:"profileCover",children:[Object(v.jsx)("img",{src:c.coverPicture?e+c.coverPicture:e+"/person/noCover.png",alt:"",className:"profileCoverImg"}),Object(v.jsx)("img",{src:c.profilePicture?e+c.profilePicture:e+"/person/noAvatar.png",alt:"",className:"profileUserImg"})]}),Object(v.jsxs)("div",{className:"profileInfo",children:[Object(v.jsx)("h4",{className:"profileInfoName",children:c.username}),Object(v.jsx)("span",{className:"profileInfoDesc",children:c.bio})]})]}),Object(v.jsxs)("div",{className:"profileRightBottom",children:[Object(v.jsx)(M,{username:n}),Object(v.jsx)(X,{user:c})]})]})]})]})}t(86);function ce(){var e=Object(a.useRef)(),s=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),r=Object(te.g)(),n=function(){var a=Object(o.a)(l.a.mark((function a(n){var i;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),t.current.value===c.current.value){a.next=5;break}c.current.setCustomValidity("Passwords don't match!"),a.next=15;break;case 5:return i={username:e.current.value,email:s.current.value,password:t.current.value},a.prev=6,a.next=9,N.a.post("/auth/register",i);case 9:r("/login"),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(6),console.log(a.t0);case 15:case"end":return a.stop()}}),a,null,[[6,12]])})));return function(e){return a.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"login",children:Object(v.jsxs)("div",{className:"loginWrapper",children:[Object(v.jsxs)("div",{className:"loginLeft",children:[Object(v.jsx)("h3",{className:"loginLogo",children:"Socially"}),Object(v.jsx)("span",{className:"loginDesc",children:"Connect with friends and the world around you on socially."})]}),Object(v.jsx)("div",{className:"loginRight",children:Object(v.jsxs)("form",{className:"loginBox",onSubmit:n,children:[Object(v.jsx)("input",{type:"text",placeholder:"Username",className:"loginInput",ref:e,required:!0}),Object(v.jsx)("input",{type:"email",placeholder:"Email",className:"loginInput",ref:s,required:!0}),Object(v.jsx)("input",{type:"password",placeholder:"Password",className:"loginInput",ref:t,minLength:"8",required:!0}),Object(v.jsx)("input",{type:"password",placeholder:"Confirm Password",className:"loginInput",ref:c,required:!0}),Object(v.jsx)("button",{className:"loginButton",type:"submit",children:"Sign up"}),Object(v.jsx)(m.b,{className:"loginRegisterButtonLink",to:"/login",children:Object(v.jsx)("button",{className:"loginRegisterButton",children:"Log into your account"})})]})})]})})}function re(e){var s=e.children,t=Object(a.useContext)(y).user;return console.log("TYPE: ",t),t?s:Object(v.jsx)(te.a,{from:"/",to:"/login"})}function ne(e){return Object(a.useContext)(y).user?Object(v.jsx)(te.a,{replace:!0,to:"/"}):e.children}var ie=function(){return Object(v.jsx)(m.a,{children:Object(v.jsxs)(te.d,{children:[Object(v.jsx)(te.b,{exact:!0,path:"/",element:Object(v.jsx)(re,{children:Object(v.jsx)(Z,{})})}),Object(v.jsx)(te.b,{path:"/login",element:Object(v.jsx)(ne,{children:Object(v.jsx)(se,{})})}),Object(v.jsx)(te.b,{path:"/register",element:Object(v.jsx)(ne,{children:Object(v.jsx)(ce,{})})}),Object(v.jsx)(te.b,{path:"/profile/:username",element:Object(v.jsx)(re,{children:Object(v.jsx)(ae,{})})})]})})};n.a.hydrate(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(w,{children:Object(v.jsx)(ie,{})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.6c601bcb.chunk.js.map