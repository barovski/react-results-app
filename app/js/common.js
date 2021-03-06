module.exports =  {
	showLoading: function (){
		$('#loading').show(); 
	},
	hideLoading: function () {
		$('#loading').hide();
	},
	showLoadingWidget: function(id) {
		$('#' + id).show();
	},
	hideLoadingWidget: function(id) {
		$('#' + id).hide();
	},
	sortByProp: function (array, prop) {
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
		if (name && name[0] == 1) {//some WTF in response of bundesliga
			name = name.substring(3);	
		}

		name = name ? name.split(' ') : [];

		if (name.length > 2) {
			name.splice(name.length-1, 1);
		}

		return name.join(' ');
	},
	defer: function (action) {
		return $.Deferred(action);
	},
	colors: {
		blueDark: '#2C3E50',
		blueLight: '#3498DB',
		blueMedium: '#6ab0de',
		green: 'a1cc66'
	}
};