﻿Type=Class
Version=5.45
ModulesStructureVersion=1
B4J=true
@EndOfDesignText@
'Class module

Sub Class_Globals
	'Dim ABM As ABMaterial
	Dim ABMComp As ABMCustomComponent
End Sub

'Initializes the object. You can add parameters to this method if needed.
Public Sub Initialize(InternalPage As ABMPage, ID As String)
	ABMComp.Initialize("ABMComp", Me, InternalPage, ID)
	' the automatic events will be raised on the page e.g. if the id = "mycomp" then the event will be mycomp_Click(params as Map)
	' future: we'll see if some other mechanisme is needed for non automatic events 
	
End Sub

' runs when an object is created for the first time. Expects a valid html string
' will get surrounded by a div automatically
' in the html file:
'<div ID="mycomp" class="">
'    <h1 ID="testh1">This Is a test</h1>
'</div>
Sub ABMComp_Build(internalID As String) As String
	Return $"<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=WZA72W4ZM9TDC" target="_blank">Click here to <img src="https://www.paypalobjects.com/en_US/BE/i/btn/btn_donateCC_LG.gif" alt="Donation" /> support ABMaterial</a>"$	
End Sub

' Is useful to run some initalisation script. 
Sub ABMComp_FirstRun(InternalPage As ABMPage, internalID As String)
	
	' flush not needed, it's done in the refresh method in the lib
End Sub

' runs when a refresh is called
Sub ABMComp_Refresh(InternalPage As ABMPage, internalID As String)
	' use these methods to adjust the object
	' ABM.HasClass
	' ABM.AddClass
	' ABM.RemoveClass
	
	' ABM.AddHTML
	' ABM.InsertHTMLAfter
	' ABM.RemoveHTML
	
	' ABM.GetProperty
	' ABM.SetProperty
	' ABM.RemoveProperty
	
	' ABM.GetStyleProperty
	' ABM.SetStyleProperty
	
	' do some script stuff like you do in RunJavaScript
End Sub

' do the stuff needed when the object is removed
Sub ABMComp_CleanUp(InternalPage As ABMPage, internalID As String)
	
End Sub




