Ext.define('belajar.panel.ChartDemoPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.belajar.panel.ChartDemoPanel',
	id: 'belajar.panel.ChartDemoPanel',
    title: 'Chart Demo',
    layout: 'border',
    initComponent: function() {
        var myData = [
            {no: '1', bulan: 'Jan', kecap: 10, permen: 40},
            {no: '2', bulan: 'Feb', kecap: 45, permen: 50},
            {no: '3', bulan: 'Mar', kecap: 20, permen: 60},
            {no: '4', bulan: 'Apr', kecap: 80, permen: 30},
            {no: '5', bulan: 'May', kecap: 55, permen: 80},
            {no: '6', bulan: 'Jun', kecap: 65, permen: 50},
            {no: '7', bulan: 'Jul', kecap: 77, permen: 40},
            {no: '8', bulan: 'Aug', kecap: 36, permen: 70},
            {no: '9', bulan: 'Sep', kecap: 85, permen: 20},
            {no: '10', bulan: 'Oct', kecap: 100, permen: 10},
            {no: '11', bulan: 'Nov', kecap: 20, permen: 70},
            {no: '12', bulan: 'Dec', kecap: 10, permen: 30}
        ];

        var ds = Ext.create('Ext.data.JsonStore', {
            fields: [
                {name: 'no', type: 'int'},
                {name: 'bulan'},
                {name: 'kecap'},
                {name: 'permen'}
            ],
            data: myData
        });

        this.items = [
            {
                region: 'center',
                xtype: 'grid',
                store: ds,
                columns: [
                    {
                        text: '#',
                        dataIndex: 'no'
                    },
                    {
                        text: 'Bulan',
                        dataIndex: 'bulan'
                    },
                    {
                        text: 'Penjualan Permen',
                        dataIndex: 'permen'
                    },
                    {
                        text: 'Penjualan Kecap',
                        dataIndex: 'kecap'
                    }
                ]
            },
            {
                region: 'south',
                height: '50%',
                layout: 'border',
                items : [
                    {
                        xtype: 'chart',
                        region: 'center',
                        style: 'background:#fff',
                        animate: true,
                        store: ds,
                        shadow: true,
                        legend: {
                            position: 'right'
                        },
                        axes: [
                            {
                                type: 'Numeric',
                                minimum: 0,
                                position: 'left',
                                fields: ['kecap', 'permen'],
                                title: 'Jumlah Transaksi',
                                minorTickSteps: 1
                            }, {
                                type: 'Category',
                                position: 'bottom',
                                fields: ['bulan'],
                                title: 'Bulan'
                            }
                        ],
                        series: [
                              {
                                type: 'line',
                                highlight: {
                                    size: 7,
                                    radius: 7
                                },
                                axis: 'left',
                                xField: 'bulan',
                                yField: 'kecap'
                            },
                            {
                                type: 'column',
                                highlight: {
                                    size: 7,
                                    radius: 7
                                },
                                axis: 'left',
                                xField: 'bulan',
                                yField: 'permen'
                            }
                        ]
                    }
                ]
            }
        ];



        belajar.panel.ChartDemoPanel.superclass.initComponent.call(this);
    }
});

