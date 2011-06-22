Ext.define('belajar.form.UserForm', {
	extend : 'Ext.form.FormPanel', 
	alias : 'widget.belajar.form.UserForm',
	id: 'belajar.form.UserForm',
	title: 'User Form',
    labelWidth: 200,
    bodyStyle:'padding:10px 10px 0',
    initComponent: function() {
        this.items = [
            {
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'Username',
                allowBlank:false
            },
            {
                xtype: 'textfield',
                name: 'email',
                fieldLabel: 'Email'
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
        belajar.form.UserForm.superclass.initComponent.call(this);
        this.disableUserForm();
    },
    
    enableUserForm: function(){
    	this.getForm().getFields().each(function(f){
    		f.setReadOnly(false);
    	});
    }, 
    
    disableUserForm: function(){
    	this.getForm().getFields().each(function(f){
    		f.setReadOnly(true);
    	});
    }, 
    
    simpanUser: function(){
    	var form = Ext.getCmp('belajar.form.UserForm');
    	if(form.getForm().isValid()){
    		Ext.MessageBox.alert(
                'TODO','implement form save'
            );
    	} else {
    		Ext.MessageBox.alert(
                'Error!',
                'Please check again'
            );	
    	}
    }
});
