/**
 * @file 小程序 toast 增强版
 * @author tang
 */

function WeToast () {
    let pages = getCurrentPages();
    let curPage = pages[pages.length - 1];
    WeToast.cPage = curPage;
    WeToast.cTimeout = null;
    curPage.wetoast = WeToast;
    return this;
}

WeToast.toast = function (data) {
    if (!data) {
        this.hide();
    } else {
        this.show(data);
    }
};

WeToast.show = function (data) {
    let page = this.cPage;
    clearTimeout(this.cTimeout);
    page.setData({
        'wetoast.show': true
    });

    let animation = wx.createAnimation();
    animation.opacity(1).step();
    data.toastAnimationData = animation.export();
    page.setData({
        wetoast: data
    });

    page.setData({
        wetoast: data
    });
    this.cTimeout = setTimeout(() => {
        this.toast();
    }, (data.duration || 800));
};

WeToast.hide = function () {
    let page = this.cPage;
    clearTimeout(this.cTimeout);
    let animation = wx.createAnimation();
    animation.opacity(0).step();
    page.setData({
        'wetoast.toastAnimationData': animation.export()
    }, function () {
        page.setData({
            'wetoast.show': false
        });
        page.setData({
            wetoast: {}
        });
    });
    
};
module.exports = {
    WeToast
}