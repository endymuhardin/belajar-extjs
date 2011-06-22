Ext.define('belajar.panel.UserManagementPanel', {
	extend : 'Ext.panel.Panel', 
	alias : 'widget.belajar.panel.UserManagementPanel',
	id: 'belajar.panel.UserManagementPanel',
    title: 'User Management',
    layout: 'border',
    initComponent: function() {
        this.items = [
            {
                xtype: 'belajar.grid.UserGrid',
                region: 'center',
                listeners : {
	            	scope: this, 
	            	selectionChange: this.onUserRowClick
	            }
            },
            {
                xtype: 'belajar.form.UserForm',
                region: 'north',
                height: 200
            }
        ];
        
        this.tbar = {
            xtype: 'belajar.toolbar.CrudToolbar', 
            listeners: {
            	scope: this, 
            	onCrudToolbarAdd: this.newUser,
            	onCrudToolbarEdit: this.editUser, 
            	onCrudToolbarCancel: this.resetUserForm
            }
        };
        belajar.panel.UserManagementPanel.superclass.initComponent.call(this);
    }, 
    
    newUser: function(){
    	Ext.getCmp('belajar.form.UserForm').getForm().reset();
    	Ext.getCmp('belajar.form.UserForm').enableUserForm();
    }, 
    
    editUser: function(){
    	Ext.getCmp('belajar.form.UserForm').enableUserForm();
    }, 
    
    resetUserForm: function(){
    	Ext.getCmp('belajar.form.UserForm').getForm().reset();
    	Ext.getCmp('belajar.form.UserForm').disableUserForm();
    }, 
    
    onUserRowClick: function(model, records){
    	var selection = records[0];
    	if(selection){
    		Ext.getCmp('belajar.form.UserForm').loadRecord(selection);
    	}
    }
});
