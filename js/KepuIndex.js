// 保存滚动位置
const saveScrollPosition = () => {
    sessionStorage.setItem('scrollPosition', window.scrollY || document.documentElement.scrollTop || document.body.scrollTop);
};

// 恢复滚动位置
const restoreScrollPosition = () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        setTimeout(() => {
            window.scrollTo({
                top: parseInt(scrollPosition, 10),
                behavior: 'auto' // 使用 'auto' 以确保兼容性
            });
        }, 100); // 增加延迟以确保页面完全加载
    }
};

// 添加事件监听器以保存滚动位置
window.addEventListener('beforeunload', saveScrollPosition);

// 添加事件监听器以在页面完全加载后恢复滚动位置
window.addEventListener('load', () => {
    // 检查当前滚动位置并恢复
    if (document.readyState === 'complete') {
        restoreScrollPosition();
    } else {
        window.addEventListener('DOMContentLoaded', restoreScrollPosition);
    }
});