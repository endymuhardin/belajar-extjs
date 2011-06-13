Ext.define('belajar.panel.CenterPanel', {
	extend : 'Ext.tab.Panel',
	alias : 'widget.belajar.panel.CenterPanel',
	id : 'centerpanel',
	layout : {
		type : 'hbox',
		align : 'stretch'
	},
	
	items : [ 
         {
			title : 'Dashboard',
			bodyPadding : 10,
			html : 'Selamat Datang di Aplikasi Belajar'
		} 
	], 
	
	displayScreen : function(title) {
		this.add({
			title : title, 
			closable : true, 
			html : 'test content'
		}).show();
	}
	
});