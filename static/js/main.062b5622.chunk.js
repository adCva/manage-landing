(this.webpackJsonpmanage=this.webpackJsonpmanage||[]).push([[0],{24:function(n,e,t){},31:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var i,r,a,o,s,c,d,l,m,h=t(1),p=t.n(h),x=t(16),b=t.n(x),g=(t(24),t(8)),j=t(4),u=t(5),f=u.a.nav(i||(i=Object(j.a)(["\n    width: min(90%, 1200px);\n    margin: 0 auto;\n"]))),w=u.a.nav(r||(r=Object(j.a)(["\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 2rem 0;\n"]))),O=u.a.img(a||(a=Object(j.a)(["\n    display: ",";\n    @media (min-width: 768px) {\n        display: none;\n    }\n"])),(function(n){return n.isVisible?"none":"inline-block"})),v=u.a.img(o||(o=Object(j.a)(["\n    display: ",";\n    position: absolute;\n    top: 32px;\n    right: 6%;\n\n    @media (min-width: 768px) {\n        display: none;\n    }\n"])),(function(n){return n.isVisible?"inline-block":"none"})),y=u.a.div(s||(s=Object(j.a)(["\n    display: ",";\n    justify-content: center;\n    align-items: flex-start;\n    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 999;\n    animation: menuEnter 0.2s ease-in-out forwards;\n\n    @media (min-width: 768px) {\n        position: initial;\n        display: flex;\n        background: transparent;\n    }\n"])),(function(n){return n.isOpen?"flex":"none"})),k=u.a.div(c||(c=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--very-light-gray);\n    padding: 2rem 0;\n    margin-top: 8rem;\n    border-radius: 10px;\n    width: 80%;\n\n    @media (orientation: landscape) {\n        margin-top: 5rem;\n    }\n\n    @media (min-width: 768px) {\n        flex-direction: row;\n        margin-top: 0;\n        width: 100%;\n        background-color: transparent;\n    }\n"]))),z=u.a.button(d||(d=Object(j.a)(["\n    background: transparent;\n    border: none;\n    outline: none;\n    font-weight: var(--fw-medium);\n    margin-bottom: 2rem;\n    cursor: pointer;\n    transition: var(--transition);\n    :last-of-type {\n        margin-bottom: 0;\n        margin-right: 0;\n    }\n\n    :hover {\n        color: var(--dark-grayish-blue);\n    }\n\n    :focus {\n        color: var(--dark-grayish-blue);\n    }\n\n    @media (orientation: landscape) {\n        margin-bottom: 1.3rem;\n    }\n\n    @media (min-width: 768px) {\n        margin-bottom: 0;\n        margin-right: 1rem;\n        font-size: 15px;\n    }\n\n    @media (min-width: 1000px) {\n        margin-bottom: 0;\n        margin-right: 2rem;\n    }\n"]))),C=u.a.div(l||(l=Object(j.a)(["\n    display: none;\n\n    @media (min-width: 768px) {\n        display: inline-block;\n    }\n"]))),A=t(0);var S=function(n){return Object(A.jsx)(M,{onClick:function(){alert("This button is just for show.")},bgColor:n.bg,textColor:n.textColor,hoverColor:n.hoverColor,children:n.text})},M=u.a.button(m||(m=Object(j.a)(["\n    background-color: ",";\n    color: ",";\n\n    border: none;\n    border-radius: 50px;\n    outline: none;\n\n    height: 40px;\n    width: 120px;\n    box-shadow: rgba(242, 95, 58, 0.3) 0px 15px 25px;\n    font-weight: var(--fw-medium);\n    letter-spacing: 0.7px;\n    cursor: pointer;\n    transition: var(--transition);\n\n    :hover {\n        background-color: ",";\n    }\n\n    :focus {\n        background-color: ",";\n    }\n"])),(function(n){return n.bgColor}),(function(n){return n.textColor}),(function(n){return n.hoverColor}),(function(n){return n.hoverColor}));var E,L,P,T=function(){var n=Object(h.useState)(!1),e=Object(g.a)(n,2),t=e[0],i=e[1],r=Object(h.useRef)(),a=function(){alert("This link is just for show."),i(!1)};return Object(h.useEffect)((function(){var n=function(n){!0!==t||r.current.contains(n.target)||i(!1)};return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}})),Object(A.jsx)(f,{children:Object(A.jsxs)(w,{children:[Object(A.jsx)("img",{src:"./images/logo.svg",alt:"Page Logo"}),Object(A.jsx)(O,{onClick:function(){i(!0)},isVisible:t,src:"./images/icon-hamburger.svg",alt:"Open Mobile Menu"}),Object(A.jsxs)(y,{isOpen:t,children:[Object(A.jsx)(v,{onClick:function(){i(!1)},isVisible:t,src:"./images/icon-close.svg",alt:"Close Mobile Menu"}),Object(A.jsxs)(k,{ref:r,children:[Object(A.jsx)(z,{onClick:a,children:"Pricing"}),Object(A.jsx)(z,{onClick:a,children:"Product"}),Object(A.jsx)(z,{onClick:a,children:"About Us"}),Object(A.jsx)(z,{onClick:a,children:"Careers"}),Object(A.jsx)(z,{onClick:a,children:"Community"})]})]}),Object(A.jsx)(C,{children:Object(A.jsx)(S,{bg:"#f25f3a",textColor:"#fafafa",hoverColor:"#f78b70",text:"Get Started"})})]})})},G=u.a.section(E||(E=Object(j.a)(["\n    width: min(90%, 1200px);\n    margin: 2rem auto 0;\n    padding-bottom: 5rem;\n\n    @media (min-width: 768px) {\n        margin: 3rem auto 3rem;\n    }\n\n    @media (min-width: 1220px) {\n        margin: 5rem auto 10rem;\n        padding-bottom: 0;\n    }\n"]))),R=u.a.section(L||(L=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    animation: menuEnter 1s ease-in-out forwards;\n    \n\n    img {\n        width: 100%;\n        margin-bottom: 2rem;\n    }\n\n    @media (min-width: 500px) {\n        img {\n            width: 450px;\n        }\n    }\n\n\n    @media (min-width: 768px) {\n        img {\n            width: 550px;\n        }\n    }\n\n    @media (min-width: 1220px) {\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: flex-start;\n\n        img {\n            width: 600px;\n            margin-bottom: 0;\n            order: 1;\n        }\n    }\n"]))),W=u.a.div(P||(P=Object(j.a)(["\n    text-align: center;\n    padding: 0 2rem;\n\n    h1 {\n        font-weight: var(--fw-bold);\n        font-size: 27px;\n        line-height: 1.2;\n    }\n\n    p {\n        margin: 1rem 0 2rem;\n        color: var(--dark-grayish-blue);\n        line-height: 1.5;\n    }\n\n    @media (min-width: 411px) {\n        h1 {\n            font-size: 30px;\n        }\n    }\n\n    @media (min-width: 500px) {\n        width: 410px;\n        margin: 0 auto;\n        padding: 0;\n\n\n        h1 {\n            font-size: 33px;\n        }\n\n        p {\n            margin: 2rem 0 3rem;\n            font-size: 17px;\n        }\n    }\n\n    @media (min-width: 768px) {\n        h1 {\n            font-size: 35px;\n        }\n\n        p {\n            margin: 2rem 0 3rem;\n            font-size: 18px;\n        }\n    }\n\n    @media (min-width: 1220px) {\n        text-align: left;\n        width: auto;\n        margin: 2rem 0 0;\n\n        h1 {\n            font-size: 45px;\n            width: 400px;\n        }\n\n        p {\n            margin: 3rem 0 4rem;\n            width: 430px;\n        }\n    }\n"])));var B,I,V,_,F,N,U,D,J,Z=function(){return Object(A.jsx)(G,{children:Object(A.jsxs)(R,{children:[Object(A.jsx)("img",{src:"./images/illustration-intro.svg",alt:"Banner"}),Object(A.jsxs)(W,{children:[Object(A.jsx)("h1",{children:"Bring everyone together to build better products."}),Object(A.jsx)("p",{children:"Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view."}),Object(A.jsx)(S,{bg:"#f25f3a",textColor:"#fafafa",hoverColor:"#f78b70",text:"Get Started"})]})]})})},H=u.a.section(B||(B=Object(j.a)(["\n    max-width: 1200px;\n    margin: 0 auto;\n"]))),Y=u.a.section(I||(I=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n\n    @media (min-width: 1200px) {\n        flex-direction: row;\n    }\n"]))),$=u.a.div(V||(V=Object(j.a)(["\n    text-align: center;\n    margin-bottom: 4rem;\n    padding: 0 2rem;\n    animation: enterFromLeft 1s ease-in-out;\n\n    h2 {\n        font-weight: var(--fw-bold);\n        color: var(--dark-blue);\n        font-size: 26px;\n        line-height: 1.3;\n        margin-bottom: 1rem;\n    }\n\n    p {\n        color: var(--dark-grayish-blue);\n        font-size: 14px;\n        line-height: 1.5;\n    }\n\n    @media (min-width: 411px) {\n        width: 400px;\n        margin: 0 auto 4rem;\n\n\n        h2 {\n            font-size: 28px;\n        }\n\n        p {\n            font-size: 16px;\n        }\n    }\n\n    @media (min-width: 768px) {\n        width: 500px;\n\n        h2 {\n            font-size: 30px;\n            margin-bottom: 1.5rem;\n        }\n\n        p {\n            font-size: 17px;\n        }\n    }\n\n    @media (min-width: 1200px) {\n        text-align: left;\n        width: auto;\n        margin: 0 8rem 0 0;\n        padding: 0;\n\n        p {\n            font-size: 16px;\n            width: 400px;\n        }\n    }\n"]))),q=u.a.div(_||(_=Object(j.a)(["\n    padding-left: 1rem;\n    animation: enterFromRight 1s ease-in-out;\n\n    @media (min-width: 375px) {\n        padding-left: 1.5rem;\n    }\n\n    @media (min-width: 768px) {\n        padding-left: 2rem;\n    }\n\n    @media (min-width: 1220px) {\n        padding-left: 0;\n    }\n"]))),K=u.a.div(F||(F=Object(j.a)(["\n    margin-bottom: 3.5rem;\n\n    @media (min-width: 768px) {\n        display: flex;\n        align-items: flex-start;\n    }\n"]))),Q=u.a.h3(N||(N=Object(j.a)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    height: 30px;\n    background-color: var(--very-pale-red);\n    color: var(--dark-blue);\n    font-weight: var(--fw-medium);\n    font-size: 12px;\n    margin-bottom: 1rem;\n    border-top-left-radius: 50px;\n    border-bottom-left-radius: 50px;\n\n    @media (min-width: 320px) {\n        font-size: 14px;\n    }\n\n    @media (min-width: 768px) {\n        display: none;\n    }\n"]))),X=u.a.span(U||(U=Object(j.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 30px;\n    width: 50px;\n    background-color: var(--main-orange);\n    color: var(--very-light-gray);\n    font-weight: var(--fw-regular);\n    margin-right: 0.5rem;\n    border-radius: 50px;\n"]))),nn=u.a.h3(D||(D=Object(j.a)(["\n    display: none;\n\n    @media (min-width: 768px) {\n        display: inline-block;\n        margin-right: 1rem;\n        padding: 0.4rem 0.85rem;\n        background-color: var(--main-orange);\n        color: var(--very-light-gray);\n        font-weight: var(--fw-regular);\n        font-size: 14px;\n        border-radius: 50px;\n    }\n"]))),en=u.a.div(J||(J=Object(j.a)(["\n    h3 {\n        display: none;\n    }\n\n    p {\n        color: var(--dark-grayish-blue);\n        line-height: 1.5;\n        padding-right: 1rem;\n    }\n\n    @media (min-width: 768px) {\n        margin-top: 0.4rem;\n\n        h3 {\n            display: inline-block;\n            font-weight: var(--fw-medium);\n            color: var(--dark-blue);\n            font-size: 18px;\n            margin-bottom: 1.5rem;\n        }\n\n        p {\n            padding-right: 5rem;\n            font-size: 17px;\n        }\n    }\n\n    @media (min-width: 1200px) {\n        p {\n            padding-right: 0;\n        }\n    }\n"])));var tn,rn,an,on,sn=function(){return Object(A.jsx)(H,{children:Object(A.jsxs)(Y,{children:[Object(A.jsxs)($,{children:[Object(A.jsx)("h2",{children:"What\u2019s different about Manage?"}),Object(A.jsx)("p",{children:"Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams."})]}),Object(A.jsxs)(q,{children:[Object(A.jsxs)(K,{children:[Object(A.jsxs)(Q,{children:[Object(A.jsx)(X,{children:"01"}),"Track company-wide progress"]}),Object(A.jsx)(nn,{children:"01"}),Object(A.jsxs)(en,{children:[Object(A.jsx)("h3",{children:"Track company-wide progress"}),Object(A.jsx)("p",{children:"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."})]})]}),Object(A.jsxs)(K,{children:[Object(A.jsxs)(Q,{children:[Object(A.jsx)(X,{children:"02"}),"Advanced built-in reports"]}),Object(A.jsx)(nn,{children:"02"}),Object(A.jsxs)(en,{children:[Object(A.jsx)("h3",{children:"Advanced built-in reports"}),Object(A.jsx)("p",{children:"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."})]})]}),Object(A.jsxs)(K,{children:[Object(A.jsxs)(Q,{children:[Object(A.jsx)(X,{children:"03"}),"Everything you need in one place"]}),Object(A.jsx)(nn,{children:"03"}),Object(A.jsxs)(en,{children:[Object(A.jsx)("h3",{children:"Everything you need in one place"}),Object(A.jsx)("p",{children:"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."})]})]})]})]})})},cn=u.a.section(tn||(tn=Object(j.a)(["\n    margin: 5rem 0;\n    text-align: center;\n\n    h3 {\n        font-weight: var(--fw-bold);\n        font-size: 25px;\n        letter-spacing: 1px;\n        color: var(--dark-blue);\n        margin-bottom: 4rem;\n    }\n\n    @media (min-width: 375px) {\n        h3 {\n            font-size: 28px;\n        }   \n    }\n\n    @media (min-width: 768px) {\n        margin: 7rem 0;\n    }\n\n    @media (min-width: 1220px) {\n        margin: 8rem 0;\n    }\n"]))),dn=u.a.div(rn||(rn=Object(j.a)(["\n    width: 95%;\n    margin: 0 auto 4rem;\n    padding: 1rem 0;\n\n    @media (min-width: 1220px) {\n        display: flex;\n        width: auto;\n        margin: 0;\n    }\n"]))),ln=u.a.div(an||(an=Object(j.a)(["\n    margin-bottom: 3rem;\n\n    img {\n        width: 75px;\n        margin-bottom: -40px;\n    }\n"]))),mn=u.a.div(on||(on=Object(j.a)(["\n    height: 230px;\n    background-color: var(--very-pale-red);\n    padding: 3rem 1.5rem 2rem;\n    border-radius: 5px;\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n\n    h5 {\n        font-weight: var(--fw-bold);\n        font-size: 18px;\n        color: var(--dark-blue);\n        margin: 1rem 0;\n    }\n\n    p {\n        color: var(--dark-grayish-blue);\n        line-height: 1.3;\n    }\n\n    @media (min-width: 1400px) {\n        height: 210px;\n    }\n"]))),hn=t(37),pn=t(35),xn=t(36),bn=t(34);t(28),t(29),t(30),t(31);xn.a.use([bn.a]);var gn,jn,un=function(){var n=Object(h.useState)(1),e=Object(g.a)(n,2),t=e[0],i=e[1];return Object(h.useEffect)((function(){var n=function(){window.innerWidth<767?i(1):window.innerWidth<1219?i(2):i(3)};return window.addEventListener("load",n),window.addEventListener("resize",n),function(){window.removeEventListener("load",n),window.removeEventListener("resize",n)}})),Object(A.jsxs)(cn,{children:[Object(A.jsx)("h3",{children:"What they\u2019ve said"}),Object(A.jsx)(dn,{children:Object(A.jsxs)(hn.a,{pagination:{clickable:!0,className:"swiper-pagination-bullet"},spaceBetween:50,slidesPerView:t,children:[Object(A.jsx)(pn.a,{children:Object(A.jsxs)(ln,{children:[Object(A.jsx)("img",{src:"./images/avatar-anisha.png",alt:"Avatar Anisha"}),Object(A.jsxs)(mn,{children:[Object(A.jsx)("h5",{children:"Anisha Li"}),Object(A.jsx)("p",{children:"\u201cManage has supercharged our team\u2019s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.\u201d"})]})]})}),Object(A.jsx)(pn.a,{children:Object(A.jsxs)(ln,{children:[Object(A.jsx)("img",{src:"./images/avatar-ali.png",alt:"Avatar Ali"}),Object(A.jsxs)(mn,{children:[Object(A.jsx)("h5",{children:"Ali Bravo"}),Object(A.jsx)("p",{children:"\u201cWe have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.\u201d"})]})]})}),Object(A.jsx)(pn.a,{children:Object(A.jsxs)(ln,{children:[Object(A.jsx)("img",{src:"./images/avatar-richard.png",alt:"Avatar Richard"}),Object(A.jsxs)(mn,{children:[Object(A.jsx)("h5",{children:"Richard Watts"}),Object(A.jsx)("p",{children:"\u201cManage allows us to provide structure and process. It keeps us organized and focused. I can\u2019t stop recommending them to everyone I talk to!\u201d"})]})]})}),Object(A.jsx)(pn.a,{children:Object(A.jsxs)(ln,{children:[Object(A.jsx)("img",{src:"./images/avatar-shanai.png",alt:"Avatar Shanai"}),Object(A.jsxs)(mn,{children:[Object(A.jsx)("h5",{children:"Shanai Gough"}),Object(A.jsx)("p",{children:"\u201cTheir software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.\u201d"})]})]})})]})}),Object(A.jsx)(S,{bg:"#f25f3a",textColor:"#fafafa",hoverColor:"#f78b70",text:"Get Started"})]})},fn=u.a.section(gn||(gn=Object(j.a)(['\n    background: url("./images/bg-simplify-section-mobile.svg") center/cover no-repeat;\n    height: 300px;\n    background-color: var(--main-orange);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\n    @media (min-width: 768px) {\n        background: url("./images/bg-simplify-section-desktop.svg") center/cover no-repeat;\n        background-color: var(--main-orange);\n    }\n\n    @media (min-width: 1220px) {\n        height: 220px;\n    }\n']))),wn=u.a.div(jn||(jn=Object(j.a)(["\n    width: min(80%, 1200px);\n    margin: 0 auto;\n\n    h4 {\n        color: var(--very-light-gray);\n        font-weight: var(--fw-medium);\n        font-size: 26px;\n        line-height: 1.4;\n        margin-bottom: 2rem; \n    }\n\n    @media (min-width: 375px) {\n        h4 {\n            font-size: 34px;\n            margin-bottom: 2.5rem; \n        }\n    }\n\n    @media (min-width: 1120px) {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        h4 {\n            text-align: left;\n            width: 40%;\n            margin-bottom: 0; \n        }\n    }\n"])));var On,vn,yn,kn,zn,Cn,An,Sn,Mn,En,Ln=function(){return Object(A.jsx)(fn,{children:Object(A.jsxs)(wn,{children:[Object(A.jsx)("h4",{children:"Simplify how your team works today."}),Object(A.jsx)(S,{bg:"#fafafa",textColor:"#f25f3a",hoverColor:"#dfdfdf",text:"Get Started"})]})})},Pn=u.a.section(On||(On=Object(j.a)(["\n    background-color: var(--very-dark-blue);\n"]))),Tn=u.a.div(vn||(vn=Object(j.a)(["\n    position: relative;\n    width: min(90%, 1200px);\n    margin: 0 auto;\n    padding: 3rem 0 2rem;\n    display: flex;\n    flex-direction: column;\n\n    @media (min-width: 1220px) {\n        flex-direction: row;\n        justify-content: space-between;\n        padding: 5rem 0;\n    }\n"]))),Gn=u.a.div(yn||(yn=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 2rem;\n    order: 1;\n\n    @media (min-width: 1220px) {\n        align-items: flex-start;\n        margin-bottom: 0;\n        order: 0;\n    }\n"]))),Rn=u.a.p(kn||(kn=Object(j.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    font-weight: var(--fw-medium);\n    font-size: 30px;\n    color: var(--very-light-gray);\n    order: 1;\n\n    img {\n        width: 20px;\n        margin-right: 0.3rem;\n    }\n\n    @media (min-width: 1220px) {\n        order: 0;\n    }\n"]))),Wn=u.a.div(zn||(zn=Object(j.a)(["\n    margin-bottom: 1.5rem;\n\n    a {\n        font-size: 25px;\n        color: var(--very-light-gray);\n        margin-right: 1.5rem;\n        cursor: pointer;\n        transition: all 0.2s ease-in-out;\n\n        :last-of-type {\n            margin-right: 0;\n            margin-top: 0;\n        }\n\n        :hover {\n            color: var(--main-orange);\n        }\n\n        :focus {\n            color: var(--main-orange);\n        }\n    }\n\n    @media (min-width: 375px) {   \n        a {\n            font-size: 28px;\n            margin-right: 2rem;\n        }\n    }\n\n    @media (min-width: 1220px) {\n        margin-bottom: 0;   \n\n        a {\n            font-size: 20px;\n            margin-right: 1.5rem;\n        }\n    }\n"]))),Bn=u.a.div(Cn||(Cn=Object(j.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin: 4rem auto;\n    width: 250px;\n    \n    @media (min-width: 320px) {\n        width: 300px;\n    }\n\n    @media (min-width: 768px) {\n        margin: 5rem auto;\n        width: 500px;\n    }\n\n    @media (min-width: 1220px) {\n        margin: 0 auto;\n        width: 300px;\n    }\n"]))),In=u.a.div(An||(An=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n\n    button {\n        background: transparent;\n        color: var(--very-light-gray);\n        border: none;\n        outline: none;\n        font-size: 16px;\n        letter-spacing: 0.5px;\n        margin-bottom: 1.2rem;\n        cursor: pointer;\n        transition: all 0.2s ease-in-out;\n\n        :last-of-type {\n            margin-bottom: 0;\n        }\n\n        :hover {\n            color: var(--main-orange);\n        }\n\n        :focus {\n            color: var(--main-orange);\n        }\n    }\n"]))),Vn=u.a.div(Sn||(Sn=Object(j.a)(['\n    width: 250px;\n    margin: 0 auto;\n    order: -1;\n\n    form {\n        text-align: center;\n    }\n\n    input[type="text"] {\n        height: 40px;\n        width: 170px;\n        margin-right: 0.5rem;\n        padding: 0 0.5rem;\n        border: 2px solid transparent;\n        outline: none;\n        border-radius: 50px;\n        cursor: pointer;\n        transition: all 0.2s ease-in-out;\n\n        :focus {\n            border: 2px solid #fa5656;\n        }\n    }\n\n    input[type="submit"] {\n        height: 40px;\n        width: 60px;\n        border: none;\n        outline: none;\n        border-radius: 50px;\n        background-color: var(--main-orange);\n        color: var(--very-light-gray);\n        cursor: pointer;\n        transition: all 0.2s ease-in-out;\n\n        :hover {\n            background-color: #f78b70;\n        }\n\n        :focus {\n            background-color: #f78b70;\n        }\n    }\n\n    @media (min-width: 375px) {\n        width: 350px;\n\n        input[type="text"] {\n            width: 250px;\n            padding: 0 0.8rem;\n        }\n\n        input[type="submit"] {\n            width: 70px;\n        }\n    }\n\n    @media (min-width: 540px) {\n        width: 400px;\n\n        input[type="text"] {\n            width: 270px;\n            padding: 0 1rem;\n        }\n    }\n\n    @media (min-width: 768px) {\n        width: 500px;\n\n        input[type="text"] {\n            height: 50px;\n            width: 400px;\n        }\n\n        input[type="submit"] {\n            height: 50px;\n            width: 80px;\n        }\n\n        p {\n            font-size: 14px;\n        }\n    }\n\n    @media (min-width: 1220px) {\n        width: auto;\n        margin: 0;\n        order: 0;\n\n        input[type="text"] {\n            height: 40px;\n            width: 270px;\n        }\n\n        input[type="submit"] {\n            height: 40px;\n        }\n    }\n']))),_n=u.a.p(Mn||(Mn=Object(j.a)(["\n    color: ",";\n    margin: 0.5rem 0 0 0.5rem;\n    font-size: 12px;\n    user-select: none;\n    transition: all 0.2s ease-in-out;\n    opacity: ",";\n\n    @media (min-width: 768px) {\n        font-size: 14px;\n    }\n"])),(function(n){return n.messageColor?"#54fcb6":"#fa5656"}),(function(n){return n.showMessage?1:0})),Fn=u.a.p(En||(En=Object(j.a)(["\n    margin-top: 2rem;\n    order: 1;\n    text-align: center;\n    color: var(--dark-grayish-blue);\n    font-size: 14px;\n    letter-spacing: 0.7px;\n    line-height: 1.5;\n\n    @media (min-width: 1220px) {\n        position: absolute;\n        top: 116px;\n        right: 10px;\n    }\n"]))),Nn=t(10);var Un=function(){var n=Object(h.useState)(!1),e=Object(g.a)(n,2),t=e[0],i=e[1],r=Object(h.useState)(!1),a=Object(g.a)(r,2),o=a[0],s=a[1],c=new Date,d=function(){alert("This link is just for show.")};return Object(A.jsx)(Pn,{children:Object(A.jsxs)(Tn,{children:[Object(A.jsxs)(Gn,{children:[Object(A.jsxs)(Rn,{children:[Object(A.jsx)("img",{src:"./images/logo-footer.png",alt:"Logo"})," manage"]}),Object(A.jsxs)(Wn,{children:[Object(A.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:Object(A.jsx)(Nn.a,{})}),Object(A.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:Object(A.jsx)(Nn.e,{})}),Object(A.jsx)("a",{href:"https://twitter.com/",target:"_blank",rel:"noreferrer",children:Object(A.jsx)(Nn.d,{})}),Object(A.jsx)("a",{href:"https://www.pinterest.com/",target:"_blank",rel:"noreferrer",children:Object(A.jsx)(Nn.c,{})}),Object(A.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:Object(A.jsx)(Nn.b,{})})]})]}),Object(A.jsxs)(Bn,{children:[Object(A.jsxs)(In,{children:[Object(A.jsx)("button",{onClick:d,children:"Home"}),Object(A.jsx)("button",{onClick:d,children:"Pricing"}),Object(A.jsx)("button",{onClick:d,children:"Products"}),Object(A.jsx)("button",{onClick:d,children:"About Us"})]}),Object(A.jsxs)(In,{children:[Object(A.jsx)("button",{onClick:d,children:"Careers"}),Object(A.jsx)("button",{onClick:d,children:"Community"}),Object(A.jsx)("button",{onClick:d,children:"Privacy Policy"})]})]}),Object(A.jsxs)(Vn,{children:[Object(A.jsxs)("form",{name:"form",onSubmit:function(n){n.preventDefault();/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n.target.email.value)?(i(!0),s(!0),n.target.email.value=""):s(!0),setTimeout((function(){s(!1),i(!1)}),4e3)},children:[Object(A.jsx)("input",{type:"text",name:"email",placeholder:"Updates in your inbox\u2026"}),Object(A.jsx)("input",{type:"submit",value:"Go"})]}),Object(A.jsx)(_n,{messageColor:t,showMessage:o,children:t?"Please check your email address.":"Please insert a valid email"})]}),Object(A.jsxs)(Fn,{children:["\xa9 Copyright ",c.getFullYear(),". All Rights Reserved"]})]})})};var Dn=function(){return Object(A.jsxs)("div",{children:[Object(A.jsxs)("header",{children:[Object(A.jsx)(T,{}),Object(A.jsx)(Z,{})]}),Object(A.jsxs)("main",{children:[Object(A.jsx)(sn,{}),Object(A.jsx)(un,{}),Object(A.jsx)(Ln,{})]}),Object(A.jsx)("footer",{children:Object(A.jsx)(Un,{})})]})};var Jn=function(){return Object(A.jsx)("div",{className:"App",children:Object(A.jsx)(Dn,{})})};b.a.render(Object(A.jsx)(p.a.StrictMode,{children:Object(A.jsx)(Jn,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.062b5622.chunk.js.map