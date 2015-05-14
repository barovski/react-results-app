module.exports =  {
	showLoading: function (){
		$('#loading').show(); 
	},
	hideLoading: function () {
		$('#loading').hide();
	},
	sortByProp: function (array, prop) {
		debugger
		array.sort(function (a, b) {
			if (a[prop] > b[prop]) {
			return 1;
			}
			if (a[prop] < b[prop]) {
			return -1;
			}
			return 0;
	    });

	    return array;
	},
	trimEventName: function (name) {
		//could be custom for every name...
		name = name ? name.split(' ') : [];

		if (name.length > 2) {
			name.splice(name.length-1, 1);
		}

		return name.join(' ');
	},
	defer: function (action) {
		return $.Deferred(action);
	}
};