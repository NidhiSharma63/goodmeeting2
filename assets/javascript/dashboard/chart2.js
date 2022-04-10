const Meetings = ['SaveEnviroment', 'BlockChain Discussion', 'Save Soil Discussion', 'Freelancing Challenges', 'Tech Challenges']
const Score = [10, 40, 50, 80, 60, 100];
const avgAnswerFeedback = [2, 6, 8, 1, 4, 10];
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
gradientBg2.addColorStop(0.4, 'rgb(41,99,224,0.99)');
gradientBg2.addColorStop(1, 'rgb(41,99,224,0.39)');
console.log(ctx3.canvas.parentNode.parentElement.clientWidth)
const scales = {
    y: {
        beginAtZero: true,
        grid: {
            display: false
        },
    },
    x: {
        grid: {
            display: false
        },
    },
};
const legend = {
    labels: {
        font: {
            size: 15
        },
        boxWidth: 20,
    }
};
const blueToolTip = {
    backgroundColor: 'rgb(41,99,224,0.88)',
    titleColor: 'rgba(225,225,225)',
    bodyColor: 'rgba(225,225,225)',
    borderColor: 'rgba(225,225,225)',
    borderWidth: 1
}
const pinkToolTips = {
    backgroundColor: 'rgba(229, 80, 80, 0.88)',
    titleColor: 'rgba(225,225,225)',
    bodyColor: 'rgba(225,225,225)',
    borderColor: 'rgba(225,225,225)',
    borderWidth: 1,
}
const animation = {
    duration: 1000,
    easing: 'linear'
}
const overAllStatData = {
    labels: Meetings,
    datasets: [{
        label: 'Meetings Score',
        data: Score,
        borderColor: 'rgb(41,99,224)',
        backgroundColor: 'rgb(41,99,224)',
        tension:.4
    }]
}
const howNeccesaryData = {
    labels: Meetings,
    datasets: [{
        label: 'Meetings Score',
        fill: true,
        pointColor: "#fff",
        pointBackgroundColor: '#fff',
        pointHighlightFill: "#fff",
        pointHighlightStroke: "#fff",
        backgroundColor: gradientBg,
        borderColor: 'rgba(229,80,80,1)',
        data: Score,
        tension: .4,
    }]
};
const timeManagmentData = {
    labels: Meetings,
    datasets: [{
        fill: true,
        pointColor: "#fff",
        pointBackgroundColor: '#fff',
        pointHighlightFill: "#fff",
        pointHighlightStroke: "#fff",
        backgroundColor: gradientBg2,
        borderColor: 'rgb(41,99,224)',
        label: 'Meetings Score',
        data: avgAnswerFeedback,
        tension: .4,
    }]
}
const overAllStatChartConfig = {
    type:'line',
    data:overAllStatData,
    options: {
        responsive: false,
        scales,
        plugins: {
            tooltip: blueToolTip,
            legend,
        },
        animation,
    }
}
const howNeccesaryConfig = {
    type: 'line',
    data: howNeccesaryData,
    options: {
        scales,
        plugins: {
            tooltip: pinkToolTips,
            legend,
        },
        animation,
    }
};
const timeManagmentConfig = {
    type: 'line',
    data: timeManagmentData,
    options: {
        scales,
        plugins: {
            tooltip: blueToolTip,
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