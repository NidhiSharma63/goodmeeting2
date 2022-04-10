const Meetings = ['Save Enviroment', 'BlockChain Discussion', 'Save Soil Discussion', 'Freelancing Challenges', 'Tech Challenges']
const Score = [10, 40, 50, 80, 60, 100];
const avgAnswerFeedback = [2, 6, 8, 1, 4, 10];
const MeetingsAdjusted = Meetings.map(meeting => meeting.split(' '));
console.log(MeetingsAdjusted)
var ctx1 = document.getElementById('canva1').getContext('2d');
var ctx2 = document.getElementById('canva2').getContext('2d');
// make gradientBg
var gradientBg = ctx2.createLinearGradient(0, 0, 0, 400);
gradientBg.addColorStop(0, 'rgba(229,80,80,1)');
gradientBg.addColorStop(0.3, 'rgba(229,80,80,0.99)');
gradientBg.addColorStop(1, 'rgba(229,80,80,0.39)');
var ctx3 = document.getElementById('canva3').getContext('2d');
var gradientBg2 = ctx3.createLinearGradient(0, 0, 0, 400);
gradientBg2.addColorStop(0, 'rgb(41,99,224)');
gradientBg2.addColorStop(0.8, 'rgb(41,99,224,0.89)');
gradientBg2.addColorStop(1, 'rgb(41,99,224,0.9)');
console.log(ctx3.canvas.parentNode.parentElement.clientWidth)

const yAxis = {
    ticks: {
        color: '#313640',
        padding: 9,
        stepSize: 4,
        font: {
            size: 12,
            weight: 560
        }
    },
    grid: {
        display: false,
        borderColor: 'rgba(19, 27, 99, 0.055)'
    },
};
const xAxis = {
    barPercentage: 0.4,
    ticks: {
        color: '#313640',
        padding: 9,

        font: {
            size: 12,
            weight: 600
        }
    },
    grid: {
        display: false,
    },
};
const legend = {
    labels: {
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
        backgroundColor: gradientBg,
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
        backgroundColor: gradientBg2,
        borderColor: gradientBg2,
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
            y:yAxis,
            x: xAxis,
        },
        plugins: {
            tooltip,
            legend,
        },
        animation,
    }
}
const howNeccesaryConfig = {
    type: 'line',
    data: howNeccesaryData,
    options: {
        scales:{
            y:yAxis,
            x: xAxis,
        },
        plugins: {
            tooltip,
            legend,
        },
        animation,
    }
};
const timeManagmentConfig = {
    type: 'bar',
    data: timeManagmentData,
    options: {
        scales:{
            y:yAxis,
            x: xAxis,
        },
        plugins: {
            tooltip,
            legend,
        },
        animation,
    },
}
const overAllStatDataChart = new Chart(
    ctx1,
    overAllStatChartConfig,
);
const howNeccesaryChart = new Chart(
    ctx2,
    howNeccesaryConfig,
);
const myChart = new Chart(
    ctx3,
    timeManagmentConfig,
);