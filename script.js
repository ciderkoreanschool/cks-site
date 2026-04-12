document.addEventListener('DOMContentLoaded', () => {
    // スムーススクロール機能
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // ヘッダーの高さ分だけずらしてスクロール
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // スクロール時のヘッダー装飾（少し下に行ったら影を濃くする）
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }
    });
});

// ハンバーガー押したあと閉じる（UX改善）
const links = document.querySelectorAll('.nav-sp a');

links.forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('drawer_input').checked = false;
  });
});