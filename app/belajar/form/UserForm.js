Ext.define('belajar.form.UserForm', {
	extend : 'Ext.form.FormPanel', 
	alias : 'widget.belajar.form.UserForm',
	id: 'belajar.form.UserForm',
	title: 'User Form',
    width: 600,
    height: 250,
    padding: 10,
    labelWidth: 200,
    initComponent: function() {
        this.items = [
            {
                xtype: 'textfield',
                fieldLabel: 'Username'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Password',
                inputType: 'password'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Confirm',
                inputType: 'password'
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
