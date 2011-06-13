Ext.define('belajar.form.RoleForm', {
	extend : 'Ext.form.FormPanel', 
	alias : 'widget.belajar.form.RoleForm',
	id: 'belajar.form.RoleForm',
	title: 'Role Form',
    width: 600,
    height: 250,
    padding: 10,
    labelWidth: 200,
    initComponent: function() {
        this.items = [
            {
                xtype: 'textfield',
                fieldLabel: 'Name'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Description'
            }
        ];
        this.fbar = {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    text: 'Save'
                },
                {
                    xtype: 'button',
                    text: 'Cancel'
                }
            ]
        };
        belajar.form.UserForm.superclass.initComponent.call(this);
    }
});
