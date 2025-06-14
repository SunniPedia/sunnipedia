
/* 
 ================================================
 PVII Mega Menu scripts
 Copyright (c) 2013-2015 Project Seven Development
 www.projectseven.com
 Version: 1.2.1 -build 16
 ================================================
 
*/

// define the image swap file naming convention

// rollover image for any image in the normal state
var p7MGMover='_over';

// image for any trigger that has an open sub menu -no rollover
var p7MGMopen='_down';

var p7MGMctl=[],p7MGMi=false,p7MGMa=false,p7MGMadv=[],p7MGMdy=(1000/100),p7MGMkf=false,p7MGMclk=false;
function P7_MGMset(){
	var i,h,sh,hd,x,v,ie=P7_MGMgetIEver();
	if(!document.getElementById || (ie>4 && ie<6)){
		return;
	}
	sh='div.p7MGM.p7MGMdesign-time .mgm-mega-menu {display: none;}\n';
	sh='.mgm-mega-menu {position:absolute; overflow:hidden; display:none; height:0px; top:100%; z-index:999;}\n';
	sh+='.mgm-mega-content {position: relative; display:block;}\n';
	sh+='.p7mgm-spcr {width:100%; display:none;}\n';
	sh+='.p7mgm-fixed {position:fixed !important;top:0;left:0;width:100%}\n';
	sh+='@media only screen and (min-width: 0px) and (max-width: 700px) {\n';
	sh+='.p7MGM.responsive {max-height: 700777px;}\n';
	sh+='.p7MGM.responsive ul a {max-height: 700777px;}\n';
	sh+='.p7MGM div.mgm-mega-menu {\n-webkit-transform: none !important; -webkit-transition: none !important;';
	sh+='transform: none !important; transition: none !important;';
	sh+='opacity:100 !important;}\n';
	sh+='}\n';
	sh+='@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {\n';
	sh+='body * {cursor: pointer;}\n}\n';
	P7_MGMaddSheet(sh);
}
P7_MGMset();
function P7_MGMop(){
	if(!document.getElementById){
		return;
	}
	p7MGMctl[p7MGMctl.length]=arguments;
	if(arguments[1]>3){
		P7_MGMsetCSSanim(arguments);
	}
}
function P7_MGMsetCSSanim(op){
	var i,pf,prf,sh='';
	prf=P7_MGMgetCSSPre();
	if(prf!='none'){
		if(op[1]==4){
			sh+='#'+op[0]+' div.mgm-mega-menu {\n';
			sh+='-webkit-transition: -webkit-transform '+op[2]+'ms, opacity '+op[2]+'ms;\n';
			sh+='transition: transform '+op[2]+'ms, opacity '+op[2]+'ms;\n';
			sh+='-webkit-transform: scale(0);\n';
			sh+='transform: scale(0);\n';
			sh+='opacity: 0;\n}\n';
			sh+='#'+op[0]+' div.mgm-mega-menu.sub-open {\n';
			sh+='-webkit-transform: scale(1);\n';
			sh+='transform: scale(1);\n';
			sh+='opacity: 1;\n}\n';
		}
		else if(op[1]==5){
			sh+='#'+op[0]+' div.mgm-mega-menu {\n';
			sh+='-webkit-transition: -webkit-transform '+op[2]+'ms, opacity '+op[2]+'ms;\n';
			sh+='transition: transform '+op[2]+'ms, opacity '+op[2]+'ms;\n';
			sh+='-webkit-transform: scale(0,1);\n';
			sh+='transform: scale(0,1);\n';
			sh+='opacity: 0;\n}\n';
			sh+='#'+op[0]+' div.mgm-mega-menu.sub-open {\n';
			sh+='-webkit-transform: scale(1,1);\n';
			sh+='transform: scale(1,1);\n';
			sh+='opacity: 1;\n}\n';
		}
		else if(op[1]==6){
			sh+='#'+op[0]+' div.mgm-mega-menu {\n';
			sh+='-webkit-transition: -webkit-transform '+op[2]+'ms, opacity '+op[2]+'ms;\n';
			sh+='transition: transform '+op[2]+'ms, opacity '+op[2]+'ms;\n';
			sh+='-webkit-transform: scale(1,0);\n';
			sh+='transform: scale(1,0);\n';
			sh+='opacity: 0;\n}\n';
			sh+='#'+op[0]+' div.mgm-mega-menu.sub-open {\n';
			sh+='-webkit-transform: scale(1,1);\n';
			sh+='transform: scale(1,1);\n';
			sh+='opacity: 1;\n}\n';
		}
		P7_MGMaddSheet(sh);
	}
}
function P7_MGMbb(){
	P7_MGMshutall();
}
function P7_MGMaddLoad(){
	var ie=P7_MGMgetIEver();
	if(!document.getElementById || (ie>4 && ie<6)){
		return;
	}
	if(window.addEventListener){
		document.addEventListener("DOMContentLoaded",P7_MGMinit,false);
		window.addEventListener("load",P7_MGMinit,false);
		window.addEventListener("unload",P7_MGMbb,false);
		window.addEventListener("resize",P7_MGMrsz,false);
	}
	else if(window.attachEvent){
		document.write("<script id=p7ie_mgm defer src=\"//:\"><\/script>");
		document.getElementById("p7ie_mgm").onreadystatechange=function(){
			if (this.readyState=="complete"){
				if(p7MGMctl.length>0){
					P7_MGMinit();
				}
			}
		};
		window.attachEvent("onload",P7_MGMinit);
		window.attachEvent("onunload",P7_MGMbb);
		window.attachEvent("onresize",P7_MGMrsz);
	}
}
P7_MGMaddLoad();
function P7_MGMinit(){
	var i,j,jj,x,k,pf,pp,tB,tU,tD,cl,cN,tA,d,fs,ls,tBR,iM,sD,sr,s1,s2,dv,wns;
	if(p7MGMctl.length<1){
		return;
	}
	if(p7MGMi){
		return;
	}
	p7MGMi=true;
	document.p7MGMpreload=[];
	pf=P7_MGMgetCSSPre();
	wns=false;
	for(jj=0;jj<p7MGMctl.length;jj++){
		tB=document.getElementById(p7MGMctl[jj][0]);
		if(tB){
			tB.p7opt=p7MGMctl[jj];
			P7_MGMremClass(tB,'p7MGMdesign-time');
			tB.mgmTrigs=[];
			tB.mgmSubs=[];
			tB.mgmSubCnt=[];
			tB.mgmDuration=tB.p7opt[2];
			tB.mgmAnimType='quad';
			if(tB.p7opt[1]>3){
				if(pf=='none'){
					tB.p7opt[1]=1;
				}
			}
			tB.mgmDefLink=false;
			dv=P7_MGMisMobile();
			if(dv=='touch'){
				if(P7_MGMgetStyle(tB,'maxHeight','max-height')!='700777px'){
					dv=false;
				}
			}
			if(dv){
				tB.p7opt[6]=0;
			}
			if(tB.p7opt[3]==1){
				dv=document.createElement('div');
				dv.setAttribute('id',tB.id.replace('_','spcr_'));
				dv.className=tB.className;
				P7_MGMsetClass(dv,'p7mgm-spcr');
				tB.parentNode.insertBefore(dv, tB.nextSibling);
				tB.mgmSpacer=dv;
				dv.mgmMenu=tB;
				if(!wns){
					wns=true;
					if(window.addEventListener){
						window.addEventListener('scroll', P7_MGMfixed, false);
					}
					else if (window.attachEvent){
						window.attachEvent('onscroll', P7_MGMfixed);
					}
				}
			}
			if(tB.p7opt[6]===0 && !p7MGMclk){
				p7MGMclk=true;
				if(window.addEventListener){
					document.addEventListener("click",P7_MGMbody,false);
				}
				else if(window.attachEvent){
					document.addEventListener("onclick",P7_MGMbody,false);
				}
			}
			tB.style.position='relative';
			tB.style.zIndex=tB.p7opt[12];
			tU=document.getElementById(tB.id.replace('_','u_'));
			tB.mgmUL=tU;
			tU.mgmMenu=tB.id;
			tB.mgmMouseTimer=null;
			tB.mgmFixed=false;
			pp=tB;
			while(pp){
				if(P7_MGMgetStyle(pp,'position','position')=='fixed'){
					tB.mgmFixed=true;
					break;
				}
				if(pp.nodeName=='BODY'){
					break;
				}
				pp=pp.parentNode;
			}
			tB.mgmToolbarClosed=false;
			tBR=document.getElementById(tB.id.replace('_','tb_'));
			if(tBR && tU){
				tBR.mgmMenu=tB.id;
				tBR.mgmUL=tU;
				cl=tBR.className;
				if(cl && cl!=='' && cl.indexOf('opened')>-1){
					tU.mgmState='open';
					tBR.mgmState='open';
					P7_MGMsetClass(tU,'opened');
				}
				else{
					P7_MGMremClass(tBR,'closed');
					P7_MGMremClass(tU,'closed');
					tB.mgmToolbarClosed=true;
					tU.mgmState='closed';
					tBR.mgmState='closed';
				}
				tBR.onclick=
function(){
	var tBR=document.getElementById(this.mgmMenu.replace('_','tb_'));
	var tU=this.mgmUL;
	if(tU.mgmState=='open'){
		tBR.mgmState='closed';
		tU.mgmState='closed';
		P7_MGMchangeClass(tBR,'opened','closed');
		P7_MGMchangeClass(tU,'opened','closed');
	}
	else{
		tBR.mgmState='open';
		tU.mgmState='open';
		P7_MGMchangeClass(tBR,'closed','opened');
		P7_MGMchangeClass(tU,'closed','opened');
	}
};
tA=tBR.getElementsByTagName('A');
if(tA && tA[0]){
	tA[0].onclick=function(){
		return false;
	};
}
}
cN=tU.childNodes;
fs=-1;
ls=0;
d=1;
k=-1;
if(cN){
for(j=0;j<cN.length;j++){
	if(cN[j].tagName&&cN[j].tagName=='LI'){
		ls++;
		pp=cN[j].getElementsByTagName('A');
		if(pp && pp[0]){
			tA=pp[0];
		}
		else{
			continue;
		}
		tA.parentNode.setAttribute('id',tA.id.replace('a','i'));
		d++;
		k++;
		if(fs<0){
			P7_MGMsetClass(tA,'mgmfirst');
			P7_MGMsetClass(cN[j],'mgmfirst');
		}
		fs=j;
		tB.mgmTrigs[k]=tA;
		tA.mgmTrigNum=k+1;
		if(!tB.mgmFirstA){
			tB.mgmFirstA=tA;
		}
		tB.mgmSubs[k]=null;
		tA.mgmDiv=tB.id;
		tA.parentNode.mgmDiv=tB.id;
		tA.mgmSub=false;
		tB.mgmDefaultPanel=0;
		tA.mgmState='closed';
		P7_MGMsetClass(tA,'closed');
		P7_MGMsetClass(tA.parentNode,'closed');
		tA.onclick=function(){
			return P7_MGMclick(this);
		};
		P7_MGMsupTouch(tA);
		P7_MGMbindPointer(tA);
		if(tB.p7opt[6]==1){
			tA.onmouseover=function(){
				var tB=document.getElementById(this.mgmDiv);
				if(tB.mgmMouseTimer){
					clearTimeout(tB.mgmMouseTimer);
				}
				if(this.mgmPointer){
					return;
				}
				if(P7_MGMgetStyle(this,'maxHeight','max-height')=='700777px'){
					return;
				}
				if(tB.p7opt[11]==1){
					tB.mgmMouseTimer=setTimeout("P7_MGMtrig('"+this.id+"')",160);
				}
				else{
					P7_MGMtrig(this.id);
				}
			};
		}
		tA.hasImg=false;
		iM=tA.getElementsByTagName("IMG");
		if(iM&&iM[0]){
			sr=iM[0].getAttribute("src");
			iM[0].mgmSwap=tB.p7opt[8];
			x=sr.lastIndexOf(".");
			s1=sr.substring(0,x)+p7MGMover+'.'+sr.substring(x+1);
			s2=sr.substring(0,x)+p7MGMopen+'.'+sr.substring(x+1);
			if(iM[0].mgmSwap==1){
				iM[0].p7imgswap=[sr,s1,s1];
				P7_MGMpreloader(s1);
			}
			else if (iM[0].mgmSwap==2){
				iM[0].p7imgswap=[sr,s1,s2];
				P7_MGMpreloader(s1,s2);
			}
			else{
				iM[0].p7imgswap=[sr,sr,sr];
			}
			iM[0].p7state='closed';
			iM[0].mark=false;
			iM[0].rollover=tB.p7opt[9];
			if(iM[0].mgmSwap>0){
				tA.hasImg=true;
				iM[0].onmouseover=function(){
					P7_MGMimovr(this);
				};
				iM[0].onmouseout=function(){
					P7_MGMimout(this);
				};
				tA.onfocus=function(){
					P7_MGMimovr(this.getElementsByTagName('IMG')[0]);
				};
				tA.onblur=function(){
					P7_MGMimout(this.getElementsByTagName('IMG')[0]);
				};
			}
		}
		sD=document.getElementById(tA.id.replace('a','s'));
		if(sD){
			tA.parentNode.appendChild(sD);
			tB.mgmSubs[k]=sD;
			sD.mgmDiv=tB.id;
			sD.mgmCnt=sD.getElementsByTagName('DIV')[0];
			tB.mgmSubCnt[k]=sD.mgmCnt;
			sD.style.height='0px';
			sD.mgmCnt.style.top='0px';
			sD.mgmCnt.style.left='0px';
			sD.setAttribute('id',tB.id+'s'+tA.mgmTrigNum);
			tA.mgmSub=sD.id;
			sD.mgmTrig=tA.id;
			P7_MGMsetClass(tA,'trig');
			sD.mgmState='closed';
			if(tB.p7opt[6]==1){
				sD.onmouseover=function(){
					var tB=document.getElementById(this.mgmDiv);
					if(tB.mgmMouseTimer){
						clearTimeout(tB.mgmMouseTimer);
					}
				};
			}
		}
	}
}
}
if(fs>0 && tA){
P7_MGMsetClass(tA.parentNode,'mgmlast');
P7_MGMsetClass(tA,'mgmlast');
}
if(tB.p7opt[6]==1){
P7_MGMbindPointer(tB);
tB.onmouseout=function(evt){
	var tg,pp,tA,tB,m=true;
	if(P7_MGMgetStyle(this.mgmTrigs[0],'maxHeight','max-height')=='700777px'){
		return;
	}
	if(this.mgmPointer){
		m=false;
	}
	evt=(evt)?evt:event;
	tg=(evt.toElement)?evt.toElement:evt.relatedTarget;
	if(tg){
		pp=tg;
		while(pp){
			if(pp==this){
				m=false;
				break;
			}
			if(pp.nodeName && pp.nodeName=='BODY'){
				break;
			}
			pp=pp.parentNode;
		}
	}
	if(m){
		if(this.mgmMouseTimer){
			clearTimeout(this.mgmMouseTimer);
		}
		this.mgmMouseTimer=setTimeout("P7_MGMtoggle('"+this.id+"')",250);
	}
};
}
if(tB.mgmToolbarClosed){
P7_MGMsetClass(tBR,'closed');
P7_MGMsetClass(tU,'closed');
}
if(tB.p7opt[4]==1){
P7_MGMcurrentMark(tB);
}
if(typeof(P7_TPMrsz)=='function'){
cN=tB.getElementsByTagName('DIV');
for(i=0;i<cN.length;i++){
	if(cN[i].id && cN[i].id.indexOf('p7TPM')>-1){
		tB.mgmTPM2=true;
		break;
	}
}
}
}
}
p7PMGMa=true;
}
function P7_MGMshutall(bp){
	var i,tB;
	if(p7MGMctl && p7MGMctl.length){
		for(i=0;i<p7MGMctl.length;i++){
			tB=document.getElementById(p7MGMctl[i][0]);
			if(tB && (!bp || bp!=tB.id)){
				P7_MGMtoggle(tB.id,1);
			}
		}
	}
}
function P7_MGMfixed(){
	var i,tB;
	if(p7MGMctl && p7MGMctl.length){
		for(i=0;i<p7MGMctl.length;i++){
			tB=document.getElementById(p7MGMctl[i][0]);
			if(tB && tB.mgmSpacer){
				if(P7_MGMgetStyle(tB.mgmFirstA,'maxHeight','max-height')=='700777px'){
					if(tB.mgmFixedOn){
						tB.mgmSpacer.style.display='none';
						P7_MGMremClass(tB,'p7mgm-fixed');
						tB.mgmFixedOn=false;
					}
					continue;
				}
				if(!tB.mgmFixedOn && tB.getBoundingClientRect().top<0){
					tB.mgmSpacer.style.height=tB.offsetHeight+'px';
					tB.mgmSpacer.style.display='block';
					P7_MGMsetClass(tB,'p7mgm-fixed');
					tB.mgmFixedOn=true;
				}
				else if(tB.mgmFixedOn && tB.mgmSpacer.getBoundingClientRect().top>=0){
					tB.mgmSpacer.style.display='none';
					P7_MGMremClass(tB,'p7mgm-fixed');
					tB.mgmFixedOn=false;
				}
			}
		}
	}
}
function P7_MGMrsz(){
	var i,tB;
	if(p7MGMctl && p7MGMctl.length){
		for(i=0;i<p7MGMctl.length;i++){
			tB=document.getElementById(p7MGMctl[i][0]);
			if(tB){
				if(tB.p7opt[6]==1){
					if(P7_MGMgetStyle(tB,'maxHeight','max-height')!='700777px'){
						P7_MGMtoggle(tB.id,1);
					}
				}
			}
		}
	}
}
function P7_MGMpreloader(){
	var i,x;
	for(i=0;i<arguments.length;i++){
		x=document.p7MGMpreload.length;
		document.p7MGMpreload[x]=new Image();
		document.p7MGMpreload[x].src=arguments[i];
	}
}
function P7_MGMimovr(im){
	var m=true;
	if(im.p7state=='open' && im.rollover===0){
		m=false;
	}
	if(m){
		im.src=im.p7imgswap[1];
	}
}
function P7_MGMimout(im){
	if(im.p7state=='open' || im.mark){
		im.src=im.p7imgswap[2];
	}
	else{
		im.src=im.p7imgswap[0];
	}
}
function P7_MGMtrig(d){
	var i,a;
	a=document.getElementById(d);
	if(a){
		P7_MGMopen(a);
	}
}
function P7_MGMclick(a){
	var wH,tB,m=false;
	wH=window.location.href;
	if(a.href!=wH&&a.href!=wH+'#'){
		if(a.href.toLowerCase().indexOf('javascript:')==-1){
			m=true;
		}
	}
	if(m && a.mgmSub && a.mgmState=='closed'){
		tB=document.getElementById(a.mgmDiv);
		if(tB.p7opt[6]===0){
			m=false;
		}
	}
	if(a.mgmState=='closed'){
		P7_MGMopen(a);
	}
	else{
		P7_MGMclose(a);
	}
	if(m){
		P7_MGMshutall();
	}
	return m;
}
function P7_MGMbody(evt){
	evt=(evt)?evt:event;
	var m=true,pp=(evt.fromElement)?evt.fromElement:evt.target;
	while(pp){
		if(pp && pp.id && typeof(pp.id)=='string' && pp.id.indexOf('p7MGM')===0){
			m=false;
			break;
		}
		if(pp && pp.tagName && (pp.tagName=='BODY'||pp.tagName=='HTML')){
			break;
		}
		pp=pp.parentNode;
	}
	if(m){
		P7_MGMshutall();
	}
}
function P7_MGMopen(a,bp){
	var i,j,tB,sD,op,sC,iM;
	if(a.mgmState=='open'){
		return;
	}
	tB=document.getElementById(a.mgmDiv);
	op=tB.p7opt[1];
	if(P7_MGMgetStyle(a,'maxHeight','max-height')=='700777px'){
		if(op!==0){
			op=0;
		}
	}
	a.mgmState='open';
	P7_MGMchangeClass(a,'closed','open');
	P7_MGMchangeClass(a.parentNode,'closed','open');
	if(!bp){
		P7_MGMtoggle(a);
	}
	if(a.hasImg){
		iM=a.getElementsByTagName("IMG")[0];
		iM.p7state='open';
		iM.src=iM.p7imgswap[2];
	}
	if(a.mgmSub){
		sD=document.getElementById(a.mgmSub);
		if(sD.mgmAnim){
			clearTimeout(sD.mgmAnim);
		}
		sD.mgmState='open';
		if(op==1){
			if(sD.p7MGMrunning){
				clearInterval(sD.p7MGMfade);
				sD.p7MGMrunning=false;
			}
			tB.p7animType='quad';
			sD.mgmStartFade=0;
			sD.mgmFinishFade=99;
			sD.mgmCurrentFade=sD.mgmStartFade;
			if(sD.filters){
				sD.style.filter='alpha(opacity='+sD.mgmCurrentFade+')';
			}
			else{
				sD.style.opacity=sD.mgmCurrentFade/100;
			}
			sD.style.height='auto';
			sD.style.display='block';
			sD.mgmStartTime=P7_MGMgetTime(0);
			sD.mgmDuration=tB.mgmDuration;
			sD.p7MGMrunning=true;
			sD.p7MGMfade=setInterval("P7_MGMfade('"+sD.id+"','"+tB.mgmAnimType+"')",p7MGMdy);
		}
		else if(op==2 || op==3){
			sC=sD.mgmCnt;
			tB.p7animType='quad';
			tB.p7animProp='height';
			tB.p7animUnit='px';
			sD.style.display='block';
			for(j=0;j<tB.mgmTrigs.length;j++){
				if(tB.mgmSubs[j]){
					tB.mgmSubs[j].p7animStartVal=tB.mgmSubs[j].offsetHeight;
				}
			}
			sD.p7animCurrentVal=sD.p7animStartVal;
			sD.p7animFinishVal=sC.offsetHeight;
			sD.style[tB.p7animProp]=sD.p7animCurrentVal+tB.p7animUnit;
			tB.p7animStartTime=P7_MGMgetTime(0);
			tB.p7animDuration=tB.mgmDuration;
			if(!tB.p7MGMrunning){
				tB.p7MGMrunning=true;
				tB.p7MGManim=setInterval("P7_MGManimator('"+tB.id+"',"+op+")",p7MGMdy);
			}
		}
		else if(op>3 && op<99){
			sD.style.visibility='hidden';
			sD.style.display='block';
			sD.style.height='auto';
sD.mgmAnim=setTimeout(function(){
	P7_MGMsetClass(sD,'sub-open');
	sD.style.visibility='visible';
}
,20);
}
else{
sD.style.display='block';
sD.style.height='auto';
}
if(tB.mgmTPM2){
P7_TPMrsz();
}
}
}
function P7_MGMclose(a,bp){
	var i,j,tB,sD,op,iM,sC;
	if(a.mgmState=='closed'){
		return;
	}
	tB=document.getElementById(a.mgmDiv);
	op=tB.p7opt[1];
	a.mgmState='closed';
	P7_MGMchangeClass(a,'open','closed');
	P7_MGMchangeClass(a.parentNode,'open','closed');
	if(P7_MGMgetStyle(a,'maxHeight','max-height')=='700777px'){
		if(op!==0){
			op=0;
		}
	}
	if(a.hasImg){
		iM=a.getElementsByTagName("IMG")[0];
		iM.p7state='closed';
		iM.src=iM.p7imgswap[0];
	}
	if(a.mgmSub){
		sD=document.getElementById(a.mgmSub);
		sD.mgmState='closed';
		if(sD.mgmAnim){
			clearTimeout(sD.mgmAnim);
		}
		if(op==1 || op==3){
			if(sD.p7MGMrunning){
				clearInterval(sD.p7MGMfade);
				sD.p7MGMrunning=false;
			}
			tB.p7animType='quad';
			sD.mgmStartFade=100;
			sD.mgmFinishFade=0;
			sD.mgmCurrentFade=sD.mgmStartFade;
			if(sD.filters){
				sD.style.filter='alpha(opacity='+sD.mgmCurrentFade+')';
			}
			else{
				sD.style.opacity=sD.mgmCurrentFade/100;
			}
			sD.style.height='auto';
			sD.style.display='block';
			sD.mgmStartTime=P7_MGMgetTime(0);
			sD.mgmDuration=tB.mgmDuration;
			sD.p7MGMrunning=true;
			sD.p7MGMfade=setInterval("P7_MGMfade('"+sD.id+"','"+tB.mgmAnimType+"')",p7MGMdy);
		}
		else if(op==2){
			sC=sD.mgmCnt;
			tB.p7animType='quad';
			tB.p7animProp='height';
			tB.p7animUnit='px';
			sD.style.display='block';
			for(j=0;j<tB.mgmTrigs.length;j++){
				if(tB.mgmSubs[j]){
					tB.mgmSubs[j].p7animStartVal=tB.mgmSubs[j].offsetHeight;
				}
			}
			sD.p7animCurrentVal=sD.p7animStartVal;
			sD.p7animFinishVal=0;
			sD.style[tB.p7animProp]=sD.p7animCurrentVal+tB.p7animUnit;
			tB.p7animStartTime=P7_MGMgetTime(0);
			tB.p7animDuration=tB.mgmDuration;
			if(!tB.p7MGMrunning){
				tB.p7MGMrunning=true;
				tB.p7MGManim=setInterval("P7_MGManimator('"+tB.id+"',"+op+")",p7MGMdy);
			}
		}
		else if(op>3){
			P7_MGMremClass(sD,'sub-open');
setTimeout(function(){
	P7_MGMcloseAnim(sD);
}
,tB.mgmDuration);
}
else{
sD.style.display='none';
sD.style.height='0px';
}
}
}
function P7_MGMcloseAnim(el){
	if(el.mgmState=='closed'){
		el.style.display='none';
		el.style.height='0px';
	}
}
function P7_MGMtoggle(a,bp){
	var i,tB;
	if(typeof(a)=='object'){
		tB=document.getElementById(a.mgmDiv);
	}
	else if(typeof(a)=='string'){
		tB=document.getElementById(a);
	}
	else{
		return;
	}
	if(tB.mgmTrigs){
		for(i=0;i<tB.mgmTrigs.length;i++){
			if(tB.mgmTrigs[i]!=a || bp==1){
				if(tB.mgmTrigs[i].mgmState!='closed'){
					P7_MGMclose(tB.mgmTrigs[i]);
				}
			}
		}
	}
}
function P7_MGManimator(d,op){
	var i,tB,tA,tS,et,nv,m=false;
	tB=document.getElementById(d);
	et=P7_MGMgetTime(tB.p7animStartTime);
	if(et>=tB.p7animDuration){
		et=tB.p7animDuration;
	}
	tA=tB.mgmTrigs;
	tS=tB.mgmSubs;
	for(i=0;i<tA.length;i++){
		if(tS[i]){
			if(tS[i].p7animCurrentVal!=tS[i].p7animFinishVal){
				nv=P7_MGManim(tB.p7animType,et,tS[i].p7animStartVal,tS[i].p7animFinishVal-tS[i].p7animStartVal,tB.p7animDuration);
				tS[i].p7animCurrentVal=nv;
				tS[i].style[tB.p7animProp]=nv+tB.p7animUnit;
				if(tS[i].p7animCurrentVal==tS[i].p7animFinishVal){
					if(tA[i].mgmState=='closed'){
						tB.mgmSubs[i].style.display='none';
						tB.mgmSubs[i].style.height='0px';
					}
					else{
						tB.mgmSubs[i].style.height='auto';
					}
				}
				else{
					m=true;
				}
			}
			else{
			}
		}
	}
	if(!m){
		tB.p7MGMrunning=false;
		clearInterval(tB.p7MGManim);
	}
}
function P7_MGMfade(d,tp){
	var i,el,tC,tA,op,et,cet,m=false;
	el=document.getElementById(d);
	et=P7_MGMgetTime(el.mgmStartTime);
	if(et>=el.mgmDuration){
		et=el.mgmDuration;
		m=true;
	}
	if(el.mgmCurrentFade!=el.mgmFinishFade){
		op=P7_MGManim(tp,et,el.mgmStartFade,el.mgmFinishFade-el.mgmStartFade,el.mgmDuration);
		el.mgmCurrentFade=op;
		if(el.filters){
			el.style.filter='alpha(opacity='+el.mgmCurrentFade+')';
		}
		else{
			el.style.opacity=el.mgmCurrentFade/100;
		}
	}
	if(m){
		el.p7MGMrunning=false;
		clearInterval(el.p7MGMfade);
		if(el.mgmFinishFade===0){
			el.style.height='0px';
			el.style.display='none';
		}
		if(el.filters){
			el.style.filter='';
		}
		else{
			el.style.opacity=1;
		}
	}
}
function P7_MGManim(tp,t,b,c,d){
	if(tp=='quad'){
		if((t/=d/2)<1){
			return c/2*t*t+b;
		}
		else{
			return -c/2*((--t)*(t-2)-1)+b;
		}
	}
	else{
		return (c*(t/d))+b;
	}
}
function P7_MGMgetTime(st){
	var d = new Date();
	return d.getTime() - st;
}
function P7_MGMbindPointer(el){
	if(el.ontouchstart !== undefined){
		el.addEventListener('touchstart',P7_MGMsetPointer,false);
	}
	else if(navigator.maxTouchPoints){
		el.addEventListener('pointerover',P7_MGMsetPointer,false);
		el.addEventListener('mouseleave',P7_MGMsetPointer,false);
	}
	else if(navigator.msMaxTouchPoints){
		el.addEventListener('MSPointerOver',P7_MGMsetPointer,false);
		el.addEventListener('mouseleave',P7_MGMsetPointer,false);
	}
}
function P7_MGMsetPointer(evt){
	if(evt.touches && evt.touches.length && evt.touches.length>0){
		this.mgmPointer=true;
	}
	else if(evt.pointerType){
		if( evt.MSPOINTER_TYPE_TOUCH || evt.pointerType=='touch'){
			this.mgmPointer=true;
		}
		else if( evt.MSPOINTER_TYPE_PEN || evt.pointerType=='pen'){
			this.mgmPointer=true;
		}
		else{
			this.mgmPointer=false;
		}
	}
	else{
		this.mgmPointer=false;
	}
}
function P7_MGMmark(){
	p7MGMadv[p7MGMadv.length]=arguments;
}
function P7_MGMcurrentMark(el){
	var j,i,x,wH,cm=false,mt=['',1,'',''],op,r1,k,kk,tA,aU,pp,tr,aT,aP,d,pn,im;
	wH=window.location.href;
	if(el.p7opt[5]!=1){
		wH=wH.replace(window.location.search,'');
	}
	if(wH.charAt(wH.length-1)=='#'){
		wH=wH.substring(0,wH.length-1);
	}
	for(k=0;k<p7MGMadv.length;k++){
		if(p7MGMadv[k][0]&&p7MGMadv[k][0]==el.id){
			mt=p7MGMadv[k];
			cm=true;
			break;
		}
	}
	op=mt[1];
	if(op<1){
		return;
	}
	r1=/index\.[\S]*/i;
	k=-1;
	kk=-1;
	tA=el.getElementsByTagName('A');
	for(j=0;j<tA.length;j++){
		aU=tA[j].href.replace(r1,'');
		if(op>0){
			if(tA[j].href==wH || aU==wH){
				k=j;
				kk=-1;
			}
		}
		if(op==2){
			if(tA[j].firstChild){
				if(tA[j].firstChild.nodeValue==mt[2]){
					kk=j;
				}
			}
		}
		if(op==3&&tA[j].href.indexOf(mt[2])>-1){
			kk=j;
		}
		if(op==4){
			for(x=2;x<mt.length;x+=2){
				if(wH.indexOf(mt[x])>-1){
					if(tA[j].firstChild&&tA[j].firstChild.nodeValue){
						if(tA[j].firstChild.nodeValue==mt[x+1]){
							kk=j;
						}
					}
				}
			}
		}
	}
	k=(kk>k)?kk:k;
	if(k>-1){
		if(tA[k].mgmDiv){
			tr=tA[k];
		}
		else{
			P7_MGMsetClass(tA[k],'current_mark');
			pp=tA[k].parentNode;
			while (pp){
				if(pp.mgmDiv && pp.id && pp.id.indexOf('p7MGMi')===0){
					if(pp.mgmDiv==el.id){
						tr=document.getElementById(pp.id.replace('i','a'));
						if(tr){
							break;
						}
					}
				}
				pp=pp.parentNode;
			}
		}
		if(tr){
			P7_MGMsetClass(tr,'current_mark');
			P7_MGMsetClass(tr.parentNode,'current_mark');
			if(tr.hasImg){
				im=tr.getElementsByTagName('IMG')[0];
				im.mark=true;
				im.src=im.p7imgswap[2];
			}
			if(tr.mgmTrigNum){
				el.mgmDefaultPanel=tr.mgmTrigNum;
			}
		}
	}
}
function P7_MGMchangeClass(ob,clf,clt){
	if(ob){
		var cc,nc;
		cc=ob.className;
		if(cc&&cc.indexOf(clf>-1)){
			nc=cc.replace(clf,clt);
			ob.className=nc;
		}
		else{
			P7_MGMsetClass(ob,clt);
		}
	}
}
function P7_MGMsetClass(ob,cl){
	if(ob){
		var cc,nc,r=/\s+/g;
		cc=ob.className;
		nc=cl;
		if(cc&&cc.length>0){
			if(cc.indexOf(cl)==-1){
				nc=cc+' '+cl;
			}
			else{
				nc=cc;
			}
		}
		nc=nc.replace(r,' ');
		ob.className=nc;
	}
}
function P7_MGMremClass(ob,cl){
	if(ob){
		var cc,nc;
		cc=ob.className;
		if(cc&&cc.indexOf(cl>-1)){
			nc=cc.replace(cl,'');
			nc=nc.replace(/\s+/g,' ');
			nc=nc.replace(/\s$/,'');
			nc=nc.replace(/^\s/,'');
			ob.className=nc;
		}
	}
}
function P7_MGMgetStyle(el,s1,s2){
	var s='';
	if(el.currentStyle){
		s=el.currentStyle[s1];
	}
	else{
		s=document.defaultView.getComputedStyle(el,"").getPropertyValue(s2);
	}
	return s;
}
function P7_MGMaddSheet(sh){
	var h,hd;
	hd=document.head || document.getElementsByTagName('head')[0];
	h=document.createElement('style');
	h.type='text/css';
	if(h.styleSheet){
		h.styleSheet.cssText=sh;
	}
	else{
		h.appendChild(document.createTextNode(sh));
	}
	hd.appendChild(h);
}
function P7_MGMgetCSSPre(){
	var i,dV,pre=['animationDuration','WebkitAnimationDuration'];
	var c='none',cssPre=['','-webkit-'];
	dV=document.createElement('div');
	for(i=0;i<pre.length;i++){
		if(dV.style[pre[i]]!==undefined){
			c=cssPre[i];
			break;
		}
	}
	return c;
}
function P7_MGMgetIEver(){
	var j,v=-1,nv,m=false;
	nv=navigator.userAgent.toLowerCase();
	j=nv.indexOf("msie");
	if(j>-1){
		v=parseFloat(nv.substring(j+4,j+8));
		if(document.documentMode){
			v=document.documentMode;
		}
	}
	return v;
}
function P7_MGMisMobile(){
	var i,m=false,ua=navigator.userAgent.toLowerCase();
	var dv=['iphone','ipad','ipod','touch','android','windows ce','iemobile','windowsce','blackberry','palm','symbian','series60',
	'armv','arm7tdmi','opera mobi','opera mini','polaris','kindle','midp','mmp/','portalmmm','smm-mms','sonyericsson'];
	for(i=0;i<dv.length;i++){
		if(ua.search(dv[i])>-1){
			m=dv[i];
			break;
		}
	}
	return m;
}
function P7_MGMsupTouch(el){
	if(el.addEventListener){
el.addEventListener("selectstart", function(e){
	e.preventDefault();
}
, false);
el.addEventListener("MSHoldVisual", function(e){
	e.preventDefault();
}
, false);
el.addEventListener("contextmenu", function(e){
	e.preventDefault();
}
, false);
}
}
