import { Component, ViewChild, ElementRef } from '@angular/core';
// declare var BMap
// declare var BMAP_ANIMATION_BOUNCE;
declare var AMap;
/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {
	@ViewChild('map_container') map_container: ElementRef;
	
    map: any;//地图对象

  constructor() {
    console.log('Hello MapComponent Component');

  }
//   ionViewDidEnter() {
//     this.baidumap();
// }
// ionViewWillEnter(){
//   this.baidumap();
// }
ionViewWillEnter() {
	// this.map = new AMap.Map(this.map_container.nativeElement, {
	// 	view: new AMap.View2D({//创建地图二维视口
	// 		zoom: 11, //设置地图缩放级别
	// 		rotateEnable: true,
	// 		showBuildingBlock: true
	// 	})
	// });
	var map = new AMap.Map('container', {
		resizeEnable: true,
		center:[116.480983, 39.989628],
		zoom:11
 });
 AMap.plugin('AMap.ToolBar',function(){
		var toolbar = new AMap.ToolBar();
		map.addControl(toolbar)
 })
}


// public async baidumap() {
// 	function G(id) {
// 		return document.getElementById(id);
// 	}
//   var map = new BMap.Map("container");

//   var point = new BMap.Point(116.331398, 39.897445);
//   map.centerAndZoom(point, 12);
//   // 创建地址解析器实例
//   var myGeo = new BMap.Geocoder();
//   // 将地址解析结果显示在地图上,并调整地图视野

//   myGeo.getPoint("武汉市洪山区", function(point) {
//     if (point) {
//       map.centerAndZoom(point, 16);
//       map.addOverlay(new BMap.Marker(point));
//       console.log(point);
//       var marker = new BMap.Marker(point); // 创建标注
//       map.addOverlay(marker); // 将标注添加到地图中
//       marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
//       // marker.addEventListener("click",this.getAttr(marker));
//       var p = marker.getPosition(); //获取marker的位置
//       alert("marker的位置是" + p.lng + "," + p.lat);
//     } else {
//       alert("您选择地址没有解析到结果!");
//     }
//   }); 

// 	var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
// 		{"input" : "suggestId"
// 		,"location" : map
// 	});

// 	ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
// 	var str = "";
// 		var _value = e.fromitem.value;
// 		var value = "";
// 		if (e.fromitem.index > -1) {
// 			value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
// 		}    
// 		str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
		
// 		value = "";
// 		if (e.toitem.index > -1) {
// 			_value = e.toitem.value;
// 			value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
// 		}    
// 		str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
// 		G("searchResultPanel").innerHTML = str;
// 	});

// 	var myValue;
// 	ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
// 	var _value = e.item.value;
// 		myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
// 		G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
		
// 		setPlace();
// 	});

// 	function setPlace(){
// 		map.clearOverlays();    //清除地图上所有覆盖物
// 		function myFun(){
// 			var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
// 			map.centerAndZoom(pp, 18);
// 			map.addOverlay(new BMap.Marker(pp));    //添加标注
// 		}
// 		var local = new BMap.LocalSearch(map, { //智能搜索
// 		  onSearchComplete: myFun
// 		});
// 		local.search(myValue);
// 	}

//   // console.log(point);
//   // // 创建点坐标
//   // map.centerAndZoom(point, 16);
//   // // 初始化地图， 设置中心点坐标和地图级别
//   // function myFun(result) {
//   //   var cityName = result.name;
//   //   map.setCenter(cityName);
//   //   // alert("当前定位城市:"+cityName);
//   // }
//   // var myCity = new BMap.LocalCity();
//   // myCity.get(myFun);
// }
}
