// 移除 export 语法，改用全局变量
const CONFIG = {
    baseUrl: 'https://8.134.178.71/api'
};

const API_URLS = {
    LOGIN: `${CONFIG.baseUrl}/users/login/`,
    LOGOUT: `${CONFIG.baseUrl}/dashboard/logout/`,
    GET_USER_INFO: `${CONFIG.baseUrl}/dashboard/get_user_info/`,
    GET_PHONE: `${CONFIG.baseUrl}/dashboard/getPhoneNumber/`,
    SAVE_PHONE: `${CONFIG.baseUrl}/dashboard/savePhoneNumber/`,
    RENEW_PASSWORD: `${CONFIG.baseUrl}/dashboard/renew_password/`,
    CALL_REPORT: `${CONFIG.baseUrl}/dashboard/call_report/`,
    GET_HISTORY: `${CONFIG.baseUrl}/dashboard/user_get_history_report/`,
    ASSIGN_ORDER: `${CONFIG.baseUrl}/dashboard/assign_order/`,
    COMPLETE_REPORT: `${CONFIG.baseUrl}/dashboard/complete_report/`,
    WEATHER_API_KEY: `${CONFIG.baseUrl}/dashboard/getWeatherApiKey/`,
    CANCEL_REPORT: `${CONFIG.baseUrl}/dashboard/cancel_report/`
}; 