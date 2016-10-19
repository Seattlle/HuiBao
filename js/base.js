; + function() {
	
	Date.prototype.Format = function(fmt) { //author: meizz 
		var o = {
			"M+": this.getMonth() + 1, //月份 
			"d+": this.getDate(), //日 
			"H+": this.getHours(), //小时 
			"m+": this.getMinutes(), //分 
			"s+": this.getSeconds(), //秒 
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
			"S": this.getMilliseconds() //毫秒 
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}
}
window.onload = function() {
	window.base = {
		/* 判断手机号是否正确 */
		isPhone: function(content) {
			return !!content.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
		},
		/* 判断邮政编码是否正确 */
		postalService: function(content) {
			return content.match(/^[1-9][0-9]{5}$/);
		},
		/* 
		    判断是否是固定电话
		    正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX
		*/
		isTell: function(content) {
			return content.match(/^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/);
		},
		/* 判断邮箱是否正确 */
		isEmail: function(content) {
			return content.match(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/);
		},
		//保留两位小数
		discountTow: function(value) {
			var f = parseFloat(value);
			if (isNaN(f)) {
				return;
			}
			f = parseInt(f * 100) / 100;
			return parseFloat(f.toFixed(2));
		}
	};
	$('body').on("tap", '.lasgo', function() {
		window.location.href = $(this).data("href") + "&v=" + new Date().getTime();
	});
	$("body").on("focus", "input,textarea", function() {
		$(this).attr("placeholders", $(this).attr("placeholder"));
		$(this).attr("placeholder", "").css("font-size", "1.59rem");
	}).on("blur", "input,textarea", function() {
		$(this).attr("placeholder", $(this).attr("placeholders"));
		if ($(this).val() == "" || $(this).val().length == 0) {
			$(this).css("font-size", "1.3rem");
		}
	});
}