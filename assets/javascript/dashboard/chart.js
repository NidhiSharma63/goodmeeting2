const Meetings = ['SaveEnviroment', 'BlockChain Discussion', 'Save Soil Discussion', 'Freelancing Challenges', 'Tech Challenges']
const Score = [10, 40, 50, 80, 60, 100]
const ctx1 = document.getElementById('canva1').getContext('2d');
const ctx2 = document.getElementById('canva2').getContext('2d');
const ctx3 = document.getElementById('canva3').getContext('2d');
const avgAnswerFeedback = [2,6,8,1,4,10] 
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
            duration: 3000,
            easing: 'easeInOutBounce'

        },
        plugins: {
            tooltip: {
                backgroundColor: 'rgba(229, 80, 80, 0.33)',
                titleColor: 'rgba(229, 80, 80, 1)',
                bodyColor: 'rgba(229, 80, 80, 1)',
                borderColor: 'rgba(229, 80, 80, 1)',
                borderWidth: 1,
            },
            legend: {
                labels: {
                    font: {
                        size: 18
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
            label: 'Meetings Score',
            data: avgAnswerFeedback,
            backgroundColor: [
                'rgba(229, 80, 80, 1)',
                'rgba(229, 80, 80, 1)',
                'rgba(229, 80, 80, 1)',
                'rgba(229, 80, 80, 1)',
                'rgba(229, 80, 80, 1)',
                'rgba(229, 80, 80, 1)'
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
            duration: 3000,
            easing: 'easeInOutBounce'

        },
        plugins: {
            tooltip: {
                backgroundColor: 'rgba(229, 80, 80, 0.33)',
                titleColor: 'rgba(229, 80, 80, 1)',
                bodyColor: 'rgba(229, 80, 80, 1)',
                borderColor: 'rgba(229, 80, 80, 1)',
                borderWidth: 1,
            },
            legend: {
                labels: {
                    font: {
                        size: 30
                    },
                    boxWidth: 40,
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
            label: 'Meetings Score',
            data: avgAnswerFeedback,
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
            duration: 3000,
            easing: 'easeInOutBounce'

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
                        size: 30
                    },
                    boxWidth: 40,
                }
            },
        }
    }
});
// 'rgba(229, 80, 80, 1)',
// 'rgba(229, 80, 80, 1)',
// 'rgba(229, 80, 80, 1)',
// 'rgba(229, 80, 80, 1)',
// 'rgba(229, 80, 80, 1)',
// 'rgba(229, 80, 80, 1)'