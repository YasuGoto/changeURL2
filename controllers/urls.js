const Url = require("../models/Url");
const { nanoid } = require("nanoid");

// URLを短縮するエンドポイント
const updateShort = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    if (!originalUrl) {
      return res.status(400).json({ error: "URLは必須です" });
    }

    const shortId = nanoid(8);
    const newUrl = new Url({ originalUrl, shortId });

    await newUrl.save();
    const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
    res.json({ shortUrl: `${baseUrl}/${shortId}` });
  } catch (err) {
    console.error("エラー発生:", err);
    res.status(500).json({ error: "サーバーエラーが発生しました" });
  }
};

// 短縮URLをリダイレクト
const getRedirectURL = async (req, res) => {
  try {
    const { shortId } = req.params;
    const urlEntry = await Url.findOne({ shortId });

    if (urlEntry) {
      res.redirect(urlEntry.originalUrl);
    } else {
      res.status(404).json({ error: "URLが見つかりません" });
    }
  } catch (err) {
    console.error("エラー発生:", err); // 詳細なエラーメッセージをログに出力
    res.status(500).json({ error: "サーバーエラーが発生しました" });
  }
};

module.exports = {
  updateShort,
  getRedirectURL,
};
