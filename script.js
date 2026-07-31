// ビジネスモデルキャンバスの要素を反映したサービスデータ
const services = [
    {
        id: 1,
        rank: 1,
        title: "緑の森と静寂のパークラウンジ",
        categoryName: "自然・森林公園",
        category: "nature",
        desc: "スマホのお預かりサービス（デジタルデトックス）付きの森林エリア。鳥の声と風の音の中で心をリセットできます。",
        img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
        likes: 240
    },
    {
        id: 2,
        rank: 2,
        title: "Mindful Cafe & スローティー",
        categoryName: "デトックスカフェ",
        category: "cafe",
        desc: "Wi-Fi・電源なしの「あえてつながない」カフェ。専門家監修のリラックスハーブティーで贅沢な1人時間を過ごせます。",
        img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
        likes: 185
    },
    {
        id: 3,
        rank: 3,
        title: "メンタルケア＆屋外リトリートヨガ",
        categoryName: "ヨガ・専門家ケア",
        category: "program",
        desc: "専門家による簡易ストレスチェックと、自然に囲まれたヨガプログラム。一人でも安心して参加できるコミュニティ型イベントです。",
        img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80",
        likes: 142
    }
];

// ランキングの表示関数
function renderRanking(data) {
    const listContainer = document.getElementById('ranking-list');
    listContainer.innerHTML = '';

    data.forEach(item => {
        let badgeClass = '';
        if (item.rank === 1) badgeClass = 'rank-1';
        else if (item.rank === 2) badgeClass = 'rank-2';
        else if (item.rank === 3) badgeClass = 'rank-3';

        const cardHTML = `
            <div class="ranking-card">
                <div class="badge ${badgeClass}">${item.rank}</div>
                <img class="card-img" src="${item.img}" alt="${item.title}">
                <div class="card-content">
                    <span class="category">${item.categoryName}</span>
                    <h2 class="card-title">${item.title}</h2>
                    <p class="card-desc">${item.desc}</p>
                    <div class="card-footer">
                        <button class="like-btn" onclick="addLike(${item.id})">💚 行きたい！ (<span id="like-${item.id}">${item.likes}</span>)</button>
                    </div>
                </div>
            </div>
        `;
        listContainer.innerHTML += cardHTML;
    });
}

// いいね機能
function addLike(id) {
    const item = services.find(s => s.id === id);
    if (item) {
        item.likes++;
        document.getElementById(`like-${id}`).innerText = item.likes;
    }
}

// カテゴリフィルター機能
function filterCategory(category, event) {
    // ボタンのアクティブ化設定
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event) {
        event.target.classList.add('active');
    }

    // データのフィルタリング
    if (category === 'all') {
        renderRanking(services);
    } else {
        const filtered = services.filter(s => s.category === category);
        renderRanking(filtered);
    }
}

// পেজ লোড হলে রান করবে
document.addEventListener('DOMContentLoaded', () => {
    renderRanking(services);
});