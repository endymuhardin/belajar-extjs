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
	
	initComponents: function(){
		belajar.panel.CenterPanel.superclass.call(this);
	}, 
	
	
	displayScreen : function(screenType) {
		var screen = Ext.getCmp(screenType);
		if(screen){
			this.setActiveTab(screen);
		} else {
			this.add({
				xtype : screenType, 
				closable : true
			}).show();
		}
	}
	
});