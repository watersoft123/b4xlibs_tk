//
//  iAMap.m
//  iAMapLocation
//
//  Created by kaopuedu on 2016/12/22.
//  Copyright © 2016年 kaopuedu. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "iAMapLocation.h"
#import <AMapFoundationKit/AMapFoundationKit.h>
#import <MAMapKit/MAMapKit.h>

@interface MapviewDel:NSObject<MAMapViewDelegate>

@property (nonatomic, strong) MAMapView *mapView;
@property (nonatomic, strong) NSMutableArray *annotations;

@end

@implementation MapviewDel

#pragma mark - Map Delegate

/*!
 @brief 根据anntation生成对应的View
 @param mapView 地图View
 @param annotation 指定的标注
 @return 生成的标注View
 */
- (MAAnnotationView*)mapView:(MAMapView *)mapView viewForAnnotation:(id <MAAnnotation>)annotation {
    if ([annotation isKindOfClass:[MAPointAnnotation class]])
    {
        static NSString *pointReuseIndetifier = @"pointReuseIndetifier";
        MAPinAnnotationView *annotationView = (MAPinAnnotationView*)[mapView dequeueReusableAnnotationViewWithIdentifier:pointReuseIndetifier];
        if (annotationView == nil)
        {
            annotationView = [[MAPinAnnotationView alloc] initWithAnnotation:annotation reuseIdentifier:pointReuseIndetifier];
        }
        
        annotationView.canShowCallout               = YES;
        annotationView.animatesDrop                 = YES;
        annotationView.draggable                    = YES;
        annotationView.rightCalloutAccessoryView    = [UIButton buttonWithType:UIButtonTypeDetailDisclosure];
        annotationView.pinColor                     = [self.annotations indexOfObject:annotation] % 3;
        
        return annotationView;
    }
    
    return nil;
}

/*!
 @brief 当mapView新添加annotation views时调用此接口
 @param mapView 地图View
 @param views 新添加的annotation views
 */
- (void)mapView:(MAMapView *)mapView didAddAnnotationViews:(NSArray *)views {
    
}

/*!
 @brief 当选中一个annotation views时调用此接口
 @param mapView 地图View
 @param views 选中的annotation views
 */
- (void)mapView:(MAMapView *)mapView didSelectAnnotationView:(MAAnnotationView *)view {
    MAPointAnnotation *apt=view.annotation;
    NSNumber *idx= @([self.annotations indexOfObject:apt]);
    [B4IViewWrapper raiseEvent:mapView :@"_markerselect:::" :@[idx,apt.title,apt.subtitle]];
}

/*!
 @brief 当取消选中一个annotation views时调用此接口
 @param mapView 地图View
 @param views 取消选中的annotation views
 */
- (void)mapView:(MAMapView *)mapView didDeselectAnnotationView:(MAAnnotationView *)view {
    MAPointAnnotation *apt=view.annotation;
    NSNumber *idx= @([self.annotations indexOfObject:apt]);
    [B4IViewWrapper raiseEvent:mapView :@"_markerdeselect:::" :@[idx,apt.title,apt.subtitle]];
}

/*!
 @brief 标注view的accessory view(必须继承自UIControl)被点击时调用此接口
 @param mapView 地图View
 @param annotationView callout所属的标注view
 @param control 对应的control
 */
- (void)mapView:(MAMapView *)mapView annotationView:(MAAnnotationView *)view calloutAccessoryControlTapped:(UIControl *)control {
    
}

/**
 *  标注view的calloutview整体点击时调用此接口
 *
 *  @param mapView 地图的view
 *  @param view calloutView所属的annotationView
 */
- (void)mapView:(MAMapView *)mapView didAnnotationViewCalloutTapped:(MAAnnotationView *)view {
    
}

/*!
 @brief 拖动annotation view时view的状态变化，ios3.2以后支持
 @param mapView 地图View
 @param view annotation view
 @param newState 新状态
 @param oldState 旧状态
 */
- (void)mapView:(MAMapView *)mapView annotationView:(MAAnnotationView *)view didChangeDragState:(MAAnnotationViewDragState)newState fromOldState:(MAAnnotationViewDragState)oldState {
    
}

