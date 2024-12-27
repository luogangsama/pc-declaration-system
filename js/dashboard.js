// 使用传统的方式定义全局变量
const dashboard = {
    init: function() {
        // 初始化代码
        this.bindEvents();
        this.setupUI();
    },

    bindEvents: function() {
        // 事件绑定代码
    },

    setupUI: function() {
        // UI 初始化代码
    }
    // ... 其他dashboard相关函数
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    dashboard.init();
}); 