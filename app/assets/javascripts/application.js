// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery_ujs

//= require plugins/bxslider/jquery.bxslider.min

//= require turbolinks

//= require resources/unify/HTML/assets/plugins/jquery/jquery.min
//= require resources/unify/HTML/assets/plugins/jquery/jquery-migrate.min
//= require resources/unify/HTML/assets/plugins/bootstrap/js/bootstrap.min
//= require resources/unify/HTML/assets/plugins/back-to-top
//= require resources/unify/HTML/assets/plugins/smoothScroll
//= require resources/unify/HTML/assets/js/custom
//= require resources/unify/HTML/assets/js/app

//= require underscore

//= require sweet-alert

//= require_self
//= require_tree .








// var navItemClassName = $('#navItemClassName').val();
// $('.' + navItemClassName).addClass('active');

// Loader = {
// 	loaderWrapper: $('.loaderWrapper'),
// 	show: function() {
// 		this.loaderWrapper.show();
// 		$.scrollLock( true );
// 	},
// 	hide: function() {
// 		this.loaderWrapper.hide();
// 		$.scrollLock( false );
// 	}
// }

// Array.prototype.remove = function(from, to) {
// 	var rest = this.slice((to || from) + 1 || this.length);
// 	this.length = from < 0 ? this.length + from : from;
// 	return this.push.apply(this, rest);
// };