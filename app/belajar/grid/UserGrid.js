Ext.define('belajar.grid.UserGrid', {
    extend: 'Ext.grid.Panel', 
	alias : 'widget.belajar.grid.UserGrid',
	id: 'belajar.grid.UserGrid',
	title: 'User List',
	
	initComponent: function(){
		this.store = new Ext.data.Store({
        	model: 'belajar.model.UserModel',
        	data: [
    	       {username: 'endy', email: 'endy.muhardin@gmail.com'},
    	       {username: 'ifnu', email: 'ifnubima@gmail.com'}
        	]
        });
        
		this.columns = [
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
        ];
		
		belajar.grid.UserGrid.superclass.initComponent.call(this);
	}
});
