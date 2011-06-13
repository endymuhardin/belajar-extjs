// Register namespaces and their corresponding paths to Ext.Loader
Ext.Loader.setPath({
    'belajar': 'app/belajar'
});

// Specify a list of classes your application your application needs
Ext.require([
    'Ext.container.Viewport',
    'belajar.panel.LoginPanel'
]);

// Application's initialization
Ext.onReady(function() {
    var win = Ext.create('Ext.Window', {
        id: 'loginScreen',
        layout: 'fit',
        plain: true,
        closable: false,
        items: [
            {xtype : 'belajar.panel.LoginPanel'}
        ]
    });
    win.show();
});

