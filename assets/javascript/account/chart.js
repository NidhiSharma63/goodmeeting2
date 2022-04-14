const Meetings = ['Save Enviroment', 'BlockChain Discussion', 'Save Soil Discussion', 'Freelancing Challenges', 'Tech Challenges']
const Score = [10, 40, 50, 80, 60, 100, 40];
const avgAnswerFeedback = [2, 6, 8, 1, 4, 10, 3];
const MeetingsAdjusted = Meetings.map(meeting => meeting.split(' '));
var ctx1 = document.getElementById('canva1').getContext('2d');
var ctx2 = document.getElementById('canva2').getContext('2d');
var ctx3 = document.getElementById('canva3').getContext('2d');
// setting color values
const lightTextColor = 'rgb(225,225,225)';
const DarkTextColor = '#313640'
const getMode = localStorage.getItem("goodmeeting_today_color_scheme");

const gridConfig = {
    display: false,
    borderWidth: 0,
}
const yAxisTicks_stepSize2 = {
    color: DarkTextColor,
    padding: 9,
    stepSize: 2,
    font: {
        size: 12,
        weight: 560
    }
}
const yAxisTicks_stepSize20 = {
    color: DarkTextColor,
    padding: 9,
    stepSize: 20,
    font: {
        size: 12,
        weight: 560
    }
}

const xAxis = {
    barPercentage: 0.4,
    ticks: {
        color: DarkTextColor,
        padding: 9,
        font: {
            size: 12,
            weight: 600
        }
    },
    grid: gridConfig,
};
const legend = {
    labels: {
        color: DarkTextColor,
        font: {
            size: 15,
            weight: 700,
        },
        boxWidth: 15,
        boxHeight: 10
    }
};

const tooltip = {
    backgroundColor: 'rgb(33,35,49)',
    padding: 15,
    titleAlign: 'center',
    titleSpacing: 12,
    titleColor: 'rgba(225,225,225)',
    font: {
        size: 32,
    },
    bodyColor: 'rgba(225,225,225)',
    bodyAlign: 'center',
    bodySpacing: 9,
    bodyFont: {
        font: {
            size: 34
        }
    },
    caretSize: 12,
    displayColors: false,
};
const animation = {
    duration: 1000,
    easing: 'linear'
}
const overAllStatData = {
    labels: MeetingsAdjusted,
    datasets: [{
        barThickness: 10,
        borderRadius: 100,
        label: 'Meetings Score',
        data: Score,
        borderColor: 'rgb(41,99,224)',
        backgroundColor: 'rgb(229,80,80)',
        tension: .4
    }]
}
const howNeccesaryData = {
    labels: MeetingsAdjusted,
    datasets: [{
        label: 'Meetings Score',
        backgroundColor: 'rgba(229,80,80,1)',
        borderColor: 'rgba(229,80,80,1)',
        data: Score,
        tension: .5,
    }]
};
const timeManagmentData = {
    labels: MeetingsAdjusted,
    datasets: [{
        barThickness: 10,
        borderRadius: 100,
        backgroundColor: 'rgb(41,99,224)',
        borderColor: 'rgb(41,99,224)',
        label: 'Meetings Score',
        data: avgAnswerFeedback,
        tension: .6,
    }]
}
const overAllStatChartConfig = {
    type: 'bar',
    data: overAllStatData,
    options: {
        scales: {
            y: {
                ticks: yAxisTicks_stepSize20,
                grid: gridConfig
            },
            x: xAxis,
        },
        plugins: {
            tooltip,
            legend,
        },
    },
   
    animation,
}
const howNeccesaryConfig = {
    type: 'line',
    data: howNeccesaryData,
    options: {
        scales: {
            y: {
                ticks: yAxisTicks_stepSize20,
                grid: gridConfig
            },
            x: xAxis,
        },
        plugins: {
            tooltip,
            legend,
        },
    },
   
    animation,
};

const timeManagmentConfig = {
    type: 'bar',
    data: timeManagmentData,
    options: {
        scales: {
            y: {
                ticks: yAxisTicks_stepSize2,
                grid: gridConfig
            },
            x: xAxis,
        },
        plugins: {
            tooltip,
            legend,
        },
    },
    animation,
}

let overAllStatChart = null
let howNeccesaryChart = null
let myChart = null
// get getTheme
const getTheme = () => {
    return (localStorage.getItem("goodmeeting_today_color_scheme"));
}
// destroy charts
const destroyAllChart = () => {
    if (myChart != null) {
        myChart.destroy();
        howNeccesaryChart.destroy();
        overAllStatChart.destroy();
    }
    return;
}
// create New Charts
const createNewCharts = () => {
    overAllStatChart = new Chart(
        ctx1,
        overAllStatChartConfig,
    );
    howNeccesaryChart = new Chart(
        ctx2,
        howNeccesaryConfig,
    );
    myChart = new Chart(
        ctx3,
        timeManagmentConfig,
    );
    return;
}
$(".darkSwitch").click(() => {
    fun();
})

let fun = () => {
    const getThemeVal = getTheme();
    if (getThemeVal == 'dark') {
        timeManagmentConfig.options.scales.x.ticks.color = lightTextColor;
        timeManagmentConfig.options.scales.y.ticks.color = lightTextColor;
        timeManagmentConfig.options.plugins.legend.labels.color = lightTextColor;
        overAllStatChartConfig.options.plugins.legend.labels.color = lightTextColor;
        overAllStatChart.options.scales.x.ticks.color = lightTextColor;
        overAllStatChart.options.scales.y.ticks.color = lightTextColor;
        howNeccesaryConfig.options.scales.x.ticks.color = lightTextColor;
        howNeccesaryConfig.options.scales.y.ticks.color = lightTextColor;
        howNeccesaryConfig.options.plugins.legend.labels.color = lightTextColor;
        destroyAllChart();
        createNewCharts();
    } else {
        timeManagmentConfig.options.scales.x.ticks.color = DarkTextColor;
        howNeccesaryConfig.options.scales.x.ticks.color = DarkTextColor;
        overAllStatChart.options.scales.x.ticks.color = DarkTextColor;
        overAllStatChart.options.scales.y.ticks.color = DarkTextColor;
        howNeccesaryConfig.options.scales.y.ticks.color = DarkTextColor;
        timeManagmentConfig.options.scales.y.ticks.color = DarkTextColor;
        timeManagmentConfig.options.plugins.legend.labels.color = DarkTextColor;
        overAllStatChartConfig.options.plugins.legend.labels.color = DarkTextColor;
        howNeccesaryConfig.options.plugins.legend.labels.color = DarkTextColor;
        destroyAllChart();
        createNewCharts()
    }
}
window.onload = () => {
    createNewCharts();
    fun()
}