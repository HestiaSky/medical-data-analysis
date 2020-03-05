/*global $, document*/
function grab() {
    /* Promise to make sure data loads */
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '/static/data/data.json',
            dataType: 'json',
            success: function(data) {
                resolve(data)
            },
            error: function(error) {
                reject(error);
            }
        })
    })
}
var titleTag=['体重', '头盆关系', '宫高', '尿蛋白', '收缩压', '水肿', '胎位', '腹围',
    '舒张压', '肌酐', '尿酸', '钙', '球蛋白', '白蛋白:球蛋白', '总胆红素', '丙氨酸氨基转移酶', '铁',
    '直接胆红素', '总胆汁酸', '磷', '天冬氨酸氨基转移酶', '总蛋白', '红细胞压积', '嗜碱细胞绝对值',
    '血小板平均体积', '淋巴细胞绝对值', '血小板分布宽度', '平均RBC血红蛋白浓度',
    '淋巴细胞百分比', '嗜酸细胞绝对值', '血小板计数', '红细胞分布宽度', '单核细胞百分比', '红细胞',
    '嗜酸细胞百分比', '单核细胞绝对值', '平均RBC血红蛋白量', '白细胞', '嗜碱细胞百分比', '平均RBC体积',
    '红细胞分布宽度(SD)', '大血小板比率'];
function lc0_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[0]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[0].label;
        var line_data0 = data.lineChart[0].data0;
        var line_data1 = data.lineChart[0].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc1_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[1]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[1].label;
        var line_data0 = data.lineChart[1].data0;
        var line_data1 = data.lineChart[1].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc2_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[2]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[2].label;
        var line_data0 = data.lineChart[2].data0;
        var line_data1 = data.lineChart[2].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc3_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[3]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[3].label;
        var line_data0 = data.lineChart[3].data0;
        var line_data1 = data.lineChart[3].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc4_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[4]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[4].label;
        var line_data0 = data.lineChart[4].data0;
        var line_data1 = data.lineChart[4].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc5_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[5]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[5].label;
        var line_data0 = data.lineChart[5].data0;
        var line_data1 = data.lineChart[5].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc6_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[6]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[6].label;
        var line_data0 = data.lineChart[6].data0;
        var line_data1 = data.lineChart[6].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc7_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[7]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[7].label;
        var line_data0 = data.lineChart[7].data0;
        var line_data1 = data.lineChart[7].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc8_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[8]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[8].label;
        var line_data0 = data.lineChart[8].data0;
        var line_data1 = data.lineChart[8].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc9_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[9]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[9].label;
        var line_data0 = data.lineChart[9].data0;
        var line_data1 = data.lineChart[9].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc10_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[10]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[10].label;
        var line_data0 = data.lineChart[10].data0;
        var line_data1 = data.lineChart[10].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc11_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[11]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[11].label;
        var line_data0 = data.lineChart[11].data0;
        var line_data1 = data.lineChart[11].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc12_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[12]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[12].label;
        var line_data0 = data.lineChart[12].data0;
        var line_data1 = data.lineChart[12].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc13_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[13]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[13].label;
        var line_data0 = data.lineChart[13].data0;
        var line_data1 = data.lineChart[13].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc14_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[14]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[14].label;
        var line_data0 = data.lineChart[14].data0;
        var line_data1 = data.lineChart[14].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc15_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[15]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[15].label;
        var line_data0 = data.lineChart[15].data0;
        var line_data1 = data.lineChart[15].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc16_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[16]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[16].label;
        var line_data0 = data.lineChart[16].data0;
        var line_data1 = data.lineChart[16].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc17_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[17]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[17].label;
        var line_data0 = data.lineChart[17].data0;
        var line_data1 = data.lineChart[17].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc18_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[18]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[18].label;
        var line_data0 = data.lineChart[18].data0;
        var line_data1 = data.lineChart[18].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc19_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[19]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[19].label;
        var line_data0 = data.lineChart[19].data0;
        var line_data1 = data.lineChart[19].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc20_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[20]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[20].label;
        var line_data0 = data.lineChart[20].data0;
        var line_data1 = data.lineChart[20].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc21_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[21]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[21].label;
        var line_data0 = data.lineChart[21].data0;
        var line_data1 = data.lineChart[21].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc22_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[22]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[22].label;
        var line_data0 = data.lineChart[22].data0;
        var line_data1 = data.lineChart[22].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc23_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[23]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[23].label;
        var line_data0 = data.lineChart[23].data0;
        var line_data1 = data.lineChart[23].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc24_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[24]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[24].label;
        var line_data0 = data.lineChart[24].data0;
        var line_data1 = data.lineChart[24].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc25_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[25]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[25].label;
        var line_data0 = data.lineChart[25].data0;
        var line_data1 = data.lineChart[25].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc26_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[26]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[26].label;
        var line_data0 = data.lineChart[26].data0;
        var line_data1 = data.lineChart[26].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc27_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[27]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[27].label;
        var line_data0 = data.lineChart[27].data0;
        var line_data1 = data.lineChart[27].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc28_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[28]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[28].label;
        var line_data0 = data.lineChart[28].data0;
        var line_data1 = data.lineChart[28].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc29_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[29]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[29].label;
        var line_data0 = data.lineChart[29].data0;
        var line_data1 = data.lineChart[29].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc30_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[30]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[30].label;
        var line_data0 = data.lineChart[30].data0;
        var line_data1 = data.lineChart[30].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc31_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[31]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[31].label;
        var line_data0 = data.lineChart[31].data0;
        var line_data1 = data.lineChart[31].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc32_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[32]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[32].label;
        var line_data0 = data.lineChart[32].data0;
        var line_data1 = data.lineChart[32].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc33_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[33]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[33].label;
        var line_data0 = data.lineChart[33].data0;
        var line_data1 = data.lineChart[33].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc34_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[34]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[34].label;
        var line_data0 = data.lineChart[34].data0;
        var line_data1 = data.lineChart[34].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc35_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[35]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[35].label;
        var line_data0 = data.lineChart[35].data0;
        var line_data1 = data.lineChart[35].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc36_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[36]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[36].label;
        var line_data0 = data.lineChart[36].data0;
        var line_data1 = data.lineChart[36].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc37_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[37]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[37].label;
        var line_data0 = data.lineChart[37].data0;
        var line_data1 = data.lineChart[37].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc38_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[38]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[38].label;
        var line_data0 = data.lineChart[38].data0;
        var line_data1 = data.lineChart[38].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc39_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[39]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[39].label;
        var line_data0 = data.lineChart[39].data0;
        var line_data1 = data.lineChart[39].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc40data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[40]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[40].label;
        var line_data0 = data.lineChart[40].data0;
        var line_data1 = data.lineChart[40].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc41_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[41]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[41].label;
        var line_data0 = data.lineChart[41].data0;
        var line_data1 = data.lineChart[41].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
