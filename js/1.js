! function(e, t) {
	if("object" == typeof exports && "object" == typeof module) module.exports = t();
	else if("function" == typeof define && define.amd) define([], t);
	else {
		var r = t();
		for(var n in r)("object" == typeof exports ? exports : e)[n] = r[n]
	}
}("undefined" != typeof window ? window : "undefined" != typeof self ? self : "undefined" != typeof global ? global : void 0 !== this ? this : {}, function() {
	return function(e) {
		var t = {};

		function r(n) {
			if(t[n]) return t[n].exports;
			var o = t[n] = {
				i: n,
				l: !1,
				exports: {}
			};
			return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
		}
		return r.m = e, r.c = t, r.d = function(e, t, n) {
			r.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: n
			})
		}, r.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, r.t = function(e, t) {
			if(1 & t && (e = r(e)), 8 & t) return e;
			if(4 & t && "object" == typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if(r.r(n), Object.defineProperty(n, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && "string" != typeof e)
				for(var o in e) r.d(n, o, function(t) {
					return e[t]
				}.bind(null, o));
			return n
		}, r.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return r.d(t, "a", t), t
		}, r.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, r.p = "", r(r.s = "xDpm")
	}({
		Dmqw: function(e, t, r) {
			"use strict";

			function n(e) {
				if(!(this instanceof n)) return new n(e);
				this.opt = $.extend({
					url: "",
					method: "get",
					dataType: "json",
					validateCode: !0,
					args: {},
					type: "ajax"
				}, e), "jsonp" == this.opt.type && (this.opt.dataType = "jsonp")
			}
			t.__esModule = !0, $.extend(n.prototype, {
				request: function(e, t) {
					var r, n = ((r = {
						success: $.noop,
						fail: $.noop,
						timeout: $.noop
					}).timeout = 15e3, r);
					$.extend(n, t);
					var o = $.Deferred(),
						i = this;
					$.extend(i.opt.args, e);
					$.ajax({
						url: i.opt.url,
						type: i.opt.method,
						dataType: i.opt.dataType,
						data: i.opt.args,
						timeout: i.opt.timeout
					}).success(function(e) {
						if(!0 === i.opt.validateCode && e && "code" in e) {
							if(1 != e.code) return void o.reject(e);
							if(-1 == e.code) return void($.listener && $.listener.trigger("unlogin"));
							e.data && !$.isArray(e.data) && (e = e.data)
						}
						o.resolve(e)
					}).fail(function(e) {
						o.reject(e)
					});
					return o
				},
				setArgs: function(e) {
					$.extend(this.opt.args, e)
				}
			}), t.default = n
		},
		GdL1: function(e, t, r) {
			"use strict";
			var n = s(r("OT1u")),
				o = s(r("Dmqw"));
			r("s52S");
			var i = s(r("N0Gk"));

			function s(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			$.EventEmitter = n.default, $.listener = new n.default(!0), $.Trans = o.default, $.env = i.default
		},
		K4q0: function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function() {
				/*!
				 * jquery.scrollLoading.js
				 * by zhangxinxu  http://www.zhangxinxu.com
				 * 2010-11-19 v1.0
				 * 2012-01-13 v1.1 偏移值计算修改 position → offset
				 * 2012-09-25 v1.2 增加滚动容器参数, 回调参数
				 */
				! function(e) {
					e.fn.scrollLoading = function(t) {
						var r = {
								attr: "data-url",
								container: e(window),
								callback: e.noop
							},
							n = e.extend({}, r, t || {});
						n.cache = [], e(this).each(function() {
							var t = this.nodeName.toLowerCase(),
								r = e(this).attr(n.attr),
								o = {
									obj: e(this),
									tag: t,
									url: r
								};
							n.cache.push(o)
						});
						var o = function(t) {
								e.isFunction(n.callback) && n.callback.call(t.get(0))
							},
							i = function() {
								var t, r = n.container.height();
								t = e(window).get(0) === window ? e(window).scrollTop() : n.container.offset().top, e.each(n.cache, function(e, n) {
									var i = n.obj,
										s = n.tag,
										a = n.url;
									if(i) {
										var c = i.offset().top - t,
											l = c + i.height();
										(c >= 0 && c < r || l > 0 && l <= r) && (a ? "img" === s ? o(i.attr("src", a)) : i.load(a, {}, function() {
											o(i)
										}) : o(i), n.obj = null)
									}
								})
							};
						i(), n.container.bind("scroll", i)
					}
				}(jQuery),
				function(e, t, r, n) {
					var o = e(t);
					e.fn.lazyload = function(n) {
						var i, s = this,
							a = {
								threshold: 0,
								failure_limit: 0,
								event: "scroll",
								effect: "show",
								container: t,
								data_attribute: "original",
								skip_invisible: !0,
								appear: null,
								load: null,
								placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
							};

						function c() {
							var t = 0;
							s.each(function() {
								var r = e(this);
								if(!a.skip_invisible || r.is(":visible"))
									if(e.abovethetop(this, a) || e.leftofbegin(this, a));
									else if(e.belowthefold(this, a) || e.rightoffold(this, a)) {
									if(++t > a.failure_limit) return !1
								} else r.trigger("appear"), t = 0
							})
						}
						return n && (void 0 !== n.failurelimit && (n.failure_limit = n.failurelimit, delete n.failurelimit), void 0 !== n.effectspeed && (n.effect_speed = n.effectspeed, delete n.effectspeed), e.extend(a, n)), i = void 0 === a.container || a.container === t ? o : e(a.container), 0 === a.event.indexOf("scroll") && i.bind(a.event, function() {
							return c()
						}), this.each(function() {
							var t = this,
								r = e(t);
							t.loaded = !1, void 0 !== r.attr("src") && !1 !== r.attr("src") || r.is("img") && r.attr("src", a.placeholder), r.one("appear", function() {
								if(!this.loaded) {
									if(a.appear) {
										var n = s.length;
										a.appear.call(t, n, a)
									}
									e("<img />").bind("load", function() {
										var n = r.attr("data-" + a.data_attribute);
										r.hide(), r.is("img") ? r.attr("src", n) : r.css("background-image", "url('" + n + "')"), r[a.effect](a.effect_speed), t.loaded = !0;
										var o = e.grep(s, function(e) {
											return !e.loaded
										});
										if(s = e(o), a.load) {
											var i = s.length;
											a.load.call(t, i, a)
										}
									}).attr("src", r.attr("data-" + a.data_attribute))
								}
							}), 0 !== a.event.indexOf("scroll") && r.bind(a.event, function() {
								t.loaded || r.trigger("appear")
							})
						}), o.bind("resize", function() {
							c()
						}), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && o.bind("pageshow", function(t) {
							t.originalEvent && t.originalEvent.persisted && s.each(function() {
								e(this).trigger("appear")
							})
						}), e(r).ready(function() {
							c()
						}), this
					}, e.belowthefold = function(r, n) {
						return(void 0 === n.container || n.container === t ? (t.innerHeight ? t.innerHeight : o.height()) + o.scrollTop() : e(n.container).offset().top + e(n.container).height()) <= e(r).offset().top - n.threshold
					}, e.rightoffold = function(r, n) {
						return(void 0 === n.container || n.container === t ? o.width() + o.scrollLeft() : e(n.container).offset().left + e(n.container).width()) <= e(r).offset().left - n.threshold
					}, e.abovethetop = function(r, n) {
						return(void 0 === n.container || n.container === t ? o.scrollTop() : e(n.container).offset().top) >= e(r).offset().top + n.threshold + e(r).height()
					}, e.leftofbegin = function(r, n) {
						return(void 0 === n.container || n.container === t ? o.scrollLeft() : e(n.container).offset().left) >= e(r).offset().left + n.threshold + e(r).width()
					}, e.inviewport = function(t, r) {
						return !(e.rightoffold(t, r) || e.leftofbegin(t, r) || e.belowthefold(t, r) || e.abovethetop(t, r))
					}, e.extend(e.expr[":"], {
						"below-the-fold": function(t) {
							return e.belowthefold(t, {
								threshold: 0
							})
						},
						"above-the-top": function(t) {
							return !e.belowthefold(t, {
								threshold: 0
							})
						},
						"right-of-screen": function(t) {
							return e.rightoffold(t, {
								threshold: 0
							})
						},
						"left-of-screen": function(t) {
							return !e.rightoffold(t, {
								threshold: 0
							})
						},
						"in-viewport": function(t) {
							return e.inviewport(t, {
								threshold: 0
							})
						},
						"above-the-fold": function(t) {
							return !e.belowthefold(t, {
								threshold: 0
							})
						},
						"right-of-fold": function(t) {
							return e.rightoffold(t, {
								threshold: 0
							})
						},
						"left-of-fold": function(t) {
							return !e.rightoffold(t, {
								threshold: 0
							})
						}
					})
				}(jQuery, window, document)
			}
		},
		KtKm: function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function() {
				$("#userInfoContainer");
				n.default.init(), $("body").on("click", "#loginBtn", function(e) {
					e.preventDefault(), n.default.openLoginDialog()
				}), $("body").on("click", "#registerBtn", function(e) {
					e.preventDefault(), n.default.openDialogRegister()
				})
			};
			var n = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(r("jwuD"))
		},
		"L+3P": function(e, t, r) {
			"use strict";
			var n = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(r("w/TI"));
			var o = [],
				i = void 0,
				s = $(window);

			function a(e, t, r, n) {
				var o = $(e.el);
				t || (t = document.documentElement.scrollTop || document.body.scrollTop), r || (r = s.width()), n || (n = window.innerHeight);
				var i = o.offset().top - e.marginTop;
				return !(i + o.height() + e.marginBottom < t || i > t + n) && (e.callback && e.callback(), !0)
			}

			function c() {
				i = (0, n.default)(function(e) {
					! function(e) {
						for(var t = void 0, r = s.width(), n = window.innerHeight, i = 0, c = o.length; i < c; i++) a(t = o[i], e, r, n) && !t.always && --t.times <= 0 && (o.splice(i, 1), c--, i--)
					}(e)
				})
			}
			e.exports = function(e) {
				var t = {
					el: "",
					marginTop: 0,
					marginBottom: 0,
					times: 1,
					always: !1,
					callback: $.noop
				};
				if(($.extend(t, e), t.el) && (!a(t) || t.always)) return o.push(t), i || c(), {
					destroy: function() {
						var e = o.indexOf(t);
						e >= 0 && o.splice(e, 1)
					},
					pause: function() {
						var e = o.indexOf(t);
						e >= 0 && o.splice(e, 1)
					},
					resume: function() {
						o.indexOf(t) < 0 && o.push(t)
					}
				}
			}
		},
		N0Gk: function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function() {
				$.parseURL || ($.parseURL = function(e) {
					if(!e) return null;
					for(var t = ["url", "origin", "scheme", "slash", "host", "port", "path", "query", "hash"], r = /^((?:([A-Za-z]+)?:?(\/{0,3}))?([0-9.\-A-Za-z]+\.[0-9A-Za-z]+)?(?::(\d+))?)(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(e), n = {}, o = 0, i = t.length; o < i; o += 1) n[t[o]] = r[o] || "";
					return n
				});
				var e = {
					host: "",
					scheme: "",
					port: "",
					env: "online"
				};
				var t = {
					getEnv: function() {
						return e.env
					},
					fixedHost: function(t) {
						if(!t) return e.host;
						var r = t.substring(0, t.indexOf("."));
						switch(e.env) {
							case "dev":
							case "test":
								if(0 !== r.indexOf(e.env)) return e.env + t
						}
						return t
					},
					fixedUrl: function(r) {
						var n = $.parseURL(r);
						return n.host ? (n.host = t.fixedHost(n.host), n.port = e.port, n.scheme || (n.scheme = e.scheme)) : (n.host = e.host, n.scheme = e.scheme, n.port = e.port),
							function(e) {
								var t = "";
								return e.scheme && (t += e.scheme + "://"), e.host && (t += e.host), e.port && (t += ":" + e.port), e.path && (t += "/" + e.path), e.query && (t += "?" + e.query), e.hash && (t += "#" + e.hash), t
							}(n)
					},
					isSameDomain: function(t) {
						return $.parseURL(t).host == e.host
					}
				};
				return function() {
					var t = $.parseURL(location.href);
					e.host = t.host, e.scheme = t.scheme, e.port = t.port;
					var r = e.host.substring(0, e.host.indexOf("."));
					0 === r.indexOf("dev") ? e.env = "dev" : 0 === r.indexOf("test") && (e.env = "test")
				}(), t
			}()
		},
		OT1u: function(e, t, r) {
			"use strict";
			t.__esModule = !0;
			var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			};

			function o() {}
			"function" != typeof Object.create && (Object.create = function() {
				var e = function() {};
				return function(t) {
					if(arguments.length > 1) throw Error("Second argument not supported");
					if("object" != (void 0 === t ? "undefined" : n(t))) throw TypeError("Argument must be an object");
					e.prototype = t;
					var r = new e;
					return e.prototype = null, r
				}
			}()), Object.keys || (Object.keys = function() {
				var e = Object.prototype.hasOwnProperty,
					t = !{
						toString: null
					}.propertyIsEnumerable("toString"),
					r = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
					o = r.length;
				return function(i) {
					if("object" !== (void 0 === i ? "undefined" : n(i)) && ("function" != typeof i || null === i)) throw new TypeError("Object.keys called on non-object");
					var s, a, c = [];
					for(s in i) e.call(i, s) && c.push(s);
					if(t)
						for(a = 0; a < o; a++) e.call(i, r[a]) && c.push(r[a]);
					return c
				}
			}()), o.extend = function(e) {
				var t = this,
					r = t.prototype;

				function i() {
					this && t(this, arguments), this && this._initialize_ && this._initialize_.apply(this, arguments)
				}
				var s = i.prototype = Object.create(r);
				for(var a in e) {
					if("constructor" === a) return;
					var c = e[a];
					if("function" == typeof c && r[a] && "function" == typeof r[a]) c = function(e, t) {
						return function() {
							var n = this._super;
							this._super = r[e];
							var o = t.apply(this, arguments);
							return this._super = n, o
						}
					}(a, c);
					else if("object" === (void 0 === c ? "undefined" : n(c)) && r[a] && "object" === n(r[a]))
						for(var l in r[a]) c[l] || (c[l] = r[a][l]);
					s[a] = c
				}
				return i.extend = o.extend, i
			};
			var i = o.extend({
				_initialize_: function(e) {
					this._eventList = {}, this._eventTriggerd_ = {}, this.initialize && this.initialize.apply(this, arguments), this._promise_ = "boolean" == typeof e && e
				},
				on: function(e, t) {
					if(!e || !t) throw "type of fn is required";
					var r = this._eventList[e];
					r || (r = [], this._eventList[e] = r), r.push(t)
				},
				off: function(e, t) {
					if(e) {
						var r = this._eventList[e];
						if(r && r.length) {
							if(!t) {
								for(; r.pop(););
								return
							}
							for(var n = 0, o = r.length; n < o; n++)
								if(r[n] == t || r[n] == t.fn) return void r.splice(n, 1)
						}
					} else this._eventList = {}
				},
				trigger: function(e) {
					if(e) {
						var t = Array.prototype.slice.call(arguments, 1);
						this._promise_ && (this._eventTriggerd_[e] = t);
						var r = this._eventList[e];
						if(r && r.length)
							for(var n = 0; n < r.length; n++)
								if(!1 === r[n].apply(this, t)) return !1
					}
				},
				before: function(e, t) {
					var r, n = this;
					return function() {
						return --e > 0 ? r = t.apply(n, arguments) : t = null, r
					}
				},
				once: function(e, t) {
					e && t && this.on(e, this.before(2, t))
				},
				destroy: function() {
					this._eventList = null
				},
				always: function(e, t) {
					this.on(e, t), this._eventTriggerd_[e] && t.apply(null, this._eventTriggerd_[e])
				}
			});
			t.default = i
		},
		aArZ: function(e, t, r) {
			"use strict";
			var n = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}(r("L+3P"));
			var o = $(".search-tab .tabs");
			var i = $(".search-tab .check");
			var s = $(".feedback-box").html(),
				a = $(".overlay_bg");

			function c() {
				$("#feedback");
				var e = $(".feedback-box");
				e.fadeOut().removeClass("bounceIn"), e.html(s), a.fadeOut()
			}

			function l(e, t) {
				searchHis = localStorage.getItem(e), searchHis = JSON.parse(searchHis), searchHis ? ($.each(searchHis, function(e, r) {
					r && r.name == t.name && searchHis.splice(e, 1)
				}), searchHis.unshift(t), saveQuery = searchHis.slice(0, 10)) : saveQuery = [t], localStorage.setItem(e, JSON.stringify(saveQuery))
			}

			function d() {
				var e = $(".btn");
				if($(".search-tab .check").length > 0) {
					var t = $(".search-tab .check").attr("actdata"),
						r = e.attr("daty-id");
					menu = t + r, $("#keyword-box").on("formSelect", function(e, t) {
						$(this).val($(t).find(".hot-title i").text()), url = $(t).attr("actdata"), url = url.substring(url.indexOf("&url=") + 5, url.lastIndexOf("&title")), url = unescape(url), $(this).attr("url", url)
					}), e.click(function(e) {
						if($("#keyword-box").attr("url")) {
							var t = $("#keyword-box").val(),
								r = $("#keyword-box").attr("url");
							query = {
								name: t,
								url: r
							}, l(menu, query)
						} else {
							var n = $(".search-txt form").attr("data-action"),
								o = $("#keyword-box").val(),
								i = "https://" + window.location.host + n + o;
							"" != o && (query = {
								name: o,
								url: i
							}, l(menu, query))
						}
					}), $(".hot-sug").delegate("li a", "click", function(e) {
						var t = $(e.currentTarget);
						name = t.text(), url = t.attr("href"), query = {
							name: name,
							url: url
						}, l(menu, query)
					}), $("#suggest-cont").delegate("ul li", "click", function(e) {
						var t = $(e.currentTarget);
						name = t.find(".hot-title i").text(), url = t.attr("actdata"), url = url.substring(url.indexOf("&url=") + 5, url.lastIndexOf("&title")), url = unescape(url), query = {
							name: name,
							url: url
						}, l(menu, query)
					});
					var n = localStorage.getItem(menu);
					if(null != (n = JSON.parse(n))) {
						$("#keyword-box").val(n[0].name);
						var o = $(".hot-sug ul#" + t + " .list"),
							i = $(".hot-sug ul#" + t + " .hot-name"),
							s = o.html();
						i.text("搜索历史"), o.html(""), $.each(n, function(e, t) {
							var r = '<li><a href="' + t.url + '" data-log_index="' + (e + 1) + '" data-log_value="' + t.name + '">' + $.encodeHTML(t.name) + "</a></li>";
							o.append(r)
						});
						var a = $("#" + t + " .del");
						a.show(), a.click(function(e) {
							localStorage.removeItem(menu), o.html(""), o.append(s), i.text("热门搜索"), a.hide(), texval
						})
					}
				}
			}

			function u() {
				function e() {
					var e = $(window).height(),
						t = $(document).scrollTop();
					$("#back-top").attr("daty-id") ? t > e ? ($("#gotop").show(), $(".fix-right .tips,.fix-right .has-ask").show()) : ($("#gotop").hide(), $(".fix-right .tips,.fix-right .has-ask").hide()) : ($(".fix-right .tips,.fix-right .has-ask").show(), t > e ? $("#gotop").show() : $("#gotop").hide())
				}
				$(document).ready(function(t) {
					e(),
						function() {
							$(".ewm-close").click(function(e) {
								$(".sh-erweima").hide().addClass("hide"), $(this).hide();
								var t = $(".sh-erweima").attr("class");
								localStorage.setItem(void 0, JSON.stringify(t))
							});
							var e = localStorage.getItem(void 0);
							e ? e.indexOf("sh-erweima hide") >= 0 && $(".sh-erweima,.ewm-close").hide() : $(".sh-erweima,.ewm-close").show()
						}(), $("body").on("click", "#gotop", function() {
							$("html , body").animate({
								scrollTop: 0
							}, 1e3)
						})
				}), $(window).scroll(function(t) {
					e()
				}), $("body").on("click", "#back-top .mycart .popup", function(e) {
					e.stopPropagation()
				})
			}
			e.exports = {
				init: function(e) {
					d(), $(document.body).on("mousedown", function(e) {
							$(e.target).closest(".hot-sug,.search-txt ul,.del").length || ($(".hot-sug").hide(), o.css({
								height: "35px",
								overflow: "hidden",
								border: "0px",
								background: "none",
								left: "0px",
								top: "0px",
								display: "none"
							}))
						}), $("#keyword-box:text").click(function(e) {
							"" == $(this).val() ? $(e.target).next("div").show() : ($("#keyword-box").select(), $(e.target).next("div").show())
						}), $("#keyword-box").keydown(function(e) {
							$(e.target).next("div").hide()
						}),
						function() {
							var e = $(".lianjia-link-box .tab");
							$(".link-list div").eq(0).show(), $(".link-footer div").eq(0).show(), e.delegate("span", "mouseover", function(e) {
								var t = $(e.currentTarget),
									r = t.index(),
									n = t.closest(".tab").next(".link-list");
								t.addClass("hover").siblings("span").removeClass("hover"), n.find("div").eq(r).show().siblings("div").hide()
							})
						}(),
						function() {
							var e = $(".hot-sug ul");
							e.eq(0).show(), i.click(function() {
								o.css({
									height: "auto",
									overflow: "auto",
									background: "#fff",
									border: "1px solid #ccc",
									left: "-1px",
									top: "-1px",
									display: "block"
								})
							}), "ershoufang" == i.attr("actdata") && $(".savesearch").show(), o.delegate("li label", "click", function(t) {
								var r = $(t.currentTarget),
									n = r.parent("li").index(),
									s = r.attr("actdata");
								s = s.split("=")[1], i.text(r.text()), i.attr("actdata", s), o.css({
									display: "none"
								});
								var a = $.queryToJson(r.attr("actData"));
								a && defaultSuggest.suggestView.model.trans.setArgs(a);
								var c = $(this).attr("formact"),
									l = r.attr("tra"),
									u = r.attr("tips");
								r.closest(".search-txt").find("form").attr({
									action: c,
									target: l
								}), r.closest(".search-txt").find("form").attr({
									"data-action": c
								}), r.closest(".search-txt").find(".autoSuggest").attr("placeholder", u), e.eq(n).show().siblings("ul").hide();
								var f = r.closest(".search-txt").find(".autoSuggest");
								"placeholder" in document.createElement("input") ? f.val("") : f.val(u), "ershoufang" == s ? $(".savesearch").show() : $(".savesearch").hide(), d()
							})
						}(), $("#back-top").on("click", "li", function() {
							var e = $(this).find("a").attr("data-url");
							if(e)
								if(window.loginData && 1 == window.loginData.code) window.open(e);
								else {
									var t = $(".btn-login");
									t.length > 0 ? t.trigger("click") : alert("请登录后使用，谢谢！")
								}
						}),
						function() {
							var e = $('[data-role="huodong-btn"]'),
								t = $('[data-role="huodong-mask"]'),
								r = $('[data-role="huodong-layer"]');
							e.length > 0 && (e.click(function() {
								t.fadeIn(500), r.addClass("bounceIn").show()
							}), r.click(function(e) {
								var n = $(e.target);
								(0 == n.closest('[data-role="huodong-wrap"]').length || n.closest(".close").length > 0) && (t.fadeOut(500), r.removeClass("bounceIn").fadeOut())
							}))
						}(),
						function() {
							var e = $("#feedback"),
								t = $(".feedback-box");
							e.click(function(e) {
								t.show(), t.addClass("bounceIn"), a.fadeIn(300), t.html(s)
							}), a.click(function(e) {
								c()
							}), t.delegate(".closebok", "click", function(e) {
								c()
							})
						}(),
						function() {
							var e = $(".feedback-box");
							$("#tel").val(), e.delegate("#sub", "click", function() {
								$("#sub");
								var t = $("#tips"),
									r = ($("#count"), $("#tel").val()),
									n = $("#count").val();
								n = $.trim(n);
								var o = $("#count").attr("placeholder");
								if("" == n || n == o) return $(".erro-tips").show(), !1;
								var i = {
									contact: r,
									content: n
								};
								$.ajax({
									type: "POST",
									url: "//www.lianjia.com/site/accuse/",
									dataType: "json",
									data: i,
									xhrFields: {
										withCredentials: !0
									},
									crossDomain: !0,
									success: function(r) {
										0 == r.status ? (t.html("反馈成功非常感谢您的反馈！"), e.delay(2e3).fadeOut().removeClass("bounceIn"), a.delay(2e3).fadeOut()) : t.html("反馈失败请重新填写！")
									}
								})
							}), e.delegate(".tab span", "click", function() {
								$(".complain .tab-box").eq($(this).index()).show().siblings().hide(), $(this).addClass("check").siblings().removeClass("check")
							}), e.delegate(".ent", "click", function() {
								$("#tousu .btn-more").attr("href", "https://" + window.location.host.split(".").slice(-3).join(".") + "/topic/tousu/");
								var e = ljConf.pageConfig.ajaxroot + "ajax/tousu/GetCityTousuBrief";
								$.ajax({
									url: e,
									dataType: "jsonp",
									data: {
										city_id: ljConf.city_id
									}
								}).done(function(e) {
									var t = $(".feedback-box #list");
									if(t.html(""), (e = e.data).data && e.data.length <= 0 && $("#tousu").hide(), e.data && 0 == e.code) {
										for(var r = e.data, n = "", o = 0; o < r.length; o++) {
											var i = void 0;
											i = 1 == r[o].issue_status ? "未处理" : 2 == r[o].issue_status ? "处理中" : "已完成", n += $.replaceTpl('<li><span class="time">#{issue_time}</span><span class="name">#{customer_name}</span><span class="phone">#{customer_phone}</span><span class="type">#{trade_type}</span><span class="finish">#{issue_status}</span></li>', {
												issue_time: r[o].issue_time,
												customer_name: r[o].customer_name,
												customer_phone: r[o].customer_phone,
												trade_type: r[o].trade_type,
												issue_status: i
											})
										}
										t.append(n)
									}
								})
							})
						}(),
						function() {
							var e = $("#back-top");
							if(e.hasClass("fix-right-v2") || e.hasClass("fix-right-v3")) {
								var t = "";
								e.on("mouseenter", "li", function() {
									var e = $(this).find(".popup").eq(0);
									t = this.className, e.show(), e.stop().animate({
										opacity: "1",
										right: "38px"
									}, 200)
								}).on("mouseleave", "li", function() {
									var e = $(this).find(".popup").eq(0),
										r = this.className;
									t = "", e.stop().animate({
										opacity: "0",
										right: "48px"
									}, 200, function() {
										r != t && e.hide()
									})
								})
							} else {
								var r = $("#back-top .tips li,#gotop");
								r.mouseenter(function() {
									$(this).find("span").css({
										opacity: "1"
									}), $(this).css({
										overflow: "inherit",
										width: "auto"
									})
								}), r.mouseleave(function(e) {
									$(this).find("span").css({
										opacity: "0"
									}), $(this).css({
										overflow: "hidden",
										width: "37px"
									})
								})
							}
						}(),
						function() {
							i.attr("actdata");
							var e = $(".savesearch");
							e.length && (0, n.default)({
								el: e,
								callback: function() {
									var e = ljConf.city_id,
										t = new $.ListView({
											el: ".savesearch",
											template: "#savesearch",
											url: $.env.fixedUrl("http://ajax.lianjia.com/ajax/user/favorite/getSearchNotifyNum"),
											type: "jsonp",
											args: {
												cityId: e
											}
										});
									t.showloading = function() {}, t.init()
								}
							});
							var t = $(".savesearch");
							t.find(".s-show"), t.delegate(".more", "click", function(e) {
								var t = $(e.currentTarget);
								t.parent("ul").find(".list").css({
									height: "auto"
								}), t.hide()
							}), t.delegate(".s-show", "click", function(e) {
								var t = $(e.currentTarget);
								t.next(".cunn").toggle(), "none" == t.next(".cunn").css("display") ? t.find("label").removeClass("down") : t.find("label").addClass("down"), $(".sug-tips ul").hide()
							}), $(".savesearch .s-show").click(function() {}), $(document.body).on("mousedown", function(e) {
								$(e.target).closest(".savesearch").length || (t.find(".cunn").hide(), t.find("label").removeClass("down"))
							})
						}(),
						function() {
							var e = $(".frauds-list .tab");
							$(".link-list div").eq(0).show(), e.delegate("span", "click", function(e) {
								var t = $(e.currentTarget),
									r = t.index(),
									n = t.closest(".tab").next(".link-list");
								t.addClass("hover").siblings("span").removeClass("hover"), n.find("div").eq(r).show().siblings("div").hide()
							})
						}(), u()
				}
			}
		},
		jwuD: function(e, t, r) {
			"use strict";
			t.__esModule = !0;
			var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				o = !1,
				i = !1,
				s = "dev" === $.env.getEnv() ? "http://upassport.test.lianjia.com:5201/" : "test" === $.env.getEnv() ? "http://upassport.test.lianjia.com:5201/" : "https://upassport.lianjia.com/",
				a = s + "freshCaptch",
				c = /^\w{4}$/,
				l = $.env.getEnv(),
				d = function(e, t) {
					$(".panel_login").hide();
					$('<div class="panel_login panel_success"><i class="close_success">&times</i>' + e + (t ? "" : '<div>欢迎回来，<a class="green tologin">点击这里去登录</a></div></div>')).appendTo(".loginContainer");
					$(".close_success").on("click", function() {
						$(".overlay_bg").hide(), $(".panel_success").remove()
					}), t && setTimeout(function() {
						location.reload()
					}, 2e3)
				},
				u = function(e, t) {
					var r = {
						phone: [/^\d{11}$/, "请输入有效的手机号"],
						pwd: [/^\w{8,}$/, "密码必须是至少8位的数字字母组合"]
					}[t];
					return !!r && (!!r[0].test(e) || r[1])
				},
				f = /^\d{11}$/,
				g = "https://ajax.api.lianjia.com/login/login/getuserinfo";
			"test" == $.env.getEnv() ? g = "http://ajax.testapi.lianjia.com/login/login/getuserinfo" : "dev" == $.env.getEnv() && (g = "http://ajax.devapi.lianjia.com:8080/login/login/getuserinfo");
			var h = {
				checkExists: s + "CheckExist",
				sendVerifyCode: s + "sendSms",
				sendVerifyVoiceCode: s + "sendVoice",
				verifyCode: "//passport.lianjia.com/register/ljRegister/GenerateVerifyCode",
				checkVerifyCode: "//passport.lianjia.com/register/ljRegister/CheckVerifyCode",
				sendSMS: "//passport.lianjia.com/register/ljRegister/SendMobileVerifyCode",
				checkMobileCode: "//passport.lianjia.com/register/ljRegister/CheckMobileVerifyCode"
			};

			function v() {
				"test" == $.env.getEnv() ? lianjiaCasManager.config({
					setLoginUrl: g,
					service: g,
					getFirstTicket: s + "login?service=" + encodeURIComponent(g) + "&get-lt=true&isajax=true",
					loginUrl: s + "login"
				}) : "dev" == $.env.getEnv() ? lianjiaCasManager.config({
					setLoginUrl: g,
					service: g,
					getFirstTicket: s + "login?service=" + encodeURIComponent(g) + "&get-lt=true&isajax=true",
					loginUrl: s + "login"
				}) : lianjiaCasManager.config({
					setLoginUrl: g,
					getFirstTicket: s + "login?service=" + encodeURIComponent(g) + "&get-lt=true&isajax=true",
					service: g,
					loginUrl: s + "login"
				}), i && i()
			}

			function p(e) {
				lianjiaCasManager ? e() : i = e
			}

			function _() {
				if(!o) {
					o = !0;
					var e = document.createElement("script");
					"test" == $.env.getEnv() ? e.src = s + "dist/js/passport.js" : e.src = "dev" === l ? s + "/dist/js/passport.js?v=1234" : s + "dist/js/passport.js", e.type = "text/javascript", e.charset = "utf-8", e.onload = v, document.getElementsByTagName("head")[0].appendChild(e)
				}
			}

			function m() {
				window.$ULOG && $ULOG.send("10225"), window.$ULOG.send("10179", {
					action: {
						xinfangpc_click: "10117_1"
					}
				});
				var e = $(this).attr("class");
				return $(".overlay_bg").fadeIn(300), $("#dialog_tel").removeAttr("class").addClass("panel_login animated " + e).fadeIn(), $("#dialog_tel .verImg").trigger("click"), $("body").css({
					overflow: "hidden"
				}), _(), !1
			}

			function b() {
				$(".panel_success").remove(), window.$ULOG && $ULOG.send("10225"), $(".panel_login").fadeOut();
				$(this).attr("class");
				return $("#dialog_tel").removeClass("bounceIn"), $("#dialog_tel").hide(), $("#dialog_reg").hide(), $("#dialog").show(), $("body").css({
					overflow: "hidden"
				}), _(), !1
			}

			function w() {
				$ULOG.send("10225");
				var e = $(this).attr("class");
				return $(".overlay_bg").fadeIn(300), $("#dialog_reg").removeAttr("class").addClass("panel_login animated " + e).fadeIn(), $("#dialog_reg .verImg").trigger("click"), $("body").css({
					overflow: "hidden"
				}), _(), !1
			}

			function k() {
				window.$ULOG && $ULOG.send("10448"), $(".panel_login").fadeOut();
				$(this).attr("class");
				return $("#dialog_tel").removeClass("bounceIn"), $("#dialog_tel").hide(), $("#dialog_reg").hide(), $("#dialog").hide(), $("#dialog_forget").show(), $("#dialog_forget .verImg").trigger("click"), $("body").css({
					overflow: "hidden"
				}), _(), !1
			}
			$(document.body).ready(function() {
				var e = $("#con_login_user .verImg"),
					t = $("#con_login_user").find(".show-error"),
					r = $("#con_login_user_tel .verImg"),
					o = $("#con_login_user_tel").find(".show-error"),
					i = $("#con_login_user_reg .checkVerimg .verImg"),
					l = $("#con_login_user_tel .checkVerimg1 .verImg"),
					v = $("#con_login_user_reg").find(".show-error"),
					y = $("#con_forget_user_tel .verImg"),
					C = $("#con_forget_user_tel").find(".show-error");
				$("#con_forget_user_pw").find(".show-error");

				function x() {
					$(".panel_login").fadeOut(), $(".overlay_bg").fadeOut(), $("body").css({
						overflow: ""
					}), $("#dialog").removeClass("bounceIn")
				}
				e.on("click", function() {
					var e = +new Date;
					window.$ULOG && $ULOG.send("10451"), $(this).attr("src", a + "?t=" + e)
				}), r.on("click", function() {
					var e = +new Date;
					window.$ULOG && $ULOG.send("10451"), $(this).attr("src", a + "?t=" + e)
				}), y.on("click", function() {
					var e = +new Date;
					window.$ULOG && $ULOG.send("10451"), $(this).attr("src", a + "?t=" + e)
				}), i.on("click", function() {
					var e = +new Date;
					window.$ULOG && $ULOG.send("10451"), $(this).attr("src", a + "?t=" + e)
				}), l.on("click", function() {
					var e = +new Date;
					window.$ULOG && $ULOG.send("10451"), $(this).attr("src", a + "?t=" + e)
				}), $(".typeUserInfo").delegate(".btn-login", "click", m), $(".loginContainer").delegate(".totellogin", "click", function(e) {
					$(".panel_success").remove(),
						function() {
							window.$ULOG && $ULOG.send("10225"), $(this).attr("class"), $("#dialog").removeClass("bounceIn"), $("#dialog").hide(), $("#dialog_tel").removeAttr("class").addClass("panel_login animated className").show(), $("#dialog_tel .verImg").trigger("click"), $("body").css({
								overflow: "hidden"
							}), _()
						}()
				}), $(".loginContainer").delegate(".tologin", "click", b), $(".typeUserInfo").delegate(".btn-register", "click", w), $(".loginContainer").delegate(".toforget", "click", k), $(".overlay_bg,.claseDialogBtn").click(function() {
					x()
				}), $(".close_login").click(function() {
					x()
				}), $(".loginContainer").delegate(".checkbox-btn", "click", function(e) {
					var t = $(this);
					t.find("input").get(0).checked ? t.find("span").addClass("active") : t.find("span").removeClass("active")
				});
				var L = function(e, t) {
					var r, n = e || this,
						o = !1;
					n.parent().show();
					e = $.extend({}, e);
					n.css({
						color: "#333333"
					});
					n.html('<div class="drag_bg"></div><div class="drag_text" onselectstart="return false;" unselectable="on">拖动滑块验证</div><div class="handler handler_bg"></div>');
					var i = n.find(".handler"),
						s = n.find(".drag_bg"),
						a = n.find(".drag_text"),
						c = n.width() - i.width();
					i.mousedown(function(e) {
						o = !0, r = e.pageX - parseInt(i.css("left"), 10)
					}), i.mousedown(function(e) {
						o = !0, r = e.pageX - parseInt(i.css("left"), 10)
					}), $(document).mousemove(function(e) {
						var l = e.pageX - r;
						o && (l > 0 && l <= c ? (i.css({
							left: l
						}), s.css({
							width: l
						})) : l > c && (i.removeClass("handler_bg").addClass("handler_ok_bg"), a.text("验证通过"), n.css({
							color: "#00ae66"
						}), i.unbind("mousedown"), $(document).unbind("mousemove"), $(document).unbind("mouseup"), t && t()))
					}).mouseup(function(e) {
						o = !1, e.pageX - r < c && (i.css({
							left: 0
						}), s.css({
							width: 0
						}))
					})
				};

				function j(e) {
					e = e || "用户名或者密码错误", t.find("dd").html(e), t.show()
				}

				function A(e) {
					e = e || "用户名或者密码错误", o.find("dd").html(e), o.show()
				}

				function T() {
					o.hide()
				}

				function O(e) {
					e = e || "用户名或者密码错误", v.find("dd").html(e), v.show()
				}

				function V() {
					v.hide()
				}

				function I(e) {
					e = e || "用户名或者密码错误", C.find("dd").html(e), C.show()
				}

				function M() {
					C.hide()
				}
				$("#con_login_user").delegate("input", "keyup", function(e) {
					13 == e.keyCode && $(".login-user-btn").click()
				});
				var U = 0;
				$(".login-user-btn").on("click", function(r) {
					window.$ULOG && $ULOG.send("10446"), $(".border-a").removeClass("border-a");
					var n = $("#con_login_user").find(".item"),
						o = ($("#con_login_agent").find(".item"), n.find(".users").val()),
						i = n.find(".password").val();
					if(!o || !0 !== u(o, "phone")) return n.find(".users").focus(), j("请输入有效的手机号码"), void $("#con_login_user").find(".userName").addClass("border-red");
					if($("#con_login_user").find(".userName").removeClass("border-red"), !i) return n.find(".password").focus(), j("请输入密码"), void $("#con_login_user").find(".pwd").addClass("border-red");
					$("#con_login_user").find(".pwd").removeClass("border-red");
					var a = $("#con_login_user").find('[name="remember"]').get(0),
						l = {
							username: o,
							password: i,
							code: ""
						};
					if(a && a.checked && (l.remember = 1), "none" != $("#con_login_user .checkVerimg").css("display")) {
						var d = $(".ver-img").val();
						if(!c.test(d)) return j("验证码格式错误"), $(".ver-img").focus(), void $("#con_login_user").find(".checkVerimg").addClass("border-red");
						$("#con_login_user").find(".checkVerimg").removeClass("border-red"), l.code = d
					}
					var f = null;
					if("none" != $(".drag").css("display")) {
						if(!U) return void j("滑块验证不通过");
						f = (new Date).getTime(), U = 0,
							function(e) {
								L(e);
								var t = e.find(".handler"),
									r = e.find(".drag_bg"),
									n = e.find(".drag_text");
								t.css({
									left: 0
								}), r.css({
									width: 0
								}), t.removeClass("handler_ok_bg").addClass("handler_bg"), n.text("拖动滑块验证"), $("#drag").css({
									color: "#333333"
								}), e.parent().hide()
							}($("#drag"))
					}
					return t.hide(), lianjiaCasManager.config({
						loginUrl: s + "login",
						getFirstTicket: s + "login?service=" + encodeURIComponent(g) + "&type=1&get-lt=true&isajax=true&from=lianjiaweb" + (null === f ? "" : "&time=" + f)
					}), void p(function() {
						lianjiaCasManager.login(l, function(t) {
							$.listener.trigger("loginActSuccess"), e.trigger("click"), window.NOTAUTOJUMP || location.reload()
						}, function(t) {
							switch(n.removeClass("border-red"), t.eventId) {
								case "needCaptchaCheckWhenIpLimit":
									$("#con_login_user .checkVerimg").show(), j("请输入图形验证码"), e.trigger("click"), $("#con_login_user").find(".checkVerimg").addClass("border-red");
									break;
								case "needSendSms":
									$("#drag").find(".handler").hasClass("handler_ok_bg") || (L($("#drag")), j("请拖动滑块进行验证")), e.trigger("click");
									break;
								case "needCaptcha":
									$("#con_login_user .checkVerimg").show(), j("请输入图形验证码"), e.trigger("click"), $("#con_login_user").find(".checkVerimg").addClass("border-red");
									break;
								default:
									j(t.msg), e.trigger("click")
							}
						})
					})
				}), $(".login-user-tel-btn").on("click", function(e) {
					window.$ULOG && $ULOG.send("10446"), $(".border-a").removeClass("border-a");
					var t = $("#con_login_user_tel").find(".item"),
						n = ($("#con_login_agent").find(".item"), t.find(".users_tel").val()),
						o = t.find(".verifycode").val();
					if(!n || !0 !== u(n, "phone")) return t.find(".users_tel").focus(), A("请输入有效的手机号码"), void $("#con_login_user_tel").find(".userName").addClass("border-red");
					if($("#con_login_user_tel").find(".userName").removeClass("border-red"), !o) return t.find(".verifycode").focus(), void $("#con_login_user_tel").find(".Verify").addClass("border-red");
					$("#con_login_user_tel").find(".Verify").removeClass("border-red");
					var i = $("#con_login_user_tel").find('[name="remember"]').get(0),
						a = {
							username: n,
							smsCode: o,
							code: "",
							type: 2
						};
					if(i && i.checked && (a.remember = 1), "none" != $("#con_login_user_tel .checkVerimg").css("display")) {
						var l = $("#con_login_user_tel .ver-img").val();
						if(!c.test(l)) return A("验证码格式错误"), $("#con_login_user_tel .ver-img").focus(), void $("#con_login_user_tel").find(".checkVerimg").addClass("border-red");
						$("#con_login_user_tel").find(".checkVerimg").removeClass("border-red"), a.code = l
					}
					T(), lianjiaCasManager.config({
						loginUrl: s + "login",
						getFirstTicket: s + "login?service=" + encodeURIComponent(g) + "&get-lt=true&isajax=true&type=2&from=lianjiaweb"
					}), p(function() {
						t.removeClass("border-red"), lianjiaCasManager.login(a, function(e) {
							-1 == e.code ? (A(), r.trigger("click")) : ($.listener.trigger("loginActSuccess"), window.NOTAUTOJUMP || location.reload())
						}, function(e) {
							switch(t.removeClass("border-red"), e.eventId) {
								case "needCaptcha":
									A("请输入验证码"), $("#con_login_user_tel .checkVerimg").show(), r.trigger("click");
									break;
								case "showCaptchaWhenSendSms":
									A("请输入验证码"), $("#con_login_user_tel .checkVerimg").show(), r.trigger("click");
								default:
									A(e.msg), r.trigger("click")
							}
						})
					})
				}), $(".user-forget").on("click", function(e) {
					window.$ULOG && $ULOG.send("10449"), $(".border-a").removeClass("border-a");
					var t = $("#con_forget_user_tel").find(".item"),
						r = t.find(".user_forget_phone").val(),
						n = t.find(".verifycode").val(),
						o = $("#con_forget_user_tel").find(".password_reg").val();
					if(!r || !0 !== u(r, "phone")) return t.find(".user_forget_phone").focus(), I("请输入有效的手机号码"), void $("#con_forget_user_tel").find(".userName").addClass("border-red");
					if($("#con_forget_user_tel").find(".userName").removeClass("border-red"), !o || !0 !== u(o, "pwd")) return t.find(".password_reg").focus(), I("请输入不少于8位数的密码（数字+字母）"), void $("#con_forget_user_pw").find(".pwd").addClass("border-red");
					if(!o.match(/\d/) || !o.match(/[A-Za-z]/)) return t.find(".password_reg").focus(), I("请输入不少于8位数的密码（数字+字母）"), void $("#con_forget_user_pw").find(".pwd").addClass("border-red");
					if($("#con_forget_user_pw").find(".pwd").removeClass("border-red"), !n) return t.find(".verifycode").focus(), t.find(".verifycode").addClass("border-a"), void $("#con_forget_user_tel").find(".Verify").addClass("border-red");
					$("#con_forget_user_tel").find(".Verify").removeClass("border-red");
					var i = {
						username: r,
						phone: r,
						smsCode: n,
						newPassword: o,
						confirmPassword: o
					};
					if("none" != $("#con_forget_user_tel .checkVerimg").css("display")) {
						var a = $("#con_forget_user_tel .ver-img").val();
						if(!c.test(a)) return I("验证码格式错误"), $("#con_forget_user_tel .ver-img").focus(), void $("#con_forget_user_tel").find(".checkVerimg").addClass("border-red");
						$("#con_forget_user_tel").find(".checkVerimg").removeClass("border-red"), i.code = a
					}
					M(), lianjiaCasManager.config({
						getFirstTicket: s + "forgotpassword?service=" + encodeURIComponent(g) + "&get-lt=true&isajax=true&from=lianjiaweb",
						loginUrl: s + "forgotpassword"
					}), p(function() {
						lianjiaCasManager.login(i, function(e) {
							$("#con_forget_user_pw").find(".pwd").removeClass("border-red"), $.listener.trigger("loginActSuccess"), window.NOTAUTOJUMP || (d("修改密码成功"), y.trigger("click"))
						}, function(e) {
							$("#con_forget_user_pw").find(".pwd").removeClass("border-red"), 1 === e.code ? (I(), y.trigger("click")) : 2 === e.code ? (I("请输入验证码"), $("#con_forget_user_tel .checkVerimg").show(), y.trigger("click")) : 3 === e.code ? (I("短信验证码输入错误"), $("#con_forget_user_tel .checkVerimg").show(), y.trigger("click")) : (I(e.msg), $("#con_forget_user_tel .checkVerimg").show(), y.trigger("click"))
						})
					})
				}), $(".register-user-btn").on("click", function(e) {
					window.$ULOG && $ULOG.send("10447"), $(".border-a").removeClass("border-a");
					var t = $("#con_login_user_reg").find(".item"),
						r = ($("#con_login_agent").find(".item"), t.find(".users_reg").val()),
						n = t.find(".verifycode").val(),
						o = t.find(".password_reg").val();
					if(!r || !0 !== u(r, "phone")) return t.find(".users_reg").focus(), O("请输入有效的手机号码"), void $("#con_login_user_reg").find(".userName").addClass("border-red");
					if($("#con_login_user_reg").find(".userName").removeClass("border-red"), !n) return t.find(".verifycode").focus(), t.find(".verifycode").addClass("border-a"), void $("#con_login_user_reg").find(".Verify").addClass("border-red");
					if($("#con_login_user_reg").find(".Verify").removeClass("border-red"), !o || !0 !== u(o, "pwd")) return t.find(".password_reg").focus(), O("请输入不少于8位数的密码（数字+字母）"), void $("#con_login_user_reg").find(".pwd").addClass("border-red");
					if($("#con_login_user_reg").find(".pwd").removeClass("border-red"), !o.match(/\d/) || !o.match(/[A-Za-z]/)) return t.find(".password_reg").focus(), O("请输入不少于8位数的密码（数字+字母）"), void $("#con_login_user_reg").find(".pwd").addClass("border-red");
					$("#con_login_user_reg").find(".pwd").removeClass("border-red");
					var a = $("#con_login_user_reg").find('[name="read"]').get(0),
						l = {
							username: r,
							verify: n,
							password: o,
							smsCode: n,
							confirmPassword: o
						};
					if(!a.checked) return O("请阅读协议并确认"), void a.focus();
					if("none" != $("#con_login_user_reg .checkVerimg").css("display")) {
						var f = $("#con_login_user_reg .ver-img").val();
						if(!c.test(f)) return O("验证码格式错误"), $("#con_login_user_reg .ver-img").focus(), void $("#con_login_user_reg").find(".checkVerimg").addClass("border-red");
						$("#con_login_user_reg").find(".checkVerimg").removeClass("border-red"), l.code = f
					}
					V(), lianjiaCasManager.config({
						getFirstTicket: s + "register?service=" + encodeURIComponent(g) + "&get-lt=true&isajax=true&from=lianjiaweb",
						loginUrl: s + "register"
					}), p(function() {
						lianjiaCasManager.login(l, function(e) {
							t.removeClass("border-red"), -1 == e.code ? (O(e.msg), i.trigger("click")) : ($.listener.trigger("loginActSuccess"), window.NOTAUTOJUMP || d("注册成功", !0))
						}, function(e) {
							switch(t.removeClass("border-red"), e.eventId) {
								case "needCaptcha":
									O("请输入验证码"), $("#con_login_user_reg .checkVerimg").show(), i.trigger("click");
									break;
								case "showCaptchaWhenSendSms":
									O("请输入验证码"), $("#con_login_user_reg .checkVerimg").show(), i.trigger("click");
								default:
									O(e.msg), i.trigger("click")
							}
						})
					})
				});
				var E = function(e) {
					if(void 0 == e || "" === e) return !1;
					if("object" === (void 0 === e ? "undefined" : n(e)))
						for(var t in e) {
							var r = e[t].value,
								o = e[t].required;
							if(void 0 === o || !1 === o.value);
							else if(void 0 == r || "" == r) return !!o.hint && o.hint;
							var i = e[t].pattern;
							if(i && !r.match(i.value)) return !!i.hint && i.hint;
							var s = e[t].equal;
							if(s) {
								var a = e[s.propertyName];
								if(void 0 == a) return !1;
								if(a.value != r) return !!s.hint && s.hint
							}
						}
					return !0
				};
				$("#send_verify_code_tel").on("click", function(e) {
					if($(this).hasClass("disabled")) return !1;
					window.$ULOG && $ULOG.send("10445");
					var t = {
							telNum: {
								value: $(".users_tel").val(),
								pattern: {
									value: f,
									hint: "请输入有效的手机号码"
								}
							}
						},
						n = E(t);
					if(1 != n) return A(n), !1;
					var o = {
						phone: $(".users_tel").val()
					};
					if($("#con_login_user_tel .checkVerimg").length > 0 && "" != $("#con_login_user_tel .checkVerimg input").val() && (o.code = $("#con_login_user_tel .checkVerimg input").val(), $("#con_login_user_tel").find(".checkVerimg").removeClass("border-red")), !$("#con_login_user_tel .checkVerimg input").val()) return $("#con_login_user_tel").find(".checkVerimg").addClass("border-red"), A("请输入图形验证码"), !1;
					var i = function(e) {
						var t = null,
							r = $("#send_verify_code_tel");
						t = setInterval(function() {
							if(e <= 0) return r.removeClass("disabled"), r.find("em").html("重新获取验证码"), clearInterval(t), void T();
							40 == e && $(".send_verify_code_s").show(), r.find("em").html(e-- + "s 后重新发送"), r.addClass("disabled")
						}, 1e3)
					};
					$.ajax({
						url: h.sendVerifyCode,
						type: "post",
						dataType: "jsonp",
						data: o
					}).done(function(e) {
						1 === e.code ? (T(), i(60)) : 2 == e.code ? (A("请输入图形验证码"), $("#con_login_user_tel .checkVerimg").show(), r.trigger("click")) : 8 == e.code || 0 == e.code ? (A(e.msg), r.trigger("click")) : (A(e), r.trigger("click"))
					}).fail(function(e) {
						A("发送失败，请重试"), i(0), $(this).removeClass("disable"), 1 === e.code ? (T(), r.trigger("click"), i(60)) : 2 == e.code ? (A("请输入图形验证码"), $("#con_login_user_tel .checkVerimg").show(), r.trigger("click")) : 8 == e.code || 0 == e.code ? (A(e.msg), r.trigger("click")) : (A(e), r.trigger("click"))
					})
				}), $("#send_verify_code_tel_s .voice_a").on("click", function(e) {
					if($(this).hasClass("disabled")) return !1;
					var t = {
							telNum: {
								value: $(".users_tel").val(),
								pattern: {
									value: f,
									hint: "请输入有效的手机号码"
								}
							}
						},
						n = E(t);
					if(1 != n) return A(n), !1;
					var o = {
						phone: $(".users_tel").val()
					};
					if($("#con_login_user_tel .checkVerimg").length > 0 && "" != $("#con_login_user_tel .checkVerimg input").val() && (o.code = $("#con_login_user_tel .checkVerimg input").val(), $("#con_login_user_tel").find(".checkVerimg").removeClass("border-red")), !$("#con_login_user_tel .checkVerimg input").val()) return A("请输入图形验证码"), $("#con_login_user_tel").find(".checkVerimg").addClass("border-red"), !1;
					$.ajax({
						url: h.sendVerifyVoiceCode,
						type: "post",
						dataType: "jsonp",
						data: o
					}).done(function(e) {
						1 === e.code ? (T(), $("#send_verify_code_tel_s").hide(), A("验证码将以电话的形式的通知到您，请注意接听")) : 2 == e.code ? (A("请输入验证码"), $("#send_verify_code_tel .checkVerimg").show(), r.trigger("click")) : 8 == e.code || 0 == e.code ? (A(e.msg), r.trigger("click")) : (A(e), r.trigger("click"))
					}).fail(function(e) {
						e.code = 1, A("发送失败，请重试"), $(this).removeClass("disable"), 1 === e.code ? (T(), r.trigger("click")) : 2 == e.code ? (A("请输入验证码"), $("#send_verify_code_tel .checkVerimg").show(), r.trigger("click")) : 8 == e.code || 0 == e.code ? (A(e.msg), r.trigger("click")) : (A(e), r.trigger("click"))
					})
				}), $("#send_verify_code_forget").on("click", function(e) {
					if($(this).hasClass("disabled")) return !1;
					window.$ULOG && $ULOG.send("10445");
					var t = {
							telNum: {
								value: $(".user_forget_phone").val(),
								pattern: {
									value: f,
									hint: "请输入有效的手机号码"
								}
							}
						},
						r = E(t);
					if(1 != r) return I(r), !1;
					var n = {
						phone: $(".user_forget_phone").val()
					};
					if($("#con_forget_user_tel .checkVerimg").length > 0 && "" != $("#con_forget_user_tel .checkVerimg input").val() && (n.code = $("#con_forget_user_tel .checkVerimg input").val(), $("#con_forget_user_tel").find(".checkVerimg").removeClass("border-red")), !$("#con_forget_user_tel .checkVerimg input").val()) return I("请输入图形验证码"), $("#con_forget_user_tel").find(".checkVerimg").addClass("border-red"), !1;
					var o = function(e) {
						var t = null,
							r = $("#send_verify_code_forget");
						t = setInterval(function() {
							if(e <= 0) return r.removeClass("disabled"), r.find("em").html("重新获取验证码"), clearInterval(t), void V();
							40 == e && $("#send_verify_code_forget_s").show(), r.find("em").html(e-- + "s 后重新发送"), r.addClass("disabled")
						}, 1e3)
					};
					$.ajax({
						url: h.sendVerifyCode + "?sendOn=exist",
						dataType: "jsonp",
						data: n
					}).done(function(e) {
						1 == e.code ? (M(), o(60)) : 8 == e.code || 0 == e.code ? (I(e.msg), y.trigger("click")) : 2 == e.code ? (I("请输入验证码"), $("#con_forget_user_tel .checkVerimg").show(), y.trigger("click")) : (I(e), y.trigger("click"))
					}).fail(function(e) {
						e.code = 1, I("发送失败，请重试"), o(0), $(this).removeClass("disable"), 1 === e.code ? (M(), o(60)) : 2 == e.code ? (I("请输入验证码"), $("#con_forget_user_tel .checkVerimg").show(), y.trigger("click")) : 8 == e.code || 0 == e.code ? (I(e.msg), y.trigger("click")) : (I(e), y.trigger("click"))
					})
				}), $("#send_verify_code_forget_s .voice_a").on("click", function(e) {
					if($(this).hasClass("disabled")) return !1;
					var t = {
							telNum: {
								value: $(".user_forget_phone").val(),
								pattern: {
									value: f,
									hint: "请输入有效的手机号码"
								}
							}
						},
						r = E(t);
					if(1 != r) return O(r), !1;
					var n = {
						phone: $(".user_forget_phone").val()
					};
					if($("#con_forget_user_tel .checkVerimg").length > 0 && "" != $("#con_forget_user_tel .checkVerimg input").val() && (n.code = $("#con_forget_user_tel .checkVerimg input").val(), $("#con_forget_user_tel").find(".checkVerimg").removeClass("border-red")), !$("#con_forget_user_tel .checkVerimg input").val()) return I("请输入图形验证码"), $("#con_forget_user_tel").find(".checkVerimg").addClass("border-red"), !1;
					$.ajax({
						url: h.sendVerifyVoiceCode + "?sendOn=exist",
						type: "post",
						dataType: "jsonp",
						data: n
					}).done(function(e) {
						1 === e.code ? (M(), $("#send_verify_code_forget_s").hide(), I("验证码将以电话的形式的通知到您，请注意接听")) : 8 == e.code || 0 == e.code ? (I(e.msg), y.trigger("click")) : 2 == e.code ? (I("请输入验证码"), $("#con_forget_user_tel .checkVerimg").show(), y.trigger("click")) : (I(e), y.trigger("click"))
					}).fail(function(e) {
						I("发送失败，请重试"), $(this).removeClass("disable"), 1 === e.code ? (M(), y.trigger("click")) : 2 == e.code ? (A("请输入验证码"), $("#con_forget_user_tel .checkVerimg").show(), y.trigger("click")) : 8 == e.code || 0 == e.code ? (I(e.msg), y.trigger("click")) : (I(e), y.trigger("click"))
					})
				}), $("#send_verify_code_reg").on("click", function(e) {
					if($(this).hasClass("disabled")) return !1;
					window.$ULOG && $ULOG.send("10445");
					var t = {
							telNum: {
								value: $(".users_reg").val(),
								pattern: {
									value: f,
									hint: "请输入有效的手机号码"
								}
							}
						},
						r = E(t);
					if(1 != r) return O(r), !1;
					var n = {
						phone: $(".users_reg").val()
					};
					if($("#con_login_user_reg .checkVerimg").length > 0 && "" != $("#con_login_user_reg .checkVerimg input").val() && (n.code = $("#con_login_user_reg .checkVerimg input").val(), $("#con_login_user_reg").find(".checkVerimg").removeClass("border-red")), !$("#con_login_user_reg .checkVerimg input").val()) return O("请输入图形验证码"), $("#con_login_user_reg").find(".checkVerimg").addClass("border-red"), !1;
					var o = function(e) {
						var t = null,
							r = $("#send_verify_code_reg");
						t = setInterval(function() {
							if(e <= 0) return r.removeClass("disabled"), r.find("em").html("重新获取验证码"), clearInterval(t), void V();
							40 == e && $("#send_verify_code_reg_s").show(), r.find("em").html(e-- + "s 后重新发送"), r.addClass("disabled")
						}, 1e3)
					};
					$.ajax({
						url: h.sendVerifyCode + "?sendOn=noExist",
						dataType: "jsonp",
						data: n
					}).done(function(e) {
						1 == e.code ? (V(), o(60)) : 8 == e.code || 0 == e.code ? (O(e.msg), i.trigger("click")) : 2 == e.code ? (O("请输入验证码"), $("#con_login_user_reg .checkVerimg").show(), i.trigger("click")) : (O(e), i.trigger("click"))
					}).fail(function(e) {
						O("发送失败，请重试"), o(0), $(this).removeClass("disable"), 1 == e.code ? (V(), o(60)) : 0 == e.code || 8 == e.code ? (O(e.msg), i.trigger("click")) : 2 == e.code ? (O("请输入验证码"), $("#con_login_user_reg .checkVerimg").show(), i.trigger("click")) : (O(e), i.trigger("click"))
					})
				}), $("#send_verify_code_reg_s .voice_a").on("click", function(e) {
					if($(this).hasClass("disabled")) return !1;
					var t = {
							telNum: {
								value: $(".users_reg").val(),
								pattern: {
									value: f,
									hint: "请输入有效的手机号码"
								}
							}
						},
						r = E(t);
					if(1 != r) return O(r), !1;
					var n = {
						phone: $(".users_reg").val()
					};
					if($("#con_login_user_reg .checkVerimg").length > 0 && "" != $("#con_login_user_reg .checkVerimg input").val() && (n.code = $("#con_login_user_reg .checkVerimg input").val(), $("#con_login_user_reg").find(".checkVerimg").removeClass("border-red")), !$("#con_login_user_reg .checkVerimg input").val()) return O("请输入图形验证码"), $("#con_login_user_reg").find(".checkVerimg").addClass("border-red"), !1;
					$.ajax({
						url: h.sendVerifyVoiceCode + "?sendOn=noExist",
						type: "post",
						dataType: "jsonp",
						data: n
					}).done(function(e) {
						1 == e.code ? (V(), $("#send_verify_code_reg_s").hide(), O("验证码将以电话的形式的通知到您，请注意接听")) : 8 == e.code || 0 == e.code ? (O(e.msg), i.trigger("click")) : 2 == e.code ? (O("请输入验证码"), $("#con_login_user_reg .checkVerimg").show()) : (O(e), i.trigger("click"))
					}).fail(function(e) {
						e.code = 1, O("发送失败，请重试"), $(this).removeClass("disable"), 1 === e.code ? (V(), i.trigger("click")) : 2 == e.code ? (O("请输入验证码"), $("#con_login_user_reg .checkVerimg").show(), i.trigger("click")) : 8 == e.code || 0 == e.code ? (O(e.msg), i.trigger("click")) : (O(e), i.trigger("click"))
					})
				})
			}), $(".password-view").on("click", function() {
				var e = $(this).siblings("input");
				e.attr("type", "password" == e.attr("type") ? "text" : "password")
			}), $(".checkVerimg").trigger("click"), t.default = {
				init: function() {
					$.listener.on("userInfo", function(e) {
						! function(e) {
							var t = $(".typeUserInfo");
							e && e.username && (e.username = $.encodeHTML($.getLimitString(e.username, 20, ".."))), t.each(function() {
								var t = $(this),
									r = t.find(".template").html();
								if(r) {
									var n = ejs.render(r, {
										data: e
									});
									t.find(".typeShowUser").html(n)
								}
							})
						}(e)
					}), new $.Trans({
						url: g,
						type: "jsonp"
					}).request().done(function(e) {
						e && e.username && (e.code = 1), $.listener.trigger("userInfo", e)
					}).fail(function(e) {
						e && $.listener.trigger("userInfo", e.data)
					})
				},
				openLoginDialog: m,
				openDialogRegister: w
			}
		},
		s52S: function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = ($.encodeHTML = function(e) {
				return e ? String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;") : e
			}, $.decodeHTML = function(e) {
				return e ? e.replace(/\n/g, "<br/>") : e
			}, $.removeHTML = function(e) {
				return e ? e.replace(/<[^>]+>/g, "") : e
			}, $.queryToJson = function(e, t) {
				if(!e) return {};
				for(var r = e.split("&"), n = {}, o = 0, i = r.length; o < i; o++) {
					var s = r[o].split("=");
					s[0] && (n[s[0]] = s[1] ? t ? decodeURIComponent(s[1]) : s[1] : "")
				}
				return n
			}, $.jsonToQuery = function(e, t) {
				var r = [];
				if(e)
					for(var n in e) r.push(n + "=" + (t ? encodeURIComponent(e[n]) : e[n]));
				return r.join("&")
			}, $.joinUrl = function(e, t) {
				e || (e = location.href);
				var r = [];
				for(var n in t) n && r.push(n + "=" + encodeURIComponent(t[n]));
				return e.indexOf("?") < 0 && (e += "?"), e + (e.indexOf("&") >= 0 ? e + "&" + r.join("&") : r.join("&"))
			}, $.parseURL = function(e) {
				if(!e) return null;
				for(var t = ["url", "origin", "scheme", "slash", "host", "port", "path", "query", "hash"], r = /^((?:([A-Za-z]+)?:?(\/{0,3}))?([0-9.\-A-Za-z]+\.[0-9A-Za-z]+)?(?::(\d+))?)(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.exec(e), n = {}, o = 0, i = t.length; o < i; o += 1) n[t[o]] = r[o] || "";
				return n
			}, $.buildDate = function(e) {
				if("string" == typeof e)(e = e.replace(/-/g, "/")).indexOf("/") >= 0 ? e = new Date(e) : isNaN(parseInt(e)) || (e = new Date(parseInt(e)));
				else if("number" == typeof e)(e + "").length <= 10 && (e *= 1e3), e = new Date(e);
				else if(!(e instanceof Date)) return !1;
				return e
			}, $.formatDate = function(e, t) {
				var r = $.buildDate(e);
				if(!r) return e;
				var n = {
					"M+": r.getMonth() + 1,
					"d+": r.getDate(),
					"h+": r.getHours(),
					"m+": r.getMinutes(),
					"s+": r.getSeconds(),
					"q+": Math.floor((r.getMonth() + 3) / 3),
					S: r.getMilliseconds()
				};
				for(var o in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (r.getFullYear() + "").substr(4 - RegExp.$1.length))), n) new RegExp("(" + o + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? n[o] : ("00" + n[o]).substr(("" + n[o]).length)));
				return t
			}, $.getLimitString = function(e, t, r) {
				return e ? (r = r || "..", e.length > t && (e = e.substring(0, t) + r), e) : e
			}, void($.bLength = function(e) {
				if(!e) return 0;
				var t = e.match(/[^\x00-\xff]/g);
				return e.length + (t ? t.length : 0)
			}))
		},
		"w/TI": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function(e) {
				if(!e) throw "fun is required";
				return function(e) {
					i.length || a(!0);
					i.push(e)
				}(e), {
					destroy: function() {
						! function(e) {
							var t = $.inArray(e, i);
							t >= 0 && i.splice(t, 1);
							i.length || a(!1)
						}(e)
					}
				}
			};
			var n = !1,
				o = $(window),
				i = [];

			function s() {
				n && clearTimeout(n), n = setTimeout(function() {
					! function() {
						for(var e = o.scrollTop(), t = i.length - 1; t >= 0; t--) try {
							i[t].call(o, e)
						} catch(e) {
							console.error && console.error(e.stack)
						}
					}()
				}, 30)
			}

			function a(e) {
				e ? o.scroll(s) : o.unbind("scroll", s)
			}
		},
		wjMP: function(e, t, r) {
			"use strict";
			! function(e) {
				e.fn.qrcode = function(t) {
					var r;

					function n(e) {
						this.mode = r, this.data = e
					}

					function o(e, t) {
						this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
					}

					function i(e, t) {
						if(void 0 == e.length) throw Error(e.length + "/" + t);
						for(var r = 0; r < e.length && 0 == e[r];) r++;
						this.num = Array(e.length - r + t);
						for(var n = 0; n < e.length - r; n++) this.num[n] = e[n + r]
					}

					function s(e, t) {
						this.totalCount = e, this.dataCount = t
					}

					function a() {
						this.buffer = [], this.length = 0
					}
					n.prototype = {
						getLength: function() {
							return this.data.length
						},
						write: function(e) {
							for(var t = 0; t < this.data.length; t++) e.put(this.data.charCodeAt(t), 8)
						}
					}, o.prototype = {
						addData: function(e) {
							this.dataList.push(new n(e)), this.dataCache = null
						},
						isDark: function(e, t) {
							if(0 > e || this.moduleCount <= e || 0 > t || this.moduleCount <= t) throw Error(e + "," + t);
							return this.modules[e][t]
						},
						getModuleCount: function() {
							return this.moduleCount
						},
						make: function() {
							if(1 > this.typeNumber) {
								var e = 1;
								for(e = 1; 40 > e; e++) {
									for(var t = s.getRSBlocks(e, this.errorCorrectLevel), r = new a, n = 0, o = 0; o < t.length; o++) n += t[o].dataCount;
									for(o = 0; o < this.dataList.length; o++) t = this.dataList[o], r.put(t.mode, 4), r.put(t.getLength(), c.getLengthInBits(t.mode, e)), t.write(r);
									if(r.getLengthInBits() <= 8 * n) break
								}
								this.typeNumber = e
							}
							this.makeImpl(!1, this.getBestMaskPattern())
						},
						makeImpl: function(e, t) {
							this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount);
							for(var r = 0; r < this.moduleCount; r++) {
								this.modules[r] = Array(this.moduleCount);
								for(var n = 0; n < this.moduleCount; n++) this.modules[r][n] = null
							}
							this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, t), 7 <= this.typeNumber && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = o.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t)
						},
						setupPositionProbePattern: function(e, t) {
							for(var r = -1; 7 >= r; r++)
								if(!(-1 >= e + r || this.moduleCount <= e + r))
									for(var n = -1; 7 >= n; n++) - 1 >= t + n || this.moduleCount <= t + n || (this.modules[e + r][t + n] = 0 <= r && 6 >= r && (0 == n || 6 == n) || 0 <= n && 6 >= n && (0 == r || 6 == r) || 2 <= r && 4 >= r && 2 <= n && 4 >= n)
						},
						getBestMaskPattern: function() {
							for(var e = 0, t = 0, r = 0; 8 > r; r++) {
								this.makeImpl(!0, r);
								var n = c.getLostPoint(this);
								(0 == r || e > n) && (e = n, t = r)
							}
							return t
						},
						createMovieClip: function(e, t, r) {
							for(e = e.createEmptyMovieClip(t, r), this.make(), t = 0; t < this.modules.length; t++) {
								r = 1 * t;
								for(var n = 0; n < this.modules[t].length; n++) {
									var o = 1 * n;
									this.modules[t][n] && (e.beginFill(0, 100), e.moveTo(o, r), e.lineTo(o + 1, r), e.lineTo(o + 1, r + 1), e.lineTo(o, r + 1), e.endFill())
								}
							}
							return e
						},
						setupTimingPattern: function() {
							for(var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = 0 == e % 2);
							for(e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = 0 == e % 2)
						},
						setupPositionAdjustPattern: function() {
							for(var e = c.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
								for(var r = 0; r < e.length; r++) {
									var n = e[t],
										o = e[r];
									if(null == this.modules[n][o])
										for(var i = -2; 2 >= i; i++)
											for(var s = -2; 2 >= s; s++) this.modules[n + i][o + s] = -2 == i || 2 == i || -2 == s || 2 == s || 0 == i && 0 == s
								}
						},
						setupTypeNumber: function(e) {
							for(var t = c.getBCHTypeNumber(this.typeNumber), r = 0; 18 > r; r++) {
								var n = !e && 1 == (t >> r & 1);
								this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n
							}
							for(r = 0; 18 > r; r++) n = !e && 1 == (t >> r & 1), this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n
						},
						setupTypeInfo: function(e, t) {
							for(var r = c.getBCHTypeInfo(this.errorCorrectLevel << 3 | t), n = 0; 15 > n; n++) {
								var o = !e && 1 == (r >> n & 1);
								6 > n ? this.modules[n][8] = o : 8 > n ? this.modules[n + 1][8] = o : this.modules[this.moduleCount - 15 + n][8] = o
							}
							for(n = 0; 15 > n; n++) o = !e && 1 == (r >> n & 1), 8 > n ? this.modules[8][this.moduleCount - n - 1] = o : 9 > n ? this.modules[8][15 - n - 1 + 1] = o : this.modules[8][15 - n - 1] = o;
							this.modules[this.moduleCount - 8][8] = !e
						},
						mapData: function(e, t) {
							for(var r = -1, n = this.moduleCount - 1, o = 7, i = 0, s = this.moduleCount - 1; 0 < s; s -= 2)
								for(6 == s && s--;;) {
									for(var a = 0; 2 > a; a++)
										if(null == this.modules[n][s - a]) {
											var l = !1;
											i < e.length && (l = 1 == (e[i] >>> o & 1)), c.getMask(t, n, s - a) && (l = !l), this.modules[n][s - a] = l, -1 == --o && (i++, o = 7)
										}
									if(0 > (n += r) || this.moduleCount <= n) {
										n -= r, r = -r;
										break
									}
								}
						}
					}, o.PAD0 = 236, o.PAD1 = 17, o.createData = function(e, t, r) {
						t = s.getRSBlocks(e, t);
						for(var n = new a, i = 0; i < r.length; i++) {
							var l = r[i];
							n.put(l.mode, 4), n.put(l.getLength(), c.getLengthInBits(l.mode, e)), l.write(n)
						}
						for(i = e = 0; i < t.length; i++) e += t[i].dataCount;
						if(n.getLengthInBits() > 8 * e) throw Error("code length overflow. (" + n.getLengthInBits() + ">" + 8 * e + ")");
						for(n.getLengthInBits() + 4 <= 8 * e && n.put(0, 4); 0 != n.getLengthInBits() % 8;) n.putBit(!1);
						for(; !(n.getLengthInBits() >= 8 * e) && (n.put(o.PAD0, 8), !(n.getLengthInBits() >= 8 * e));) n.put(o.PAD1, 8);
						return o.createBytes(n, t)
					}, o.createBytes = function(e, t) {
						for(var r = 0, n = 0, o = 0, s = Array(t.length), a = Array(t.length), l = 0; l < t.length; l++) {
							var d = t[l].dataCount,
								u = t[l].totalCount - d;
							n = Math.max(n, d), o = Math.max(o, u);
							s[l] = Array(d);
							for(var f = 0; f < s[l].length; f++) s[l][f] = 255 & e.buffer[f + r];
							for(r += d, f = c.getErrorCorrectPolynomial(u), d = new i(s[l], f.getLength() - 1).mod(f), a[l] = Array(f.getLength() - 1), f = 0; f < a[l].length; f++) u = f + d.getLength() - a[l].length, a[l][f] = 0 <= u ? d.get(u) : 0
						}
						for(f = l = 0; f < t.length; f++) l += t[f].totalCount;
						for(r = Array(l), f = d = 0; f < n; f++)
							for(l = 0; l < t.length; l++) f < s[l].length && (r[d++] = s[l][f]);
						for(f = 0; f < o; f++)
							for(l = 0; l < t.length; l++) f < a[l].length && (r[d++] = a[l][f]);
						return r
					}, r = 4;
					for(var c = {
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
							getBCHTypeInfo: function(e) {
								for(var t = e << 10; 0 <= c.getBCHDigit(t) - c.getBCHDigit(c.G15);) t ^= c.G15 << c.getBCHDigit(t) - c.getBCHDigit(c.G15);
								return(e << 10 | t) ^ c.G15_MASK
							},
							getBCHTypeNumber: function(e) {
								for(var t = e << 12; 0 <= c.getBCHDigit(t) - c.getBCHDigit(c.G18);) t ^= c.G18 << c.getBCHDigit(t) - c.getBCHDigit(c.G18);
								return e << 12 | t
							},
							getBCHDigit: function(e) {
								for(var t = 0; 0 != e;) t++, e >>>= 1;
								return t
							},
							getPatternPosition: function(e) {
								return c.PATTERN_POSITION_TABLE[e - 1]
							},
							getMask: function(e, t, r) {
								switch(e) {
									case 0:
										return 0 == (t + r) % 2;
									case 1:
										return 0 == t % 2;
									case 2:
										return 0 == r % 3;
									case 3:
										return 0 == (t + r) % 3;
									case 4:
										return 0 == (Math.floor(t / 2) + Math.floor(r / 3)) % 2;
									case 5:
										return 0 == t * r % 2 + t * r % 3;
									case 6:
										return 0 == (t * r % 2 + t * r % 3) % 2;
									case 7:
										return 0 == (t * r % 3 + (t + r) % 2) % 2;
									default:
										throw Error("bad maskPattern:" + e)
								}
							},
							getErrorCorrectPolynomial: function(e) {
								for(var t = new i([1], 0), r = 0; r < e; r++) t = t.multiply(new i([1, l.gexp(r)], 0));
								return t
							},
							getLengthInBits: function(e, t) {
								if(1 <= t && 10 > t) switch(e) {
									case 1:
										return 10;
									case 2:
										return 9;
									case r:
									case 8:
										return 8;
									default:
										throw Error("mode:" + e)
								} else if(27 > t) switch(e) {
									case 1:
										return 12;
									case 2:
										return 11;
									case r:
										return 16;
									case 8:
										return 10;
									default:
										throw Error("mode:" + e)
								} else {
									if(!(41 > t)) throw Error("type:" + t);
									switch(e) {
										case 1:
											return 14;
										case 2:
											return 13;
										case r:
											return 16;
										case 8:
											return 12;
										default:
											throw Error("mode:" + e)
									}
								}
							},
							getLostPoint: function(e) {
								for(var t = e.getModuleCount(), r = 0, n = 0; n < t; n++)
									for(var o = 0; o < t; o++) {
										for(var i = 0, s = e.isDark(n, o), a = -1; 1 >= a; a++)
											if(!(0 > n + a || t <= n + a))
												for(var c = -1; 1 >= c; c++) 0 > o + c || t <= o + c || 0 == a && 0 == c || s == e.isDark(n + a, o + c) && i++;
										5 < i && (r += 3 + i - 5)
									}
								for(n = 0; n < t - 1; n++)
									for(o = 0; o < t - 1; o++) i = 0, e.isDark(n, o) && i++, e.isDark(n + 1, o) && i++, e.isDark(n, o + 1) && i++, e.isDark(n + 1, o + 1) && i++, (0 == i || 4 == i) && (r += 3);
								for(n = 0; n < t; n++)
									for(o = 0; o < t - 6; o++) e.isDark(n, o) && !e.isDark(n, o + 1) && e.isDark(n, o + 2) && e.isDark(n, o + 3) && e.isDark(n, o + 4) && !e.isDark(n, o + 5) && e.isDark(n, o + 6) && (r += 40);
								for(o = 0; o < t; o++)
									for(n = 0; n < t - 6; n++) e.isDark(n, o) && !e.isDark(n + 1, o) && e.isDark(n + 2, o) && e.isDark(n + 3, o) && e.isDark(n + 4, o) && !e.isDark(n + 5, o) && e.isDark(n + 6, o) && (r += 40);
								for(o = i = 0; o < t; o++)
									for(n = 0; n < t; n++) e.isDark(n, o) && i++;
								return r + 10 * (e = Math.abs(100 * i / t / t - 50) / 5)
							}
						}, l = {
							glog: function(e) {
								if(1 > e) throw Error("glog(" + e + ")");
								return l.LOG_TABLE[e]
							},
							gexp: function(e) {
								for(; 0 > e;) e += 255;
								for(; 256 <= e;) e -= 255;
								return l.EXP_TABLE[e]
							},
							EXP_TABLE: Array(256),
							LOG_TABLE: Array(256)
						}, d = 0; 8 > d; d++) l.EXP_TABLE[d] = 1 << d;
					for(d = 8; 256 > d; d++) l.EXP_TABLE[d] = l.EXP_TABLE[d - 4] ^ l.EXP_TABLE[d - 5] ^ l.EXP_TABLE[d - 6] ^ l.EXP_TABLE[d - 8];
					for(d = 0; 255 > d; d++) l.LOG_TABLE[l.EXP_TABLE[d]] = d;
					return i.prototype = {
						get: function(e) {
							return this.num[e]
						},
						getLength: function() {
							return this.num.length
						},
						multiply: function(e) {
							for(var t = Array(this.getLength() + e.getLength() - 1), r = 0; r < this.getLength(); r++)
								for(var n = 0; n < e.getLength(); n++) t[r + n] ^= l.gexp(l.glog(this.get(r)) + l.glog(e.get(n)));
							return new i(t, 0)
						},
						mod: function(e) {
							if(0 > this.getLength() - e.getLength()) return this;
							for(var t = l.glog(this.get(0)) - l.glog(e.get(0)), r = Array(this.getLength()), n = 0; n < this.getLength(); n++) r[n] = this.get(n);
							for(n = 0; n < e.getLength(); n++) r[n] ^= l.gexp(l.glog(e.get(n)) + t);
							return new i(r, 0).mod(e)
						}
					}, s.RS_BLOCK_TABLE = [
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
					], s.getRSBlocks = function(e, t) {
						var r = s.getRsBlockTable(e, t);
						if(void 0 == r) throw Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
						for(var n = r.length / 3, o = [], i = 0; i < n; i++)
							for(var a = r[3 * i + 0], c = r[3 * i + 1], l = r[3 * i + 2], d = 0; d < a; d++) o.push(new s(c, l));
						return o
					}, s.getRsBlockTable = function(e, t) {
						switch(t) {
							case 1:
								return s.RS_BLOCK_TABLE[4 * (e - 1) + 0];
							case 0:
								return s.RS_BLOCK_TABLE[4 * (e - 1) + 1];
							case 3:
								return s.RS_BLOCK_TABLE[4 * (e - 1) + 2];
							case 2:
								return s.RS_BLOCK_TABLE[4 * (e - 1) + 3]
						}
					}, a.prototype = {
						get: function(e) {
							return 1 == (this.buffer[Math.floor(e / 8)] >>> 7 - e % 8 & 1)
						},
						put: function(e, t) {
							for(var r = 0; r < t; r++) this.putBit(1 == (e >>> t - r - 1 & 1))
						},
						getLengthInBits: function() {
							return this.length
						},
						putBit: function(e) {
							var t = Math.floor(this.length / 8);
							this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
						}
					}, "string" == typeof t && (t = {
						text: t
					}), t = e.extend({}, {
						render: "canvas",
						width: 256,
						height: 256,
						typeNumber: -1,
						correctLevel: 2,
						background: "#ffffff",
						foreground: "#000000"
					}, t), this.each(function() {
						var r;
						if("canvas" == t.render) {
							(r = new o(t.typeNumber, t.correctLevel)).addData(t.text), r.make();
							var n = document.createElement("canvas");
							n.width = t.width, n.height = t.height;
							for(var i = n.getContext("2d"), s = t.width / r.getModuleCount(), a = t.height / r.getModuleCount(), c = 0; c < r.getModuleCount(); c++)
								for(var l = 0; l < r.getModuleCount(); l++) {
									i.fillStyle = r.isDark(c, l) ? t.foreground : t.background;
									var d = Math.ceil((l + 1) * s) - Math.floor(l * s),
										u = Math.ceil((c + 1) * s) - Math.floor(c * s);
									i.fillRect(Math.round(l * s), Math.round(c * a), d, u)
								}
						} else
							for((r = new o(t.typeNumber, t.correctLevel)).addData(t.text), r.make(), n = e("<table></table>").css("width", t.width + "px").css("height", t.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", t.background), i = t.width / r.getModuleCount(), s = t.height / r.getModuleCount(), a = 0; a < r.getModuleCount(); a++)
								for(c = e("<tr></tr>").css("height", s + "px").appendTo(n), l = 0; l < r.getModuleCount(); l++) e("<td></td>").css("width", i + "px").css("background-color", r.isDark(a, l) ? t.foreground : t.background).appendTo(c);
						r = n, jQuery(r).appendTo(this)
					})
				}
			}(jQuery)
		},
		xDpm: function(e, t, r) {
			"use strict";
			r("GdL1");
			var n = s(r("KtKm"));
			r("wjMP");
			var o = s(r("aArZ")),
				i = s(r("K4q0"));

			function s(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = {
				generateQrcode: function() {
					var e = $("#qrcode-wrapper"),
						t = e.attr("data-url");
					e.qrcode({
						width: 89,
						height: 89,
						text: t || ""
					})
				},
				citychange: function() {
					$(".s-city").click(function(e) {
						$(".city-change").show(), $(".city-change").addClass("bounceIn"), $(".overlayBg").fadeIn(300)
					}), $(".city-close, .overlayBg").click(function(e) {
						$(".city-change").fadeOut().removeClass("bounceIn"), $(".overlayBg").fadeOut()
					})
				},
				init: function() {
					a.generateQrcode(), o.default.init(), window.login = n.default, (0, i.default)(), a.citychange()
				}
			};
			a.init()
		}
	})
});