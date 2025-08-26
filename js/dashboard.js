// Dashboard JavaScript for Smart Farm 2.0
class SmartFarmDashboard {
    constructor() {
        this.charts = {};
        this.currentBarn = 'all';
        this.updateInterval = null;
        this.init();
    }

    init() {
        this.initClock();
        this.initTabs();
        this.initCharts();
        this.initBarnSelector();
        this.initRealTimeUpdates();
        this.initAnimations();
    }

    // Real-time Clock
    initClock() {
        const clockElement = document.getElementById('real-time-clock');
        if (!clockElement) return;

        const updateClock = () => {
            const now = new Date();
            const options = { 
                year: 'numeric', 
                month: '2-digit', 
                day: '2-digit', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit', 
                hour12: false 
            };
            clockElement.textContent = `LIVE: ${now.toLocaleDateString('vi-VN', options)}`;
        };

        updateClock();
        setInterval(updateClock, 1000);
    }

    // Tab Navigation
    initTabs() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.dataset.tab;
                
                // Update active button
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Update active content
                tabContents.forEach(content => content.classList.remove('active'));
                const activeContent = document.getElementById(tabId);
                if (activeContent) {
                    activeContent.classList.add('active');
                    activeContent.classList.add('fade-in');
                }
            });
        });
    }

    // Charts Initialization
    initCharts() {
        this.createEnvironmentCharts();
        this.createFinancialCharts();
    }

    createEnvironmentCharts() {
        const chartOptions = {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                y: { 
                    beginAtZero: false,
                    grid: { color: '#e2e8f0' }
                },
                x: { 
                    grid: { display: false }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    enabled: true,
                    mode: 'index',
                    intersect: false,
                },
            },
            animation: {
                duration: 500,
            },
        };

        const chartLabels = ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'];
        
        this.chartData = {
            all: {
                temp: [26, 26.5, 27, 28, 27.5, 27, 26],
                humidity: [75, 76, 74, 72, 73, 75, 76],
                gas: [12, 13, 15, 14, 16, 15, 14]
            },
            barn_a: {
                temp: [27, 27.2, 27.5, 28.5, 28, 27.5, 27],
                humidity: [72, 73, 71, 69, 70, 72, 73],
                gas: [15, 16, 17, 16, 18, 17, 16]
            },
            barn_b: {
                temp: [26.5, 26.8, 27.2, 28.1, 27.8, 27.2, 26.8],
                humidity: [78, 79, 77, 75, 76, 78, 79],
                gas: [10, 11, 12, 11, 13, 12, 11]
            },
            nursery: {
                temp: [29, 29.2, 29.5, 30, 29.8, 29.5, 29.2],
                humidity: [65, 66, 64, 62, 63, 65, 66],
                gas: [8, 9, 10, 9, 11, 10, 9]
            }
        };

        // Temperature Chart
        const tempChartCtx = document.getElementById('tempChart');
        if (tempChartCtx) {
            this.charts.temp = new Chart(tempChartCtx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: chartLabels,
                    datasets: [{
                        label: 'Nhiệt độ',
                        data: this.chartData.all.temp,
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        fill: true,
                        tension: 0.4,
                    }]
                },
                options: chartOptions
            });
        }

        // Humidity Chart
        const humidityChartCtx = document.getElementById('humidityChart');
        if (humidityChartCtx) {
            this.charts.humidity = new Chart(humidityChartCtx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: chartLabels,
                    datasets: [{
                        label: 'Độ ẩm',
                        data: this.chartData.all.humidity,
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: chartOptions
            });
        }

        // Gas Chart
        const gasChartCtx = document.getElementById('gasChart');
        if (gasChartCtx) {
            this.charts.gas = new Chart(gasChartCtx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: chartLabels,
                    datasets: [{
                        label: 'NH3',
                        data: this.chartData.all.gas,
                        borderColor: '#f97316',
                        backgroundColor: 'rgba(249, 115, 22, 0.1)',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: chartOptions
            });
        }
    }

    createFinancialCharts() {
        // CAPEX Chart
        const capexChartCtx = document.getElementById('capexChart');
        if (capexChartCtx) {
            this.charts.capex = new Chart(capexChartCtx.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['Xây dựng', 'Công nghệ', 'Con giống', 'Pháp lý & Khác'],
                    datasets: [{
                        data: [45, 35, 15, 5],
                        backgroundColor: ['#1d4ed8', '#2563eb', '#60a5fa', '#93c5fd'],
                        borderColor: '#f8f9fa',
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { 
                        legend: { 
                            position: 'bottom', 
                            labels: { boxWidth: 12 } 
                        } 
                    }
                }
            });
        }

        // OPEX Chart
        const opexChartCtx = document.getElementById('opexChart');
        if (opexChartCtx) {
            this.charts.opex = new Chart(opexChartCtx.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['Thức ăn', 'Năng lượng', 'Nhân sự', 'Thú y & Khác'],
                    datasets: [{
                        data: [65, 10, 15, 10],
                        backgroundColor: ['#047857', '#059669', '#34d399', '#6ee7b7'],
                        borderColor: '#f8f9fa',
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { 
                        legend: { 
                            position: 'bottom', 
                            labels: { boxWidth: 12 } 
                        } 
                    }
                }
            });
        }
    }

    // Barn Selector
    initBarnSelector() {
        const barnButtons = document.querySelectorAll('.barn-btn');
        
        barnButtons.forEach(button => {
            button.addEventListener('click', () => {
                const barnId = button.dataset.barn;
                
                // Update button states
                barnButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');

                // Update charts
                this.updateCharts(barnId);
            });
        });
    }

    updateCharts(barnId) {
        this.currentBarn = barnId;
        const data = this.chartData[barnId];
        
        if (data) {
            if (this.charts.temp) {
                this.charts.temp.data.datasets[0].data = data.temp;
                this.charts.temp.update();
            }
            
            if (this.charts.humidity) {
                this.charts.humidity.data.datasets[0].data = data.humidity;
                this.charts.humidity.update();
            }
            
            if (this.charts.gas) {
                this.charts.gas.data.datasets[0].data = data.gas;
                this.charts.gas.update();
            }
        }
    }

    // Real-time Data Updates
    initRealTimeUpdates() {
        const metrics = {
            'total-pigs': { element: document.getElementById('total-pigs'), baseValue: 4985 },
            'avg-weight': { element: document.getElementById('avg-weight'), baseValue: 85.6 },
            'fcr-total': { element: document.getElementById('fcr-total'), baseValue: 2.41 },
            'daily-feed': { element: document.getElementById('daily-feed'), baseValue: 11.2 }
        };

        this.updateInterval = setInterval(() => {
            Object.keys(metrics).forEach(key => {
                const metric = metrics[key];
                if (metric.element) {
                    let currentValue = parseFloat(metric.element.textContent.replace(/[^\d.-]/g, ''));
                    
                    // Add small random variation
                    const variation = (Math.random() - 0.5) * 0.1;
                    let newValue = currentValue + variation;
                    
                    // Keep values within reasonable bounds
                    if (key === 'total-pigs') {
                        newValue = Math.max(4900, Math.min(5100, newValue));
                        metric.element.textContent = Math.round(newValue).toLocaleString('vi-VN');
                    } else if (key === 'avg-weight') {
                        newValue = Math.max(80, Math.min(90, newValue));
                        metric.element.textContent = newValue.toFixed(1);
                    } else if (key === 'fcr-total') {
                        newValue = Math.max(2.2, Math.min(2.6, newValue));
                        metric.element.textContent = newValue.toFixed(2);
                    } else if (key === 'daily-feed') {
                        newValue = Math.max(10, Math.min(12, newValue));
                        metric.element.textContent = newValue.toFixed(1);
                    }
                }
            });
        }, 3000);
    }

    // Animations
    initAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.info-card, .tech-layer, .process-step');
        animateElements.forEach(el => observer.observe(el));
    }

    // Utility Methods
    formatNumber(num) {
        return new Intl.NumberFormat('vi-VN').format(num);
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(amount);
    }

    // Cleanup
    destroy() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
        }
        
        Object.values(this.charts).forEach(chart => {
            if (chart && chart.destroy) {
                chart.destroy();
            }
        });
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.smartFarmDashboard = new SmartFarmDashboard();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SmartFarmDashboard;
}
