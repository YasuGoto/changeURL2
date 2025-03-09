import { useState } from "react";
import "./App.scss";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  // 入力されたURLをstateに保存
  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  // フォーム送信時にバックエンドAPIにリクエストを送信
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);
      const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
      console.log("API URL:", baseUrl); // 環境変数の値を確認するためにログを追加
      // バックエンドAPIにURLを送信
      const response = await fetch(`${baseUrl}/shorten`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalUrl: url }),
      });

      const data = await response.json();

      // レスポンスが返ってきたら、短縮URLをstateにセット
      if (response.ok) {
        setShortUrl(data.shortUrl);
      } else {
        setShortUrl("エラーが発生しました");
      }
    } catch (error) {
      console.error("Error:", error);
      setShortUrl(`エラーが発生しました: ${error.message}`);
    }
  };

  return (
    <div className="app">
      <h1 className="app__title">URL短縮サービス</h1>
      {/* URL入力フォーム */}
      <form onSubmit={handleSubmit} className="app__form">
        <input
          type="url"
          value={url}
          onChange={handleInputChange}
          placeholder="短縮したいURLを入力"
          required
          className="app__input"
        />
        <button type="submit" className="app__button">
          短縮
        </button>
      </form>
      {/* 短縮URLの表示 */}
      {shortUrl && (
        <div className="app__shortContainer">
          <p>
            短縮URL:{" "}
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="app__short"
            >
              {shortUrl}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
