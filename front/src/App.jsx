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
      // バックエンドAPIにURLを送信
      const response = await fetch(`${import.meta.env.VITE_API_URL}/shorten`, {
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
      setShortUrl("エラーが発生しました");
    }
  };

  return (
    <div className="app">
      <h1 className="app__title">URL短縮サービス</h1>
      <div className="app__container">
        {/* URL入力フォーム */}
        <form onSubmit={handleSubmit}>
          <input
            type="url"
            value={url}
            onChange={handleInputChange}
            placeholder="URLを入力"
            required
            className="App__input"
          />
          <button type="submit" className="App__button">
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
                className="App__short"
              >
                {shortUrl}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
