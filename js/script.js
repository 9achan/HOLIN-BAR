/* menu頁 */
// menu_category_li 滑鼠刷淡效果
document.addEventListener("DOMContentLoaded", function () {
    // 獲取所有具有 'menu_category_li' 類的元素
    var menuCategoryLiElements = document.querySelectorAll('.menu_category_li');

    // 新增滑鼠懸停事件監聽器
    menuCategoryLiElements.forEach(function (liElement) {
        liElement.addEventListener("mouseenter", function () {
            // 刷淡
            animateElement(liElement, { opacity: '0.7' }, 500);
        });

        // 新增滑鼠離開事件監聽器
        liElement.addEventListener("mouseleave", function () {
            // 恢復原樣
            animateElement(liElement, { opacity: '1' }, 500);
        });
    });

    // 自訂動畫函數
    function animateElement(element, styles, duration) {
        var startStyles = getComputedStyle(element);

        // 將起始樣式設定為目前元素的樣式
        for (var property in styles) {
            if (styles.hasOwnProperty(property)) {
                element.style[property] = startStyles[property];
            }
        }

        // 使用 requestAnimationFrame 建立動畫
        var startTime = null;
        function animate(currentTime) {
            if (!startTime) startTime = currentTime;

            var progress = (currentTime - startTime) / duration;
            if (progress > 1) progress = 1;

            // 插值計算目前樣式
            for (var property in styles) {
                if (styles.hasOwnProperty(property)) {
                    var startValue = parseFloat(startStyles[property]);
                    var endValue = parseFloat(styles[property]);
                    var currentValue = startValue + (endValue - startValue) * progress;
                    element.style[property] = currentValue + (property === 'opacity' ? '' : 'px');
                }
            }

            // 遞迴呼叫動畫
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        // 啟動動畫
        requestAnimationFrame(animate);
    }
});

// 點選時變換菜單內容效果
function showCategory(category) {
    // 先隱藏所有商品資訊
    var productInfos = document.querySelectorAll('.product-info');
    productInfos.forEach(function (info) {
        info.style.display = 'none';
    });

    // 顯示選定分類的商品資訊
    var selectedCategory = document.getElementById(category);
    selectedCategory.style.display = 'block';
}