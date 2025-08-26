// Advanced Features for Smart Farm Dashboard 2.0
class SmartFarmFeatures {
    constructor() {
        this.notifications = [];
        this.alerts = [];
        this.init();
    }

    init() {
        this.initNotifications();
        this.initAlerts();
        this.initWeatherWidget();
        this.initMarketData();
        this.initPredictiveAnalytics();
    }

    // Notification System
    initNotifications() {
        this.createNotificationPanel();
        this.simulateNotifications();
    }

    createNotificationPanel() {
        const notificationPanel = document.createElement('div');
        notificationPanel.id = 'notification-panel';
        notificationPanel.className = 'notification-panel';
        notificationPanel.innerHTML = `
            <div class="notification-header">
                <h3>Thông Báo Hệ Thống</h3>
                <button class="close-btn" onclick="this.parentElement.parentElement.style.display='none'">×</button>
            </div>
            <div class="notification-list" id="notification-list">
                <!-- Notifications will be added here -->
            </div>
        `;
        document.body.appendChild(notificationPanel);
    }

    simulateNotifications() {
        const notifications = [
            { type: 'info', message: 'Hệ thống IoT đã kết nối thành công', time: '2 phút trước' },
            { type: 'warning', message: 'Nhiệt độ chuồng A vượt ngưỡng cho phép', time: '5 phút trước' },
            { type: 'success', message: 'Cập nhật dữ liệu thành công', time: '10 phút trước' },
            { type: 'error', message: 'Cảm biến độ ẩm chuồng B cần bảo trì', time: '15 phút trước' }
        ];

        const notificationList = document.getElementById('notification-list');
        if (notificationList) {
            notifications.forEach(notification => {
                this.addNotification(notification);
            });
        }
    }

    addNotification(notification) {
        const notificationList = document.getElementById('notification-list');
        if (!notificationList) return;

        const notificationItem = document.createElement('div');
        notificationItem.className = `notification-item ${notification.type}`;
        notificationItem.innerHTML = `
            <div class="notification-content">
                <p>${notification.message}</p>
                <span class="notification-time">${notification.time}</span>
            </div>
        `;
        notificationList.appendChild(notificationItem);

        // Auto remove after 10 seconds
        setTimeout(() => {
            if (notificationItem.parentNode) {
                notificationItem.remove();
            }
        }, 10000);
    }

    // Alert System
    initAlerts() {
        this.createAlertSystem();
        this.simulateAlerts();
    }

    createAlertSystem() {
        const alertSystem = document.createElement('div');
        alertSystem.id = 'alert-system';
        alertSystem.className = 'alert-system';
        alertSystem.innerHTML = `
            <div class="alert-header">
                <h3>Cảnh Báo Khẩn Cấp</h3>
                <span class="alert-count" id="alert-count">0</span>
            </div>
            <div class="alert-list" id="alert-list">
                <!-- Alerts will be added here -->
            </div>
        `;
        document.body.appendChild(alertSystem);
    }

    simulateAlerts() {
        const alerts = [
            { severity: 'high', message: 'Nhiệt độ chuồng A: 32°C (Vượt ngưỡng)', action: 'Tự động bật quạt làm mát' },
            { severity: 'medium', message: 'Độ ẩm chuồng B: 85% (Cao)', action: 'Tăng thông gió' },
            { severity: 'low', message: 'Nồng độ NH3: 18ppm (Cần theo dõi)', action: 'Kiểm tra hệ thống thông gió' }
        ];

        const alertList = document.getElementById('alert-list');
        if (alertList) {
            alerts.forEach(alert => {
                this.addAlert(alert);
            });
        }
    }

    addAlert(alert) {
        const alertList = document.getElementById('alert-list');
        const alertCount = document.getElementById('alert-count');
        
        if (!alertList || !alertCount) return;

        const alertItem = document.createElement('div');
        alertItem.className = `alert-item ${alert.severity}`;
        alertItem.innerHTML = `
            <div class="alert-content">
                <p class="alert-message">${alert.message}</p>
                <p class="alert-action">Hành động: ${alert.action}</p>
            </div>
        `;
        alertList.appendChild(alertItem);

        // Update alert count
        const currentCount = parseInt(alertCount.textContent);
        alertCount.textContent = currentCount + 1;
    }

    // Weather Widget
    initWeatherWidget() {
        this.createWeatherWidget();
        this.updateWeatherData();
    }

