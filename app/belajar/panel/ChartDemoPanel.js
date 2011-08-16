Ext.define('belajar.panel.ChartDemoPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.belajar.panel.ChartDemoPanel',
	id: 'belajar.panel.ChartDemoPanel',
    title: 'Chart Demo',
    layout: 'border',
    initComponent: function() {
        var myData = [
            {bulan: 'Jan', kecap: 10},
            {bulan: 'Feb', kecap: 45},
            {bulan: 'Mar', kecap: 20},
            {bulan: 'Apr', kecap: 80},
            {bulan: 'May', kecap: 55},
            {bulan: 'Jun', kecap: 65},
            {bulan: 'Jul', kecap: 77},
            {bulan: 'Aug', kecap: 36},
            {bulan: 'Sep', kecap: 85},
            {bulan: 'Oct', kecap: 100},
            {bulan: 'Nov', kecap: 20},
            {bulan: 'Dec', kecap: 10}
        ];

        var ds = Ext.create('Ext.data.JsonStore', {
            fields: [
                'bulan',
                'kecap'
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
                    fields: ['kecap'],
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
                }
            ]
        }
        ];



        belajar.panel.ChartDemoPanel.superclass.initComponent.call(this);
    }
});