function lc14_data() {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[14]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[14].label;
        var line_data0 = data.lineChart[14].data0;
        var line_data1 = data.lineChart[14].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE   = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });
}
$(document).ready(function () {
    grab().then((data) => {
        'use strict';
        document.getElementById("myTitle").innerText = titleTag[0]+"分布对比图";
        // ------------------------------------------------------- //
        // Charts Gradients
        // ------------------------------------------------------ //
        var ctx1 = $("canvas").get(0).getContext("2d");
        var gradient1 = ctx1.createLinearGradient(150, 0, 150, 300);
        gradient1.addColorStop(0, 'rgba(133, 120, 242, 0.91)');
        gradient1.addColorStop(1, 'rgba(255, 119, 119, 0.94)');

        var gradient2 = ctx1.createLinearGradient(146.000, 0.000, 154.000, 300.000);
        gradient2.addColorStop(0, 'rgba(104, 179, 82, 0.85)');
        gradient2.addColorStop(1, 'rgba(76, 162, 205, 0.85)');

        // ------------------------------------------------------- //
        // Line Chart
        // ------------------------------------------------------ //
        var line_labels = data.lineChart[0].label;
        var line_data0 = data.lineChart[0].data0;
        var line_data1 = data.lineChart[0].data1;
        $('#lineChartExample').remove();
        $('#lineChartDiv').append('<canvas id="lineChartExample"></canvas>');
        var LINECHARTEXMPLE = $('#lineChartExample');
        var lineChartExample = new Chart(LINECHARTEXMPLE, {
            type: 'line',
            options: {
                legend: {labels:{fontColor:"#777", fontSize: 12}},
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: line_labels,
                datasets: [
                    {
                        label: "健康人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient1,
                        borderColor: gradient1,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient1,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient1,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data0,
                        spanGaps: false
                    },
                    {
                        label: "患病人群",
                        fill: true,
                        lineTension: 0.3,
                        backgroundColor: gradient2,
                        borderColor: gradient2,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        borderWidth: 1,
                        pointBorderColor: gradient2,
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradient2,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: line_data1,
                        spanGaps: false
                    }
                ]
            }
        });


        // ------------------------------------------------------- //
        // Bar Chart
        // ------------------------------------------------------ //
        var bar_labels = data.barChart.label;
        var bar_data0 = data.barChart.data0;
        var bar_data1 = data.barChart.data1;
        var BARCHARTEXMPLE = $('#barChartExample');
        new Chart(BARCHARTEXMPLE, {
            type: 'bar',
            options: {
                scales: {
                    xAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        gridLines: {
                            color: '#eee'
                        }
                    }]
                },
            },
            data: {
                labels: bar_labels,
                datasets: [
                    {
                        label: "健康人群",
                        backgroundColor: [
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1
                        ],
                        hoverBackgroundColor: [
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1
                        ],
                        borderColor: [
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1,
                            gradient1
                        ],
                        borderWidth: 1,
                        data: bar_data0,
                    },
                    {
                        label: "患病人群",
                        backgroundColor: [
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2
                        ],
                        hoverBackgroundColor: [
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2
                        ],
                        borderColor: [
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2,
                            gradient2
                        ],
                        borderWidth: 1,
                        data: bar_data1,
                    }
                ]
            }
        });


    }).catch((error) => {
        console.log(error);
    });

});
