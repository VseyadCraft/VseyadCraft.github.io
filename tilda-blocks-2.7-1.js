function t142_checkSize(recid){var el=$("#rec"+recid).find(".t142__submit");if(el.length){var btnheight=el.height()+5;var textheight=el[0].scrollHeight;if(btnheight<textheight){var btntext=el.text();el.addClass("t142__submit-overflowed")}}}
function t270_scroll(hash,offset,speed){if(hash.indexOf('#!/tproduct/')!==-1||hash.indexOf('#!/tab/')!==-1){return!0}
var root=$('html, body');var target="";if(speed===undefined){speed=500}
try{target=$(hash)}catch(event){console.log("Exception t270: "+event.message);return!0}
if(target.length===0){target=$('a[name="'+hash.substr(1)+'"]');if(target.length===0){return!0}}
var isHistoryChangeAllowed=!(window.location.hash===hash);root.animate({scrollTop:target.offset().top-offset},speed,function(){if(!isHistoryChangeAllowed){return}
if(history.pushState){history.pushState(null,null,hash)}else{window.location.hash=hash}
isHistoryChangeAllowed=!1});return!0}
function t456_setListMagin(recid,imglogo){if($(window).width()>980){var t456__menu=$('#rec'+recid+' .t456');var t456__leftpart=t456__menu.find('.t456__leftwrapper');var t456__listpart=t456__menu.find('.t456__list');if(imglogo){t456__listpart.css("margin-right",t456__leftpart.width())}else{t456__listpart.css("margin-right",t456__leftpart.width()+30)}}}
function t456_highlight(){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t456__list_item a[href='"+url+"']").addClass("t-active");$(".t456__list_item a[href='"+url+"/']").addClass("t-active");$(".t456__list_item a[href='"+pathname+"']").addClass("t-active");$(".t456__list_item a[href='/"+pathname+"']").addClass("t-active");$(".t456__list_item a[href='"+pathname+"/']").addClass("t-active");$(".t456__list_item a[href='/"+pathname+"/']").addClass("t-active")}
function t456_checkAnchorLinks(recid){if($(window).width()>=960){var t456_navLinks=$("#rec"+recid+" .t456__list_item a:not(.tooltipstered)[href*='#']");if(t456_navLinks.length>0){t456_catchScroll(t456_navLinks)}}}
function t456_catchScroll(t456_navLinks){var t456_clickedSectionId=null,t456_sections=new Array(),t456_sectionIdTonavigationLink=[],t456_interval=100,t456_lastCall,t456_timeoutId;t456_navLinks=$(t456_navLinks.get().reverse());t456_navLinks.each(function(){var t456_cursection=t456_getSectionByHref($(this));if(typeof t456_cursection!=="undefined"){if(typeof t456_cursection.attr("id")!="undefined"){t456_sections.push(t456_cursection)}
t456_sectionIdTonavigationLink[t456_cursection.attr("id")]=$(this)}});t456_updateSectionsOffsets(t456_sections);t456_sections.sort(function(a,b){return b.attr("data-offset-top")-a.attr("data-offset-top")});$(window).bind('resize',t_throttle(function(){t456_updateSectionsOffsets(t456_sections)},200));$('.t456').bind('displayChanged',function(){t456_updateSectionsOffsets(t456_sections)});setInterval(function(){t456_updateSectionsOffsets(t456_sections)},5000);t456_highlightNavLinks(t456_navLinks,t456_sections,t456_sectionIdTonavigationLink,t456_clickedSectionId);t456_navLinks.click(function(){var t456_clickedSection=t456_getSectionByHref($(this));if(typeof t456_clickedSection!=="undefined"&&!$(this).hasClass("tooltipstered")&&typeof t456_clickedSection.attr("id")!="undefined"){t456_navLinks.removeClass('t-active');$(this).addClass('t-active');t456_clickedSectionId=t456_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var t456_now=new Date().getTime();if(t456_lastCall&&t456_now<(t456_lastCall+t456_interval)){clearTimeout(t456_timeoutId);t456_timeoutId=setTimeout(function(){t456_lastCall=t456_now;t456_clickedSectionId=t456_highlightNavLinks(t456_navLinks,t456_sections,t456_sectionIdTonavigationLink,t456_clickedSectionId)},t456_interval-(t456_now-t456_lastCall))}else{t456_lastCall=t456_now;t456_clickedSectionId=t456_highlightNavLinks(t456_navLinks,t456_sections,t456_sectionIdTonavigationLink,t456_clickedSectionId)}})}
function t456_updateSectionsOffsets(sections){$(sections).each(function(){var t456_curSection=$(this);t456_curSection.attr("data-offset-top",t456_curSection.offset().top)})}
function t456_getSectionByHref(curlink){var hash=curlink.attr("href").replace(/\s+/g,'').replace(/.*#/,'');var block=$(".r[id='"+hash+"']");var anchor=$(".r[data-record-type='215']").has("a[name='"+hash+"']");if(curlink.is('[href*="#rec"]')){return block}else if(anchor.length===1){return anchor}else{return undefined}}
function t456_highlightNavLinks(t456_navLinks,t456_sections,t456_sectionIdTonavigationLink,t456_clickedSectionId){var t456_scrollPosition=$(window).scrollTop(),t456_valueToReturn=t456_clickedSectionId;if(t456_sections.length!=0&&t456_clickedSectionId==null&&t456_sections[t456_sections.length-1].attr("data-offset-top")>(t456_scrollPosition+300)){t456_navLinks.removeClass('t-active');return null}
$(t456_sections).each(function(e){var t456_curSection=$(this),t456_sectionTop=t456_curSection.attr("data-offset-top"),t456_id=t456_curSection.attr('id'),t456_navLink=t456_sectionIdTonavigationLink[t456_id];if(((t456_scrollPosition+300)>=t456_sectionTop)||(t456_sections[0].attr("id")==t456_id&&t456_scrollPosition>=$(document).height()-$(window).height())){if(t456_clickedSectionId==null&&!t456_navLink.hasClass('t-active')){t456_navLinks.removeClass('t-active');t456_navLink.addClass('t-active');t456_valueToReturn=null}else{if(t456_clickedSectionId!=null&&t456_id==t456_clickedSectionId){t456_valueToReturn=null}}
return!1}});return t456_valueToReturn}
function t456_setPath(){}
function t456_setBg(recid){var window_width=$(window).width();if(window_width>980){$(".t456").each(function(){var el=$(this);if(el.attr('data-bgcolor-setbyscript')=="yes"){var bgcolor=el.attr("data-bgcolor-rgba");el.css("background-color",bgcolor)}})}else{$(".t456").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-hex");el.css("background-color",bgcolor);el.attr("data-bgcolor-setbyscript","yes")})}}
function t456_appearMenu(recid){var window_width=$(window).width();if(window_width>980){$(".t456").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.css('visibility')=='hidden'){el.finish();el.css("top","-50px");el.css("visibility","visible");el.animate({"opacity":"1","top":"0px"},200,function(){})}}else{el.stop();el.css("visibility","hidden")}}})}}
function t456_changebgopacitymenu(recid){var window_width=$(window).width();if(window_width>980){$(".t456").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");var bgopacityone=el.attr("data-bgopacity");var bgopacitytwo=el.attr("data-bgopacity-two");var menushadow=el.attr("data-menushadow");if(menushadow=='100'){var menushadowvalue=menushadow}else{var menushadowvalue='0.'+menushadow}
if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll);if(bgopacitytwo=='0'||menushadow==' '){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}else{el.css("background-color",bgcolor);if(bgopacityone=='0.0'||menushadow==' '){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}})}}
function t456_createMobileMenu(recid){var window_width=$(window).width(),el=$("#rec"+recid),menu=el.find(".t456"),burger=el.find(".t456__mobile");burger.click(function(e){menu.fadeToggle(300);$(this).toggleClass("t456_opened")});$(window).bind('resize',t_throttle(function(){window_width=$(window).width();if(window_width>980){menu.fadeIn(0)}},200))}
function t509_setHeight(recid){var t509__el=$("#rec"+recid);var t509__image=t509__el.find(".t509__blockimg");t509__image.each(function(){var t509__width=$(this).attr("data-image-width");var t509__height=$(this).attr("data-image-height");var t509__ratio=t509__height/t509__width;var t509__padding=t509__ratio*100;$(this).css("padding-bottom",t509__padding+"%")});if($(window).width()>960){var t509__textwr=t509__el.find(".t509__textwrapper");var t509__deskimg=t509__el.find(".t509__desktopimg");t509__textwr.each(function(){$(this).css("height",t509__deskimg.innerHeight())})}}
function t602_init(recid){$(window).on('scroll',t_throttle(function(){t602_setProgressBarWidth(recid)},100))}
function t602_setProgressBarWidth(recid){var t602_windowScrollTop=$(window).scrollTop(),t602_docHeight=$(document).height(),t602_winHeight=$(window).height();t602_scrollPercent=(t602_windowScrollTop/(t602_docHeight-t602_winHeight))*100;$(".t602__indicator").css('width',t602_scrollPercent+'%')}
function t615_init(recid){var el=$('#rec'+recid);if(el.find('.t615__title').length){t615_equalHeight(el.find('.t615__title'))}
if(el.find('.t615__descr').length){t615_equalHeight(el.find('.t615__descr'))}
if(el.find('.t615__price').length){t615_equalHeight(el.find('.t615__price'))}
if(el.find('.t615__imgwrapper').length){t615_equalHeight(el.find('.t615__imgwrapper'));$(window).load(function(){t615_equalHeight(el.find('.t615__imgwrapper'))})}};function t615_equalHeight(element){var highestBox=0;element.css('height','');element.each(function(){if($(this).height()>highestBox)highestBox=$(this).height()});if($(window).width()>=960){element.css('height',highestBox)}else{element.css('height','')}}
function t650_unifyHeights(recid){if($(window).width()>=960){$('#rec'+recid+' .t650 .t-container .t650__row').each(function(){var t650_highestBox=0,t650_currow=$(this);$('.t650__inner-col',this).each(function(){var t650_curCol=$(this),t650_curText=t650_curCol.find(".t650__text"),t650_curBtn=t650_curCol.find(".t650__btn-container"),t650_curColHeight=t650_curText.outerHeight()+t650_curBtn.outerHeight();if(t650_curColHeight>t650_highestBox){t650_highestBox=t650_curColHeight}});$('.t650__inner-col',this).css('height',t650_highestBox)})}else{$('.t650__inner-col').css('height','auto')}}
function t668_init(recid){var el=$('#rec'+recid);var toggler=el.find(".t668__header");var accordion=el.find('.t668__accordion');if(accordion){accordion=accordion.attr('data-accordion')}else{accordion="false"}
toggler.click(function(){if(accordion==="true"){toggler.not(this).removeClass("t668__opened").next().slideUp()}
$(this).toggleClass("t668__opened");$(this).next().slideToggle();if(window.lazy==='y'||$('#allrecords').attr('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}})}
function t849_init(recid){var el=$('#rec'+recid);var toggler=el.find('.t849__header');var accordion=el.find('.t849__accordion');if(accordion){accordion=accordion.attr('data-accordion')}else{accordion="false"}
toggler.click(function(){if(accordion==="true"){toggler.not(this).removeClass("t849__opened").next().slideUp()}
$(this).toggleClass('t849__opened');$(this).next().slideToggle();if(window.lazy==='y'||$('#allrecords').attr('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}})}
function t975_init(recid){var el_rec=$('#rec'+recid);var el_menu=el_rec.find('.t975');t975_findActiveItem(recid);el_menu.removeClass('t975__beforeready');t975_checkAnchorLinks(recid);t975_detectIphone(el_menu);if(el_menu.attr('data-hidemenuonscroll')||t975_detectIphone(el_menu)){t975_handleScroll(el_menu)}
if($('#tildacopy').length>0&&$(document).height()>800){t975_addCopyrightMargin(el_menu)}}
function t975_addCopyrightMargin(el_menu){var menuHeight=el_menu.height();$('#tildacopy').css('paddingBottom',menuHeight);t975_handleScroll(el_menu)}
function t975_detectIphone(el_menu){var isIphone=/iPhone/.test(navigator.userAgent)&&!window.MSStream;var aspect=window.screen.width/window.screen.height;var iphoneAspect="0.462";if(isIphone&&aspect.toFixed(3)===iphoneAspect){return!0}}
function t975_findActiveItem(recid){var url=window.location.href;var pathname=window.location.pathname;var hash=window.location.hash;if(url.substr(url.length-1)=='/'){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=='/'){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=='/'){pathname=pathname.slice(1)}
if(pathname==''){pathname='/'}
$(".t975__list-item a[href='"+url+"'] ").addClass('t-active');$(".t975__list-item a[href='"+url+"/']").addClass('t-active');$(".t975__list-item a[href='"+pathname+"']").addClass('t-active');$(".t975__list-item a[href='/"+pathname+"']").addClass('t-active');$(".t975__list-item a[href='"+pathname+"/']").addClass('t-active');$(".t975__list-item a[href='/"+pathname+"/']").addClass('t-active');if(hash){$(".t975__list-item a[href='"+hash+"']").addClass('t-active')}}
function t975_checkAnchorLinks(recid){var navLinks=$('#rec'+recid+" .t975__list-item a:not(.tooltipstered)[href*='#']");if(navLinks.length>0){t975_catchScroll(navLinks,recid)}}
function t975_catchScroll(navLinks,recid){var clickedSectionId=null,sections=new Array(),sectionIdTonavigationLink=[];var el_rec=$('#rec'+recid);var el_menu=el_rec.find('.t975');navLinks=$(navLinks.get().reverse());navLinks.each(function(){var cursection=t975_getSectionByHref($(this));if(typeof cursection.attr('id')!='undefined'){sections.push(cursection)}
sectionIdTonavigationLink[cursection.attr('id')]=$(this)});t975_updateSectionsOffsets(sections);sections.sort(function(a,b){return b.attr('data-offset-top')-a.attr('data-offset-top')});t975_highlightNavLinks(navLinks,sections,sectionIdTonavigationLink,clickedSectionId);navLinks.click(function(){var clickedSection=t975_getSectionByHref($(this));if(!$(this).hasClass('tooltipstered')&&typeof clickedSection.attr('id')!='undefined'){navLinks.removeClass('t-active');$(this).addClass('t-active');clickedSectionId=t975_getSectionByHref($(this)).attr('id')}});$(window).bind('resize',t_throttle(function(){t975_updateSectionsOffsets(sections)}));el_menu.bind('displayChanged',function(){t975_updateSectionsOffsets(sections)});$(window).bind('scroll',t_throttle(function(){clickedSectionId=t975_highlightNavLinks(navLinks,sections,sectionIdTonavigationLink,clickedSectionId)}))}
function t975_updateSectionsOffsets(sections){$(sections).each(function(){var curSection=$(this);curSection.attr('data-offset-top',curSection.offset().top)})}
function t975_getSectionByHref(curlink){var curLinkValue=curlink.attr('href').replace(/\s+/g,'').replace(/.*#/,'');if(curlink.is('[href*="#rec"]')){return $(".r[id='"+curLinkValue+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+curLinkValue+"']")}}
function t975_highlightNavLinks(navLinks,sections,sectionIdTonavigationLink,clickedSectionId){var scrollPosition=$(window).scrollTop(),valueToReturn=clickedSectionId;if(sections.length!=0&&clickedSectionId==null&&sections[sections.length-1].attr('data-offset-top')>scrollPosition+300){navLinks.removeClass('t-active');return null}
$(sections).each(function(e){var curSection=$(this),sectionTop=curSection.attr('data-offset-top'),sectionId=curSection.attr('id'),navLink=sectionIdTonavigationLink[sectionId];if(scrollPosition+300>=sectionTop||(sections[0].attr('id')==sectionId&&scrollPosition>=$(document).height()-$(window).height())){if(clickedSectionId==null&&!navLink.hasClass('t-active')){navLinks.removeClass('t-active');navLink.addClass('t-active');valueToReturn=null}else{if(clickedSectionId!==null&&sectionId==clickedSectionId){valueToReturn=null}}
return!1}});return valueToReturn}
function t975_handleScroll(el_menu){var isScrolling;var lastScrollTop=0;var delta=5;var initialHeight=window.innerHeight;var maxHeight=initialHeight;var menuPadding;$(window).bind('scroll',t_throttle(function(){var currentScrollTop=$(this).scrollTop();if(Math.abs(lastScrollTop-currentScrollTop)<=delta)return;if(t975_detectIphone(el_menu)){if($('#tildacopy').length>0&&$(document).height()>800){var menuHeight=el_menu.outerHeight();$('#tildacopy').css('paddingBottom',menuHeight)}}
if(el_menu.attr('data-hidemenuonscroll')){currentScrollTop>lastScrollTop?el_menu.slideDown(240):el_menu.slideUp()}
lastScrollTop=currentScrollTop}))}
function t992_init(recid){t992_highlight();t992_checkAnchorLinks(recid)}
function t992_highlight(){var url=window.location.href;var pathname=window.location.pathname;var hash=window.location.hash;if(url.substr(url.length-1)=='/'){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=='/'){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=='/'){pathname=pathname.slice(1)}
if(pathname==''){pathname='/'}
$(".t992__list-item a[href='"+url+"'] ").addClass('t-active');$(".t992__list-item a[href='"+url+"/']").addClass('t-active');$(".t992__list-item a[href='"+pathname+"']").addClass('t-active');$(".t992__list-item a[href='/"+pathname+"']").addClass('t-active');$(".t992__list-item a[href='"+pathname+"/']").addClass('t-active');$(".t992__list-item a[href='/"+pathname+"/']").addClass('t-active');if(hash){$(".t992__list-item a[href='"+hash+"']").addClass('t-active')}}
function t992_checkAnchorLinks(recid){var navLinks=$('#rec'+recid+" .t992__list-item a:not(.tooltipstered)[href*='#']");if(navLinks.length>0){t992_catchScroll(navLinks)}}
function t992_catchScroll(navLinks){var clickedSectionId=null,sections=new Array(),sectionIdTonavigationLink=[],interval=100,lastCall,timeoutId;navLinks=$(navLinks.get().reverse());navLinks.each(function(){var cursection=t992_getSectionByHref($(this));if(typeof cursection.attr('id')!='undefined'){sections.push(cursection)}
sectionIdTonavigationLink[cursection.attr('id')]=$(this)});t992_updateSectionsOffsets(sections);sections.sort(function(a,b){return b.attr('data-offset-top')-a.attr('data-offset-top')});$(window).bind('resize',t_throttle(function(){t992_updateSectionsOffsets(sections)},200));$('.t992').bind('displayChanged',function(){t992_updateSectionsOffsets(sections)});setInterval(function(){t992_updateSectionsOffsets(sections)},5000);t992_highlightNavLinks(navLinks,sections,sectionIdTonavigationLink,clickedSectionId);navLinks.click(function(){var clickedSection=t992_getSectionByHref($(this));if(!$(this).hasClass('tooltipstered')&&typeof clickedSection.attr('id')!='undefined'){navLinks.removeClass('t-active');$(this).addClass('t-active');clickedSectionId=t992_getSectionByHref($(this)).attr('id')}});$(window).scroll(function(){var now=new Date().getTime();if(lastCall&&now<lastCall+interval){clearTimeout(timeoutId);timeoutId=setTimeout(function(){lastCall=now;clickedSectionId=t992_highlightNavLinks(navLinks,sections,sectionIdTonavigationLink,clickedSectionId)},interval-(now-lastCall))}else{lastCall=now;clickedSectionId=t992_highlightNavLinks(navLinks,sections,sectionIdTonavigationLink,clickedSectionId)}})}
function t992_updateSectionsOffsets(sections){$(sections).each(function(){var curSection=$(this);curSection.attr('data-offset-top',curSection.offset().top)})}
function t992_getSectionByHref(curlink){var curLinkValue=curlink.attr('href').replace(/\s+/g,'').replace(/.*#/,'');if(curlink.is('[href*="#rec"]')){return $(".r[id='"+curLinkValue+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+curLinkValue+"']")}}
function t992_highlightNavLinks(navLinks,sections,sectionIdTonavigationLink,clickedSectionId){var scrollPosition=$(window).scrollTop(),valueToReturn=clickedSectionId;if(sections.length!=0&&clickedSectionId==null&&sections[sections.length-1].attr('data-offset-top')>scrollPosition+300){navLinks.removeClass('t-active');return null}
$(sections).each(function(e){var curSection=$(this),sectionTop=curSection.attr('data-offset-top'),id=curSection.attr('id'),navLink=sectionIdTonavigationLink[id];if(scrollPosition+300>=sectionTop||(sections[0].attr('id')==id&&scrollPosition>=$(document).height()-$(window).height())){if(clickedSectionId==null&&!navLink.hasClass('t-active')){navLinks.removeClass('t-active');navLink.addClass('t-active');valueToReturn=null}else{if(clickedSectionId!=null&&id==clickedSectionId){valueToReturn=null}}
return!1}});return valueToReturn}