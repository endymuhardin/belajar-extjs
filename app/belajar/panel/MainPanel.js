Ext.define('belajar.panel.MainPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.belajar.panel.MainPanel',
	frame : true,
	layout : 'border',
	
	initComponent : function() {
    	belajar.panel.MainPanel.superclass.initComponent.apply(this, arguments);
    }, 

	items : [ {
		xtype : 'toolbar',
		region : 'north',
		height : 30,
		items : [ {
			text : 'System',
			menu : {
				xtype : 'menu',
				plain : true,
				items : [ {
					text : 'Ganti Password'
				}, {
					text : 'Logout'
				} ]
			}
		}, {
			text : 'Master Data',
			menu : {
				xtype : 'menu',
				plain : true,
				items : [ {
					text : 'User', 
					scope : this,
					handler : function(item){
						Ext.getCmp('centerpanel').displayScreen(item.text);
					},
					screenType : 'belajar.panel.UserPanel'
				}, {
					text : 'Role'
				}, {
					text : 'Permission'
				} ]
			}
		}, {
			text : 'Transaksi'
		}, {
			text : 'Report'
		} ]
	}, {
		xtype : 'panel',
		title : 'Information',
		collapsible : true,
		region : 'east',
		width : 300
	}, {
		xtype : 'toolbar',
		region : 'south',
		height : 20,
		items : [ {
			text : 'current user : endy',
			xtype : 'label'
		} ]
	}, {
		id : 'centerpanel',
		xtype : 'belajar.panel.CenterPanel',
		region : 'center'
	} ]
});