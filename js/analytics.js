// Analytics JavaScript for Smart Farm Dashboard 2.0
class AnalyticsDashboard {
    constructor() {
        this.charts = {};
        this.currentTimeRange = 30;
        this.init();
    }

    init() {
        this.initTimeRangeSelector();
        this.initCharts();
        this.initRealTimeUpdates();
        this.initAnimations();
    }

    // Time Range Selector
    initTimeRangeSelector() {
        const timeRangeSelect = document.getElementById('timeRange');
        if (timeRangeSelect) {
            timeRangeSelect.addEventListener('change', (e) => {
                this.currentTimeRange = parseInt(e.target.value);
                this.updateCharts();
            });
        }
    }

    // Initialize Charts
    initCharts() {
        this.createGrowthChart();
        this.createProfitChart();
        this.createCostChart();
        this.createBarnPerformanceChart();
        this.createHealthChart();
    }

    createGrowthChart() {
        const ctx = document.getElementById('growthChart');
        if (!ctx) return;

        const labels = this.generateTimeLabels(this.currentTimeRange);
        const data = this.generateGrowthData(this.currentTimeRange);

        this.charts.growth = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Tổng đàn',
                    data: data.total,
                    borderColor: '#16a34a',
                    backgroundColor: 'rgba(22, 163, 74, 0.1)',
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Trọng lượng TB',
                    data: data.weight,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.4,
                    yAxisID: 'y1'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Thời gian'
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Số lượng (con)'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Trọng lượng (kg)'
                        },
                        grid: {
                            drawOnChartArea: false,
                        },
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Xu Hướng Tăng Trưởng'
                    }
                }
            }
        });
    }

    createProfitChart() {
        const ctx = document.getElementById('profitChart');
        if (!ctx) return;

        const labels = this.generateTimeLabels(this.currentTimeRange);
        const data = this.generateProfitData(this.currentTimeRange);

        this.charts.profit = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Doanh thu',
                    data: data.revenue,
                    backgroundColor: 'rgba(22, 163, 74, 0.8)',
                    borderColor: '#16a34a',
                    borderWidth: 1
                }, {
                    label: 'Chi phí',
                    data: data.cost,
                    backgroundColor: 'rgba(239, 68, 68, 0.8)',
                    borderColor: '#ef4444',
                    borderWidth: 1
                }, {
                    label: 'Lợi nhuận',
                    data: data.profit,
                    backgroundColor: 'rgba(59, 130, 246, 0.8)',
                    borderColor: '#3b82f6',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Tỷ VNĐ'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Phân Tích Lợi Nhuận'
                    }
                }
            }
        });
    }

    createCostChart() {
        const ctx = document.getElementById('costChart');
        if (!ctx) return;

        this.charts.cost = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Thức ăn', 'Năng lượng', 'Nhân sự', 'Thú y', 'Khác'],
                datasets: [{
                    data: [45, 15, 25, 10, 5],
                    backgroundColor: [
                        '#16a34a',
                        '#3b82f6',
                        '#f59e0b',
                        '#ef4444',
                        '#8b5cf6'
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: 'Phân Bổ Chi Phí'
                    }
                }
            }
        });
    }

    createBarnPerformanceChart() {
        const ctx = document.getElementById('barnPerformanceChart');
        if (!ctx) return;

        this.charts.barnPerformance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Tăng trưởng', 'FCR', 'Sức khỏe', 'Môi trường', 'Hiệu suất'],
                datasets: [{
                    label: 'Chuồng A',
                    data: [85, 90, 88, 92, 87],
                    borderColor: '#16a34a',
                    backgroundColor: 'rgba(22, 163, 74, 0.2)',
                    pointBackgroundColor: '#16a34a'
                }, {
                    label: 'Chuồng B',
                    data: [82, 88, 85, 89, 84],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    pointBackgroundColor: '#3b82f6'
                }, {
                    label: 'Chuồng Cai Sữa',
                    data: [88, 92, 90, 94, 89],
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.2)',
                    pointBackgroundColor: '#f59e0b'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Hiệu Suất Theo Chuồng'
                    }
                }
            }
        });
    }

    createHealthChart() {
        const ctx = document.getElementById('healthChart');
        if (!ctx) return;

        const labels = this.generateTimeLabels(this.currentTimeRange);
        const data = this.generateHealthData(this.currentTimeRange);

        this.charts.health = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Tỷ lệ khỏe mạnh',
                    data: data.healthy,
                    borderColor: '#16a34a',
                    backgroundColor: 'rgba(22, 163, 74, 0.1)',
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Tỷ lệ bệnh nhẹ',
                    data: data.mild,
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Tỷ lệ bệnh nặng',
                    data: data.severe,
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Tỷ lệ (%)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Chỉ Số Sức Khỏe Đàn'
                    }
                }
            }
        });
    }

    // Data Generation Methods
    generateTimeLabels(days) {
        const labels = [];
        const today = new Date();
        
        for (let i = days - 1; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            labels.push(date.toLocaleDateString('vi-VN', { 
                month: 'short', 
                day: 'numeric' 
            }));
        }
        
        return labels;
    }

    generateGrowthData(days) {
        const total = [];
        const weight = [];
        let baseTotal = 4800;
        let baseWeight = 80;

        for (let i = 0; i < days; i++) {
            baseTotal += Math.random() * 10 + 5;
            baseWeight += Math.random() * 0.5 + 0.2;
            total.push(Math.round(baseTotal));
            weight.push(parseFloat(baseWeight.toFixed(1)));
        }

        return { total, weight };
    }

    generateProfitData(days) {
        const revenue = [];
        const cost = [];
        const profit = [];
        let baseRevenue = 2.5;
        let baseCost = 1.8;

        for (let i = 0; i < days; i++) {
            const revenueVariation = (Math.random() - 0.5) * 0.3;
            const costVariation = (Math.random() - 0.5) * 0.2;
            
            baseRevenue += revenueVariation;
            baseCost += costVariation;
            
            const currentRevenue = Math.max(2.0, baseRevenue);
            const currentCost = Math.max(1.5, baseCost);
            const currentProfit = currentRevenue - currentCost;
            
            revenue.push(parseFloat(currentRevenue.toFixed(2)));
            cost.push(parseFloat(currentCost.toFixed(2)));
            profit.push(parseFloat(currentProfit.toFixed(2)));
        }

        return { revenue, cost, profit };
    }

    generateHealthData(days) {
        const healthy = [];
        const mild = [];
        const severe = [];
        
        for (let i = 0; i < days; i++) {
            const healthyRate = 85 + (Math.random() - 0.5) * 10;
            const mildRate = 10 + (Math.random() - 0.5) * 5;
            const severeRate = 5 + (Math.random() - 0.5) * 3;
            
            healthy.push(Math.round(healthyRate));
            mild.push(Math.round(mildRate));
            severe.push(Math.round(severeRate));
        }

        return { healthy, mild, severe };
    }

    // Update Charts
    updateCharts() {
        Object.keys(this.charts).forEach(chartName => {
            const chart = this.charts[chartName];
            if (chart && chart.data) {
                const labels = this.generateTimeLabels(this.currentTimeRange);
                chart.data.labels = labels;

                switch (chartName) {
                    case 'growth':
                        const growthData = this.generateGrowthData(this.currentTimeRange);
                        chart.data.datasets[0].data = growthData.total;
                        chart.data.datasets[1].data = growthData.weight;
                        break;
                    case 'profit':
                        const profitData = this.generateProfitData(this.currentTimeRange);
                        chart.data.datasets[0].data = profitData.revenue;
                        chart.data.datasets[1].data = profitData.cost;
                        chart.data.datasets[2].data = profitData.profit;
                        break;
                    case 'health':
                        const healthData = this.generateHealthData(this.currentTimeRange);
                        chart.data.datasets[0].data = healthData.healthy;
                        chart.data.datasets[1].data = healthData.mild;
                        chart.data.datasets[2].data = healthData.severe;
                        break;
                }
                
                chart.update();
            }
        });
    }

    // Real-time Updates
    initRealTimeUpdates() {
        setInterval(() => {
            this.updateKPICards();
        }, 5000);
    }

    updateKPICards() {
        const kpiValues = document.querySelectorAll('.kpi-value');
        kpiValues.forEach(value => {
            const currentValue = value.textContent;
            if (currentValue.includes('%')) {
                const numValue = parseFloat(currentValue);
                const variation = (Math.random() - 0.5) * 2;
                const newValue = Math.max(0, Math.min(100, numValue + variation));
                value.textContent = newValue.toFixed(1) + '%';
            } else if (currentValue.includes('Tỷ')) {
                const numValue = parseFloat(currentValue);
                const variation = (Math.random() - 0.5) * 0.2;
                const newValue = Math.max(2.0, numValue + variation);
                value.textContent = newValue.toFixed(1) + ' Tỷ VNĐ';
            }
        });
    }

    // Animations
    initAnimations() {
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

        const animateElements = document.querySelectorAll('.kpi-card, .analytics-card, .chart-container-large, .chart-container-medium');
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
        Object.values(this.charts).forEach(chart => {
            if (chart && chart.destroy) {
                chart.destroy();
            }
        });
    }
}

// Initialize analytics dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.analyticsDashboard = new AnalyticsDashboard();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnalyticsDashboard;
}
