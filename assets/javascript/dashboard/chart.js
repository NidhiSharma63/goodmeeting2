const Meetings = ['SaveEnviroment', 'BlockChain Discussion', 'Save Soil Discussion', 'Freelancing Challenges', 'Tech Challenges']
const Score = [10, 40, 50, 80, 60, 100]
const ctx1 = document.getElementById('canva1').getContext('2d');
const ctx2 = document.getElementById('canva2').getContext('2d');
const ctx3 = document.getElementById('canva3').getContext('2d');
var gradientBg = ctx2.createLinearGradient(0, 0, 0, 400);
gradientBg.addColorStop(0, 'rgba(229,80,80,1)');  
gradientBg.addColorStop(0.3, 'rgba(229,80,80,0.99)');
gradientBg.addColorStop(1, 'rgba(22,80,80,0.29)');
var gradientBg2 = ctx3.createLinearGradient(0, 0, 0, 400);
gradientBg2.addColorStop(0, 'rgb(41,99,224)');  
gradientBg2.addColorStop(0.4, 'rgb(41,99,224,0.79)');
gradientBg2.addColorStop(1, 'rgb(41,99,224,0.29)');
const avgAnswerFeedback = [2, 6, 8, 1, 4, 10]
const myChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: Meetings,
        datasets: [{
            barPercentage: 0.9,
            barThickness: 8,
            label: 'Meetings Score',
            data: Score,
            backgroundColor: [
                'rgb(41,99,224)',
                'rgb(41,99,224)',
                'rgb(41,99,224)',
                'rgb(41,99,224)',
                'rgb(41,99,224)',
                'rgb(41,99,224)'
            ],
        }]
    },
    options: {
        responsive: false,
        scales: {
            y: {
                beginAtZero: true,
            },
            x: {
                grid: {
                    display: false
                },
            },
        },
        animation: {
            duration: 1000,
            easing: 'linear'

        },
        plugins: {
            tooltip: {
                backgroundColor: 'rgb(41,99,224,0.88)',
                titleColor: 'rgba(225,225,225)',
                bodyColor: 'rgba(225,225,225)',
                borderColor: 'rgba(225,225,225)',
                borderWidth: 1,
            },
            legend: {
                labels: {
                    font: {
                        size: 10
                    },
                    boxWidth: 20,
                }
            },
        }
    }
});

const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: Meetings,
        datasets: [{
            fill: true,
            pointColor: "#fff",
            pointBackgroundColor: '#fff',
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#fff",
            label: 'Meetings Score',
            data: avgAnswerFeedback,
            backgroundColor: gradientBg,
            borderColor: 'rgb(229,80,80)',
            tension: .3,
        }]
    },
    options: {
        responsive: false,
        scales: {
            y: {
                beginAtZero: true,
            },
            x: {
                grid: {
                    display: false
                },
            },
        },
        animation: {
            duration: 1000,
            easing: 'linear'

        },
        plugins: {
            tooltip: {
                backgroundColor: 'rgba(229, 80, 80, 0.88)',
                titleColor: 'rgba(225,225,225)',
                bodyColor: 'rgba(225,225,225)',
                borderColor: 'rgba(225,225,225)',
                borderWidth: 1,
            },
            legend: {
                labels: {
                    font: {
                        size: 10
                    },
                    boxWidth: 20,
                    boxHeight: 15,
                }
            },
        }
    }
});
const myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: Meetings,
        datasets: [{
            fill: true,
            pointColor: "#fff",
            pointBackgroundColor: '#fff',
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#fff",
            label: 'Meetings Score',
            data: avgAnswerFeedback,
            backgroundColor:gradientBg2 ,
            borderColor: 'rgb(41,99,224)',
            tension: .3,
        }]
    },
    options: {
        responsive: false,
        scales: {
            y: {
                beginAtZero: true,
            },
            x: {
                grid: {
                    display: false
                },
            },
        },
        animation: {
            duration: 1000,
            easing: 'linear'

        },
        plugins: {
            tooltip: {
                backgroundColor: 'rgb(41,99,224,0.88)',
                titleColor: 'rgba(225,225,225)',
                bodyColor: 'rgba(225,225,225)',
                borderColor: 'rgba(225,225,225)',
                borderWidth: 1,
            },
            legend: {
                labels: {
                    // padding:43,
                    color: 'rgba(225,225,225)',
                    textAlign: 'right',
                    font: {
                        size: 10
                    },
                    boxWidth: 20,
                    boxHeight: 15,
                }
            },
        }
    }
});