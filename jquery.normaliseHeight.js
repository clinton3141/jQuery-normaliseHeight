(function ($) {
	$.fn.normaliseHeight = function () {
		var h = 0,
			tmp;
		return this.each (function () {
			tmp = $(this).height();
			if (tmp > h) {
				h = tmp;
			}
		}).height (h);
	};
})(jQuery);
