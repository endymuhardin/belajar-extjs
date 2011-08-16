Ext.define('belajar.panel.ChartDemoPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.belajar.panel.ChartDemoPanel',
	id: 'belajar.panel.ChartDemoPanel',
    title: 'Chart Demo',
    layout: 'border',
    initComponent: function() {
        var myData = [
            {bulan: 'Jan', kecap: 10, permen: 40},
            {bulan: 'Feb', kecap: 45, permen: 50},
            {bulan: 'Mar', kecap: 20, permen: 60},
            {bulan: 'Apr', kecap: 80, permen: 30},
            {bulan: 'May', kecap: 55, permen: 80},
            {bulan: 'Jun', kecap: 65, permen: 50},
            {bulan: 'Jul', kecap: 77, permen: 40},
            {bulan: 'Aug', kecap: 36, permen: 70},
            {bulan: 'Sep', kecap: 85, permen: 20},
            {bulan: 'Oct', kecap: 100, permen: 10},
            {bulan: 'Nov', kecap: 20, permen: 70},
            {bulan: 'Dec', kecap: 10, permen: 30}
        ];

        var ds = Ext.create('Ext.data.JsonStore', {
            fields: [
                'bulan',
                'kecap',
                'permen'
            ],
            data: myData
        });

        this.items = [
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
        ];



        belajar.panel.ChartDemoPanel.superclass.initComponent.call(this);
    }
});

