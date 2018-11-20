! function(t, e) {
	if("object" == typeof exports && "object" == typeof module) module.exports = e();
	else if("function" == typeof define && define.amd) define([], e);
	else {
		var n = e();
		for(var i in n)("object" == typeof exports ? exports : t)[i] = n[i]
	}
}("undefined" != typeof window ? window : "undefined" != typeof self ? self : "undefined" != typeof global ? global : void 0 !== this ? this : {}, function() {
	return function(t) {
		var e = {};

		function n(i) {
			if(e[i]) return e[i].exports;
			var o = e[i] = {
				i: i,
				l: !1,
				exports: {}
			};
			return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
		}
		return n.m = t, n.c = e, n.d = function(t, e, i) {
			n.o(t, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: i
			})
		}, n.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, n.t = function(t, e) {
			if(1 & e && (t = n(t)), 8 & e) return t;
			if(4 & e && "object" == typeof t && t && t.__esModule) return t;
			var i = Object.create(null);
			if(n.r(i), Object.defineProperty(i, "default", {
					enumerable: !0,
					value: t
				}), 2 & e && "string" != typeof t)
				for(var o in t) n.d(i, o, function(e) {
					return t[e]
				}.bind(null, o));
			return i
		}, n.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return n.d(e, "a", e), e
		}, n.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, n.p = "", n(n.s = "gDgk")
	}({
		"5Nui": function(t, e, n) {
			"use strict";
			e.__esModule = !0;
			var i = window.innerWidth || window.document.documentElement.clientWidth,
				o = window.innerHeight || window.document.documentElement.clientHeight,
				r = {
					target: ".post_ulog_exposure",
					domEvtName: "transitionend",
					domEvtAgent: "body",
					digEvtId: "12223",
					attr: "data-ulog-exposure",
					loadmore: !1,
					delay: 0,
					interval: 0
				};

			function a() {
				var t = this.options;
				(this.eles = t.loadmore ? Array.prototype.slice.call($(t.target)) : this.eles).forEach(function(e) {
					var n = {
						xinfangpc_show: "11315"
					};
					(function(t) {
						var e = t.getBoundingClientRect(),
							n = e.top,
							r = e.left,
							a = e.width,
							s = e.height;
						return 0 !== a && 0 !== s && n >= 0 && n <= o - s && r >= 0 && r <= i - a
					})(e) && ! function(t) {
						return !!$(t).attr("has_been_exposed")
					}(e) && ($(e).attr("has_been_exposed", 1), $.extend(n, function(t) {
						var e = {};
						return t.split("&").forEach(function(t) {
							var n = t.split("=");
							e[n[0]] = n[1]
						}), e
					}(e.getAttribute(t.attr))), window.$ULOG.send(t.digEvtId, {
						action: $.extend({}, window.__UDL_CONFIG.action || {}, n)
					}))
				})
			}

			function s(t) {
				this.options = {}, $.extend(this.options, r, t);
				var e = $(this.options.target);
				e.length > 0 && (this.eles = Array.prototype.slice.call(e), this.handler = Function.prototype.bind.call(function(t, e, n) {
					var i = Date.now(),
						o = void 0;
					return function() {
						var r = Date.now(),
							a = arguments;
						clearTimeout(o), r - i >= n ? (i = r, t.apply(this, a)) : o = setTimeout(t.bind(this), e, a)
					}
				}(a, this.options.delay, this.options.interval), this), this.bindEvt())
			}
			s.prototype = {
				constructor: s,
				bindEvt: function() {
					var t = this.options;
					return "scroll" === t.domEvtName && "body" === t.domEvtAgent ? $(window).on("scroll", this.handler) : $(t.domEvtAgent).on(t.domEvtName, this.handler), window.addEventListener("load", this.handler, !1), this
				},
				unBindEvt: function() {
					var t = this.options;
					return "scroll" === t.domEvtName && "body" === t.domEvtAgent ? $(window).off("scroll", this.handler) : $(t.domEvtAgent).off(t.domEvtName, this.handler), window.removeEventListener("load", this.handler, !1), this
				}
			};
			e.default = function(t) {
				return new s(t || {})
			}
		},
		"61jv": function(t, e, n) {
			"use strict";
			e.__esModule = !0, e.default = function() {
				$(".fix-wrap").css("position", "relative").each(function() {
					var t = $(this).attr("data-width"),
						e = $(this).find(".fix-txt").height();
					$(this).find(".fix-txt").css({
						top: "50%",
						left: "50%",
						marginLeft: "-" + t / 2 + "px",
						marginTop: "-" + e / 2 + "px",
						position: "absolute",
						"text-align": "center",
						width: t + "px"
					})
				})
			}
		},
		ID1b: function(t, e, n) {
			"use strict";
			e.__esModule = !0;
			var i = function(t, e) {
					var n = JSON.parse(localStorage.getItem(t)),
						i = void 0;
					n ? ($.each(n, function(t, i) {
						i && i.name === e.name && n.splice(t, 1)
					}), n.unshift(e), i = n.slice(0, 10)) : i = [e], localStorage.setItem(t, JSON.stringify(i))
				},
				o = function(t) {
					this.opt = {
						input: "",
						template: "",
						sugContainer: "",
						form: ""
					}, $.extend(this.opt, t), this.cityId = this.opt.sugContainer.attr("data-cityid"), this.now = Date.now || function() {
						return +new Date
					}, this.searchTimer = 0, this.maxSearchTime = 0, this.bind()
				};
			o.prototype.bind = function() {
				var t = this;
				this.opt.input && this.opt.input.on("input propertychange focus", function() {
					var e = $(this);
					t.searchTimer && clearTimeout(t.searchTimer), t.searchTimer = setTimeout(function() {
						var n = e.val();
						if("" === $.trim(n)) {
							if(!t.opt.sugContainer.closest(".listSearch").length) return t.opt.sugContainer.hide(), !1;
							var i = JSON.parse(localStorage.getItem(t.cityId));
							return null !== i ? (t.opt.sugContainer.html($("[data-history=true]").html()), $.each(i, function(e, n) {
								var i = '<li data-title="' + n.name + '" data-url="' + n.url + '" data-index="' + (e + 1) + '"><a href="' + n.url + '" data-log_index="' + (e + 1) + '" data-log_value="' + n.name + '"data-xftrack="10132_4">' + $.encodeHTML(n.name) + "</a></li>";
								t.opt.sugContainer.find(".history").append(i)
							})) : t.opt.sugContainer.html($("[data-history='false']").html()), void t.opt.sugContainer.show()
						}
						var o = t.now();
						t.maxSearchTime = Math.max(t.maxSearchTime, o), $.ajax({
							type: "get",
							url: "/loupan/search/sug?query=" + n,
							dataType: "json",
							success: function(e) {
								o >= t.maxSearchTime && (e && 0 === e.errno && e.data && e.data.length > 0 ? (t.opt.sugContainer.html(t.opt.template.render({
									list: e.data
								})), t.opt.sugContainer.show()) : t.opt.sugContainer.hide())
							}
						})
					}, 200)
				}), this.opt.sugContainer && this.opt.sugContainer.on("mousedown", "li", function() {
					var e = $(this),
						n = e.attr("data-url"),
						o = {
							name: e.attr("data-title"),
							url: n
						};
					if(i(t.cityId, o), !t.opt.sugContainer.closest(".listSearch").length) {
						var r = t.opt.sugContainer.closest(".indexSearch").length ? "xinfang_index_search" : "xinfang_list_search";
						LjUserTrack.send({
							ljweb_id: "10003",
							ljweb_mod: r,
							ljweb_bl: "search",
							ljweb_el: e.attr("data-title"),
							ljweb_index: e.attr("data-index"),
							ljweb_value: $.trim($("#search-input").val()),
							ljweb_url: e.attr("data-url")
						})
					}
				}), this.opt.form && this.opt.form.submit(function() {
					var e = t.opt.input.val();
					if("" !== $.trim(e)) {
						var n = {
							name: e,
							url: $(this).attr("data-url") + e
						};
						i(t.cityId, n), window.location.pathname = "/loupan/rs" + e
					}
					return !1
				}), this.opt.sugContainer && this.opt.sugContainer.on("click", ".set-hisNone", function() {
					localStorage.removeItem(t.cityId), setTimeout(function() {
						t.opt.sugContainer.html($(".hotSearchBox").html())
					})
				}), $("body").on("click", function(e) {
					e.target === t.opt.input[0] || e.target.closest("#sugBox") || t.opt.sugContainer.hide()
				})
			}, e.default = o
		},
		K4q0: function(t, e, n) {
			"use strict";
			e.__esModule = !0, e.default = function() {
				/*!
				 * jquery.scrollLoading.js
				 * by zhangxinxu  http://www.zhangxinxu.com
				 * 2010-11-19 v1.0
				 * 2012-01-13 v1.1 偏移值计算修改 position → offset
				 * 2012-09-25 v1.2 增加滚动容器参数, 回调参数
				 */
				! function(t) {
					t.fn.scrollLoading = function(e) {
						var n = {
								attr: "data-url",
								container: t(window),
								callback: t.noop
							},
							i = t.extend({}, n, e || {});
						i.cache = [], t(this).each(function() {
							var e = this.nodeName.toLowerCase(),
								n = t(this).attr(i.attr),
								o = {
									obj: t(this),
									tag: e,
									url: n
								};
							i.cache.push(o)
						});
						var o = function(e) {
								t.isFunction(i.callback) && i.callback.call(e.get(0))
							},
							r = function() {
								var e, n = i.container.height();
								e = t(window).get(0) === window ? t(window).scrollTop() : i.container.offset().top, t.each(i.cache, function(t, i) {
									var r = i.obj,
										a = i.tag,
										s = i.url;
									if(r) {
										var l = r.offset().top - e,
											u = l + r.height();
										(l >= 0 && l < n || u > 0 && u <= n) && (s ? "img" === a ? o(r.attr("src", s)) : r.load(s, {}, function() {
											o(r)
										}) : o(r), i.obj = null)
									}
								})
							};
						r(), i.container.bind("scroll", r)
					}
				}(jQuery),
				function(t, e, n, i) {
					var o = t(e);
					t.fn.lazyload = function(i) {
						var r, a = this,
							s = {
								threshold: 0,
								failure_limit: 0,
								event: "scroll",
								effect: "show",
								container: e,
								data_attribute: "original",
								skip_invisible: !0,
								appear: null,
								load: null,
								placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
							};

						function l() {
							var e = 0;
							a.each(function() {
								var n = t(this);
								if(!s.skip_invisible || n.is(":visible"))
									if(t.abovethetop(this, s) || t.leftofbegin(this, s));
									else if(t.belowthefold(this, s) || t.rightoffold(this, s)) {
									if(++e > s.failure_limit) return !1
								} else n.trigger("appear"), e = 0
							})
						}
						return i && (void 0 !== i.failurelimit && (i.failure_limit = i.failurelimit, delete i.failurelimit), void 0 !== i.effectspeed && (i.effect_speed = i.effectspeed, delete i.effectspeed), t.extend(s, i)), r = void 0 === s.container || s.container === e ? o : t(s.container), 0 === s.event.indexOf("scroll") && r.bind(s.event, function() {
							return l()
						}), this.each(function() {
							var e = this,
								n = t(e);
							e.loaded = !1, void 0 !== n.attr("src") && !1 !== n.attr("src") || n.is("img") && n.attr("src", s.placeholder), n.one("appear", function() {
								if(!this.loaded) {
									if(s.appear) {
										var i = a.length;
										s.appear.call(e, i, s)
									}
									t("<img />").bind("load", function() {
										var i = n.attr("data-" + s.data_attribute);
										n.hide(), n.is("img") ? n.attr("src", i) : n.css("background-image", "url('" + i + "')"), n[s.effect](s.effect_speed), e.loaded = !0;
										var o = t.grep(a, function(t) {
											return !t.loaded
										});
										if(a = t(o), s.load) {
											var r = a.length;
											s.load.call(e, r, s)
										}
									}).attr("src", n.attr("data-" + s.data_attribute))
								}
							}), 0 !== s.event.indexOf("scroll") && n.bind(s.event, function() {
								e.loaded || n.trigger("appear")
							})
						}), o.bind("resize", function() {
							l()
						}), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && o.bind("pageshow", function(e) {
							e.originalEvent && e.originalEvent.persisted && a.each(function() {
								t(this).trigger("appear")
							})
						}), t(n).ready(function() {
							l()
						}), this
					}, t.belowthefold = function(n, i) {
						return(void 0 === i.container || i.container === e ? (e.innerHeight ? e.innerHeight : o.height()) + o.scrollTop() : t(i.container).offset().top + t(i.container).height()) <= t(n).offset().top - i.threshold
					}, t.rightoffold = function(n, i) {
						return(void 0 === i.container || i.container === e ? o.width() + o.scrollLeft() : t(i.container).offset().left + t(i.container).width()) <= t(n).offset().left - i.threshold
					}, t.abovethetop = function(n, i) {
						return(void 0 === i.container || i.container === e ? o.scrollTop() : t(i.container).offset().top) >= t(n).offset().top + i.threshold + t(n).height()
					}, t.leftofbegin = function(n, i) {
						return(void 0 === i.container || i.container === e ? o.scrollLeft() : t(i.container).offset().left) >= t(n).offset().left + i.threshold + t(n).width()
					}, t.inviewport = function(e, n) {
						return !(t.rightoffold(e, n) || t.leftofbegin(e, n) || t.belowthefold(e, n) || t.abovethetop(e, n))
					}, t.extend(t.expr[":"], {
						"below-the-fold": function(e) {
							return t.belowthefold(e, {
								threshold: 0
							})
						},
						"above-the-top": function(e) {
							return !t.belowthefold(e, {
								threshold: 0
							})
						},
						"right-of-screen": function(e) {
							return t.rightoffold(e, {
								threshold: 0
							})
						},
						"left-of-screen": function(e) {
							return !t.rightoffold(e, {
								threshold: 0
							})
						},
						"in-viewport": function(e) {
							return t.inviewport(e, {
								threshold: 0
							})
						},
						"above-the-fold": function(e) {
							return !t.belowthefold(e, {
								threshold: 0
							})
						},
						"right-of-fold": function(e) {
							return t.rightoffold(e, {
								threshold: 0
							})
						},
						"left-of-fold": function(e) {
							return !t.rightoffold(e, {
								threshold: 0
							})
						}
					})
				}(jQuery, window, document)
			}
		},
		KyLK: function(t, e, n) {
			"use strict";

			function i() {
				var t = -1,
					e = 5e3,
					n = null;

				function i(r, a) {
					var s = $(a).find("em").length - 1;
					++t > s && (t = 0), o(r, a, t), n = window.setTimeout(i, e)
				}

				function o(t, e, n) {
					$(e).find("em").eq(n).addClass("emon").siblings().removeClass("emon"), $(t).find(".list1").siblings(".list1").hide().eq(n).fadeIn()
				}
				this.initSlide = function(r, a) {
					for(var s = $(r).find(".list1"), l = s.length, u = "", c = 0; c < l; c++) u += "<em></em>";
					$(a).append(u), $(a).find("em:first").addClass("emon"), s.eq(0).show(), i(r, a),
						function(r, a) {
							$(a).find("em").hover(function() {
								if(n) {
									if(clearTimeout(n), $(this).hasClass("emon")) return;
									t = $(this).prevAll().length, o(r, a, t)
								}
								$(".lj-lazy").lazyload()
							}, function() {
								return n = window.setTimeout(i, e), this.blur(), !1
							})
						}(r, a)
				}
			}
			e.__esModule = !0, i.prototype.init = function(t, e) {
				this.initSlide(t, e)
			}, e.default = i
		},
		VG0C: function(t, e, n) {
			"use strict";
			e.__esModule = !0, e.default = function() {
				! function(t) {
					t.fn.qrcode = function(e) {
						var n;

						function i(t) {
							this.mode = n, this.data = t
						}

						function o(t, e) {
							this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
						}

						function r(t, e) {
							if(void 0 == t.length) throw Error(t.length + "/" + e);
							for(var n = 0; n < t.length && 0 == t[n];) n++;
							this.num = Array(t.length - n + e);
							for(var i = 0; i < t.length - n; i++) this.num[i] = t[i + n]
						}

						function a(t, e) {
							this.totalCount = t, this.dataCount = e
						}

						function s() {
							this.buffer = [], this.length = 0
						}
						i.prototype = {
							getLength: function() {
								return this.data.length
							},
							write: function(t) {
								for(var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8)
							}
						}, o.prototype = {
							addData: function(t) {
								this.dataList.push(new i(t)), this.dataCache = null
							},
							isDark: function(t, e) {
								if(0 > t || this.moduleCount <= t || 0 > e || this.moduleCount <= e) throw Error(t + "," + e);
								return this.modules[t][e]
							},
							getModuleCount: function() {
								return this.moduleCount
							},
							make: function() {
								if(1 > this.typeNumber) {
									for(var t = 1, t = 1; 40 > t; t++) {
										for(var e = a.getRSBlocks(t, this.errorCorrectLevel), n = new s, i = 0, o = 0; o < e.length; o++) i += e[o].dataCount;
										for(o = 0; o < this.dataList.length; o++) e = this.dataList[o], n.put(e.mode, 4), n.put(e.getLength(), l.getLengthInBits(e.mode, t)), e.write(n);
										if(n.getLengthInBits() <= 8 * i) break
									}
									this.typeNumber = t
								}
								this.makeImpl(!1, this.getBestMaskPattern())
							},
							makeImpl: function(t, e) {
								this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount);
								for(var n = 0; n < this.moduleCount; n++) {
									this.modules[n] = Array(this.moduleCount);
									for(var i = 0; i < this.moduleCount; i++) this.modules[n][i] = null
								}
								this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), 7 <= this.typeNumber && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = o.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e)
							},
							setupPositionProbePattern: function(t, e) {
								for(var n = -1; 7 >= n; n++)
									if(!(-1 >= t + n || this.moduleCount <= t + n))
										for(var i = -1; 7 >= i; i++) - 1 >= e + i || this.moduleCount <= e + i || (this.modules[t + n][e + i] = 0 <= n && 6 >= n && (0 == i || 6 == i) || 0 <= i && 6 >= i && (0 == n || 6 == n) || 2 <= n && 4 >= n && 2 <= i && 4 >= i)
							},
							getBestMaskPattern: function() {
								for(var t = 0, e = 0, n = 0; 8 > n; n++) {
									this.makeImpl(!0, n);
									var i = l.getLostPoint(this);
									(0 == n || t > i) && (t = i, e = n)
								}
								return e
							},
							createMovieClip: function(t, e, n) {
								for(t = t.createEmptyMovieClip(e, n), this.make(), e = 0; e < this.modules.length; e++)
									for(var n = 1 * e, i = 0; i < this.modules[e].length; i++) {
										var o = 1 * i;
										this.modules[e][i] && (t.beginFill(0, 100), t.moveTo(o, n), t.lineTo(o + 1, n), t.lineTo(o + 1, n + 1), t.lineTo(o, n + 1), t.endFill())
									}
								return t
							},
							setupTimingPattern: function() {
								for(var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = 0 == t % 2);
								for(t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = 0 == t % 2)
							},
							setupPositionAdjustPattern: function() {
								for(var t = l.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
									for(var n = 0; n < t.length; n++) {
										var i = t[e],
											o = t[n];
										if(null == this.modules[i][o])
											for(var r = -2; 2 >= r; r++)
												for(var a = -2; 2 >= a; a++) this.modules[i + r][o + a] = -2 == r || 2 == r || -2 == a || 2 == a || 0 == r && 0 == a
									}
							},
							setupTypeNumber: function(t) {
								for(var e = l.getBCHTypeNumber(this.typeNumber), n = 0; 18 > n; n++) {
									var i = !t && 1 == (e >> n & 1);
									this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = i
								}
								for(n = 0; 18 > n; n++) i = !t && 1 == (e >> n & 1), this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = i
							},
							setupTypeInfo: function(t, e) {
								for(var n = l.getBCHTypeInfo(this.errorCorrectLevel << 3 | e), i = 0; 15 > i; i++) {
									var o = !t && 1 == (n >> i & 1);
									6 > i ? this.modules[i][8] = o : 8 > i ? this.modules[i + 1][8] = o : this.modules[this.moduleCount - 15 + i][8] = o
								}
								for(i = 0; 15 > i; i++) o = !t && 1 == (n >> i & 1), 8 > i ? this.modules[8][this.moduleCount - i - 1] = o : 9 > i ? this.modules[8][15 - i - 1 + 1] = o : this.modules[8][15 - i - 1] = o;
								this.modules[this.moduleCount - 8][8] = !t
							},
							mapData: function(t, e) {
								for(var n = -1, i = this.moduleCount - 1, o = 7, r = 0, a = this.moduleCount - 1; 0 < a; a -= 2)
									for(6 == a && a--;;) {
										for(var s = 0; 2 > s; s++)
											if(null == this.modules[i][a - s]) {
												var u = !1;
												r < t.length && (u = 1 == (t[r] >>> o & 1)), l.getMask(e, i, a - s) && (u = !u), this.modules[i][a - s] = u, -1 == --o && (r++, o = 7)
											}
										if(0 > (i += n) || this.moduleCount <= i) {
											i -= n, n = -n;
											break
										}
									}
							}
						}, o.PAD0 = 236, o.PAD1 = 17, o.createData = function(t, e, n) {
							for(var e = a.getRSBlocks(t, e), i = new s, r = 0; r < n.length; r++) {
								var u = n[r];
								i.put(u.mode, 4), i.put(u.getLength(), l.getLengthInBits(u.mode, t)), u.write(i)
							}
							for(r = t = 0; r < e.length; r++) t += e[r].dataCount;
							if(i.getLengthInBits() > 8 * t) throw Error("code length overflow. (" + i.getLengthInBits() + ">" + 8 * t + ")");
							for(i.getLengthInBits() + 4 <= 8 * t && i.put(0, 4); 0 != i.getLengthInBits() % 8;) i.putBit(!1);
							for(; !(i.getLengthInBits() >= 8 * t) && (i.put(o.PAD0, 8), !(i.getLengthInBits() >= 8 * t));) i.put(o.PAD1, 8);
							return o.createBytes(i, e)
						}, o.createBytes = function(t, e) {
							for(var n = 0, i = 0, o = 0, a = Array(e.length), s = Array(e.length), u = 0; u < e.length; u++) {
								var c = e[u].dataCount,
									h = e[u].totalCount - c,
									i = Math.max(i, c),
									o = Math.max(o, h);
								a[u] = Array(c);
								for(var d = 0; d < a[u].length; d++) a[u][d] = 255 & t.buffer[d + n];
								for(n += c, d = l.getErrorCorrectPolynomial(h), c = new r(a[u], d.getLength() - 1).mod(d), s[u] = Array(d.getLength() - 1), d = 0; d < s[u].length; d++) h = d + c.getLength() - s[u].length, s[u][d] = 0 <= h ? c.get(h) : 0
							}
							for(d = u = 0; d < e.length; d++) u += e[d].totalCount;
							for(n = Array(u), d = c = 0; d < i; d++)
								for(u = 0; u < e.length; u++) d < a[u].length && (n[c++] = a[u][d]);
							for(d = 0; d < o; d++)
								for(u = 0; u < e.length; u++) d < s[u].length && (n[c++] = s[u][d]);
							return n
						}, n = 4;
						for(var l = {
								PATTERN_POSITION_TABLE: [
									[],
									[6, 18],
									[6, 22],
									[6, 26],
									[6, 30],
									[6, 34],
									[6, 22, 38],
									[6, 24, 42],
									[6, 26, 46],
									[6, 28, 50],
									[6, 30, 54],
									[6, 32, 58],
									[6, 34, 62],
									[6, 26, 46, 66],
									[6, 26, 48, 70],
									[6, 26, 50, 74],
									[6, 30, 54, 78],
									[6, 30, 56, 82],
									[6, 30, 58, 86],
									[6, 34, 62, 90],
									[6, 28, 50, 72, 94],
									[6, 26, 50, 74, 98],
									[6, 30, 54, 78, 102],
									[6, 28, 54, 80, 106],
									[6, 32, 58, 84, 110],
									[6, 30, 58, 86, 114],
									[6, 34, 62, 90, 118],
									[6, 26, 50, 74, 98, 122],
									[6, 30, 54, 78, 102, 126],
									[6, 26, 52, 78, 104, 130],
									[6, 30, 56, 82, 108, 134],
									[6, 34, 60, 86, 112, 138],
									[6, 30, 58, 86, 114, 142],
									[6, 34, 62, 90, 118, 146],
									[6, 30, 54, 78, 102, 126, 150],
									[6, 24, 50, 76, 102, 128, 154],
									[6, 28, 54, 80, 106, 132, 158],
									[6, 32, 58, 84, 110, 136, 162],
									[6, 26, 54, 82, 110, 138, 166],
									[6, 30, 58, 86, 114, 142, 170]
								],
								G15: 1335,
								G18: 7973,
								G15_MASK: 21522,
								getBCHTypeInfo: function(t) {
									for(var e = t << 10; 0 <= l.getBCHDigit(e) - l.getBCHDigit(l.G15);) e ^= l.G15 << l.getBCHDigit(e) - l.getBCHDigit(l.G15);
									return(t << 10 | e) ^ l.G15_MASK
								},
								getBCHTypeNumber: function(t) {
									for(var e = t << 12; 0 <= l.getBCHDigit(e) - l.getBCHDigit(l.G18);) e ^= l.G18 << l.getBCHDigit(e) - l.getBCHDigit(l.G18);
									return t << 12 | e
								},
								getBCHDigit: function(t) {
									for(var e = 0; 0 != t;) e++, t >>>= 1;
									return e
								},
								getPatternPosition: function(t) {
									return l.PATTERN_POSITION_TABLE[t - 1]
								},
								getMask: function(t, e, n) {
									switch(t) {
										case 0:
											return 0 == (e + n) % 2;
										case 1:
											return 0 == e % 2;
										case 2:
											return 0 == n % 3;
										case 3:
											return 0 == (e + n) % 3;
										case 4:
											return 0 == (Math.floor(e / 2) + Math.floor(n / 3)) % 2;
										case 5:
											return 0 == e * n % 2 + e * n % 3;
										case 6:
											return 0 == (e * n % 2 + e * n % 3) % 2;
										case 7:
											return 0 == (e * n % 3 + (e + n) % 2) % 2;
										default:
											throw Error("bad maskPattern:" + t)
									}
								},
								getErrorCorrectPolynomial: function(t) {
									for(var e = new r([1], 0), n = 0; n < t; n++) e = e.multiply(new r([1, u.gexp(n)], 0));
									return e
								},
								getLengthInBits: function(t, e) {
									if(1 <= e && 10 > e) switch(t) {
										case 1:
											return 10;
										case 2:
											return 9;
										case n:
										case 8:
											return 8;
										default:
											throw Error("mode:" + t)
									} else if(27 > e) switch(t) {
										case 1:
											return 12;
										case 2:
											return 11;
										case n:
											return 16;
										case 8:
											return 10;
										default:
											throw Error("mode:" + t)
									} else {
										if(!(41 > e)) throw Error("type:" + e);
										switch(t) {
											case 1:
												return 14;
											case 2:
												return 13;
											case n:
												return 16;
											case 8:
												return 12;
											default:
												throw Error("mode:" + t)
										}
									}
								},
								getLostPoint: function(t) {
									for(var e = t.getModuleCount(), n = 0, i = 0; i < e; i++)
										for(var o = 0; o < e; o++) {
											for(var r = 0, a = t.isDark(i, o), s = -1; 1 >= s; s++)
												if(!(0 > i + s || e <= i + s))
													for(var l = -1; 1 >= l; l++) 0 > o + l || e <= o + l || 0 == s && 0 == l || a == t.isDark(i + s, o + l) && r++;
											5 < r && (n += 3 + r - 5)
										}
									for(i = 0; i < e - 1; i++)
										for(o = 0; o < e - 1; o++) r = 0, t.isDark(i, o) && r++, t.isDark(i + 1, o) && r++, t.isDark(i, o + 1) && r++, t.isDark(i + 1, o + 1) && r++, (0 == r || 4 == r) && (n += 3);
									for(i = 0; i < e; i++)
										for(o = 0; o < e - 6; o++) t.isDark(i, o) && !t.isDark(i, o + 1) && t.isDark(i, o + 2) && t.isDark(i, o + 3) && t.isDark(i, o + 4) && !t.isDark(i, o + 5) && t.isDark(i, o + 6) && (n += 40);
									for(o = 0; o < e; o++)
										for(i = 0; i < e - 6; i++) t.isDark(i, o) && !t.isDark(i + 1, o) && t.isDark(i + 2, o) && t.isDark(i + 3, o) && t.isDark(i + 4, o) && !t.isDark(i + 5, o) && t.isDark(i + 6, o) && (n += 40);
									for(o = r = 0; o < e; o++)
										for(i = 0; i < e; i++) t.isDark(i, o) && r++;
									return t = Math.abs(100 * r / e / e - 50) / 5, n + 10 * t
								}
							}, u = {
								glog: function(t) {
									if(1 > t) throw Error("glog(" + t + ")");
									return u.LOG_TABLE[t]
								},
								gexp: function(t) {
									for(; 0 > t;) t += 255;
									for(; 256 <= t;) t -= 255;
									return u.EXP_TABLE[t]
								},
								EXP_TABLE: Array(256),
								LOG_TABLE: Array(256)
							}, c = 0; 8 > c; c++) u.EXP_TABLE[c] = 1 << c;
						for(c = 8; 256 > c; c++) u.EXP_TABLE[c] = u.EXP_TABLE[c - 4] ^ u.EXP_TABLE[c - 5] ^ u.EXP_TABLE[c - 6] ^ u.EXP_TABLE[c - 8];
						for(c = 0; 255 > c; c++) u.LOG_TABLE[u.EXP_TABLE[c]] = c;
						return r.prototype = {
							get: function(t) {
								return this.num[t]
							},
							getLength: function() {
								return this.num.length
							},
							multiply: function(t) {
								for(var e = Array(this.getLength() + t.getLength() - 1), n = 0; n < this.getLength(); n++)
									for(var i = 0; i < t.getLength(); i++) e[n + i] ^= u.gexp(u.glog(this.get(n)) + u.glog(t.get(i)));
								return new r(e, 0)
							},
							mod: function(t) {
								if(0 > this.getLength() - t.getLength()) return this;
								for(var e = u.glog(this.get(0)) - u.glog(t.get(0)), n = Array(this.getLength()), i = 0; i < this.getLength(); i++) n[i] = this.get(i);
								for(i = 0; i < t.getLength(); i++) n[i] ^= u.gexp(u.glog(t.get(i)) + e);
								return new r(n, 0).mod(t)
							}
						}, a.RS_BLOCK_TABLE = [
							[1, 26, 19],
							[1, 26, 16],
							[1, 26, 13],
							[1, 26, 9],
							[1, 44, 34],
							[1, 44, 28],
							[1, 44, 22],
							[1, 44, 16],
							[1, 70, 55],
							[1, 70, 44],
							[2, 35, 17],
							[2, 35, 13],
							[1, 100, 80],
							[2, 50, 32],
							[2, 50, 24],
							[4, 25, 9],
							[1, 134, 108],
							[2, 67, 43],
							[2, 33, 15, 2, 34, 16],
							[2, 33, 11, 2, 34, 12],
							[2, 86, 68],
							[4, 43, 27],
							[4, 43, 19],
							[4, 43, 15],
							[2, 98, 78],
							[4, 49, 31],
							[2, 32, 14, 4, 33, 15],
							[4, 39, 13, 1, 40, 14],
							[2, 121, 97],
							[2, 60, 38, 2, 61, 39],
							[4, 40, 18, 2, 41, 19],
							[4, 40, 14, 2, 41, 15],
							[2, 146, 116],
							[3, 58, 36, 2, 59, 37],
							[4, 36, 16, 4, 37, 17],
							[4, 36, 12, 4, 37, 13],
							[2, 86, 68, 2, 87, 69],
							[4, 69, 43, 1, 70, 44],
							[6, 43, 19, 2, 44, 20],
							[6, 43, 15, 2, 44, 16],
							[4, 101, 81],
							[1, 80, 50, 4, 81, 51],
							[4, 50, 22, 4, 51, 23],
							[3, 36, 12, 8, 37, 13],
							[2, 116, 92, 2, 117, 93],
							[6, 58, 36, 2, 59, 37],
							[4, 46, 20, 6, 47, 21],
							[7, 42, 14, 4, 43, 15],
							[4, 133, 107],
							[8, 59, 37, 1, 60, 38],
							[8, 44, 20, 4, 45, 21],
							[12, 33, 11, 4, 34, 12],
							[3, 145, 115, 1, 146, 116],
							[4, 64, 40, 5, 65, 41],
							[11, 36, 16, 5, 37, 17],
							[11, 36, 12, 5, 37, 13],
							[5, 109, 87, 1, 110, 88],
							[5, 65, 41, 5, 66, 42],
							[5, 54, 24, 7, 55, 25],
							[11, 36, 12],
							[5, 122, 98, 1, 123, 99],
							[7, 73, 45, 3, 74, 46],
							[15, 43, 19, 2, 44, 20],
							[3, 45, 15, 13, 46, 16],
							[1, 135, 107, 5, 136, 108],
							[10, 74, 46, 1, 75, 47],
							[1, 50, 22, 15, 51, 23],
							[2, 42, 14, 17, 43, 15],
							[5, 150, 120, 1, 151, 121],
							[9, 69, 43, 4, 70, 44],
							[17, 50, 22, 1, 51, 23],
							[2, 42, 14, 19, 43, 15],
							[3, 141, 113, 4, 142, 114],
							[3, 70, 44, 11, 71, 45],
							[17, 47, 21, 4, 48, 22],
							[9, 39, 13, 16, 40, 14],
							[3, 135, 107, 5, 136, 108],
							[3, 67, 41, 13, 68, 42],
							[15, 54, 24, 5, 55, 25],
							[15, 43, 15, 10, 44, 16],
							[4, 144, 116, 4, 145, 117],
							[17, 68, 42],
							[17, 50, 22, 6, 51, 23],
							[19, 46, 16, 6, 47, 17],
							[2, 139, 111, 7, 140, 112],
							[17, 74, 46],
							[7, 54, 24, 16, 55, 25],
							[34, 37, 13],
							[4, 151, 121, 5, 152, 122],
							[4, 75, 47, 14, 76, 48],
							[11, 54, 24, 14, 55, 25],
							[16, 45, 15, 14, 46, 16],
							[6, 147, 117, 4, 148, 118],
							[6, 73, 45, 14, 74, 46],
							[11, 54, 24, 16, 55, 25],
							[30, 46, 16, 2, 47, 17],
							[8, 132, 106, 4, 133, 107],
							[8, 75, 47, 13, 76, 48],
							[7, 54, 24, 22, 55, 25],
							[22, 45, 15, 13, 46, 16],
							[10, 142, 114, 2, 143, 115],
							[19, 74, 46, 4, 75, 47],
							[28, 50, 22, 6, 51, 23],
							[33, 46, 16, 4, 47, 17],
							[8, 152, 122, 4, 153, 123],
							[22, 73, 45, 3, 74, 46],
							[8, 53, 23, 26, 54, 24],
							[12, 45, 15, 28, 46, 16],
							[3, 147, 117, 10, 148, 118],
							[3, 73, 45, 23, 74, 46],
							[4, 54, 24, 31, 55, 25],
							[11, 45, 15, 31, 46, 16],
							[7, 146, 116, 7, 147, 117],
							[21, 73, 45, 7, 74, 46],
							[1, 53, 23, 37, 54, 24],
							[19, 45, 15, 26, 46, 16],
							[5, 145, 115, 10, 146, 116],
							[19, 75, 47, 10, 76, 48],
							[15, 54, 24, 25, 55, 25],
							[23, 45, 15, 25, 46, 16],
							[13, 145, 115, 3, 146, 116],
							[2, 74, 46, 29, 75, 47],
							[42, 54, 24, 1, 55, 25],
							[23, 45, 15, 28, 46, 16],
							[17, 145, 115],
							[10, 74, 46, 23, 75, 47],
							[10, 54, 24, 35, 55, 25],
							[19, 45, 15, 35, 46, 16],
							[17, 145, 115, 1, 146, 116],
							[14, 74, 46, 21, 75, 47],
							[29, 54, 24, 19, 55, 25],
							[11, 45, 15, 46, 46, 16],
							[13, 145, 115, 6, 146, 116],
							[14, 74, 46, 23, 75, 47],
							[44, 54, 24, 7, 55, 25],
							[59, 46, 16, 1, 47, 17],
							[12, 151, 121, 7, 152, 122],
							[12, 75, 47, 26, 76, 48],
							[39, 54, 24, 14, 55, 25],
							[22, 45, 15, 41, 46, 16],
							[6, 151, 121, 14, 152, 122],
							[6, 75, 47, 34, 76, 48],
							[46, 54, 24, 10, 55, 25],
							[2, 45, 15, 64, 46, 16],
							[17, 152, 122, 4, 153, 123],
							[29, 74, 46, 14, 75, 47],
							[49, 54, 24, 10, 55, 25],
							[24, 45, 15, 46, 46, 16],
							[4, 152, 122, 18, 153, 123],
							[13, 74, 46, 32, 75, 47],
							[48, 54, 24, 14, 55, 25],
							[42, 45, 15, 32, 46, 16],
							[20, 147, 117, 4, 148, 118],
							[40, 75, 47, 7, 76, 48],
							[43, 54, 24, 22, 55, 25],
							[10, 45, 15, 67, 46, 16],
							[19, 148, 118, 6, 149, 119],
							[18, 75, 47, 31, 76, 48],
							[34, 54, 24, 34, 55, 25],
							[20, 45, 15, 61, 46, 16]
						], a.getRSBlocks = function(t, e) {
							var n = a.getRsBlockTable(t, e);
							if(void 0 == n) throw Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
							for(var i = n.length / 3, o = [], r = 0; r < i; r++)
								for(var s = n[3 * r + 0], l = n[3 * r + 1], u = n[3 * r + 2], c = 0; c < s; c++) o.push(new a(l, u));
							return o
						}, a.getRsBlockTable = function(t, e) {
							switch(e) {
								case 1:
									return a.RS_BLOCK_TABLE[4 * (t - 1) + 0];
								case 0:
									return a.RS_BLOCK_TABLE[4 * (t - 1) + 1];
								case 3:
									return a.RS_BLOCK_TABLE[4 * (t - 1) + 2];
								case 2:
									return a.RS_BLOCK_TABLE[4 * (t - 1) + 3]
							}
						}, s.prototype = {
							get: function(t) {
								return 1 == (this.buffer[Math.floor(t / 8)] >>> 7 - t % 8 & 1)
							},
							put: function(t, e) {
								for(var n = 0; n < e; n++) this.putBit(1 == (t >>> e - n - 1 & 1))
							},
							getLengthInBits: function() {
								return this.length
							},
							putBit: function(t) {
								var e = Math.floor(this.length / 8);
								this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
							}
						}, "string" == typeof e && (e = {
							text: e
						}), e = t.extend({}, {
							render: "canvas",
							width: 256,
							height: 256,
							typeNumber: -1,
							correctLevel: 2,
							background: "#ffffff",
							foreground: "#000000"
						}, e), this.each(function() {
							var n;
							if("canvas" == e.render) {
								(n = new o(e.typeNumber, e.correctLevel)).addData(e.text), n.make();
								var i = document.createElement("canvas");
								i.width = e.width, i.height = e.height;
								for(var r = i.getContext("2d"), a = e.width / n.getModuleCount(), s = e.height / n.getModuleCount(), l = 0; l < n.getModuleCount(); l++)
									for(var u = 0; u < n.getModuleCount(); u++) {
										r.fillStyle = n.isDark(l, u) ? e.foreground : e.background;
										var c = Math.ceil((u + 1) * a) - Math.floor(u * a),
											h = Math.ceil((l + 1) * a) - Math.floor(l * a);
										r.fillRect(Math.round(u * a), Math.round(l * s), c, h)
									}
							} else
								for((n = new o(e.typeNumber, e.correctLevel)).addData(e.text), n.make(), i = t("<table></table>").css("width", e.width + "px").css("height", e.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", e.background), r = e.width / n.getModuleCount(), a = e.height / n.getModuleCount(), s = 0; s < n.getModuleCount(); s++)
									for(l = t("<tr></tr>").css("height", a + "px").appendTo(i), u = 0; u < n.getModuleCount(); u++) t("<td></td>").css("width", r + "px").css("background-color", n.isDark(s, u) ? e.foreground : e.background).appendTo(l);
							n = i, jQuery(n).appendTo(this)
						})
					}
				}(jQuery)
			}
		},
		bsob: function(t, e, n) {
			"use strict";
			e.__esModule = !0, e.default = function() {
				return document.cookie.match(/lianjia_token=([^;]+)/)
			}
		},
		gDgk: function(t, e, n) {
			"use strict";
			var i = h(n("K4q0")),
				o = h(n("KyLK")),
				r = h(n("uawX")),
				a = h(n("61jv")),
				s = n("m22P"),
				l = (h(n("VG0C")), h(n("ID1b"))),
				u = h(n("bsob")),
				c = h(n("5Nui"));

			function h(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}(0, i.default)();
			var d = $(".recently"),
				f = $(".clear-all"),
				p = $("#rencetContainer"),
				g = '<li data-id="#{resblock_id}"><div class="fl"><img class="img" src="#{index_pic}"></div><div class="info fl"><p class="title"><i class="t-til">#{resblock_name}-#{resblock_id}</i></p><p>均价 <span class="price">#{average_price}</span>元/平米</p><p>#{rooms}  #{area_min}-#{area_max}平米</p></div><div class="delete">X</div></li>',
				m = '<div style="margin-top: 100px;line-height: 50px;text-align: center;"><span style="display:block;">没有浏览记录，快去看房吧~~</span></div>',
				v = '<div style="margin-top: 100px;line-height: 50px;text-align: center;"><span style="display:block;">没有找到您的浏览记录，快速登录看房~</span><a style="border: 2px solid #d9d9d9;padding: 10px;color: #888888;">登录查看更多</a></div>',
				w = function() {
					$(".loading").hide();
					var t = (0, u.default)() ? m : v;
					f.hide(), p.parent().append(t)
				},
				b = function(t) {
					var e = t.showRecent,
						n = t.deleteItem;
					ajax.get(e, function(t) {
						var e = t.data;
						e.length ? function(t, e) {
							var n = "";
							(0, u.default)() && $(".login-btn").hide();
							for(var i = 0; i < t.length; i++) n += $.replaceTpl(g, t[i]);
							f.show(), p.append(n), C.deleteList(e), $(".loading").hide()
						}(e, n) : w()
					})
				},
				C = {
					hCondition: function() {
						$(".choose").on("mouseenter", function() {
							$(this).find("ul.items").show()
						}).on("mouseleave", function() {
							$(this).find("ul.items").hide()
						}).on("click", "ul.items li", function() {
							var t = $(this),
								e = t.text();
							t.addClass("on").siblings().removeClass("on"), t.parent().siblings(".fix-item").text("").text(e), t.parent().hide()
						})
					},
					recent: function(t) {
						d.on("click", function() {
							$(this).siblings(".r-container").show(), b(t)
						}), $(document.body).on("mousedown", function(t) {
							!$(t.target).closest(".r-container").length && $(".r-container").hide()
						})
					},
					deleteList: function(t) {
						var e = $(".delete"),
							n = $(".clear-all span");
						e.on("click", function() {
							var e = $(this).parent().attr("data-id"),
								n = t + "?id=" + e;
							$(this).parent().animate({
								opacity: "0"
							}, 500, function() {
								$(this).remove(), ajax.get(n, function(t) {
									0 === $("#rencetContainer").children().length && w()
								})
							})
						}), n.on("click", function() {
							var e = t + "?id=clear";
							ajax.get(e, function(t) {
								p.fadeOut(500, function() {
									$(this).html(""), w()
								})
							})
						})
					},
					locateUrl: function() {
						var t = $(".xinfang-banner .items");
						$(".xinfang-banner .fil-btn").on("click", function() {
							var e = [],
								n = "";
							t.each(function() {
								var t = $(this),
									i = t.find(".on");
								t.hasClass("district") ? n = i.length > 0 ? i.attr("data-filter") : "" : i.length > 0 && e.push(i.attr("data-filter"))
							});
							var i = (n ? n + "/" : "") + e.join("");
							window.open("/loupan/" + (i ? i + "/" : ""))
						})
					}
				};
			! function(t) {
				$(document.body).on("click", ".search-btn", function() {
						LjUserTrack.send({
							ljweb_id: "10008",
							ljweb_mod: "xinfang_index_search",
							ljweb_bl: "search",
							ljweb_value: $.trim($("#search-input").val()),
							ljweb_channel: "xinfang",
							ljweb_ref: document.referrer
						})
					}), new r.default({
						picwrap: '[data-role="marketinfo-picwrap"]',
						markwrap: '[data-role="marketinfo-markwrap"]',
						switchCallback: function(t) {
							this.picwrap.find(".lj-lazy").eq(t).lazyload()
						}
					}), $.each(t.slide, function() {
						(new o.default).init(this.itemCon, this.dotCon)
					}), (0, a.default)(),
					function(t, e) {
						C.hCondition(), C.recent(e), C.locateUrl()
					}(t.openUrl, t.recentList), $(".s-city").click(function(t) {
						$(".city-change").show(), $(".city-change").addClass("bounceIn"), $(".overlayBg").fadeIn(300)
					}), $(".close,.overlayBg").click(function(t) {
						$(".city-change").fadeOut().removeClass("bounceIn"), $(".overlayBg").fadeOut()
					}), new l.default({
						input: $(".search"),
						template: $.template($("#suggestTpl").html()),
						sugContainer: $("#sugBox"),
						form: $("#search")
					}), $(".card").mouseenter(function(t) {
						$(".card").children(".card-container").removeClass("active"), $(this).find(".card-container").addClass("active")
					}), $(".card .play-btn").on("click", function() {
						(0, s.playVideo)($(this).attr("data-src"))
					}), $(".lj-lazy").lazyload(), (0, c.default)({
						target: ".post_ulog_exposure_scroll",
						domEvtName: "scroll",
						delay: 500,
						interval: 500
					})
			}({
				slide: [{
					itemCon: "#itemCon",
					dotCon: "#list_mark"
				}, {
					itemCon: "#videoitemCon",
					dotCon: "#videolist_mark"
				}],
				recentList: {
					showRecent: "/xinfang/history/",
					deleteItem: "/xinfang/clearhistory"
				},
				openUrl: "/loupan/"
			})
		},
		m22P: function(t, e, n) {
			"use strict";
			e.__esModule = !0;
			var i = function(t) {
				var e = ['<div class="pop-up">', '<div class="close-btn video-close video-close2x"></div>', '<div class="video-frame">', '<iframe src="', t, '" frameborder="0" allowfullscreen="true" width="100%" height="100%"></iframe>', "</div>", "</div>"].join("");
				$(e).appendTo(document.body), $(".close-btn.video-close").on("click", function() {
					$(".pop-up").remove()
				})
			};
			e.init = function(t) {
				$(".play-btn").on("click", function() {
					i(t)
				})
			}, e.playVideo = i
		},
		uawX: function(t, e, n) {
			"use strict";

			function i(t) {
				if(!t || !t.picwrap || !t.markwrap) throw new Error("Pictures wrap or mark wrap not found");
				this.picwrap = $(t.picwrap), this.markwrap = $(t.markwrap), this.switchCallback = t.switchCallback, this.switchEvent = t.switchEvent || "mouseenter", this.autoSwitch = t.autoSwitch || 0, this.picWidth = t.picWidth || this.picwrap.width(), this.picItemcontainer = t.picItemcontainer || this.picwrap.find("ul").eq(0), this.picItemlist = t.picItemlist || this.picItemcontainer.find("li"), this.picAmount = t.picItemlist || this.picItemlist.length, this.markSelectClass = t.markSelectClass || "selected", this.currentIndex = 0, this.autoSwitchTimer = null, this.init()
			}
			e.__esModule = !0, i.prototype = {
				constructor: i,
				init: function() {
					var t = this;
					this.picItemcontainer.css({
						width: this.picWidth * this.picAmount + "px"
					});
					for(var e = 0; e < this.picAmount; e++) {
						var n = 0 === e ? this.markSelectClass : "";
						this.markwrap.append('<a class="' + n + '">' + e + "</a>")
					}
					this.markwrap.on(this.switchEvent, "a", function() {
						t.switchTo($.inArray(this, t.markwrap.find("a")))
					}), this.autoSwitch && this.startAutoSwitch()
				},
				switchTo: function(t) {
					(t %= this.picAmount) !== this.currentIndex && (this.currentIndex = t, this.markwrap.find("." + this.markSelectClass).removeClass(this.markSelectClass), this.markwrap.find("a").eq(t).addClass(this.markSelectClass), this.picwrap.stop().animate({
						scrollLeft: this.picWidth * t
					}, 500), "function" == typeof this.switchCallback && this.switchCallback(this.currentIndex))
				},
				startAutoSwitch: function() {
					var t = this;
					this.stopAutoSwitch(), this.autoSwitchTimer = setInterval(function() {
						t.switchTo(t.currentIndex + 1)
					}, this.autoSwitch)
				},
				stopAutoSwitch: function() {
					null !== this.autoSwitchTimer && clearInterval(this.autoSwitchTimer)
				}
			}, e.default = i
		}
	})
});