package b4j.example;


import anywheresoftware.b4a.BA;
import anywheresoftware.b4a.B4AClass;
import anywheresoftware.b4a.debug.*;

public class demo2 extends B4AClass.ImplB4AClass implements BA.SubDelegator{
    public static java.util.HashMap<String, java.lang.reflect.Method> htSubs;
    private void innerInitialize(BA _ba) throws Exception {
        if (ba == null) {
            ba = new  anywheresoftware.b4a.StandardBA("b4j.example", "b4j.example.demo2", this);
            if (htSubs == null) {
                ba.loadHtSubs(this.getClass());
                htSubs = ba.htSubs;
            }
            ba.htSubs = htSubs;
             
        }
        if (BA.isShellModeRuntimeCheck(ba))
                this.getClass().getMethod("_class_globals", b4j.example.demo2.class).invoke(this, new Object[] {null});
        else
            ba.raiseEvent2(null, true, "class_globals", false);
    }

 public anywheresoftware.b4a.keywords.Common __c = null;
public nz.ope.skeleton.sk_helper _h = null;
public nz.ope.skeleton.sk_fontawesomeicon _f = null;
public b4j.example.main _main = null;
public String  _class_globals() throws Exception{
 //BA.debugLineNum = 2;BA.debugLine="Sub Class_Globals";
 //BA.debugLineNum = 3;BA.debugLine="Dim h As SK_Helper";
_h = new nz.ope.skeleton.sk_helper();
 //BA.debugLineNum = 4;BA.debugLine="Dim f As SK_FontAwesomeIcon";
_f = new nz.ope.skeleton.sk_fontawesomeicon();
 //BA.debugLineNum = 5;BA.debugLine="End Sub";
return "";
}
public String  _handle(anywheresoftware.b4j.object.JServlet.ServletRequestWrapper _req,anywheresoftware.b4j.object.JServlet.ServletResponseWrapper _resp) throws Exception{
nz.ope.skeleton.sk_column _skc1 = null;
nz.ope.skeleton.sk_column _skc2 = null;
nz.ope.skeleton.skeletonpage _s = null;
anywheresoftware.b4a.objects.collections.List _l = null;
nz.ope.skeleton.sk_column _skc3 = null;
nz.ope.skeleton.skeletonpage._sk_table _sktable = null;
anywheresoftware.b4a.objects.collections.List _header = null;
anywheresoftware.b4a.objects.collections.List _row1 = null;
anywheresoftware.b4a.objects.collections.List _row2 = null;
nz.ope.skeleton.skeletonpage._sk_row _r1 = null;
nz.ope.skeleton.skeletonpage._sk_row _r2 = null;
nz.ope.skeleton.sk_container _c1 = null;
nz.ope.skeleton.sk_container _c2 = null;
 //BA.debugLineNum = 11;BA.debugLine="Sub Handle(req As ServletRequest, resp As ServletR";
 //BA.debugLineNum = 12;BA.debugLine="h.Initialize";
_h._initialize(ba);
 //BA.debugLineNum = 13;BA.debugLine="f.Initialize";
_f._initialize(ba);
 //BA.debugLineNum = 15;BA.debugLine="Dim skc1 As SK_Column";
_skc1 = new nz.ope.skeleton.sk_column();
 //BA.debugLineNum = 16;BA.debugLine="Dim skc2 As SK_Column";
_skc2 = new nz.ope.skeleton.sk_column();
 //BA.debugLineNum = 18;BA.debugLine="Dim S As SkeletonPage";
_s = new nz.ope.skeleton.skeletonpage();
 //BA.debugLineNum = 19;BA.debugLine="S.Initialize";
_s._initialize(ba);
 //BA.debugLineNum = 20;BA.debugLine="S.Author = \"Author\"";
_s._setauthor("Author");
 //BA.debugLineNum = 21;BA.debugLine="S.Description = \"Description\"";
_s._setdescription("Description");
 //BA.debugLineNum = 22;BA.debugLine="S.Title = \"Title\"";
_s._settitle("Title");
 //BA.debugLineNum = 24;BA.debugLine="skc1.Initialize(6)";
_skc1._initialize(ba,(int) (6));
 //BA.debugLineNum = 26;BA.debugLine="skc1.AddHeader(1,\"Column 1\")";
_skc1._addheader((int) (1),"Column 1");
 //BA.debugLineNum = 27;BA.debugLine="skc1.AddContent(\"This page is a placeholder.\")";
_skc1._addcontent("This page is a placeholder.");
 //BA.debugLineNum = 28;BA.debugLine="skc1.AddAlert(\"Error\",\"Help help\",\"error\")";
_skc1._addalert("Error","Help help","error");
 //BA.debugLineNum = 29;BA.debugLine="skc1.AddAlert(\"Success\",\"Win Win\",\"success\")";
_skc1._addalert("Success","Win Win","success");
 //BA.debugLineNum = 30;BA.debugLine="skc1.AddContent(\"Some normal content\")";
_skc1._addcontent("Some normal content");
 //BA.debugLineNum = 32;BA.debugLine="skc1.AddHTML(h.HTMLFontAwesome(f.fa_camera,0,Fals";
_skc1._addhtml(_h._htmlfontawesome(_f._fa_camera,(int) (0),__c.False,""));
 //BA.debugLineNum = 33;BA.debugLine="skc1.AddHTML(h.HTMLFontAwesome(f.fa_camera,1,Fals";
_skc1._addhtml(_h._htmlfontawesome(_f._fa_camera,(int) (1),__c.False,""));
 //BA.debugLineNum = 34;BA.debugLine="skc1.AddHTML(h.HTMLFontAwesome(f.fa_camera,2,Fals";
_skc1._addhtml(_h._htmlfontawesome(_f._fa_camera,(int) (2),__c.False,""));
 //BA.debugLineNum = 35;BA.debugLine="skc1.AddHTML(h.HTMLFontAwesome(f.fa_camera,3,Fals";
_skc1._addhtml(_h._htmlfontawesome(_f._fa_camera,(int) (3),__c.False,""));
 //BA.debugLineNum = 36;BA.debugLine="skc1.AddHTML(h.HTMLFontAwesome(f.fa_camera,4,Fals";
_skc1._addhtml(_h._htmlfontawesome(_f._fa_camera,(int) (4),__c.False,""));
 //BA.debugLineNum = 37;BA.debugLine="skc1.AddHTML(h.HTMLFontAwesome(f.fa_camera,5,Fals";
_skc1._addhtml(_h._htmlfontawesome(_f._fa_camera,(int) (5),__c.False,"#33C3F0"));
 //BA.debugLineNum = 39;BA.debugLine="skc1.AddBreak";
_skc1._addbreak();
 //BA.debugLineNum = 41;BA.debugLine="skc1.AddHTML(h.HTMLFontAwesome(f.fa_address_book,";
_skc1._addhtml(_h._htmlfontawesome(_f._fa_address_book,(int) (0),__c.True,""));
 //BA.debugLineNum = 42;BA.debugLine="skc1.AddHTML(h.HTMLFontAwesome(f.fa_address_book,";
_skc1._addhtml(_h._htmlfontawesome(_f._fa_address_book,(int) (1),__c.True,""));
 //BA.debugLineNum = 43;BA.debugLine="skc1.AddHTML(h.HTMLFontAwesome(f.fa_address_book,";
_skc1._addhtml(_h._htmlfontawesome(_f._fa_address_book,(int) (2),__c.True,""));
 //BA.debugLineNum = 44;BA.debugLine="skc1.AddHTML(h.HTMLFontAwesome(f.fa_address_book,";
_skc1._addhtml(_h._htmlfontawesome(_f._fa_address_book,(int) (3),__c.True,""));
 //BA.debugLineNum = 45;BA.debugLine="skc1.AddHTML(h.HTMLFontAwesome(f.fa_address_book,";
_skc1._addhtml(_h._htmlfontawesome(_f._fa_address_book,(int) (4),__c.True,""));
 //BA.debugLineNum = 46;BA.debugLine="skc1.AddHTML(h.HTMLFontAwesome(f.fa_address_book,";
_skc1._addhtml(_h._htmlfontawesome(_f._fa_address_book,(int) (5),__c.True,"blue"));
 //BA.debugLineNum = 48;BA.debugLine="skc1.AddCode(\".some-class {  background-color: re";
_skc1._addcode(".some-class {  background-color: red;}");
 //BA.debugLineNum = 50;BA.debugLine="skc2.Initialize(6)";
_skc2._initialize(ba,(int) (6));
 //BA.debugLineNum = 51;BA.debugLine="skc2.Size = 6";
_skc2._setsize((int) (6));
 //BA.debugLineNum = 52;BA.debugLine="skc2.AddHeader(4,\"Column 2\")";
_skc2._addheader((int) (4),"Column 2");
 //BA.debugLineNum = 53;BA.debugLine="skc2.AddContent(\"This page is a placeholder.\")";
_skc2._addcontent("This page is a placeholder.");
 //BA.debugLineNum = 55;BA.debugLine="skc2.AddButton(\"Test\",True,\"\")";
_skc2._addbutton("Test",__c.True,"");
 //BA.debugLineNum = 56;BA.debugLine="skc2.AddInputButton(\"Test\",True,True)";
_skc2._addinputbutton("Test",__c.True,__c.True);
 //BA.debugLineNum = 57;BA.debugLine="skc2.AddInputButton(\"Test\",True,False)";
_skc2._addinputbutton("Test",__c.True,__c.False);
 //BA.debugLineNum = 58;BA.debugLine="skc2.AddAnchorButton(\"Test\",True,\"#\")";
_skc2._addanchorbutton("Test",__c.True,"#");
 //BA.debugLineNum = 60;BA.debugLine="skc2.AddBreak";
_skc2._addbreak();
 //BA.debugLineNum = 62;BA.debugLine="skc2.AddButton(\"Test\",False,\"\")";
_skc2._addbutton("Test",__c.False,"");
 //BA.debugLineNum = 63;BA.debugLine="skc2.AddInputButton(\"Test\",False,True)";
_skc2._addinputbutton("Test",__c.False,__c.True);
 //BA.debugLineNum = 64;BA.debugLine="skc2.AddInputButton(\"Test\",False,False)";
_skc2._addinputbutton("Test",__c.False,__c.False);
 //BA.debugLineNum = 65;BA.debugLine="skc2.AddAnchorButton(\"Test\",False,\"#\")";
_skc2._addanchorbutton("Test",__c.False,"#");
 //BA.debugLineNum = 67;BA.debugLine="Dim l As List = Array(\"List item 1\",\"List item 2\"";
_l = new anywheresoftware.b4a.objects.collections.List();
_l = anywheresoftware.b4a.keywords.Common.ArrayToList(new Object[]{(Object)("List item 1"),(Object)("List item 2"),(Object)("List item 3"),(Object)("List item 4")});
 //BA.debugLineNum = 69;BA.debugLine="skc2.AddList(l,False)";
_skc2._addlist(_l,__c.False);
 //BA.debugLineNum = 70;BA.debugLine="skc2.AddList(l,True)";
_skc2._addlist(_l,__c.True);
 //BA.debugLineNum = 72;BA.debugLine="Dim skc3 As SK_Column";
_skc3 = new nz.ope.skeleton.sk_column();
 //BA.debugLineNum = 73;BA.debugLine="skc3.Initialize(12)";
_skc3._initialize(ba,(int) (12));
 //BA.debugLineNum = 74;BA.debugLine="skc3.Size = 12";
_skc3._setsize((int) (12));
 //BA.debugLineNum = 76;BA.debugLine="Dim skTable As SK_Table";
_sktable = new nz.ope.skeleton.skeletonpage._sk_table();
 //BA.debugLineNum = 77;BA.debugLine="skTable.Initialize";
_sktable.Initialize();
 //BA.debugLineNum = 79;BA.debugLine="Dim Header As List = Array(\"Name\", \"Age\", \"Sex\",";
_header = new anywheresoftware.b4a.objects.collections.List();
_header = anywheresoftware.b4a.keywords.Common.ArrayToList(new Object[]{(Object)("Name"),(Object)("Age"),(Object)("Sex"),(Object)("Location")});
 //BA.debugLineNum = 80;BA.debugLine="Dim Row1 As List = Array(\"Dave Gamache\", \"26\", \"M";
_row1 = new anywheresoftware.b4a.objects.collections.List();
_row1 = anywheresoftware.b4a.keywords.Common.ArrayToList(new Object[]{(Object)("Dave Gamache"),(Object)("26"),(Object)("Male"),(Object)("San Francisco")});
 //BA.debugLineNum = 81;BA.debugLine="Dim Row2 As List = Array(\"Dwayne Johnson\", \"42\",";
_row2 = new anywheresoftware.b4a.objects.collections.List();
_row2 = anywheresoftware.b4a.keywords.Common.ArrayToList(new Object[]{(Object)("Dwayne Johnson"),(Object)("42"),(Object)("Male"),(Object)("Hayward")});
 //BA.debugLineNum = 83;BA.debugLine="skTable.Header = Header";
_sktable.Header = _header;
 //BA.debugLineNum = 85;BA.debugLine="skTable.Rows.Initialize";
_sktable.Rows.Initialize();
 //BA.debugLineNum = 86;BA.debugLine="skTable.Rows.Add(Row1)";
_sktable.Rows.Add((Object)(_row1.getObject()));
 //BA.debugLineNum = 87;BA.debugLine="skTable.Rows.Add(Row2)";
_sktable.Rows.Add((Object)(_row2.getObject()));
 //BA.debugLineNum = 89;BA.debugLine="skc3.AddHeader(1,\"Tables\")";
_skc3._addheader((int) (1),"Tables");
 //BA.debugLineNum = 97;BA.debugLine="skc3.AddContent(\"Be sure to use properly formed t";
_skc3._addcontent("Be sure to use properly formed table markup with <thead> and <tbody> when building a table");
 //BA.debugLineNum = 98;BA.debugLine="skc3.AddTable(skTable)";
_skc3._addtable(_sktable);
 //BA.debugLineNum = 100;BA.debugLine="Dim r1 As SK_Row";
_r1 = new nz.ope.skeleton.skeletonpage._sk_row();
 //BA.debugLineNum = 101;BA.debugLine="r1.Initialize";
_r1.Initialize();
 //BA.debugLineNum = 102;BA.debugLine="r1.Columns.Initialize";
_r1.Columns.Initialize();
 //BA.debugLineNum = 103;BA.debugLine="r1.Columns.Add(skc1)";
_r1.Columns.Add((Object)(_skc1));
 //BA.debugLineNum = 104;BA.debugLine="r1.Columns.Add(skc2)";
_r1.Columns.Add((Object)(_skc2));
 //BA.debugLineNum = 106;BA.debugLine="Dim r2 As SK_Row";
_r2 = new nz.ope.skeleton.skeletonpage._sk_row();
 //BA.debugLineNum = 107;BA.debugLine="r2.Initialize";
_r2.Initialize();
 //BA.debugLineNum = 108;BA.debugLine="r2.Columns.Initialize";
_r2.Columns.Initialize();
 //BA.debugLineNum = 109;BA.debugLine="r2.Columns.Add(skc3)";
_r2.Columns.Add((Object)(_skc3));
 //BA.debugLineNum = 111;BA.debugLine="Dim c1 As SK_Container";
_c1 = new nz.ope.skeleton.sk_container();
 //BA.debugLineNum = 112;BA.debugLine="c1.Initialize";
_c1._initialize(ba);
 //BA.debugLineNum = 113;BA.debugLine="c1.Align = \"right\"";
_c1._setalign("right");
 //BA.debugLineNum = 114;BA.debugLine="c1.Padding = 6";
_c1._setpadding((int) (6));
 //BA.debugLineNum = 115;BA.debugLine="c1.Rows.Initialize";
_c1._rows().Initialize();
 //BA.debugLineNum = 116;BA.debugLine="c1.Rows.Add(r1)";
_c1._rows().Add((Object)(_r1));
 //BA.debugLineNum = 118;BA.debugLine="Dim c2 As SK_Container";
_c2 = new nz.ope.skeleton.sk_container();
 //BA.debugLineNum = 119;BA.debugLine="c2.Initialize";
_c2._initialize(ba);
 //BA.debugLineNum = 120;BA.debugLine="c2.Background = \"http://getskeleton.com/examples/";
_c2._setbackground("http://getskeleton.com/examples/landing/images/values-bg.jpg");
 //BA.debugLineNum = 122;BA.debugLine="c2.Color = \"#FFFFFF\"";
_c2._setcolor("#FFFFFF");
 //BA.debugLineNum = 123;BA.debugLine="c2.Align = \"center\"";
_c2._setalign("center");
 //BA.debugLineNum = 124;BA.debugLine="c2.Padding = 6";
_c2._setpadding((int) (6));
 //BA.debugLineNum = 125;BA.debugLine="c2.Rows.Initialize";
_c2._rows().Initialize();
 //BA.debugLineNum = 126;BA.debugLine="c2.Rows.Add(r2)";
_c2._rows().Add((Object)(_r2));
 //BA.debugLineNum = 128;BA.debugLine="S.AddContainer(c1)";
_s._addcontainer(_c1);
 //BA.debugLineNum = 129;BA.debugLine="S.AddContainer(c2)";
_s._addcontainer(_c2);
 //BA.debugLineNum = 137;BA.debugLine="resp.Write(S.Render)";
_resp.Write(_s._render());
 //BA.debugLineNum = 138;BA.debugLine="End Sub";
return "";
}
public String  _initialize(anywheresoftware.b4a.BA _ba) throws Exception{
innerInitialize(_ba);
 //BA.debugLineNum = 7;BA.debugLine="Public Sub Initialize";
 //BA.debugLineNum = 9;BA.debugLine="End Sub";
return "";
}
public Object callSub(String sub, Object sender, Object[] args) throws Exception {
BA.senderHolder.set(sender);
return BA.SubDelegator.SubNotFound;
}
}
