const app = getApp();
Page({
    onLoad() {
        // 初始化 toast
        new app.WeToast();
    },
    showToast() {
        this.wetoast.toast({
            content: '嘻嘻哈哈，我是toast',
            duration: 1500
        })
    }
});