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
const getMode = localStorage.getItem("goodmeeting_today_color_scheme");
if (getMode == 'dark') {
    textColor = 'rgb(225,225,225)'
} else {
    textColor = '#313640';
}
$('.moon').click(() => {
    console.log(`clicked ${textColor}`)
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

    let gridConfig = {
        display: false,
        borderWidth: 0,
    }
    let yAxisTicks_stepSize2 = {
        color: textColor,
        padding: 9,
        stepSize: 2,
        font: {
            size: 12,
            weight: 560
        }
    }
    let yAxisTicks_stepSize20 = {
        color: textColor,
        padding: 9,
        stepSize: 20,
        font: {
            size: 12,
            weight: 560
        }
    }
    
    let xAxis = {
        barPercentage: 0.4,
        ticks: {
            color: textColor,
            padding: 9,
            font: {
                size: 12,
                weight: 600
            }
        },
        grid: gridConfig,
    };
    let legend = {
        labels: {
            color: textColor,
            font: {
                size: 15,
                weight: 700,
            },
            boxWidth: 15,
            boxHeight: 10
        }
    };
    
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
    let animation = {
        duration: 1000,
        easing: 'linear'
    }
    let overAllStatData = {
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
    let howNeccesaryData = {
        labels: MeetingsAdjusted,
        datasets: [{
            label: 'Meetings Score',
            backgroundColor: 'rgba(229,80,80,1)',
            borderColor: 'rgba(229,80,80,1)',
            data: Score,
            tension: .5,
        }]
    };
    let timeManagmentData = {
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
    let overAllStatChartConfig = {
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
            animation,
        }
    }
    let howNeccesaryConfig = {
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
            animation,
        }
    };
    let timeManagmentConfig = {
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
            animation,
        },
    }

    // checking if any chart is not null then destroy and create new
    if (overAllStatDataChart != null) {
        overAllStatDataChart.destroy();
        howNeccesaryChart.destroy();
        myChart.destroy();
    }
    overAllStatDataChart = new Chart(
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
})

let gridConfig = {
    display: false,
    borderWidth: 0,
}
let yAxisTicks_stepSize2 = {
    color: textColor,
    padding: 9,
    stepSize: 2,
    font: {
        size: 12,
        weight: 560
    }
}
let yAxisTicks_stepSize20 = {
    color: textColor,
    padding: 9,
    stepSize: 20,
    font: {
        size: 12,
        weight: 560
    }
}

let xAxis = {
    barPercentage: 0.4,
    ticks: {
        color: textColor,
        padding: 9,
        font: {
            size: 12,
            weight: 600
        }
    },
    grid: gridConfig,
};
let legend = {
    labels: {
        color: textColor,
        font: {
            size: 15,
            weight: 700,
        },
        boxWidth: 15,
        boxHeight: 10
    }
};

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
let animation = {
    duration: 1000,
    easing: 'linear'
}
let overAllStatData = {
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
let howNeccesaryData = {
    labels: MeetingsAdjusted,
    datasets: [{
        label: 'Meetings Score',
        backgroundColor: 'rgba(229,80,80,1)',
        borderColor: 'rgba(229,80,80,1)',
        data: Score,
        tension: .5,
    }]
};
let timeManagmentData = {
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
let overAllStatChartConfig = {
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
        animation,
    }
}
let howNeccesaryConfig = {
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
        animation,
    }
};
let timeManagmentConfig = {
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
        animation,
    },
}
overAllStatDataChart = new Chart(
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