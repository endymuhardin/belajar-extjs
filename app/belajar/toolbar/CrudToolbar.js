Ext.define('belajar.toolbar.CrudToolbar', {
	extend : 'Ext.toolbar.Toolbar', 
	alias : 'widget.belajar.toolbar.CrudToolbar',
    initComponent: function() {
        this.items = [
            {
                xtype: 'button',
                text: 'Add', 
                scope: this, 
                handler: function(){
                    this.fireEvent('onCrudToolbarAdd', this);
                }
            },
            {
                xtype: 'button',
                text: 'Edit', 
                scope: this, 
                handler: function(){
                    this.fireEvent('onCrudToolbarEdit', this);
                }
            },
            {
                xtype: 'button',
                text: 'Delete', 
                scope: this, 
                handler: function(){
                    this.fireEvent('onCrudToolbarDelete', this);
                }
            },
            {
                xtype: 'button',
                text: 'Save', 
                scope: this, 
                handler: function(){
                    this.fireEvent('onCrudToolbarSave', this);
                }
            },
            {
                xtype: 'button',
                text: 'Cancel', 
                scope: this, 
                handler: function(){
                    this.fireEvent('onCrudToolbarCancel', this);
                }
            }
        ];
        
        belajar.toolbar.CrudToolbar.superclass.initComponent.call(this);
    }
});

