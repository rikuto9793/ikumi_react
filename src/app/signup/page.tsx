import React from 'react'

export default function signin() {
  return (
    <>
      {/* 画面全体 */}
      {/* 画面全体 */}
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-300">
        {/* 登録画面 */}
        <div className="flex flex-col items-center w-120 h-210 bg-gradient-to-b from-pink-300 to-white rounded-2xl shadow-2xl">
          <p className="text-center text-4xl font-bold text-pink-500 mt-30">
            新規登録
          </p>
          {/* 入力フォーム */}
          <div className="flex flex-col items-start mt-8">
          <fieldset className="fieldset mt-8">
            <legend className="fieldset-legend text-pink-500 font-bold">ユーザーID</legend>
            <input type="text" className="input h-10 w-90 mt-2 border-2 border-pink-400 rounded-xl px-4" placeholder="User ID" />
            <p className="label mt-2 text-pink-400">半角英数字で4文字以上入力してください</p>
          </fieldset>

          <fieldset className="fieldset mt-8">
            <legend className="fieldset-legend text-pink-500 font-bold">メールアドレス</legend>
            <input type="text" className="input h-10 w-90 mt-2 border-2 border-pink-400 rounded-xl px-4" placeholder="Email" />
            

          </fieldset>
          <fieldset className="fieldset mt-12">
            <legend className="fieldset-legend text-pink-500 font-bold">パスワード</legend>
            <input type="text" className="input h-10 w-90 mt-2 border-2 border-pink-400 rounded-xl px-4" placeholder="Password" />
            <p className="label mt-2 text-pink-400">半角英数字で8文字以上入力してください</p>
          </fieldset>
          </div>
          {/* 登録ボタン */}
          <button className="h-16 w-88 bg-pink-400 text-xl text-white font-bold border border-pink-600 rounded-2xl mt-12">登録する</button>
        </div>
      </div>
    </>
  )
}
