<<<<<<< HEAD
package cn.finalteam.galleryfinal;

import java.util.List;
import java.util.ArrayList;

import anywheresoftware.b4a.BA;
import anywheresoftware.b4a.BA.Author;
import anywheresoftware.b4a.BA.DependsOn;
import anywheresoftware.b4a.BA.Events;
import anywheresoftware.b4a.BA.Permissions;
import anywheresoftware.b4a.BA.ShortName;
import anywheresoftware.b4a.BA.Version;
import cn.finalteam.galleryfinal.GalleryFinal.OnHanlderResultCallback;
import cn.finalteam.galleryfinal.model.PhotoInfo;

@ShortName("GalleryFinal")
@Author("Icefairy333")
@DependsOn(values={"b4aFinalTools","android-support-v4","universal-image-loader-1.9.5"})
@Events(values={"onHanlderSuccess(reqeustCode as Int,resultList as List)","onHanlderFailure(requestCode as Int,errorMsg as String)"})
@Version(1.6f)
@Permissions(values={"android.permission.MOUNT_UNMOUNT_FILESYSTEMS","android.permission.WRITE_EXTERNAL_STORAGE","android.permission.READ_EXTERNAL_STORAGE"})
public class gfWrapper {
	private BA mba;
	private String EN;
	public static ThemeConfig CYAN=ThemeConfig.CYAN;
	public static ThemeConfig DARK=ThemeConfig.DARK;
	public static ThemeConfig DEFAULT=ThemeConfig.DEFAULT;
	public static ThemeConfig GREEN=ThemeConfig.GREEN;
	public static ThemeConfig ORANGE=ThemeConfig.ORANGE;
	public static ThemeConfig TEAL=ThemeConfig.TEAL;
	private OnHanlderResultCallback ohrc;
	/**
	 * donot forgot add the activity to manifest editor
	 */
	public void Init(BA ba,String eventname,ThemeConfig theme) {
		mba=ba;
		EN=eventname.toLowerCase(BA.cul);
		FCWrapper fc=new FCWrapper();
		fc.init();
		fc.setEnableCamera(true);
		fc.setEnablePreview(true);
		fc.setEnableEdit(true);
		fc.setEnableCrop(true);
		CoreConfig coreConfig=new CoreConfig.Builder(ba.context, new UILImageLoader(), theme).setFunctionConfig(fc.Build()).build();
		GalleryFinal.init(coreConfig);
		ohrc=new OnHanlderResultCallback() {
			
			@Override
			public void onHanlderSuccess(int reqeustCode, List<PhotoInfo> resultList) {
				// TODO Auto-generated method stub
				//BA.Log("onSuccess");
				anywheresoftware.b4a.objects.collections.List lst=new anywheresoftware.b4a.objects.collections.List();
				lst.Initialize();
				for (int i = 0; i < resultList.size(); i++) {
					lst.Add(resultList.get(i));
				}
				if(mba.subExists(EN+"_onhanldersuccess")){
					//raiseEventFromDifferentThread 可以从另外的activity中返回消息
					mba.raiseEventFromDifferentThread(this, null, 0, EN+"_onhanldersuccess", true, new Object[]{reqeustCode,lst});
//					mba.raiseEvent(this, EN+"_onhanldersuccess", new Object[]{reqeustCode,lst});
					//BA.Log("sub exist");
				}else{
					BA.Log("sub not exist");
				}
			}
			
			@Override
			public void onHanlderFailure(int requestCode, String errorMsg) {
				// TODO Auto-generated method stub
				BA.Log("onFailure");
				mba.raiseEventFromDifferentThread(this, null, 0, EN+"_onhanlderfailure", true, new Object[]{requestCode,errorMsg});
				
				//mba.raiseEvent(this, EN+"_onhanlderfailure", new Object[]{requestCode,errorMsg});
			}
		};
	}
	public void openGallerySingle2(int requestCode, FCWrapper fc) {
		GalleryFinal.openGallerySingle(requestCode, fc.Build(),ohrc); 
	}
	public void openGallerySingle(int requestCode) {
		GalleryFinal.openGallerySingle(requestCode, ohrc); 
	}
	public void openGalleryMuti(int requestCode,int nMax) {
		GalleryFinal.openGalleryMuti(requestCode,nMax, ohrc);
	}
	public void openGalleryMuti2(int requestCode,int nMax,FCWrapper fc) {
		GalleryFinal.openGalleryMuti(requestCode,fc.Build(),ohrc);
	}
	public void openCamera(int requestCode) {
		GalleryFinal.openCamera(requestCode, ohrc);
	}	
	public void openCamera2(int requestCode,FCWrapper fc) {
		GalleryFinal.openCamera(requestCode, fc.Build(), ohrc);
	}
	public void openCrop(int requestCode,String photoPath) {
		GalleryFinal.openCrop(requestCode, photoPath, ohrc);
	}
	public void openCrop2(int requestCode,String photoPath, FCWrapper con) {
		GalleryFinal.openCrop(requestCode, con.Build(), photoPath, ohrc);
	}
	public void openEdit(int requestCode,String photoPath) {
		GalleryFinal.openEdit(requestCode, photoPath, ohrc);
	}
	public void openEdit2(int requestCode,String photoPath, FCWrapper con) {
		GalleryFinal.openEdit(requestCode,con.Build(), photoPath, ohrc);
	}
	/**
	 * 多图浏览
	 *      Dim lsts As List 
	 *		lsts.Initialize
	 *  	photoinfo(0).PhotoId = Rnd(11111,99999)
	 *		photoinfo(1).PhotoPath = comm.simgurl(1)
	 *		photoinfo(1).PhotoId = Rnd(11111,99999)
	 *		photoinfo(2).PhotoPath = 本地路径(Path) 或  URL地址
	 *		photoinfo(2).Width = 200
	 *		photoinfo(2).Height = 200
	 *		photoinfo(2).Degree = 0
	 *		Log(photoinfo(2).PhotoPath)
	 *		photoinfo(2).PhotoId = Rnd(11111,99999)
	 *		lsts.Add(photoinfo(0))
	 *		lsts.Add(photoinfo(1))
	 *		lsts.Add(photoinfo(2))
	 *		gf.PhotoViewMuti(ret,lsts,gffc)
	 */
	public void PhotoViewMuti(int requestCode,ArrayList<PhotoInfo> resultList, FCWrapper con){
		BA.Log("PhotoViewMuti");
		GalleryFinal.PhotoViewMuti(requestCode, con.Build(), resultList);
	}
}
=======
package cn.finalteam.galleryfinal;

