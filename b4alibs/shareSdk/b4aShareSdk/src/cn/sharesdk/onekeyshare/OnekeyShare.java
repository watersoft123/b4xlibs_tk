/*
 * 官网地站:http://www.mob.com
 * 技术支持QQ: 4006852216
 * 官方微信:ShareSDK   （如果发布新版本的话，我们将会第一时间通过微信将版本更新内容推送给您。如果使用过程中有任何问题，也可以通过微信与我们取得联系，我们将会在24小时内给予回复）
 *
 * Copyright (c) 2013年 mob.com. All rights reserved.
 */

package cn.sharesdk.onekeyshare;

import static com.mob.tools.utils.BitmapHelper.captureView;

import java.util.ArrayList;
import java.util.HashMap;

import com.mob.tools.utils.R;

import android.content.Context;
import android.graphics.Bitmap;
import android.text.TextUtils;
import android.view.View;
import android.view.View.OnClickListener;
import anywheresoftware.b4a.BA;
import anywheresoftware.b4a.BA.ActivityObject;
import anywheresoftware.b4a.BA.Author;
import anywheresoftware.b4a.BA.DependsOn;
import anywheresoftware.b4a.BA.Events;
import anywheresoftware.b4a.BA.Permissions;
import anywheresoftware.b4a.BA.ShortName;
import anywheresoftware.b4a.BA.Version;
import anywheresoftware.b4a.objects.collections.List;
import anywheresoftware.b4a.objects.collections.Map;
import anywheresoftware.b4a.objects.collections.Map.MyMap;
import cn.sharesdk.framework.Platform;
import cn.sharesdk.framework.PlatformActionListener;
import cn.sharesdk.framework.ShareSDK;

@ShortName("OKS")
@Author("Icefairy333")
@Version(1.2f)
@Permissions(values={"android.permission.GET_TASKS","android.permission.INTERNET","android.permission.ACCESS_WIFI_STATE","android.permission.ACCESS_NETWORK_STATE","android.permission.CHANGE_WIFI_STATE","android.permission.WRITE_EXTERNAL_STORAGE","android.permission.READ_PHONE_STATE","android.permission.MANAGE_ACCOUNTS","android.permission.GET_ACCOUNTS","android.permission.BLUETOOTH","android.permission.BLUETOOTH_ADMIN"})
@DependsOn(values={"libammsdk","MobCommons-2016.0426.1819","MobTools-2016.0426.1819","ShareSDK-Core-2.7.2","ShareSDK-QQ-2.7.2","ShareSDK-QZone-2.7.2","ShareSDK-SinaWeibo-2.7.2","ShareSDK-Wechat-2.7.2","ShareSDK-Wechat-Core-2.7.2","ShareSDK-Wechat-Favorite-2.7.2","ShareSDK-Wechat-Moments-2.7.2"})
@ActivityObject
@Events(values={"logoclick(title as String)"})
public class OnekeyShare {
	public Map params;
	private static BA mba;
	public static final int SHARE_TEXT = 1;
	public static final int SHARE_IMAGE = 2;
	public static final int SHARE_WEBPAGE = 4;
	public static final int SHARE_MUSIC = 5;
	public static final int SHARE_VIDEO = 6;
	public static final int SHARE_APPS = 7;
	public static final int SHARE_FILE = 8;
	public static final int SHARE_EMOJI = 9;
	private String EN;
	public OnekeyShare() {
		params = new Map();
		params.Initialize();
		params.Put("customers", new ArrayList<CustomerLogo>());
		params.Put("hiddenPlatforms", new HashMap<String, String>());
	}

	/** address是接收人地址，仅在信息和邮件使用，否则可以不提供 */
	public void setAddress(String address) {
		params.Put("address", address);
	}

	/**
	 * title标题，在印象笔记、邮箱、信息、微信（包括好友、朋友圈和收藏）、
	 * 易信（包括好友、朋友圈）、人人网和QQ空间使用，否则可以不提供
	 */
	public void setTitle(String title) {
		params.Put("title", title);
	}

	/** titleUrl是标题的网络链接，仅在人人网和QQ空间使用，否则可以不提供 */
	public void setTitleUrl(String titleUrl) {
		params.Put("titleUrl", titleUrl);
	}

	/** text是分享文本，所有平台都需要这个字段 */
	public void setText(String text) {
		params.Put("text", text);
	}

	/** 获取text字段的值 */
	public String getText() {
		return params.ContainsKey("text") ? String.valueOf(params.Get("text")) : null;
	}

	/** imagePath是本地的图片路径，除Linked-In外的所有平台都支持这个字段 */
	public void setImagePath(String imagePath) {
		if(!TextUtils.isEmpty(imagePath))
			params.Put("imagePath", imagePath);
	}

