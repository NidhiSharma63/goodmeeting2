const Meetings = ['SaveEnviroment', 'BlockChain Discussion', 'Save Soil Discussion', 'Freelancing Challenges', 'Tech Challenges']
const Score = [10, 40, 50, 80, 60, 100];
const avgAnswerFeedback = [2, 6, 8, 1, 4, 10];
// common configuration
// const tooltip = {
//     backgroundColor: 'rgba(229, 80, 80, 0.88)',
//     titleColor: 'rgba(225,225,225)',
//     bodyColor: 'rgba(225,225,225)',
//     borderColor: 'rgba(225,225,225)',
//     borderWidth: 1,
// }
const option = {
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
}
// setup
const data = {
    labels: Meetings,
    datasets: [{
        label: 'Meetings Score',
        borderColor: 'rgb(41,99,224)',
        backgroundColor: 'rgb(41,99,224)',
        data: Score,
    }]
};
// config Block
const config = {
    type: 'line',
    data: data,
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
};
// renderBlock
var overAllStatChart = new Chart(
    document.getElementById('canva1').getContext('2d'),
    config
);