import java.util.List;
import java.util.ArrayList;

import anywheresoftware.b4a.BA;
import anywheresoftware.b4a.BA.Author;
import anywheresoftware.b4a.BA.DependsOn;
import anywheresoftware.b4a.BA.Events;
import anywheresoftware.b4a.BA.Permissions;
import anywheresoftware.b4a.BA.ShortName;
import anywheresoftware.b4a.BA.Version;
import cn.finalteam.galleryfinal.GalleryFinal.OnHanlderResultCallback;
import cn.finalteam.galleryfinal.model.PhotoInfo;

@ShortName("GalleryFinal")
@Author("Icefairy333")
@DependsOn(values={"b4aFinalTools","android-support-v4","universal-image-loader-1.9.5"})
@Events(values={"onHanlderSuccess(reqeustCode as Int,resultList as List)","onHanlderFailure(requestCode as Int,errorMsg as String)"})
@Version(1.6f)
@Permissions(values={"android.permission.MOUNT_UNMOUNT_FILESYSTEMS","android.permission.WRITE_EXTERNAL_STORAGE","android.permission.READ_EXTERNAL_STORAGE"})
public class gfWrapper {
	private BA mba;
	private String EN;
	public static ThemeConfig CYAN=ThemeConfig.CYAN;
	public static ThemeConfig DARK=ThemeConfig.DARK;
	public static ThemeConfig DEFAULT=ThemeConfig.DEFAULT;
	public static ThemeConfig GREEN=ThemeConfig.GREEN;
	public static ThemeConfig ORANGE=ThemeConfig.ORANGE;
	public static ThemeConfig TEAL=ThemeConfig.TEAL;
	private OnHanlderResultCallback ohrc;
	/**
	 * donot forgot add the activity to manifest editor
	 */
	public void Init(BA ba,String eventname,ThemeConfig theme) {
		mba=ba;
		EN=eventname.toLowerCase(BA.cul);
		FCWrapper fc=new FCWrapper();
		fc.init();
		fc.setEnableCamera(true);
		fc.setEnablePreview(true);
		fc.setEnableEdit(true);
		fc.setEnableCrop(true);
		CoreConfig coreConfig=new CoreConfig.Builder(ba.context, new UILImageLoader(), theme).setFunctionConfig(fc.Build()).build();
		GalleryFinal.init(coreConfig);
		ohrc=new OnHanlderResultCallback() {
			
			@Override
			public void onHanlderSuccess(int reqeustCode, List<PhotoInfo> resultList) {
				// TODO Auto-generated method stub
				//BA.Log("onSuccess");
				anywheresoftware.b4a.objects.collections.List lst=new anywheresoftware.b4a.objects.collections.List();
				lst.Initialize();
				for (int i = 0; i < resultList.size(); i++) {
					lst.Add(resultList.get(i));
				}
				if(mba.subExists(EN+"_onhanldersuccess")){
					//raiseEventFromDifferentThread 可以从另外的activity中返回消息
					mba.raiseEventFromDifferentThread(this, null, 0, EN+"_onhanldersuccess", true, new Object[]{reqeustCode,lst});
//					mba.raiseEvent(this, EN+"_onhanldersuccess", new Object[]{reqeustCode,lst});
					//BA.Log("sub exist");
				}else{
					BA.Log("sub not exist");
				}
			}
			
			@Override
			public void onHanlderFailure(int requestCode, String errorMsg) {
				// TODO Auto-generated method stub
				BA.Log("onFailure");
				mba.raiseEventFromDifferentThread(this, null, 0, EN+"_onhanlderfailure", true, new Object[]{requestCode,errorMsg});
				
				//mba.raiseEvent(this, EN+"_onhanlderfailure", new Object[]{requestCode,errorMsg});
			}
		};
	}
	public void openGallerySingle2(int requestCode, FCWrapper fc) {
		GalleryFinal.openGallerySingle(requestCode, fc.Build(),ohrc); 
	}
	public void openGallerySingle(int requestCode) {
		GalleryFinal.openGallerySingle(requestCode, ohrc); 
	}
	public void openGalleryMuti(int requestCode,int nMax) {
		GalleryFinal.openGalleryMuti(requestCode,nMax, ohrc);
	}
	public void openGalleryMuti2(int requestCode,int nMax,FCWrapper fc) {
		GalleryFinal.openGalleryMuti(requestCode,fc.Build(),ohrc);
	}
	public void openCamera(int requestCode) {
		GalleryFinal.openCamera(requestCode, ohrc);
	}	
	public void openCamera2(int requestCode,FCWrapper fc) {
		GalleryFinal.openCamera(requestCode, fc.Build(), ohrc);
	}
	public void openCrop(int requestCode,String photoPath) {
		GalleryFinal.openCrop(requestCode, photoPath, ohrc);
	}
	public void openCrop2(int requestCode,String photoPath, FCWrapper con) {
		GalleryFinal.openCrop(requestCode, con.Build(), photoPath, ohrc);
	}
	public void openEdit(int requestCode,String photoPath) {
		GalleryFinal.openEdit(requestCode, photoPath, ohrc);
	}
	public void openEdit2(int requestCode,String photoPath, FCWrapper con) {
		GalleryFinal.openEdit(requestCode,con.Build(), photoPath, ohrc);
	}
	/**
	 * 多图浏览
	 *      Dim lsts As List 
	 *		lsts.Initialize
	 *  	photoinfo(0).PhotoId = Rnd(11111,99999)
	 *		photoinfo(1).PhotoPath = comm.simgurl(1)
	 *		photoinfo(1).PhotoId = Rnd(11111,99999)
	 *		photoinfo(2).PhotoPath = 本地路径(Path) 或  URL地址
	 *		photoinfo(2).Width = 200
	 *		photoinfo(2).Height = 200
	 *		photoinfo(2).Degree = 0
	 *		Log(photoinfo(2).PhotoPath)
	 *		photoinfo(2).PhotoId = Rnd(11111,99999)
	 *		lsts.Add(photoinfo(0))
	 *		lsts.Add(photoinfo(1))
	 *		lsts.Add(photoinfo(2))
	 *		dim curindex as int=2 '当前ID(从0开始)
	 *		gf.PhotoViewMuti(ret,curindex,lsts,gffc)
	 */
	public void PhotoViewMuti(int requestCode,int curindex,ArrayList<PhotoInfo> resultList, FCWrapper con){
		BA.Log("PhotoViewMuti");
		BA.Log("PhotoViewMuti-index:"+curindex);
		GalleryFinal.PhotoViewMuti(requestCode, con.Build(), resultList, curindex);
	}
}
>>>>>>> master
