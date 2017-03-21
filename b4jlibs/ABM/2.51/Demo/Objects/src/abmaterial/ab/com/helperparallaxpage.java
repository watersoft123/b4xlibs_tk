package abmaterial.ab.com;


import anywheresoftware.b4a.BA;
import anywheresoftware.b4a.B4AClass;
import anywheresoftware.b4a.debug.*;

public class helperparallaxpage extends B4AClass.ImplB4AClass implements BA.SubDelegator{
    public static java.util.HashMap<String, java.lang.reflect.Method> htSubs;
    private void innerInitialize(BA _ba) throws Exception {
        if (ba == null) {
            ba = new  anywheresoftware.b4a.StandardBA("abmaterial.ab.com", "abmaterial.ab.com.helperparallaxpage", this);
            if (htSubs == null) {
                ba.loadHtSubs(this.getClass());
                htSubs = ba.htSubs;
            }
            ba.htSubs = htSubs;
             
        }
        if (BA.isShellModeRuntimeCheck(ba))
                this.getClass().getMethod("_class_globals", abmaterial.ab.com.helperparallaxpage.class).invoke(this, new Object[] {null});
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
 //BA.debugLineNum = 95;BA.debugLine="public Sub BuildPage()";
 //BA.debugLineNum = 97;BA.debugLine="BuildTheme";
_buildtheme();
 //BA.debugLineNum = 100;BA.debugLine="page.InitializeWithTheme(Name, \"/ws/\" & ABMshared";
_page.InitializeWithTheme(_name,"/ws/"+_abmshared._appname+"/"+_name,__c.False,_abmshared._sessionmaxinactiveintervalseconds,_theme);
 //BA.debugLineNum = 101;BA.debugLine="page.ShowLoader=True";
_page.setShowLoader(__c.True);
 //BA.debugLineNum = 102;BA.debugLine="page.ShowLoaderType=ABM.LOADER_TYPE_MANUAL ' NEW";
_page.setShowLoaderType(_abm.LOADER_TYPE_MANUAL);
 //BA.debugLineNum = 103;BA.debugLine="page.PageTitle = \"ABMParallax\"";
_page.PageTitle = "ABMParallax";
 //BA.debugLineNum = 104;BA.debugLine="page.PageDescription = \"The parallax helper\"";
_page.PageDescription = "The parallax helper";
 //BA.debugLineNum = 105;BA.debugLine="page.PageHTMLName = \"abmaterial-parallax.html\"";
_page.PageHTMLName = "abmaterial-parallax.html";
 //BA.debugLineNum = 106;BA.debugLine="page.PageKeywords = \"ABMaterial, material design,";
_page.PageKeywords = "ABMaterial, material design, B4X, B4J, SEO, framework, search engine optimization";
 //BA.debugLineNum = 107;BA.debugLine="page.PageSiteMapPriority = \"0.50\"";
_page.PageSiteMapPriority = "0.50";
 //BA.debugLineNum = 108;BA.debugLine="page.PageSiteMapFrequency = ABM.SITEMAP_FREQ_MONT";
_page.PageSiteMapFrequency = _abm.SITEMAP_FREQ_MONTHLY;
 //BA.debugLineNum = 109;BA.debugLine="page.UseGoogleAnalytics(ABMShared.TrackingID, Nul";
_page.UseGoogleAnalytics(_abmshared._trackingid,(anywheresoftware.b4a.objects.collections.List) anywheresoftware.b4a.AbsObjectWrapper.ConvertToWrapper(new anywheresoftware.b4a.objects.collections.List(), (java.util.List)(__c.Null)));
 //BA.debugLineNum = 111;BA.debugLine="ABMShared.BuildNavigationBar(page, \"ABMParallax\",";
_abmshared._buildnavigationbar(_page,"ABMParallax","../images/logo.png","","Helpers","ABMParallax");
 //BA.debugLineNum = 114;BA.debugLine="page.AddRows(1,False, \"\").AddCells12(1,\"\")";
_page.AddRows((int) (1),__c.False,"").AddCells12((int) (1),"");
 //BA.debugLineNum = 115;BA.debugLine="page.AddRows(2,True, \"\").AddCells12(1,\"\")";
_page.AddRows((int) (2),__c.True,"").AddCells12((int) (1),"");
 //BA.debugLineNum = 116;BA.debugLine="page.AddRows(1,False, \"\").AddCells12(1,\"\")";
_page.AddRows((int) (1),__c.False,"").AddCells12((int) (1),"");
 //BA.debugLineNum = 117;BA.debugLine="page.BuildGrid 'IMPORTANT once you loaded the com";
_page.BuildGrid();
 //BA.debugLineNum = 122;BA.debugLine="ABMShared.BuildFooter(page)";
_abmshared._buildfooter(_page);
 //BA.debugLineNum = 123;BA.debugLine="End Sub";
return "";
}
public String  _buildtheme() throws Exception{
 //BA.debugLineNum = 86;BA.debugLine="public Sub BuildTheme()";
 //BA.debugLineNum = 88;BA.debugLine="theme.Initialize(\"pagetheme\")";
_theme.Initialize("pagetheme");
 //BA.debugLineNum = 89;BA.debugLine="theme.AddABMTheme(ABMShared.MyTheme)";
_theme.AddABMTheme(_abmshared._mytheme);
 //BA.debugLineNum = 93;BA.debugLine="End Sub";
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
 //BA.debugLineNum = 11;BA.debugLine="Public Name As String = \"HelperParallaxPage\"";
_name = "HelperParallaxPage";
 //BA.debugLineNum = 13;BA.debugLine="Private ABMPageId As String = \"\"";
_abmpageid = "";
 //BA.debugLineNum = 16;BA.debugLine="Dim myToastId As Int";
_mytoastid = 0;
 //BA.debugLineNum = 17;BA.debugLine="End Sub";
return "";
}
public String  _connectpage() throws Exception{
com.ab.abmaterial.ABMParallax _parallax1 = null;
anywheresoftware.b4a.keywords.StringBuilderWrapper _code = null;
com.ab.abmaterial.ABMParallax _parallax2 = null;
 //BA.debugLineNum = 125;BA.debugLine="Sub ConnectPage()";
 //BA.debugLineNum = 127;BA.debugLine="ABMShared.ConnectNavigationBar(page)";
_abmshared._connectnavigationbar(_page);
 //BA.debugLineNum = 129;BA.debugLine="Dim parallax1 As ABMParallax";
_parallax1 = new com.ab.abmaterial.ABMParallax();
 //BA.debugLineNum = 130;BA.debugLine="parallax1.Initialize(page, \"parallax1\", \"../image";
_parallax1.Initialize(_page,"parallax1","../images/parallax1.jpg",(int) (500));
 //BA.debugLineNum = 131;BA.debugLine="page.Cell(1,1).AddComponent(parallax1)";
_page.Cell((int) (1),(int) (1)).AddComponent((com.ab.abmaterial.ABMComponent)(_parallax1));
 //BA.debugLineNum = 134;BA.debugLine="page.Cell(2,1).AddComponent(ABMShared.BuildParagr";
_page.Cell((int) (2),(int) (1)).AddComponent((com.ab.abmaterial.ABMComponent)(_abmshared._buildparagraph(_page,"par1","Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling. Adding it is as easy as using this code in B4J.")));
 //BA.debugLineNum = 137;BA.debugLine="Dim code As StringBuilder";
_code = new anywheresoftware.b4a.keywords.StringBuilderWrapper();
 //BA.debugLineNum = 138;BA.debugLine="code.Initialize";
_code.Initialize();
 //BA.debugLineNum = 139;BA.debugLine="code.Append(\"Dim parallax1 As ABMParallax\").Appen";
_code.Append("Dim parallax1 As ABMParallax").Append(__c.CRLF);
 //BA.debugLineNum = 140;BA.debugLine="code.Append(\"parallax1.Initialize(page, \"\"paralla";
_code.Append("parallax1.Initialize(page, \"parallax1\", \"../images/parallax1.jpg\", 500)").Append(__c.CRLF);
 //BA.debugLineNum = 141;BA.debugLine="code.Append(\"page.Cell(1,1).AddComponent(parallax";
_code.Append("page.Cell(1,1).AddComponent(parallax1)").Append(__c.CRLF);
 //BA.debugLineNum = 142;BA.debugLine="code.Append(\"\").Append(CRLF)";
_code.Append("").Append(__c.CRLF);
 //BA.debugLineNum = 143;BA.debugLine="code.Append(\"// the other stuff you want to add t";
_code.Append("// the other stuff you want to add to the page, like this block").Append(__c.CRLF);
 //BA.debugLineNum = 144;BA.debugLine="code.Append(\"\").Append(CRLF)";
_code.Append("").Append(__c.CRLF);
 //BA.debugLineNum = 145;BA.debugLine="code.Append(\"Dim parallax2 As ABMParallax\").Appen";
_code.Append("Dim parallax2 As ABMParallax").Append(__c.CRLF);
 //BA.debugLineNum = 146;BA.debugLine="code.Append(\"parallax2.Initialize(page, \"\"paralla";
_code.Append("parallax2.Initialize(page, \"parallax2\", \"../images/parallax2.jpg\", 500)").Append(__c.CRLF);
 //BA.debugLineNum = 147;BA.debugLine="code.Append(\"page.Cell(4,1).AddComponent(parallax";
_code.Append("page.Cell(4,1).AddComponent(parallax2)").Append(__c.CRLF);
 //BA.debugLineNum = 149;BA.debugLine="page.Cell(3,1).AddComponent(ABMShared.BuildCodeBl";
_page.Cell((int) (3),(int) (1)).AddComponent((com.ab.abmaterial.ABMComponent)(_abmshared._buildcodeblock(_page,"code",_code)));
 //BA.debugLineNum = 151;BA.debugLine="Dim parallax2 As ABMParallax";
_parallax2 = new com.ab.abmaterial.ABMParallax();
 //BA.debugLineNum = 152;BA.debugLine="parallax2.Initialize(page, \"parallax2\", \"../image";
_parallax2.Initialize(_page,"parallax2","../images/parallax2.jpg",(int) (500));
 //BA.debugLineNum = 153;BA.debugLine="page.Cell(4,1).AddComponent(parallax2)";
_page.Cell((int) (4),(int) (1)).AddComponent((com.ab.abmaterial.ABMComponent)(_parallax2));
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
 //BA.debugLineNum = 19;BA.debugLine="Public Sub Initialize";
 //BA.debugLineNum = 21;BA.debugLine="BuildPage";
_buildpage();
 //BA.debugLineNum = 22;BA.debugLine="End Sub";
return "";
}
public String  _page_navigationbarclicked(String _action,String _value) throws Exception{
 //BA.debugLineNum = 167;BA.debugLine="Sub Page_NavigationbarClicked(Action As String, Va";
 //BA.debugLineNum = 168;BA.debugLine="page.SaveNavigationBarPosition";
_page.SaveNavigationBarPosition();
 //BA.debugLineNum = 169;BA.debugLine="If Action = \"ABMParallax\" Then Return";
if ((_action).equals("ABMParallax")) { 
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
 //BA.debugLineNum = 56;BA.debugLine="Sub Page_ParseEvent(Params As Map)";
 //BA.debugLineNum = 57;BA.debugLine="Dim eventName As String = Params.Get(\"eventname\")";
_eventname = BA.ObjectToString(_params.Get((Object)("eventname")));
 //BA.debugLineNum = 58;BA.debugLine="Dim eventParams() As String = Regex.Split(\",\",Par";
_eventparams = __c.Regex.Split(",",BA.ObjectToString(_params.Get((Object)("eventparams"))));
 //BA.debugLineNum = 59;BA.debugLine="If eventName = \"beforeunload\" Then";
if ((_eventname).equals("beforeunload")) { 
 //BA.debugLineNum = 60;BA.debugLine="Log(\"preparing for url refresh\")";
__c.Log("preparing for url refresh");
 //BA.debugLineNum = 61;BA.debugLine="ABM.RemoveMeFromCache(ABMShared.CachedPages, ABM";
_abm.RemoveMeFromCache(_abmshared._cachedpages,_abmpageid);
 //BA.debugLineNum = 62;BA.debugLine="Return";
if (true) return "";
 };
 //BA.debugLineNum = 64;BA.debugLine="If SubExists(Me, eventName) Then";
if (__c.SubExists(ba,this,_eventname)) { 
 //BA.debugLineNum = 65;BA.debugLine="Params.Remove(\"eventname\")";
_params.Remove((Object)("eventname"));
 //BA.debugLineNum = 66;BA.debugLine="Params.Remove(\"eventparams\")";
_params.Remove((Object)("eventparams"));
 //BA.debugLineNum = 67;BA.debugLine="Select Case Params.Size";
switch (BA.switchObjectToInt(_params.getSize(),(int) (0),(int) (1),(int) (2))) {
case 0: {
 //BA.debugLineNum = 69;BA.debugLine="CallSub(Me, eventName)";
__c.CallSubNew(ba,this,_eventname);
 break; }
case 1: {
 //BA.debugLineNum = 71;BA.debugLine="CallSub2(Me, eventName, Params.Get(eventParams";
__c.CallSubNew2(ba,this,_eventname,_params.Get((Object)(_eventparams[(int) (0)])));
 break; }
case 2: {
 //BA.debugLineNum = 73;BA.debugLine="If Params.get(eventParams(0)) = \"abmistable\" T";
if ((_params.Get((Object)(_eventparams[(int) (0)]))).equals((Object)("abmistable"))) { 
 //BA.debugLineNum = 74;BA.debugLine="Dim PassedTables As List = ABM.ProcessTablesF";
_passedtables = new anywheresoftware.b4a.objects.collections.List();
_passedtables = _abm.ProcessTablesFromTargetName(BA.ObjectToString(_params.Get((Object)(_eventparams[(int) (1)]))));
 //BA.debugLineNum = 75;BA.debugLine="CallSub2(Me, eventName, PassedTables)";
__c.CallSubNew2(ba,this,_eventname,(Object)(_passedtables));
 }else {
 //BA.debugLineNum = 77;BA.debugLine="CallSub3(Me, eventName, Params.Get(eventParam";
__c.CallSubNew3(ba,this,_eventname,_params.Get((Object)(_eventparams[(int) (0)])),_params.Get((Object)(_eventparams[(int) (1)])));
 };
 break; }
default: {
 //BA.debugLineNum = 81;BA.debugLine="CallSub2(Me, eventName, Params)";
__c.CallSubNew2(ba,this,_eventname,(Object)(_params));
 break; }
}
;
 };
 //BA.debugLineNum = 84;BA.debugLine="End Sub";
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
 //BA.debugLineNum = 24;BA.debugLine="Private Sub WebSocket_Connected (WebSocket1 As Web";
 //BA.debugLineNum = 25;BA.debugLine="Log(\"Connected\")";
__c.Log("Connected");
 //BA.debugLineNum = 26;BA.debugLine="ws = WebSocket1";
_ws = _websocket1;
 //BA.debugLineNum = 27;BA.debugLine="ABMPageId = ABM.GetPageID(page, Name,ws)";
_abmpageid = _abm.GetPageID(_page,_name,_ws);
 //BA.debugLineNum = 28;BA.debugLine="Dim session As HttpSession = ABM.GetSession(ws, A";
_session = new anywheresoftware.b4j.object.HttpSessionWrapper();
_session = _abm.GetSession(_ws,_abmshared._sessionmaxinactiveintervalseconds);
 //BA.debugLineNum = 30;BA.debugLine="If ABMShared.NeedsAuthorization Then";
if (_abmshared._needsauthorization) { 
 //BA.debugLineNum = 31;BA.debugLine="If session.GetAttribute2(\"IsAuthorized\", \"\") = \"";
if ((_session.GetAttribute2("IsAuthorized",(Object)(""))).equals((Object)(""))) { 
 //BA.debugLineNum = 32;BA.debugLine="ABMShared.NavigateToPage(ws, ABMPageId, \"../\")";
_abmshared._navigatetopage(_ws,_abmpageid,"../");
 //BA.debugLineNum = 33;BA.debugLine="Return";
if (true) return "";
 };
 };
 //BA.debugLineNum = 37;BA.debugLine="ABM.UpdateFromCache(Me, ABMShared.CachedPages, AB";
_abm.UpdateFromCache((anywheresoftware.b4a.B4AClass)(this),_abmshared._cachedpages,_abmpageid,_ws,ba);
 //BA.debugLineNum = 38;BA.debugLine="If page.ComesFromPageCache Then";
if (_page.ComesFromPageCache) { 
 //BA.debugLineNum = 40;BA.debugLine="page.Refresh";
_page.Refresh();
 //BA.debugLineNum = 42;BA.debugLine="page.FinishedLoading";
_page.FinishedLoading();
 }else {
 //BA.debugLineNum = 45;BA.debugLine="page.Prepare";
_page.Prepare();
 //BA.debugLineNum = 47;BA.debugLine="ConnectPage";
_connectpage();
 };
 //BA.debugLineNum = 49;BA.debugLine="Log(ABMPageId)";
__c.Log(_abmpageid);
 //BA.debugLineNum = 50;BA.debugLine="End Sub";
return "";
}
public String  _websocket_disconnected() throws Exception{
 //BA.debugLineNum = 52;BA.debugLine="Private Sub WebSocket_Disconnected";
 //BA.debugLineNum = 53;BA.debugLine="Log(\"Disconnected\")";
__c.Log("Disconnected");
 //BA.debugLineNum = 54;BA.debugLine="End Sub";
return "";
}
public Object callSub(String sub, Object sender, Object[] args) throws Exception {
BA.senderHolder.set(sender);
return BA.SubDelegator.SubNotFound;
}
}