@end

@implementation iAMap : B4IViewWrapper
    MAMapView * _mapView;
    MapviewDel *md;
    B4I *mbi;
    NSString *en;
-(void)Initialize:(B4I *)bi :(NSString *)EventName :(NSString *)apikey {
    mbi=bi;
    en=EventName.ToLowerCase;
    [B4IViewWrapper setBIAndEventName:self :bi :EventName];
    [[AMapServices sharedServices] setEnableHTTPS:YES];
    [AMapServices sharedServices].apiKey =apikey;
    md=[MapviewDel new];
    [self initAnnotations];
}

-(void)add2Parent:(B4IPanelView *)p{
    _mapView = [[MAMapView alloc] initWithFrame:[p bounds]];
    _mapView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
    _mapView.delegate = md;
    [p addSubview:_mapView];
    self.object=_mapView;
    [super innerInitialize:mbi :en :true];
    [_mapView addAnnotations:md.annotations];
    [_mapView showAnnotations:md.annotations edgePadding:UIEdgeInsetsMake(20, 20, 20, 80) animated:YES];
    
}
-(BOOL)SHOWMYLOC{
    return [_mapView isShowsUserLocation];
}
-(void)setSHOWMYLOC:(BOOL)showMyLoc{
    [_mapView setShowsUserLocation:showMyLoc];
    [_mapView setUserTrackingMode:MAUserTrackingModeFollow];
}
//-(BOOL)TestPro{
//    return true;
//}
//-(void)setTest:(BOOL)testpro{
//    
//}
-(BOOL)SHOWCOMPASS{
    return [_mapView showsCompass];
}
-(void)setSHOWCOMPASS:(BOOL)showCompass{
    [_mapView setShowsCompass:showCompass];
}
-(BOOL)SHOWSCALE{
    return [_mapView showsScale];
}
-(void)setSHOWSCALE:(BOOL)SHOWSCALE{
    [_mapView setShowsScale:SHOWSCALE];
}
-(double)ZOOMLEVEL{
    return [_mapView zoomLevel];
}
-(void)setZOOMLEVEL:(double)ZoomLevel{

    [_mapView setZoomLevel:ZoomLevel animated:true];
}
-(void)setCenterCoordinate:(double )lat :(double )lng :(BOOL )animated{
    CLLocationCoordinate2D pos=CLLocationCoordinate2DMake(lat, lng);
    [_mapView setCenterCoordinate:pos animated:animated];
}

-(void)addMarker:(double)lat :(double)lng :(NSString *)title :(NSString *)subtitle{
    MAPointAnnotation *a1 = [[MAPointAnnotation alloc] init];
    a1.coordinate = CLLocationCoordinate2DMake(lat, lng);
    a1.title      = title;
    a1.subtitle=subtitle;
    [md.annotations addObject:a1];
    
}
-(void)showMarkers{
    [_mapView addAnnotations:md.annotations];
    [_mapView showAnnotations:md.annotations edgePadding:UIEdgeInsetsMake(20, 20, 20, 80) animated:YES];
}
-(void)clearMarkers{
    md.annotations =[NSMutableArray array];
    [_mapView showAnnotations:md.annotations edgePadding:UIEdgeInsetsMake(20, 20, 20, 80) animated:YES];
}
- (void)initAnnotations
{
    md.annotations = [NSMutableArray array];
    
//    CLLocationCoordinate2D coordinates[10] = {
//        {39.992520, 116.336170},
//        {39.992520, 116.336170},
//        {39.998293, 116.352343},
//        {40.004087, 116.348904},
//        {40.001442, 116.353915},
//        {39.989105, 116.353915},
//        {39.989098, 116.360200},
//        {39.998439, 116.360201},
//        {39.979590, 116.324219},
//        {39.978234, 116.352792}};
//    
//    for (int i = 0; i < 10; ++i)
//    {
//        MAPointAnnotation *a1 = [[MAPointAnnotation alloc] init];
//        a1.coordinate = coordinates[i];
//        a1.title      = [NSString stringWithFormat:@"anno: %d", i];
//        [md.annotations addObject:a1];
//    }
}

@end
