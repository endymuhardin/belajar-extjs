Ext.define('belajar.panel.LoginPanel', {
    extend : 'Ext.form.Panel',
    alias : 'widget.belajar.panel.LoginPanel',
    id: 'loginForm',
    
    frame: true, 
    title: 'Login',
    height: 200,
    width: 400,
    
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 90,
        anchor: '100%'
    },
    
    items: [{
        xtype:'box'
        ,anchor:''
        ,fieldLabel:'Image'
        ,autoEl:{
            tag:'div', 
            style: 'text-align:center',
            children:[{
                tag:'img'
                ,qtip:'ArtiVisi Intermedia'
                ,src:'./resources/img/artivisi.png'
            }]
        }
    },{
        xtype: 'textfield',
        name: 'j_username',
        fieldLabel: 'Username',
        value: ''
    }, {
        xtype: 'textfield',
        name: 'j_password',
        inputType: 'password',
        fieldLabel: 'Password'
    }],
    
    buttons: [{
        text: 'Login', 
        handler: function(){
            window.location.href = 'main.html';
        }
    }]
});