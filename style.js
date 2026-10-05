'use strict'

// 背景色ボタン
const button = document.getElementById('button');
const input = document.getElementById('input');
const show = document.getElementById('show');
const output = document.getElementById('output');
const table = document.getElementById('table');
const add = document.getElementById('add');
const rowCount = document.getElementById('rowCount');


// 背景色変更ボタン
const colors = ['lightblue','lightgreen','lightcoral'];
let colorIndex = 0;

button.addEventListener('click', () => {
  document.body.style.backgroundColor = colors[colorIndex];
  // 次の色へインデックスを進める（最後の色の次は最初に戻る）
  colorIndex = (colorIndex + 1) % colors.length;
});



// 表示ボタン

    show.addEventListener('click', () => {
      const value = input.value;

      // 入力値が空の場合
      if (value === '') {
        alert('入力値が空です。');
        return; // 出力およびハイライト切り替えを行わずに処理を終了
      }

      // テキストを表示し、背景色を黄色（ハイライト）に切り替え
      output.textContent = value;
      output.classList.toggle('highlight');
    });



    // 追加ボタン

add.addEventListener('click', () => {
  const value = input.value;


  // 1.新しい行（tr）を作成
  const tr = document.createElement('tr');

  // 2「内容」のセル（td）を作成
  const contentTd = document.createElement('td');
  contentTd.textContent = value;

  // 3「操作」のセル（td）と「削除」ボタンを作成
  const actionTd = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '削除';

  // 「削除」ボタン
  deleteBtn.addEventListener('click', () => {
    tr.remove();       // 該当の行を削除
    updateRowCount();  // 行数を更新
  });

  // 操作セルに削除ボタンを入れる
  actionTd.appendChild(deleteBtn);

  tr.appendChild(contentTd);
  tr.appendChild(actionTd);

  // 最下部に新しい行を追加
  table.appendChild(tr);

// ★ 3件を超えた場合、一番古いデータを削除
if (table.children.length > 3) {
  table.firstElementChild.remove();
}

input.value = '';
updateRowCount();  // 行数・表示ボタン判定を更新
});



// 行数の更新および表示ボタンの非表示切り替え関数
function updateRowCount() {
  const currentCount = table.children.length; // 行数を取得
  rowCount.textContent = currentCount;

  // 3件以上で「表示」ボタンを非表示、2件以下で再表示
  if (currentCount >= 3) {
    show.style.display = 'none';
  } else {
    show.style.display = 'inline-block';
  }
}


// コンソール
for (let i = 1; i <= 5; i++) {
  console.log(i);
}