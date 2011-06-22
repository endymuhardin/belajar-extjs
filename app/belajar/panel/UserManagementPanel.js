Ext.define('belajar.panel.UserManagementPanel', {
	extend : 'Ext.panel.Panel', 
	alias : 'widget.belajar.panel.UserManagementPanel',
	id: 'belajar.panel.UserManagementPanel',
    title: 'User Management',
    layout: 'border',
    initComponent: function() {
        this.items = [
            {
                xtype: 'grid',
                title: 'User List',
                region: 'center',
                store: new Ext.data.Store({
                	model: 'belajar.model.UserModel',
                	data: [
            	       {username: 'endy', email: 'endy.muhardin@gmail.com'},
            	       {username: 'ifnu', email: 'ifnubima@gmail.com'}
                	]
                }),
                columns: [
                    {
                        dataIndex: 'username',
                        header: 'Username',
                        sortable: true,
                        width: 100
                    },
                    {
                        dataIndex: 'email',
                        header: 'Email',
                        sortable: true,
                        width: 300
                    }
                ]
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
    }
});
