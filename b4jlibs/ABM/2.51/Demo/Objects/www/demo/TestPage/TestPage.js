// This WebApp/WebSite was generated using ABMaterial, a B4X library written by Alain Bailleul 2015-2016. See http://alwaysbusycorner.com/abmaterial/
$(window).resize(function() {resizecells();});function resizecells() {$('[data-fixedbottom]').each(function() {var bheight = $(this).data('fixedbottom');var newHeight=window.innerHeight - $(this).offset().top - parseInt($(this).css('padding-top')) - parseInt($(this).css('padding-bottom')) - bheight;$(this).height(newHeight);});};function initplugins(){$('.materialboxed').materialbox();$('.tooltipped').tooltip({delay:50});$('.collapsible').collapsible();InitEditEnterFields();$('#sidenavbutton').on('click', function() {$('.dropdown-content').hide();});resizecells();}
function reinitmaterialbox(id) {$('#' + id).materialbox();}
function reinitcollapsable(id) {initcollapse(id);}
function reinitdropdown(id) {$(".dropdown-button").dropdown();}
function reinitinputfields() {InitEditEnterFields();TextAreaAllResize();$('.dropdown-button2').dropdown2();}
function inittooltipped(id){$('#' + id).tooltip({delay:50});};function inittable(id, hasscroll, sortable, collapsable) {if (collapsable) {$('#' + id).treetable({expandable: true,stringCollapse: $('#' + id).attr('colstring'),stringExpand: $('#' + id).attr('expstring')});$(this).closest('tbody').children('tr').each(function() {$(this).removeClass("abmselected");});$(this).closest('tr').addClass("abmselected");$('#' + id + ' td').off('mouseup touchend').on('mouseup touchend', function(e) {if ($(this).attr('id').slice(0, 5) == 'empty') {return;}if ($(this).closest('tr').is("[data-tt-drag]")) {var tablename = $('#' + id).attr('name');var evname = $('#' + id).attr('evname');var currthis = $(this);var treerowid = $(this).closest('tr').attr('data-tt-id');b4j_raiseEvent('page_parseevent', {'eventname': evname + '_clicked','eventparams': 'treerowid,treecellid','treerowid': treerowid,'treecellid': currthis.attr('id')});return;}var tablename = $('#' + id).attr('name');var currthis = $(this);var treerowid = $(this).closest('tr').attr('data-tt-id');if (e.stopPropagation) {e.stopPropagation();} else if (window.event) {window.event.cancelBubble = true;}b4j_raiseEvent('page_parseevent', {'eventname': evname + '_clicked','eventparams': 'treerowid,treecellid','treerowid': treerowid,'treecellid': currthis.attr('id')});});return;}if (sortable) {sorttable.makeSortable(document.getElementById(id))}if (hasscroll) {jQuery('#' + id).ABMTableScroll();}if ($('#' + id).hasClass('tableinteractive')) {$('#' + id + ' tbody td').off('mouseup touchend').on('mouseup touchend', function(e) {var tablename = $('#' + id).attr('name');var evname = $('#' + id).attr('evname');var currthis = $(this);$('#' + tablename + ' tr').children('td').each(function() {$(this).removeClass("selected");});currthis.closest('tr').children('td').each(function() {$(this).addClass("selected");});if (e.stopPropagation) {e.stopPropagation();} else if (window.event) {window.event.cancelBubble = true;}b4j_raiseEvent('page_parseevent', {'eventname': evname + '_clicked','eventparams': 'abmistable,target','abmistable': 'abmistable','target': currthis.attr('id')});});$('#' + id + ' th').off('mouseup touchend').on('mouseup touchend', function(e) {var tablename = $('#' + id).attr('name');var evname = $('#' + id).attr('evname');var currthis = $(this);var order = 'ASC';if ($(this).hasClass('sorttable_nosort')) {return;}if ($(this).hasClass('sorttable_sorted')) {order = 'DESC';}if ($(this).hasClass('sorttable_sorted_reverse')) {order = 'ASC';}if (e.stopPropagation) {e.stopPropagation();} else if (window.event) {window.event.cancelBubble = true;}e.preventDefault();b4j_raiseEvent('page_parseevent', {'eventname': evname + '_sortchanged','eventparams': 'datafield,order','datafield': currthis.attr('fieldname'),'order': order});});}$('[contenteditable=true]').focus(function() {$(this).data('initialText', $(this).html());var el = document.getElementById($(this).attr('id'));requestAnimationFrame(function() {selectElementContents(el);});});$('[contenteditable=true]').blur(function() {if ($(this).data('initialText') !== $(this).html()) {var sp = $(this).attr('id').split('_');var row = sp[1];var col = sp[2];b4j_raiseEvent('page_parseevent', {'eventname': $(this).attr('evname') + '_changed', 'eventparams': 'row,column,value', 'row': row, 'column': col, 'value': $(this).html()});}});};function gettablestringvalue(id,cellid){return $('#' + cellid).text();};function replacemewith(id,html) {$('#' + id).replaceWith(html);}function replacemeinnerwith(id,html) {$('#' + id).html(html);}function replacemewithresetpos(id,html,scrollid,tableid,hasscroll,sortable,collapsable, realid) {var currpos=SaveTablePosition(scrollid);$('#' + id).replaceWith(html);inittable(tableid,hasscroll,sortable,collapsable);RestoreTablePosition(scrollid,currpos);}function initboxed(){$('.materialboxed').materialbox();};function inittooltipped(){$('.tooltipped').tooltip({delay:50});};function initcollapse(id){setactiveheaders(gahret);$('#' + id).collapsible();};function initdropdown(){$('.dropdown-button2').dropdown2();};function SetDisabled(item, b) {$('#' + item).prop('disabled', b)}function SetChecked(item, b) {$('#' + item).prop('checked', b)}function EmptyMe(id) {$('#' + id).empty();}function RemoveMe(id) {$('#' + id).remove();}function RemoveBubbles(id) {$('.bubble-typing'+id).remove();}function RemoveMeParent(id) {$('#' + id).parent().remove();}function AddHTMLPageComponent(html) {$('main').append(html);}function AddHTML(parentid, html) {$('#' + parentid).append(html);}function AddHTMLToMain(html) {$('main').append(html);}function InsertHTMLAfter(parentid, html) {$(html).insertAfter($('#' + parentid));}function InsertHTMLBefore(parentid, html) {$(html).insertBefore($('#' + parentid));}function AddClass(id, cl) {$('#' + id).addClass(cl);}function RemoveClass(id, cl) {$('#' + id).removeClass(cl);}function RunToast(duration, rounded, html, extra, backgroundcolor) {Materialize.toast(html, duration, rounded, function(){b4j_raiseEvent('page_parseevent',{'eventname':'page_toastdismissed','eventparams':'toastid','toastid':extra})});$('#' + extra).parent().css('background-color', backgroundcolor);}function RunToastNoConnection(counter) {Materialize.toast('<span id="toasterror' + counter + '" class="white-text">No connection!</span>',5000,'rounded');$('#toasterror'+counter).parent().css('background-color','#FF0000');}function toastclick(extra, butid) {b4j_raiseEvent('page_parseevent', {'eventname':'page_toastclicked','eventparams':'toastid,action','toastid':extra,'action':butid});}function dismisstoast(toastid) {Vel($('#' + toastid).parent(), {'opacity':0,marginTop:'-40px'},{duration:375,easing:'easeOutExpo',queue:false,complete:function(){$('#' + toastid).parent().remove();}});}function navclick(page, item, url) {if (item!='togglefullscreen') {if ($('#sidenavbutton').is(':visible')) {$('.button-collapse').sideNav('hide');}b4j_raiseEvent('page_parseevent', {'eventname': 'page_navigationbarclicked','eventparams': 'action,value', 'action': item, 'value': url});}}function SetProperty(id, name, value) {$('#' + id).attr(name, value);}function GetProperty(id, name) {return $('#' + id).attr(name);}function SetCSS(id, name, value) {$('#' + id).css(name, value);}function GetCSS(id, name) {return $('#' + id).css(name);}function RemoveProperty(id, name) {$('#' + id).removeAttr(name);}function ShowModal(id, dismissible, size) {initdropdown();InitEditEnterFields();$('#' + id + '_modalcontent').animate({ scrollTop: 0 }, 'fast');$('#' + id).openModal({'dismissible': dismissible, 'end_top': size, 'complete': function() {b4j_raiseEvent('page_parseevent', {'eventname':  'page_modalsheetdismissed','eventparams': 'modalsheetname', 'modalsheetname': id});}});$(window).trigger('resize');$('#' + id).focus();Materialize.updateTextFields();}function ShowModalRelativeCell(id, dismissible, tlcellid, cellwidth) {initdropdown();InitEditEnterFields();var tlcell=$('#' + tlcellid);var mleft=tlcell.offset().left;var mtop=tlcell.offset().top;var windowHeight;if (self.innerHeight) {windowHeight = self.innerHeight;} else if (document.documentElement && document.documentElement.clientHeight) {windowHeight = document.documentElement.clientHeight;} else if (document.body) {windowHeight = document.body.clientHeight;}if ((tlcell[0].getBoundingClientRect().top+tlcell.height()/2)>windowHeight/2) {mtop-=$('#' + id).height();} else {mtop+=tlcell.height();}var mwidth=tlcell.outerWidth();var counter=1;tlcell.siblings().each(function() {if ((counter<cellwidth) && (tlcellid<$(this).attr('id'))) {mwidth+=$(this).outerWidth();counter++;}});$('#' + id + '_modalcontent').animate({ scrollTop: 0 }, 'fast');$('#' + id).css({position: 'absolute',margin: 0, left: mleft, width: mwidth});$('#' + id).openModal({'dismissible': dismissible, 'end_top': mtop, 'complete': function() {b4j_raiseEvent('page_parseevent', {'eventname':  'page_modalsheetdismissed','eventparams': 'modalsheetname', 'modalsheetname': id});}});$('body').css('overflow', '');$(window).trigger('resize');$('#' + id).focus();Materialize.updateTextFields();}function ShowModalRelativeComponent(id, dismissible, tlcellid, fixedwidth) {initdropdown();InitEditEnterFields();var tlcell=$('#' + tlcellid);var mleft=tlcell.offset().left;var mtop=tlcell.offset().top;var windowHeight;if (self.innerHeight) {windowHeight = self.innerHeight;} else if (document.documentElement && document.documentElement.clientHeight) {windowHeight = document.documentElement.clientHeight;} else if (document.body) {windowHeight = document.body.clientHeight;}if ((tlcell[0].getBoundingClientRect().top+tlcell.height()/2)>windowHeight/2) {mtop-=$('#' + id).height();} else {mtop+=tlcell.height();}$('#' + id + '_modalcontent').animate({ scrollTop: 0 }, 'fast');$('#' + id).css({position: 'absolute',margin: 0, left: mleft, width: fixedwidth});$('#' + id).openModal({'dismissible': dismissible, 'end_top': mtop, 'complete': function() {b4j_raiseEvent('page_parseevent', {'eventname':  'page_modalsheetdismissed','eventparams': 'modalsheetname', 'modalsheetname': id});}});$('body').css('overflow', '');$(window).trigger('resize');$('#' + id).focus();Materialize.updateTextFields();}function ShowModalAbsolute(id, dismissible, mleft, mtop, mwidth, mheight) {initdropdown();InitEditEnterFields();$('#' + id + '_modalcontent').animate({ scrollTop: 0 }, 'fast');$('#' + id).css({margin: 0, left: mleft, width: mwidth, height: mheight});$('#' + id).openModal({'dismissible': dismissible, 'end_top': mtop, 'complete': function() {b4j_raiseEvent('page_parseevent', {'eventname':  'page_modalsheetdismissed','eventparams': 'modalsheetname', 'modalsheetname': id});}});$(window).trigger('resize');Materialize.updateTextFields();}function ReShowModal(id) {initdropdown();InitEditEnterFields();$(window).trigger('resize');$('#' + id).focus();Materialize.updateTextFields();}function CloseModal(id) {$('#' + id).closeModal({complete: function() {b4j_raiseEvent('page_parseevent', {'eventname':  'page_modalsheetdismissed','eventparams': 'modalsheetname', 'modalsheetname': id});}});}function fadeinimg(id) {Materialize.fadeInImage('#' + id);}function buttonclickarray(event, par, arrayname, button) {if($('#' + par + arrayname + button).hasClass('disabled')) {return;}if (arrayname=='') {b4j_raiseEvent('page_parseevent', {'eventname': button + '_clicked','eventparams': 'target', 'target': button});} else {b4j_raiseEvent('page_parseevent', {'eventname': arrayname + '_clicked','eventparams': 'target', 'target': button});}}function labelclickarray(event, par, arrayname, label) {if (arrayname=='') {b4j_raiseEvent('page_parseevent', {'eventname': label + '_clicked','eventparams': 'target', 'target': label});} else {b4j_raiseEvent('page_parseevent', {'eventname': arrayname + '_clicked','eventparams': 'target', 'target': label});}}function imageclickarray(event, par, arrayname, image) {if($('#' + par + arrayname + image).hasClass('disabled')) {return;}if (arrayname=='') {b4j_raiseEvent('page_parseevent', {'eventname': image + '_clicked','eventparams': 'target', 'target': image});} else {b4j_raiseEvent('page_parseevent', {'eventname': arrayname + '_clicked','eventparams': 'target', 'target': image});}}function actionbuttonclickarray(event, par, arrayname, button, subbutton) {if (arrayname=='') {b4j_raiseEvent('page_parseevent', {'eventname': button + '_clicked','eventparams': 'target,subtarget', 'target': button, 'subtarget': subbutton});} else {b4j_raiseEvent('page_parseevent', {'eventname': arrayname + '_clicked','eventparams': 'target,subtarget', 'target': button, 'subtarget': subbutton});}}function imagetogglearray(event, par, id, state, src, src2) {if($('#' + par + id).hasClass('disabled')) {return;}$('#' + par + id).attr('abmtoggle', state);$('#' + par + id).attr('src', src);if (state=='0') {$('#' + par + id).attr('onclick', "imagetogglearray(event,'" + par + "','" + id + "','1','" + src2 + "','" + src + "')");} else {$('#' + par + id).attr('onclick', "imagetogglearray(event,'" + par + "','" + id + "','0','" + src2 + "','" + src + "')");}};function inputscrollintofocus(id,smooth) {if (smooth=='0') {$('#' + id).scrollIntoView(false);} else {$('#' + id).scrollIntoView();}}
function tablescrollto(tableid, uniqueid, smooth) {var inner = tableid + '_innerbody';var ypos = $('#' + inner).find('[uniqueid="' + uniqueid + '"]').offset().top;if (smooth=='0') {$('#' + inner).scrollTop($('#' + inner).scrollTop()+ypos);} else {$('#' + inner).animate({scrollTop: $('#' + inner).scrollTop()+ypos}, 300);}}
function inputsetfocus(id) {$('#' + id).focus();}
function getactivetablerow(id) {var ret = '';if (document.getElementById(id)=='undefined') {return ret;};$('#' + id + ' tbody').children('tr').each(function() {var currthis = $(this);var tablename = currthis.attr('name');$(this).children('td').each(function() {if ($(this).hasClass('selected')) {ret = currthis.attr('uniqueid');activetablerows['#' + id] = ret;return ret;}});});activetablerows['#' + id] = ret;return ret;};function getsortcolumn(id) {var ret = '';if (document.getElementById(id)=='undefined') {return ret;};$('#' + id + ' thead tr').children('th').each(function() {if ($(this).hasClass('sorttable_sorted')) {ret = $(this).attr('fieldname');}if ($(this).hasClass('sorttable_sorted_reverse')) {ret = 'DESC_' + $(this).attr('fieldname');}});return ret;};function setsortcolumn(id, fieldname, order) {if (document.getElementById(id)=='undefined') {return;};if (fieldname=='') {return};$('#' + id + ' thead tr').children('th').each(function() {if ($(this).attr('fieldname')==fieldname) {sorttable.innerSortFunction.apply($(this)[0], []);if (order=='DESC') {sorttable.innerSortFunction.apply($(this)[0], []);}}});};function setactivetablerow(id,uniqueid) {if (document.getElementById(id)=='undefined') {return;};$('#' + id + ' tbody').children('tr').each(function() {if ($(this).attr('uniqueid')==uniqueid) {$(this).children('td').addClass("selected");} else {$(this).children('td').removeClass("selected");}});activetablerows['#' + id]=uniqueid;};var gahret=[];function getactiveheaders(id) {gahret=[];$('#' + id).children('li').children('div').each(function () {if ($(this).hasClass('active')){gahret.push($(this).attr('id'));}});};function setactiveheaders(gahret) {var arrayLength = gahret.length;for (var i = 0; i < arrayLength; i++) {$('#' + gahret[i]).addClass('active');$('#' + gahret[i]).addClass('active2');}};function HasClass(id, cl) {var ret='false';if ($('#' + id).hasClass(cl)) {ret='true';}return ret;};function TextAreaResize(item) {$('#' + item).trigger('autoresize')};function TextAreaAllResize() {$('.materialize-textarea').trigger('autoresize')};function saveinlocalstorage(app,login,pwd) {if(typeof(Storage) !== "undefined") {localStorage.setItem('abm' + app + 'login', login);localStorage.setItem('abm' + app + 'pwd', pwd);}};function loadfromlocalstorage(app) {if(typeof(Storage) !== "undefined") {var v1=localStorage.getItem('abm' + app + 'login');var v2=localStorage.getItem('abm' + app + 'pwd');if (v1!==null && v2!==null && v1!=='undefined' && v2!=='undefined' && v1!=='' && v2!=='') {return localStorage.getItem('abm' + app + 'login') + ';' + localStorage.getItem('abm' + app + 'pwd');}}return '';};function clearlocalstorage(app) {if(typeof(Storage) !== "undefined") {localStorage.removeItem('abm' + app + 'login');localStorage.removeItem('abm' + app + 'pwd');}};function customsaveinlocalstorage(key,value) {if(typeof(Storage) !== "undefined") {localStorage.setItem(key, value);}};function customloadfromlocalstorage(key) {if(typeof(Storage) !== "undefined") {return localStorage.getItem(key);}};function customdeletefromlocalstorage(key) {if(typeof(Storage) !== "undefined") {localStorage.removeItem(key);}};function getbrowserwidthheight() {return window.outerWidth+';'+window.outerHeight;};function selectElementContents(el) {var range = document.createRange();range.selectNodeContents(el);var sel = window.getSelection();sel.removeAllRanges();sel.addRange(range);};function InitEditEnterFields() {$('input').off('keydown').on('keydown', function(e) {if (e.keyCode == "undefined") { return };var codeToExecute = 'return ' + $(this).attr('evname') + '_b4jskeydown("' + $(this).val() + '",' + e.keyCode + ')';var tmpFunc = new Function(codeToExecute);var fret=false;try { fret = tmpFunc()} catch(err) {}});$('input').off('keyup').on('keyup', function(e) {if (e.keyCode == "undefined") { return };var codeToExecute = 'return ' + $(this).attr('evname') + '_b4jskeyup("' + $(this).val() + '",' + e.keyCode+ ')';var tmpFunc = new Function(codeToExecute);var fret=false;try { fret = tmpFunc()} catch(err) {}if (fret==false) {var done=false;if (e.keyCode==9) {b4j_raiseEvent('page_parseevent', {'eventname': $(this).attr('evname') + '_tabpressed','eventparams': 'target,value', 'target':$(this).attr('evname') ,'value':$(this).val()});done=true;}if(e.keyCode==13) {b4j_raiseEvent('page_parseevent', {'eventname': $(this).attr('evname') + '_enterpressed','eventparams': 'value', 'value':$(this).val()});done=true;}if (done==false) {if ($(this).hasClass('raisechanged')) {b4j_raiseEvent('page_parseevent', {'eventname': $(this).attr('evname') + '_changed','eventparams': 'value', 'value':$(this).val()});}if ($(this).hasClass('raisechangedcheck')) {b4j_raiseEvent('page_parseevent', {'eventname': $(this).attr('evname') + '_changed','eventparams': 'value', 'value':$(this).val()});if ($(this).hasClass('validateabm')) {$(this).removeClass("invalid");$(this).removeClass("valid");if ($(this).val().length==0) {$(this).addClass("invalid");} else {$(this).addClass("valid");}};}}}});$('input').off('change paste').on('change paste', function(e) {if (e.keyCode == "undefined") { return };var codeToExecute = 'return ' + $(this).attr('evname') + '_b4jschanged("' + $(this).val() + '")';var tmpFunc = new Function(codeToExecute);var fret=false;try { fret = tmpFunc()} catch(err) {}if (fret==false) {if ($(this).hasClass('raisechanged')) {b4j_raiseEvent('page_parseevent', {'eventname': $(this).attr('evname') + '_changed','eventparams': 'value', 'value':$(this).val()});}if ($(this).hasClass('raisechangedcheck')) {b4j_raiseEvent('page_parseevent', {'eventname': $(this).attr('evname') + '_changed','eventparams': 'value', 'value':$(this).val()});if ($(this).hasClass('validateabm')) {$(this).removeClass("invalid");$(this).removeClass("valid");if ($(this).val().length==0) {$(this).addClass("invalid");} else {$(this).addClass("valid");}};}}});}$.fn.dropdown2=function(t){};