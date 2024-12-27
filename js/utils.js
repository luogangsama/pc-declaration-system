// 定义全局工具对象
window.utils = {
    // 加密函数
    encrypt: function(text) {
        return btoa(encodeURIComponent(text));
    },
    
    // 解密函数
    decrypt: function(encoded) {
        return decodeURIComponent(atob(encoded));
    },
    
    // 存储数据到 localStorage
    saveData: function(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error(`保存${key}数据失败:`, error);
        }
    },
    
    // 从 localStorage 获取数据
    getData: function(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error(`获取${key}数据失败:`, error);
            return null;
        }
    },
    
    // 从 localStorage 删除数据
    removeData: function(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`删除${key}数据失败:`, error);
        }
    },
    
    // 显示消息提示
    showMessage: function(message, type = 'info') {
        const messageModal = document.getElementById('messageModal');
        const messageText = document.getElementById('messageText');
        const messageConfirm = document.getElementById('messageConfirm');
        
        if (messageModal && messageText) {
            messageText.textContent = message;
            messageModal.style.display = 'block';
            
            // 如果是成功消息，3秒后自动关闭
            if (type === 'success') {
                setTimeout(() => {
                    messageModal.style.display = 'none';
                }, 3000);
            }
            
            // 绑定确认按钮事件
            if (messageConfirm) {
                messageConfirm.onclick = () => {
                    messageModal.style.display = 'none';
                };
            }
        }
    },
    
    // 处理会话错误
    handleSessionError: function(message) {
        switch (message) {
            case 'Session has expired':
                this.showMessage('会话已过期，请重新登录');
                break;
            case 'Invalid session':
                this.showMessage('无效会话，请重新登录');
                break;
            case 'No sessionid cookie':
                this.showMessage('未找到会话信息，请重新登录');
                break;
            default:
                this.showMessage('发生未知错误，请重新登录');
        }
        
        // 清除本地存储的数据
        this.removeData('username');
        this.removeData('loginData');
        this.removeData('rememberMe');
        
        // 延迟跳转到登录页面
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    },
    
    // 格式化日期
    formatDate: function(dateString) {
        try {
            // 处理带空格的日期时间格式 (YYYY/MM/DD HH:mm 或 YYYY-MM-DD HH:mm)
            if (typeof dateString === 'string' && dateString.includes(' ')) {
                const [datePart, timePart] = dateString.split(' ');
                const [year, month, day] = datePart.replace(/-/g, '/').split('/');
                return `${year}年${parseInt(month)}月${parseInt(day)}日 ${timePart}`;
            }
            
            // 处理不带时间的日期格式 (YYYY/MM/DD 或 YYYY-MM-DD)
            if (typeof dateString === 'string' && (dateString.includes('/') || dateString.includes('-'))) {
                const [year, month, day] = dateString.replace(/-/g, '/').split('/');
                return `${year}年${parseInt(month)}月${parseInt(day)}日`;
            }
            
            // 处理已经是中文格式的日期时间
            if (typeof dateString === 'string' && dateString.includes('年') && dateString.includes('月')) {
                return dateString;
            }
            
            // 处理 Date 对象或其他格式的日期字符串
            const date = new Date(dateString);
            if (isNaN(date.getTime())) {
                throw new Error('无效的日期格式');
            }
            
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            
            return `${year}年${month}月${day}日 ${hours}:${minutes}`;
        } catch (error) {
            console.error('日期格式化错误:', error, '原始日期:', dateString);
            return '时间格式错误';
        }
    },
    
    // 显示加载状态
    showLoading: function(show = true) {
        let loader = document.querySelector('.loading-indicator');
        if (!loader && show) {
            loader = document.createElement('div');
            loader.className = 'loading-indicator';
            loader.innerHTML = `
                <div class="loading-spinner"></div>
                <div class="loading-text">加载中...</div>
            `;
            document.body.appendChild(loader);
        } else if (loader && !show) {
            loader.remove();
        }
    }
}; 