	/** imageUrl是图片的网络路径，新浪微博、人人网、QQ空间和Linked-In支持此字段 */
	public void setImageUrl(String imageUrl) {
		if (!TextUtils.isEmpty(imageUrl))
			params.Put("imageUrl", imageUrl);
	}

	/** url在微信（包括好友、朋友圈收藏）和易信（包括好友和朋友圈）中使用，否则可以不提供 */
	public void setUrl(String url) {
		params.Put("url", url);
	}

	/** filePath是待分享应用程序的本地路劲，仅在微信（易信）好友和Dropbox中使用，否则可以不提供 */
	public void setFilePath(String filePath) {
		params.Put("filePath", filePath);
	}

	/** comment是我对这条分享的评论，仅在人人网和QQ空间使用，否则可以不提供 */
	public void setComment(String comment) {
		params.Put("comment", comment);
	}

	/** site是分享此内容的网站名称，仅在QQ空间使用，否则可以不提供 */
	public void setSite(String site) {
		params.Put("site", site);
	}

	/** siteUrl是分享此内容的网站地址，仅在QQ空间使用，否则可以不提供 */
	public void setSiteUrl(String siteUrl) {
		params.Put("siteUrl", siteUrl);
	}
	public void setShareType(int ShareType){
		params.Put("shareType", ShareType);
	}
	/** foursquare分享时的地方名 */
	public void setVenueName(String venueName) {
		params.Put("venueName", venueName);
	}

	/** foursquare分享时的地方描述 */
	public void setVenueDescription(String venueDescription) {
		params.Put("venueDescription", venueDescription);
	}

	/** 分享地纬度，新浪微博、腾讯微博和foursquare支持此字段 */
	public void setLatitude(float latitude) {
		params.Put("latitude", latitude);
	}

	/** 分享地经度，新浪微博、腾讯微博和foursquare支持此字段 */
	public void setLongitude(float longitude) {
		params.Put("longitude", longitude);
	}

	/** 是否直接分享 */
	public void setSilent(boolean silent) {
		params.Put("silent", silent);
	}

	/** 设置编辑页的初始化选中平台 */
	public void setPlatform(String platform) {
		params.Put("platform", platform);
	}

	/** 设置KakaoTalk的应用下载地址 */
	public void setInstallUrl(String installurl) {
		params.Put("installurl", installurl);
	}

	/** 设置KakaoTalk的应用打开地址 */
	public void setExecuteUrl(String executeurl) {
		params.Put("executeurl", executeurl);
	}

	/** 设置微信分享的音乐的地址 */
	public void setMusicUrl(String musicUrl) {
		params.Put("musicUrl", musicUrl);
	}

	/** 设置自定义的外部回调 */
	public void setCallback(PlatformActionListener callback) {
		params.Put("callback", callback);
	}

	/** 返回操作回调 */
	public PlatformActionListener getCallback() {
		return R.forceCast(params.Get("callback"));
	}

	/** 设置用于分享过程中，根据不同平台自定义分享内容的回调 */
	public void setShareContentCustomizeCallback(ShareContentCustomizeCallback callback) {
		params.Put("customizeCallback", callback);
	}

	/** 自定义不同平台分享不同内容的回调 */
	public ShareContentCustomizeCallback getShareContentCustomizeCallback() {
		return R.forceCast(params.Get("customizeCallback"));
	}

	/** 设置自己图标和点击事件，可以重复调用添加多次 */
	public void setCustomerLogo(Bitmap logo, final String label) {
		CustomerLogo cl = new CustomerLogo();
		cl.logo = logo;
		cl.label = label;
		cl.listener = new OnClickListener() {
			
			@Override
			public void onClick(View v) {
				// TODO Auto-generated method stub
				mba.raiseEventFromDifferentThread(this, null, 0, EN+"_logoclick",true, new Object[]{label});
			}
		};
		ArrayList<CustomerLogo> customers = R.forceCast(params.Get("customers"));
		customers.add(cl);
	}

	/** 设置一个总开关，用于在分享前若需要授权，则禁用sso功能 */
	public void disableSSOWhenAuthorize() {
		params.Put("disableSSO", true);
	}

	/** 设置视频网络地址 */
	public void setVideoUrl(String url) {
		params.Put("url", url);
		params.Put("shareType", Platform.SHARE_VIDEO);
	}

	/** 设置编辑页面的显示模式为Dialog模式 */
	@Deprecated
	public void setDialogMode() {
		params.Put("dialogMode", true);
	}

