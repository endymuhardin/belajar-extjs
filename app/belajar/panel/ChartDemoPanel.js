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
            {no: '6', bulan: 'Jun', kecap: 65, permen: 50}
        ];

        var ds = Ext.create('Ext.data.JsonStore', {
            fields: [
                {name: 'no', type: 'int'},
                {name: 'bulan'},
                {name: 'kecap', type: 'int'},
                {name: 'permen', type: 'int'}
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
                        region: 'east',
                        width: '50%',
                        xtype: 'chart',
                        animate: 'true',
                        shadow: 'true',
                        store: ds,
                        legend: {position: 'right'},
                        series: [
                            {
                                type: 'pie',
                                field: 'permen',
                                showInLegend: true,
                                label: {
                                    field: 'bulan',
                                    display: 'rotate',
                                    contrast: true
                                }
                            }
                        ]
                    },
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

