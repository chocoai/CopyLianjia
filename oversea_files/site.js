/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ({

/***/ 53:
/***/ (function(module, exports) {

// $("body").on("click", ".btn-register",function() {
// 	window.location.href = "//upassport.ke.com/register?service=" + encodeURIComponent(window.location.href);
// })

// $("body").on("click", ".btn-login",function() {
// 	window.location.href = "//upassport.ke.com/login?service=" + encodeURIComponent(window.location.href);
// })

function seachsug() {
	var sel = $(".type-tips,.price-tips");
	var sug = $(".sug .sublist");
	var shortlist = $(".sug .shorlist");
	var ico = $(".icon");
	var sg = $(".sug-tips");
	sel.click(function(e) {
		// $(this).siblings('ul').show();
		$(this).next(ico).addClass('icons');
		$(this).parent().siblings().find('ul').hide();
		$(this).parent().siblings().find(ico).removeClass('icons');
	});
	sug.delegate('li', 'click', function(e) {
		var tex = $(this).text();
		var id = $(this).attr("short").split("/")[3];
		$(this).parent().siblings('div').text(tex).attr("short", id);
		sug.hide();
		ico.removeClass('icons');
	});
	shortlist.delegate('li', 'click', function(e) {
		var tex = $(this).find(".names").text();
		var id = $(this).attr("short");
		$(this).parent().siblings('input').val(tex).attr("short", id);
		if(e.target.nodeName !== "A"){
			var href = $(e.target).find("a").attr("href")
			window.open(href)
		}
		shortlist.hide();
		ico.removeClass('icons');
	});
	// sg.delegate('input:text', 'click', function(event) {
	// 	var van = sg.find("input").val();
	// 	if (van == "") {
	// 		$(this).next("ul").show();
	// 	} else {
	// 		var len = $(".suglist li").length;
	// 		if (len > 0) {
	// 			$(".suglist li").show();
	// 		}
	// 	}
	// });
	$(document.body).on("mousedown", function(e) {
		if (!$(e.target).closest(".type-tips,.price-tips,.sug .list,.sug .shorlist").length) {
			sug.hide();
			shortlist.hide();
			ico.removeClass('icons');
		}
	});
}

function scroll() {
	var goleft = $(".goleft");
	var goright = $(".goright");
	var box = $(".pic-scroll ul");
	var wid = 295;
	var pagelen = box.find('li').length;
	var pagenum = box.find('li').length - 3;
	var page = 1;
	if (pagelen <= 3) {
		goleft.hide();
		goright.hide();
	}
	goleft.addClass('leftend');
	goleft.click(function() {
		if ($(this).is("[class*='leftend']")) { return false; }
		if (!box.is(":animated")) {
			if (page == 1) {
				$(this).addClass("leftend");
			} else {
				box.animate({ left: '+=' + wid }, "slow");
				page--;
				if (page == 1) {
					$(this).addClass("leftend");
				}
			}
		}
		goright.removeClass("rightend");
	})
	goright.click(function() {
		if ($(this).is("[class*='rightend']")) { return false; }
		if (!box.is(":animated")) {
			if (page == pagenum) {
				$(this).addClass("rightend");
			} else {
				box.animate({ left: '-=' + wid }, "slow");
				page++;
				if (page == pagenum) {
					$(this).addClass("rightend");
				}
			}
		}
		goleft.removeClass("leftend");
	});
}

function map() {
	var tips = $(".hot-map span");
	tips.css({
		visibility: 'initial',
	});
	var hotmap = $(".hot-map");
	var tipsnum = $(".hot-map .num");
	tipsnum.eq(0).addClass('num01');
	tips.hover(function() {
		$(this).next("div").addClass('num01');
		$(this).parent(".hot-map").siblings().find('.num').removeClass('num01');;
	});
	tipsnum.mouseleave(function(event) {
		$(this).removeClass('num01');
	});
	$.each(hotmap, function(i, j) {
		var left = hotmap.eq(i).attr("p-left");
		var top = hotmap.eq(i).attr("p-top");
		var wid = hotmap.eq(i).find('.spn').outerWidth() / 2;
		var hid = hotmap.eq(i).find('.spn').height() - 1;
		var sl = hotmap.eq(i).find('.spn');
		var widnum = hotmap.eq(i).find(".num").outerWidth() / 2;
		var hidnum = hotmap.eq(i).find(".num").height() - 5;
		var num = hotmap.eq(i).find('.num');
		sl.css({
			left: left - wid + "px",
			top: top - hid + "px",
		});
		num.css({
			left: left - widnum + "px",
			top: top - hidnum + "px",
		});
	});

}
let curModule;
function sug() {
	// 区分二手房和新房
	let $moduleXinfang = $('.find-xinfang');
	let $moduleErshou = $('.find-ershou');
	let $modules = $('.search-channel span');
	let $Arrowbg = $('.sug-tips');
	let $findModule = $('.find-module');
	
	$($modules[0]).addClass('active');

	if ($($modules[0]).text() == '二手房') {
		curModule = 'homes';
	} else {
		curModule = 'newhomes';
	}

	// 添加箭头
	if ($findModule.length >= 1) {
		$Arrowbg.addClass('active1');
	}
	
	$findModule.each(function(i, el) {
		$($findModule[i]).on('click', function() {
			if (i == 0) {
				$Arrowbg.addClass('active1');
				$Arrowbg.removeClass('active2');
			} else {
				$Arrowbg.removeClass('active1');
				$Arrowbg.addClass('active2');
			}
		});
	});

	$moduleErshou.on('click', function() {
		curModule = 'homes';
		$moduleXinfang.removeClass('active');
		$moduleErshou.addClass('active');
	});

	$moduleXinfang.on('click', function() {
		curModule = 'newhomes';
		$moduleErshou.removeClass('active');
		$moduleXinfang.addClass('active');
	});

	$("#sug").click(function(e) {
		function getCookie(c_name) {
			if (document.cookie.length > 0) {
				c_start = document.cookie.indexOf(c_name + "=")
				if (c_start != -1) {
					c_start = c_start + c_name.length + 1
					c_end = document.cookie.indexOf(";", c_start)
					if (c_end == -1) c_end = document.cookie.length
					return unescape(document.cookie.substring(c_start, c_end))
				}
			}
			return ""
		}

		var nationId = getCookie('select_nation');
		regexResult = "us";
		initObj.nationList.forEach(function(cur){
			if(cur.nationId == nationId){
				regexResult = cur.hostCode;
			}
		})

		var tex = $("#tex").attr("short");
		var holder = $("#tex").attr("placeholder");
		var inp = $("#tex").val();
		var typ = $(".type-tips").attr("short");
		var pri = $(".price-tips").attr("short");
		typ = typ?typ:"";
		pri = pri?pri:"";
		if (tex != "") {
			if (typ == "" && pri == "") {
				location.href = `/${curModule}/` + regexResult + "/" + tex + "/";
			} else {
				location.href = `/${curModule}/` + regexResult + "/" + tex + "/" + typ + pri + "/";
			}
		} else {
			if (holder == inp) {
				var enat = `/${curModule}/` + regexResult + "/" + "rs" + "/";
				location.href = `/${curModule}/` + regexResult + "/" + "rs" + "/";
			} else {
				// 转义特殊字符／
				var hasSpec = /\/+/.test(inp);
				inp = hasSpec ? inp.replace(/\/+/g, '') : inp;

				var en = `/${curModule}/` + regexResult + "/" + typ + pri + "rs" + inp + "/";
				location.href = en;
			}
		}
	})
	$(".sug").delegate("input", "keyup", function(e) {
		if (e.keyCode == 13) {
			$("#sug").click();
		}
	})
}

function sugtion() {
	var tpl = '<li short="#{short_name}">' +
		'<span><span class="names">#{name}<a href="homes/#{nationSN}/#{short_name}"></a></span>'+
		'<i>(#{alias}/#{english_name}/#{abbr})<a href="homes/#{nationSN}/#{short_name}"></a></i></span>' +
		'<label>#{count}套在售</label>' +
		'</li>';
	var resultCon = $(".suglist");
	$("#tex").keyup(function() {
		// alert(curModule);
		var val = $("#tex").val();
		var url = "/api/suggestion?keyword=" + val;
		$(".shorlist").hide();
		ajax.get(url, function(data) {
			// success
			resultCon.html("");
			var data = data.data;
			for (var i = 0; i < data.length; i++) {
				var hasTpl = $.replaceTpl(tpl, {
					short_name: data[i].short_name,
					name: data[i].name,
					alias: data[i].alias,
					english_name: data[i].english_name,
					abbr: data[i].abbr,
					count: data[i].count,
					nationSN:data[i].nationSN
				});
				resultCon.append(hasTpl);
			}
			if (data.length) {
				resultCon.show();
			}
		}, function(resp) {
			//console.log(0);
			// fail

		});
	})
}

function tex(){

	$("#tex").on('click', function(){
		if($(this).val()){
			$("#shorlist").hide();
			$('#newhomes-shorlist').hide();
		}else{
			if (curModule == 'homes') {
				$("#shorlist").show();
				$('#newhomes-shorlist').hide();
			} else {
				$("#shorlist").hide();
				$('#newhomes-shorlist').show();
			}
		}
	});
}
sug();
seachsug();
scroll();
map();
tex();
// sugtion();

/***/ })

/******/ });
//# sourceMappingURL=site.js.map