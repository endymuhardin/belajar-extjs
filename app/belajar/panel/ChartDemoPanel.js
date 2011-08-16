Ext.define('belajar.panel.ChartDemoPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.belajar.panel.ChartDemoPanel',
	id: 'belajar.panel.ChartDemoPanel',
    title: 'Chart Demo',
    layout: 'border',
    initComponent: function() {
        var myData = [
            {bulan: 'Jan', data: 10},
            {bulan: 'Feb', data: 45},
            {bulan: 'Mar', data: 20},
            {bulan: 'Apr', data: 80},
            {bulan: 'May', data: 55},
            {bulan: 'Jun', data: 65},
            {bulan: 'Jul', data: 77},
            {bulan: 'Aug', data: 36},
            {bulan: 'Sep', data: 85},
            {bulan: 'Oct', data: 100},
            {bulan: 'Nov', data: 20},
            {bulan: 'Dec', data: 10}
        ];

        var ds = Ext.create('Ext.data.JsonStore', {
            fields: [
                'bulan',
                'data'
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
            axes: [{
                type: 'Numeric',
                minimum: 0,
                position: 'left',
                fields: ['data'],
                title: 'Jumlah Transaksi',
                minorTickSteps: 1,
                grid: {
                    odd: {
                        opacity: 1,
                        fill: '#ddd',
                        stroke: '#bbb',
                        'stroke-width': 0.5
                    }
                }
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['bulan'],
                title: 'Bulan'
            }],
            series: [
                  {
                    type: 'line',
                    highlight: {
                        size: 7,
                        radius: 7
                    },
                    axis: 'left',
                    xField: 'bulan',
                    yField: 'data',
                    markerConfig: {
                        type: 'cross',
                        size: 4,
                        radius: 4,
                        'stroke-width': 0
                    }
                }
            ]
        }
        ];



        belajar.panel.ChartDemoPanel.superclass.initComponent.call(this);
    }
});