	/** 隐藏一个platform */
	public void addHiddenPlatform(String platform) {
		HashMap<String, String> hiddenPlatforms = R.forceCast(params.Get("hiddenPlatforms"));
		hiddenPlatforms.put(platform, platform);
	}

	/** 设置一个将被截图分享的View , surfaceView是截不了图片的*/
	public void setViewToShare(View viewToShare) {
		try {
			Bitmap bm = captureView(viewToShare, viewToShare.getWidth(), viewToShare.getHeight());
			params.Put("viewToShare", bm);
		} catch (Throwable e) {
			e.printStackTrace();
		}
	}

	/** 腾讯微博分享多张图片 */
	public void setImageArray(String[] imageArray) {
		params.Put("imageArray", imageArray);
	}

	/** 设置在执行分享到QQ或QZone的同时，分享相同的内容腾讯微博 */
	public void setShareToTencentWeiboWhenPerformingQQOrQZoneSharing() {
		params.Put("isShareTencentWeibo", true);
	}
	public void StopSdk() {
		ShareSDK.stopSDK(mba.context);
	}
	/** 设置分享界面的样式，目前只有一种，不需要设置 */
	public void setTheme(OnekeyShareTheme theme) {
		params.Put("theme", theme.getValue());
	}
	/**
	 * 
	 * @param ba
	 * @param eventname
	 * @param Appkey
	 * @param parms 这是map的list，其中渠道名放在pname中
	 */
	public void init(BA ba,String eventname,String Appkey,List parms,boolean statistics) {
		mba=ba;
		BA.Log("set mba");
		EN=eventname.toLowerCase(BA.cul);
		if(Appkey!=null&&Appkey.length()>0){
			ShareSDK.initSDK(mba.context, Appkey,statistics);	
		}else{
			ShareSDK.initSDK(mba.context,statistics);
		}
		if (parms!=null&&parms.getSize()>0) {
			for (int i = 0; i < parms.getSize(); i++) {
				MyMap cfgmap=(MyMap) parms.Get(i);
				HashMap<String, Object> cfg=new HashMap<String, Object>();
				
				for (int j = 0; j < cfgmap.size(); j++) {
					if (cfgmap.getKey(j).toString().indexOf("pname")==-1) {
						cfg.put(cfgmap.getKey(j).toString(), cfgmap.getValue(j));
						//BA.Log("key:"+cfgmap.getKey(j).toString()+" Val:"+cfgmap.getValue(j));
					}
				}
				ShareSDK.setPlatformDevInfo(cfgmap.get("pname").toString(), cfg);
				//BA.Log("initPlatforms from code pname:"+cfgmap.get("pname").toString());
			}
		}
	}
	public void show() {
		Context context;
		if (mba==null||mba.context==null) {
			BA.LogError("content null");
			context=BA.applicationContext;
		}else{
			context=mba.context;
		}
		
		HashMap<String, Object> shareParamsMap = new HashMap<String, Object>();
		//shareParamsMap.putAll(params.getObject());
		for(int i=0;i<params.getSize();i++){
			shareParamsMap.put(params.GetKeyAt(i).toString(), params.GetValueAt(i));
		}
		//ShareSDK.initSDK(context);

		// 打开分享菜单的统计
		ShareSDK.logDemoEvent(1, null);
		int iTheme = 0;
		try {
			iTheme = R.parseInt(String.valueOf(shareParamsMap.remove("theme")));
		} catch (Throwable t) {}
		OnekeyShareTheme theme = OnekeyShareTheme.fromValue(iTheme);
		OnekeyShareThemeImpl themeImpl = theme.getImpl();

		themeImpl.setShareParamsMap(shareParamsMap);
		themeImpl.setDialogMode(shareParamsMap.containsKey("dialogMode") ? ((Boolean) shareParamsMap.remove("dialogMode")) : false);
		themeImpl.setSilent(shareParamsMap.containsKey("silent") ? ((Boolean) shareParamsMap.remove("silent")) : false);
		themeImpl.setCustomerLogos((ArrayList<CustomerLogo>) shareParamsMap.remove("customers"));
		themeImpl.setHiddenPlatforms((HashMap<String, String>) shareParamsMap.remove("hiddenPlatforms"));
		themeImpl.setPlatformActionListener((PlatformActionListener) shareParamsMap.remove("callback"));
		themeImpl.setShareContentCustomizeCallback((ShareContentCustomizeCallback) shareParamsMap.remove("customizeCallback"));
		if (shareParamsMap.containsKey("disableSSO") ? ((Boolean) shareParamsMap.remove("disableSSO")) : false) {
			themeImpl.disableSSO();
		}

		themeImpl.show(context);
	}

}