    createWeatherWidget() {
        const weatherWidget = document.createElement('div');
        weatherWidget.id = 'weather-widget';
        weatherWidget.className = 'weather-widget';
        weatherWidget.innerHTML = `
            <div class="weather-header">
                <h3>Thời Tiết Hưng Yên</h3>
                <span class="weather-location">📍 Hưng Yên, Việt Nam</span>
            </div>
            <div class="weather-content">
                <div class="weather-main">
                    <div class="weather-icon">🌤️</div>
                    <div class="weather-info">
                        <div class="weather-temp">28°C</div>
                        <div class="weather-desc">Nắng nhẹ</div>
                    </div>
                </div>
                <div class="weather-details">
                    <div class="weather-item">
                        <span>Độ ẩm:</span>
                        <span>75%</span>
                    </div>
                    <div class="weather-item">
                        <span>Gió:</span>
                        <span>12 km/h</span>
                    </div>
                    <div class="weather-item">
                        <span>Áp suất:</span>
                        <span>1013 hPa</span>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(weatherWidget);
    }

    updateWeatherData() {
        // Simulate weather data updates
        setInterval(() => {
            const tempElement = document.querySelector('.weather-temp');
            if (tempElement) {
                const currentTemp = parseInt(tempElement.textContent);
                const newTemp = currentTemp + (Math.random() - 0.5) * 2;
                tempElement.textContent = `${Math.round(newTemp)}°C`;
            }
        }, 30000); // Update every 30 seconds
    }

    // Market Data
    initMarketData() {
        this.createMarketWidget();
        this.updateMarketData();
    }

    createMarketWidget() {
        const marketWidget = document.createElement('div');
        marketWidget.id = 'market-widget';
        marketWidget.className = 'market-widget';
        marketWidget.innerHTML = `
            <div class="market-header">
                <h3>Thị Trường Thịt Lợn</h3>
                <span class="market-update">Cập nhật: <span id="market-time">--:--</span></span>
            </div>
            <div class="market-content">
                <div class="market-item">
                    <span class="market-label">Giá thịt lợn hơi:</span>
                    <span class="market-value" id="pig-price">52,000 VNĐ/kg</span>
                    <span class="market-change positive">+2.5%</span>
                </div>
                <div class="market-item">
                    <span class="market-label">Giá thức ăn:</span>
                    <span class="market-value" id="feed-price">12,500 VNĐ/kg</span>
                    <span class="market-change negative">-1.2%</span>
                </div>
                <div class="market-item">
                    <span class="market-label">Nhu cầu:</span>
                    <span class="market-value" id="demand-level">Cao</span>
                    <span class="market-change positive">+5.8%</span>
                </div>
            </div>
        `;
        document.body.appendChild(marketWidget);
    }

    updateMarketData() {
        setInterval(() => {
            const marketTime = document.getElementById('market-time');
            if (marketTime) {
                const now = new Date();
                marketTime.textContent = now.toLocaleTimeString('vi-VN', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                });
            }

            // Simulate price changes
            const pigPrice = document.getElementById('pig-price');
            if (pigPrice) {
                const currentPrice = parseInt(pigPrice.textContent.replace(/[^\d]/g, ''));
                const change = (Math.random() - 0.5) * 2000;
                const newPrice = Math.max(45000, Math.min(60000, currentPrice + change));
                pigPrice.textContent = `${newPrice.toLocaleString('vi-VN')} VNĐ/kg`;
            }
        }, 60000); // Update every minute
    }

    // Predictive Analytics
    initPredictiveAnalytics() {
        this.createPredictiveWidget();
        this.updatePredictions();
    }

    createPredictiveWidget() {
        const predictiveWidget = document.createElement('div');
        predictiveWidget.id = 'predictive-widget';
        predictiveWidget.className = 'predictive-widget';
        predictiveWidget.innerHTML = `
            <div class="predictive-header">
                <h3>Dự Báo AI</h3>
                <span class="predictive-accuracy">Độ chính xác: 94.2%</span>
            </div>
            <div class="predictive-content">
                <div class="prediction-item">
                    <div class="prediction-icon">📈</div>
                    <div class="prediction-info">
                        <h4>Tăng trưởng đàn</h4>
                        <p>Dự kiến: +15% trong 3 tháng tới</p>
                    </div>
                </div>
                <div class="prediction-item">
                    <div class="prediction-icon">💰</div>
                    <div class="prediction-info">
                        <h4>Lợi nhuận</h4>
                        <p>Dự kiến: +22% so với tháng trước</p>
                    </div>
                </div>
                <div class="prediction-item">
                    <div class="prediction-icon">🌡️</div>
                    <div class="prediction-info">
                        <h4>Nhiệt độ tối ưu</h4>
                        <p>Duy trì: 26-28°C cho tăng trưởng tốt nhất</p>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(predictiveWidget);
    }

    updatePredictions() {
        setInterval(() => {
            const accuracyElement = document.querySelector('.predictive-accuracy');
            if (accuracyElement) {
                const currentAccuracy = parseFloat(accuracyElement.textContent.match(/\d+\.\d+/)[0]);
                const newAccuracy = Math.max(90, Math.min(98, currentAccuracy + (Math.random() - 0.5) * 2));
                accuracyElement.textContent = `Độ chính xác: ${newAccuracy.toFixed(1)}%`;
            }
        }, 120000); // Update every 2 minutes
    }
}

// Initialize features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.smartFarmFeatures = new SmartFarmFeatures();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SmartFarmFeatures;
}
