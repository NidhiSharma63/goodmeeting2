const Meetings = ['Save Enviroment', 'BlockChain Discussion', 'Save Soil Discussion', 'Freelancing Challenges', 'Tech Challenges']
const Score = [10, 40, 50, 80, 60, 100, 40];
const avgAnswerFeedback = [2, 6, 8, 1, 4, 10, 3];
const MeetingsAdjusted = Meetings.map(meeting => meeting.split(' '));
var ctx1 = document.getElementById('canva1').getContext('2d');
var ctx2 = document.getElementById('canva2').getContext('2d');
var ctx3 = document.getElementById('canva3').getContext('2d');
let overAllStatDataChart = null;
let howNeccesaryChart = null;
let myChart = null;
let textColor = '#313640';
// get value on load
const getModeOnLoad = localStorage.getItem("goodmeeting_today_color_scheme");
if (getModeOnLoad == 'dark') {
    textColor = 'rgb(225,225,225)'
} else {
    textColor = '#313640';
}
const yAxisHandler = (color) => {
    let yAxisTicks_stepSize2 = {
        color: color,
        padding: 9,
        stepSize: 2,
        font: {
            size: 12,
            weight: 560
        }
    }
    return yAxisTicks_stepSize2
}
const yAxisHandler2 = (color) => {
    let yAxisTicks_stepSize20 = {
        color: color,
        padding: 9,
        stepSize: 20,
        font: {
            size: 12,
            weight: 560
        }
    }
    return yAxisTicks_stepSize20
}
const xAxisHandler = (color) => {
    let xAxis = {
        barPercentage: 0.4,
        ticks: {
            color: color,
            padding: 9,
            font: {
                size: 12,
                weight: 600
            }
        },
        grid: gridConfig,
    };
    return xAxis;
}
const legendFun = (color) => {
    let legend = {
        labels: {
            color: color,
            font: {
                size: 15,
                weight: 700,
            },
            boxWidth: 15,
            boxHeight: 10
        }
    }
    return legend;
}
let gridConfig = {
    display: false,
    borderWidth: 0,
}
let tooltip = {
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
const commonConfigHandler = ({
    type,
    data,
    yAxis
}) => {
    let commonConfig = {
        type: type,
        data: data,
        options: {
            scales: {
                y: {
                    ticks: yAxis,
                    grid: gridConfig
                },
                x: xAxisHandler(textColor),
            },
            plugins: {
                tooltip,
                legend: legendFun(textColor),
            },
            animation,
        }
    }
    return commonConfig;
}
// handle dark mode on click
$('.moon').click(() => {
    const getModeValue = localStorage.getItem("goodmeeting_today_color_scheme");
    if (getModeValue === 'dark') {
        $(document.body).removeClass("darkTheme");
        localStorage.setItem("goodmeeting_today_color_scheme", 'light');
        textColor = '#313640';
    } else {
        $(document.body).addClass("darkTheme");
        localStorage.setItem("goodmeeting_today_color_scheme", 'dark');
        textColor = 'rgb(225,225,225)'
    }

    // checking if any chart is not null then destroy and create new
    if (overAllStatDataChart != null) {
        overAllStatDataChart.destroy();
        howNeccesaryChart.destroy();
        myChart.destroy();
    }
    overAllStatDataChart = new Chart(
        ctx1,
        // overAllStatChartConfigFun(),
        commonConfigHandler({
            type: 'bar',
            data: overAllStatData,
            yAxis: yAxisHandler2(textColor)
        })
    );
    howNeccesaryChart = new Chart(
        ctx2,
        commonConfigHandler({
            type: 'line',
            data: howNeccesaryData,
            yAxis: yAxisHandler(textColor)
        })
    );
    myChart = new Chart(
        ctx3,
        commonConfigHandler({
            type: 'bar',
            data: timeManagmentData,
            yAxis: yAxisHandler(textColor)
        }),
    );
})
overAllStatDataChart = new Chart(
    ctx1,
    commonConfigHandler({
        type: 'bar',
        data: overAllStatData,
        yAxis: yAxisHandler2(textColor)
    }),
);
howNeccesaryChart = new Chart(
    ctx2,
    commonConfigHandler({
        type: 'line',
        data: howNeccesaryData,
        yAxis: yAxisHandler(textColor)
    })
);
myChart = new Chart(
    ctx3,
    commonConfigHandler({
        type: 'bar',
        data: timeManagmentData,
        yAxis: yAxisHandler(textColor)
    }),
);