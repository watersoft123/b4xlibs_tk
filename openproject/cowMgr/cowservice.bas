﻿Type=Service
Version=6
ModulesStructureVersion=1
B4A=true
@EndOfDesignText@
#Region  Service Attributes 
	#StartAtBoot: False
	
#End Region

Sub Process_Globals
	'These global variables will be declared once when the application starts.
	'These variables can be accessed from all modules.
	Private noti As Notification
	Public notiid As Int=3956
	Private thd As Thread
End Sub

Sub Service_Create

End Sub
Sub startcow
	noti.Initialize
	noti.Icon="icon"
	noti.OnGoingEvent=True
	noti.Vibrate=False
	noti.Sound=True
	noti.Light=False
	noti.SetInfo(Application.LabelName,"牛儿正在吃草",actmain)
	Service.StartForeground(notiid,noti)
	Dim ret As String =comm.shell(Starter.cowPath&" -rc "&Starter.cfgPath&" -logFile "&Starter.cfgPath.Replace("core.txt","logfile.log")&" &")
'	Log("ret:"&ret)
	CallSubDelayed2(Me,"showmsg",ret)'因为这里是在 子线程中所以不能直接toast
End Sub
Sub showmsg(msg As String)
	If msg<>Null And msg.Length>0 Then 	comm.TL(msg)
End Sub
Sub stopcow
	Service.StopForeground(notiid)
	comm.shell("killall cow")
End Sub
'Sub buildcfg
'	If File.Exists(
'End Sub
Sub Service_Start (StartingIntent As Intent)
	thd.Initialise("thd")
	thd.Start(Me,"startcow",Null)
End Sub
Sub thd_Ended(endedOK As Boolean, error As String) 'The thread has terminated. If endedOK is False error holds the reason for failure
	If endedOK Then
		Log("thd ended")
	Else
		Log("thd error:"&error)
		
	End If
	comm.TL("核心配置文件可能错误，请仔细检查后再尝试")
	stopcow
'	comm.TL(comm.shell("netstat -ano|grep 127.0.0.1:7777"))
End Sub
Sub Service_Destroy

End Sub
