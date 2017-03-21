package abmaterial.ab.com;


import anywheresoftware.b4a.BA;
import anywheresoftware.b4a.B4AClass;
import anywheresoftware.b4a.debug.*;

public class compcodelabelpage extends B4AClass.ImplB4AClass implements BA.SubDelegator{
    public static java.util.HashMap<String, java.lang.reflect.Method> htSubs;
    private void innerInitialize(BA _ba) throws Exception {
        if (ba == null) {
            ba = new  anywheresoftware.b4a.StandardBA("abmaterial.ab.com", "abmaterial.ab.com.compcodelabelpage", this);
            if (htSubs == null) {
                ba.loadHtSubs(this.getClass());
                htSubs = ba.htSubs;
            }
            ba.htSubs = htSubs;
             
        }
        if (BA.isShellModeRuntimeCheck(ba))
                this.getClass().getMethod("_class_globals", abmaterial.ab.com.compcodelabelpage.class).invoke(this, new Object[] {null});
        else
            ba.raiseEvent2(null, true, "class_globals", false);
    }

 public anywheresoftware.b4a.keywords.Common __c = null;
public anywheresoftware.b4j.object.WebSocket _ws = null;
public com.ab.abmaterial.ABMPage _page = null;
public com.ab.abmaterial.ABMTheme _theme = null;
public com.ab.abmaterial.ABMaterial _abm = null;
public String _name = "";
public String _abmpageid = "";
public int _mytoastid = 0;
public b4j.example.dateutils _dateutils = null;
public abmaterial.ab.com.main _main = null;
public abmaterial.ab.com.abmshared _abmshared = null;
public abmaterial.ab.com.abmprint _abmprint = null;
public String  _buildpage() throws Exception{
 //BA.debugLineNum = 96;BA.debugLine="public Sub BuildPage()";
 //BA.debugLineNum = 98;BA.debugLine="BuildTheme";
_buildtheme();
 //BA.debugLineNum = 101;BA.debugLine="page.InitializeWithTheme(Name, \"/ws/\" & ABMshared";
_page.InitializeWithTheme(_name,"/ws/"+_abmshared._appname+"/"+_name,__c.False,_abmshared._sessionmaxinactiveintervalseconds,_theme);
 //BA.debugLineNum = 102;BA.debugLine="page.ShowLoader=True";
_page.setShowLoader(__c.True);
 //BA.debugLineNum = 103;BA.debugLine="page.ShowLoaderType=ABM.LOADER_TYPE_MANUAL ' NEW";
_page.setShowLoaderType(_abm.LOADER_TYPE_MANUAL);
 //BA.debugLineNum = 104;BA.debugLine="page.PageTitle = \"ABMCodeLabel\"";
_page.PageTitle = "ABMCodeLabel";
 //BA.debugLineNum = 105;BA.debugLine="page.PageDescription = \"The code label component";
_page.PageDescription = "The code label component ";
 //BA.debugLineNum = 106;BA.debugLine="page.PageHTMLName = \"abmaterial-code-label.html\"";
_page.PageHTMLName = "abmaterial-code-label.html";
 //BA.debugLineNum = 107;BA.debugLine="page.PageKeywords = \"ABMaterial, material design,";
_page.PageKeywords = "ABMaterial, material design, B4X, B4J, SEO, framework, search engine optimization";
 //BA.debugLineNum = 108;BA.debugLine="page.PageSiteMapPriority = \"0.50\"";
_page.PageSiteMapPriority = "0.50";
 //BA.debugLineNum = 109;BA.debugLine="page.PageSiteMapFrequency = ABM.SITEMAP_FREQ_MONT";
_page.PageSiteMapFrequency = _abm.SITEMAP_FREQ_MONTHLY;
 //BA.debugLineNum = 110;BA.debugLine="page.UseGoogleAnalytics(ABMShared.TrackingID, Nul";
_page.UseGoogleAnalytics(_abmshared._trackingid,(anywheresoftware.b4a.objects.collections.List) anywheresoftware.b4a.AbsObjectWrapper.ConvertToWrapper(new anywheresoftware.b4a.objects.collections.List(), (java.util.List)(__c.Null)));
 //BA.debugLineNum = 112;BA.debugLine="ABMShared.BuildNavigationBar(page, \"ABMCodeLabel\"";
_abmshared._buildnavigationbar(_page,"ABMCodeLabel","../images/logo.png","","Controls","ABMCodeLabel");
 //BA.debugLineNum = 115;BA.debugLine="page.AddRows(5,True, \"\").AddCells12(1,\"\")";
_page.AddRows((int) (5),__c.True,"").AddCells12((int) (1),"");
 //BA.debugLineNum = 116;BA.debugLine="page.BuildGrid 'IMPORTANT once you loaded the com";
_page.BuildGrid();
 //BA.debugLineNum = 118;BA.debugLine="ABMShared.BuildFooter(page)";
_abmshared._buildfooter(_page);
 //BA.debugLineNum = 119;BA.debugLine="End Sub";
return "";
}
public String  _buildtheme() throws Exception{
 //BA.debugLineNum = 87;BA.debugLine="public Sub BuildTheme()";
 //BA.debugLineNum = 89;BA.debugLine="theme.Initialize(\"pagetheme\")";
_theme.Initialize("pagetheme");
 //BA.debugLineNum = 90;BA.debugLine="theme.AddABMTheme(ABMShared.MyTheme)";
_theme.AddABMTheme(_abmshared._mytheme);
 //BA.debugLineNum = 94;BA.debugLine="End Sub";
return "";
}
public String  _class_globals() throws Exception{
 //BA.debugLineNum = 2;BA.debugLine="Sub Class_Globals";
 //BA.debugLineNum = 3;BA.debugLine="Private ws As WebSocket 'ignore";
_ws = new anywheresoftware.b4j.object.WebSocket();
 //BA.debugLineNum = 5;BA.debugLine="Public page As ABMPage";
_page = new com.ab.abmaterial.ABMPage();
 //BA.debugLineNum = 7;BA.debugLine="Private theme As ABMTheme";
_theme = new com.ab.abmaterial.ABMTheme();
 //BA.debugLineNum = 9;BA.debugLine="Private ABM As ABMaterial 'ignore";
_abm = new com.ab.abmaterial.ABMaterial();
 //BA.debugLineNum = 11;BA.debugLine="Public Name As String = \"CompCodeLabelPage\"";
_name = "CompCodeLabelPage";
 //BA.debugLineNum = 13;BA.debugLine="Private ABMPageId As String = \"\"";
_abmpageid = "";
 //BA.debugLineNum = 16;BA.debugLine="Dim myToastId As Int";
_mytoastid = 0;
 //BA.debugLineNum = 17;BA.debugLine="End Sub";
return "";
}
public String  _connectpage() throws Exception{
anywheresoftware.b4a.keywords.StringBuilderWrapper _code1 = null;
anywheresoftware.b4a.keywords.StringBuilderWrapper _code4 = null;
 //BA.debugLineNum = 121;BA.debugLine="Sub ConnectPage()";
 //BA.debugLineNum = 123;BA.debugLine="ABMShared.ConnectNavigationBar(page)";
_abmshared._connectnavigationbar(_page);
 //BA.debugLineNum = 125;BA.debugLine="page.Cell(1,1).AddComponent(ABMShared.BuildParagr";
_page.Cell((int) (1),(int) (1)).AddComponent((com.ab.abmaterial.ABMComponent)(_abmshared._buildparagraph(_page,"par1","ABMCodeLabels are blocks that represent source programming code within your page.  It can be used, like for this app, to make a help website or tutorial that explains your library.")));
 //BA.debugLineNum = 127;BA.debugLine="page.Cell(1,1).AddComponent(ABMShared.BuildParagr";
_page.Cell((int) (1),(int) (1)).AddComponent((com.ab.abmaterial.ABMComponent)(_abmshared._buildparagraph(_page,"par2","There are two methods to setup your source code string: Using a B4J List object or using the B4J Smart Strings.  An example of both, you can use the one you feel most comfortable with.  Note, Smart Strings cannon show everything: Using as code Sub Name() ... End Sub ... Sub Name2() ... End Sub will not work with Smart Strings!")));
 //BA.debugLineNum = 130;BA.debugLine="Dim code1 As StringBuilder";
_code1 = new anywheresoftware.b4a.keywords.StringBuilderWrapper();
 //BA.debugLineNum = 131;BA.debugLine="code1.Initialize";
_code1.Initialize();
 //BA.debugLineNum = 132;BA.debugLine="code1.Append(\"// add codeblock\").Append(CRLF)";
_code1.Append("// add codeblock").Append(__c.CRLF);
 //BA.debugLineNum = 133;BA.debugLine="code1.Append(\"Dim code2 As StringBuilder\").Append";
_code1.Append("Dim code2 As StringBuilder").Append(__c.CRLF);
 //BA.debugLineNum = 134;BA.debugLine="code1.Append(\"code2.Initialize\").Append(CRLF)";
_code1.Append("code2.Initialize").Append(__c.CRLF);
 //BA.debugLineNum = 135;BA.debugLine="code1.Append(\"code2.Append(\"\"Dim btn4 As ABMButto";
_code1.Append("code2.Append(\"Dim btn4 As ABMButton\").Append(CRLF)").Append(__c.CRLF);
 //BA.debugLineNum = 136;BA.debugLine="code1.Append(\"code2.Append(\"\"btn4.Initializefloat";
_code1.Append("code2.Append(\"btn4.Initializefloating(page, \"btn4\", \"mdi-image-palette\", \"darkred\")\").Append(CRLF)").Append(__c.CRLF);
 //BA.debugLineNum = 137;BA.debugLine="code1.Append(\"code2.Append(\"\"btn4.size = ABM.BUTT";
_code1.Append("code2.Append(\"btn4.size = ABM.BUTTONSIZE_LARGE\").Append(CRLF)").Append(__c.CRLF);
 //BA.debugLineNum = 138;BA.debugLine="code1.Append(\"code2.Append(\"\"page.Cell(5,1).AddCo";
_code1.Append("code2.Append(\"page.Cell(5,1).AddComponent(btn4)\").Append(CRLF)").Append(__c.CRLF);
 //BA.debugLineNum = 139;BA.debugLine="code1.Append(\"page.Cell(6,1).AddComponent(ABMShar";
_code1.Append("page.Cell(6,1).AddComponent(ABMShared.BuildCodeBlock(page, \"code2\", code2))").Append(__c.CRLF);
 //BA.debugLineNum = 141;BA.debugLine="page.Cell(2,1).AddComponent(ABMShared.BuildCodeBl";
_page.Cell((int) (2),(int) (1)).AddComponent((com.ab.abmaterial.ABMComponent)(_abmshared._buildcodeblock(_page,"code1",_code1)));
 //BA.debugLineNum = 144;BA.debugLine="Dim code4 As StringBuilder";
_code4 = new anywheresoftware.b4a.keywords.StringBuilderWrapper();
 //BA.debugLineNum = 145;BA.debugLine="code4.Initialize";
_code4.Initialize();
 //BA.debugLineNum = 146;BA.debugLine="code4.Append(\"// add codeblock\").Append(CRLF)";
_code4.Append("// add codeblock").Append(__c.CRLF);
 //BA.debugLineNum = 147;BA.debugLine="code4.Append(\"Dim code3 As String = $\"\"Dim btn4 A";
_code4.Append("Dim code3 As String = $\"Dim btn4 As ABMButton").Append(__c.CRLF);
 //BA.debugLineNum = 148;BA.debugLine="code4.Append(\"btn4.Initializefloating(page, \"\"btn";
_code4.Append("btn4.Initializefloating(page, \"btn4\", \"mdi-image-palette\", \"darkred\")").Append(__c.CRLF);
 //BA.debugLineNum = 149;BA.debugLine="code4.Append(\"btn4.size = ABM.BUTTONSIZE_LARGE\").";
_code4.Append("btn4.size = ABM.BUTTONSIZE_LARGE").Append(__c.CRLF);
 //BA.debugLineNum = 150;BA.debugLine="code4.Append(\"page.Cell(5,1).AddComponent(btn4)\"\"";
_code4.Append("page.Cell(5,1).AddComponent(btn4)\"$").Append(__c.CRLF);
 //BA.debugLineNum = 151;BA.debugLine="code4.Append(\"page.Cell(6,1).AddComponent(ABMShar";
_code4.Append("page.Cell(6,1).AddComponent(ABMShared.BuildCodeBlockFromSmartString(page, \"code3\", code3))").Append(__c.CRLF);
 //BA.debugLineNum = 153;BA.debugLine="page.Cell(2,1).AddComponent(ABMShared.BuildCodeBl";
_page.Cell((int) (2),(int) (1)).AddComponent((com.ab.abmaterial.ABMComponent)(_abmshared._buildcodeblockfromsmartstring(_page,"code4",BA.ObjectToString(_code4))));
 //BA.debugLineNum = 156;BA.debugLine="ABMShared.ConnectFooter(page)";
_abmshared._connectfooter(_page);
 //BA.debugLineNum = 158;BA.debugLine="page.Refresh ' IMPORTANT";
_page.Refresh();
 //BA.debugLineNum = 161;BA.debugLine="page.FinishedLoading 'IMPORTANT";
_page.FinishedLoading();
 //BA.debugLineNum = 163;BA.debugLine="page.RestoreNavigationBarPosition";
_page.RestoreNavigationBarPosition();
 //BA.debugLineNum = 164;BA.debugLine="End Sub";
return "";
}
public String  _initialize(anywheresoftware.b4a.BA _ba) throws Exception{
innerInitialize(_ba);
 //BA.debugLineNum = 20;BA.debugLine="Public Sub Initialize";
 //BA.debugLineNum = 22;BA.debugLine="BuildPage";
_buildpage();
 //BA.debugLineNum = 23;BA.debugLine="End Sub";
return "";
}
public String  _page_navigationbarclicked(String _action,String _value) throws Exception{
 //BA.debugLineNum = 167;BA.debugLine="Sub Page_NavigationbarClicked(Action As String, Va";
 //BA.debugLineNum = 168;BA.debugLine="page.SaveNavigationBarPosition";
_page.SaveNavigationBarPosition();
 //BA.debugLineNum = 169;BA.debugLine="If Action = \"ABMCodeLabel\" Then Return";
if ((_action).equals("ABMCodeLabel")) { 
if (true) return "";};
 //BA.debugLineNum = 170;BA.debugLine="If Action = \"Contact\" Then";
if ((_action).equals("Contact")) { 
 //BA.debugLineNum = 171;BA.debugLine="myToastId = myToastId + 1";
_mytoastid = (int) (_mytoastid+1);
 //BA.debugLineNum = 172;BA.debugLine="page.ShowToast(\"toast\" & myToastId, \"toastred\",";
_page.ShowToast("toast"+BA.NumberToString(_mytoastid),"toastred","Hello to you too!",(int) (5000));
 //BA.debugLineNum = 173;BA.debugLine="Return";
if (true) return "";
 };
 //BA.debugLineNum = 175;BA.debugLine="If Action = \"LogOff\" Then";
if ((_action).equals("LogOff")) { 
 //BA.debugLineNum = 176;BA.debugLine="ABMShared.LogOff(page)";
_abmshared._logoff(_page);
 //BA.debugLineNum = 177;BA.debugLine="Return";
if (true) return "";
 };
 //BA.debugLineNum = 179;BA.debugLine="ABMShared.NavigateToPage(ws, ABMPageId, Value)";
_abmshared._navigatetopage(_ws,_abmpageid,_value);
 //BA.debugLineNum = 180;BA.debugLine="End Sub";
return "";
}
public String  _page_parseevent(anywheresoftware.b4a.objects.collections.Map _params) throws Exception{
String _eventname = "";
String[] _eventparams = null;
anywheresoftware.b4a.objects.collections.List _passedtables = null;
 //BA.debugLineNum = 57;BA.debugLine="Sub Page_ParseEvent(Params As Map)";
 //BA.debugLineNum = 58;BA.debugLine="Dim eventName As String = Params.Get(\"eventname\")";
_eventname = BA.ObjectToString(_params.Get((Object)("eventname")));
 //BA.debugLineNum = 59;BA.debugLine="Dim eventParams() As String = Regex.Split(\",\",Par";
_eventparams = __c.Regex.Split(",",BA.ObjectToString(_params.Get((Object)("eventparams"))));
 //BA.debugLineNum = 60;BA.debugLine="If eventName = \"beforeunload\" Then";
if ((_eventname).equals("beforeunload")) { 
 //BA.debugLineNum = 61;BA.debugLine="Log(\"preparing for url refresh\")";
__c.Log("preparing for url refresh");
 //BA.debugLineNum = 62;BA.debugLine="ABM.RemoveMeFromCache(ABMShared.CachedPages, ABM";
_abm.RemoveMeFromCache(_abmshared._cachedpages,_abmpageid);
 //BA.debugLineNum = 63;BA.debugLine="Return";
if (true) return "";
 };
 //BA.debugLineNum = 65;BA.debugLine="If SubExists(Me, eventName) Then";
if (__c.SubExists(ba,this,_eventname)) { 
 //BA.debugLineNum = 66;BA.debugLine="Params.Remove(\"eventname\")";
_params.Remove((Object)("eventname"));
 //BA.debugLineNum = 67;BA.debugLine="Params.Remove(\"eventparams\")";
_params.Remove((Object)("eventparams"));
 //BA.debugLineNum = 68;BA.debugLine="Select Case Params.Size";
switch (BA.switchObjectToInt(_params.getSize(),(int) (0),(int) (1),(int) (2))) {
case 0: {
 //BA.debugLineNum = 70;BA.debugLine="CallSub(Me, eventName)";
__c.CallSubNew(ba,this,_eventname);
 break; }
case 1: {
 //BA.debugLineNum = 72;BA.debugLine="CallSub2(Me, eventName, Params.Get(eventParams";
__c.CallSubNew2(ba,this,_eventname,_params.Get((Object)(_eventparams[(int) (0)])));
 break; }
case 2: {
 //BA.debugLineNum = 74;BA.debugLine="If Params.get(eventParams(0)) = \"abmistable\" T";
if ((_params.Get((Object)(_eventparams[(int) (0)]))).equals((Object)("abmistable"))) { 
 //BA.debugLineNum = 75;BA.debugLine="Dim PassedTables As List = ABM.ProcessTablesF";
_passedtables = new anywheresoftware.b4a.objects.collections.List();
_passedtables = _abm.ProcessTablesFromTargetName(BA.ObjectToString(_params.Get((Object)(_eventparams[(int) (1)]))));
 //BA.debugLineNum = 76;BA.debugLine="CallSub2(Me, eventName, PassedTables)";
__c.CallSubNew2(ba,this,_eventname,(Object)(_passedtables));
 }else {
 //BA.debugLineNum = 78;BA.debugLine="CallSub3(Me, eventName, Params.Get(eventParam";
__c.CallSubNew3(ba,this,_eventname,_params.Get((Object)(_eventparams[(int) (0)])),_params.Get((Object)(_eventparams[(int) (1)])));
 };
 break; }
default: {
 //BA.debugLineNum = 82;BA.debugLine="CallSub2(Me, eventName, Params)";
__c.CallSubNew2(ba,this,_eventname,(Object)(_params));
 break; }
}
;
 };
 //BA.debugLineNum = 85;BA.debugLine="End Sub";
return "";
}
public String  _page_signedoffsocialnetwork(String _network,String _extra) throws Exception{
 //BA.debugLineNum = 182;BA.debugLine="Sub Page_SignedOffSocialNetwork(Network As String,";
 //BA.debugLineNum = 183;BA.debugLine="page.ws.Session.SetAttribute(\"authType\", \"\")";
_page.ws.getSession().SetAttribute("authType",(Object)(""));
 //BA.debugLineNum = 184;BA.debugLine="page.ws.Session.SetAttribute(\"authName\", \"\")";
_page.ws.getSession().SetAttribute("authName",(Object)(""));
 //BA.debugLineNum = 185;BA.debugLine="page.ws.Session.SetAttribute(\"IsAuthorized\", \"\")";
_page.ws.getSession().SetAttribute("IsAuthorized",(Object)(""));
 //BA.debugLineNum = 186;BA.debugLine="ABMShared.NavigateToPage(ws, ABMPageId, \"../\")";
_abmshared._navigatetopage(_ws,_abmpageid,"../");
 //BA.debugLineNum = 187;BA.debugLine="End Sub";
return "";
}
public String  _websocket_connected(anywheresoftware.b4j.object.WebSocket _websocket1) throws Exception{
anywheresoftware.b4j.object.HttpSessionWrapper _session = null;
 //BA.debugLineNum = 25;BA.debugLine="Private Sub WebSocket_Connected (WebSocket1 As Web";
 //BA.debugLineNum = 26;BA.debugLine="Log(\"Connected\")";
__c.Log("Connected");
 //BA.debugLineNum = 27;BA.debugLine="ws = WebSocket1";
_ws = _websocket1;
 //BA.debugLineNum = 28;BA.debugLine="ABMPageId = ABM.GetPageID(page, Name,ws)";
_abmpageid = _abm.GetPageID(_page,_name,_ws);
 //BA.debugLineNum = 29;BA.debugLine="Dim session As HttpSession = ABM.GetSession(ws, A";
_session = new anywheresoftware.b4j.object.HttpSessionWrapper();
_session = _abm.GetSession(_ws,_abmshared._sessionmaxinactiveintervalseconds);
 //BA.debugLineNum = 31;BA.debugLine="If ABMShared.NeedsAuthorization Then";
if (_abmshared._needsauthorization) { 
 //BA.debugLineNum = 32;BA.debugLine="If session.GetAttribute2(\"IsAuthorized\", \"\") = \"";
if ((_session.GetAttribute2("IsAuthorized",(Object)(""))).equals((Object)(""))) { 
 //BA.debugLineNum = 33;BA.debugLine="ABMShared.NavigateToPage(ws, ABMPageId, \"../\")";
_abmshared._navigatetopage(_ws,_abmpageid,"../");
 //BA.debugLineNum = 34;BA.debugLine="Return";
if (true) return "";
 };
 };
 //BA.debugLineNum = 38;BA.debugLine="ABM.UpdateFromCache(Me, ABMShared.CachedPages, AB";
_abm.UpdateFromCache((anywheresoftware.b4a.B4AClass)(this),_abmshared._cachedpages,_abmpageid,_ws,ba);
 //BA.debugLineNum = 39;BA.debugLine="If page.ComesFromPageCache Then";
if (_page.ComesFromPageCache) { 
 //BA.debugLineNum = 41;BA.debugLine="page.Refresh";
_page.Refresh();
 //BA.debugLineNum = 43;BA.debugLine="page.FinishedLoading";
_page.FinishedLoading();
 }else {
 //BA.debugLineNum = 46;BA.debugLine="page.Prepare";
_page.Prepare();
 //BA.debugLineNum = 48;BA.debugLine="ConnectPage";
_connectpage();
 };
 //BA.debugLineNum = 50;BA.debugLine="Log(ABMPageId)";
__c.Log(_abmpageid);
 //BA.debugLineNum = 51;BA.debugLine="End Sub";
return "";
}
public String  _websocket_disconnected() throws Exception{
 //BA.debugLineNum = 53;BA.debugLine="Private Sub WebSocket_Disconnected";
 //BA.debugLineNum = 54;BA.debugLine="Log(\"Disconnected\")";
__c.Log("Disconnected");
 //BA.debugLineNum = 55;BA.debugLine="End Sub";
return "";
}
public Object callSub(String sub, Object sender, Object[] args) throws Exception {
BA.senderHolder.set(sender);
return BA.SubDelegator.SubNotFound;
}
}
