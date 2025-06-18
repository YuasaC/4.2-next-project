"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        //バリデーション:すべてのフィールドが入力されているか確認
        if (!formData.name || !formData.email || !formData.message) {
            setError("全てのフィールドを入力してください");
            return;
        }
        //バリデーション成功
        setError("");
        //ここでAPIへの送信処理などを実装可能(今回はシミュレーション)
        console.log("フォーム送信:", formData);
        setSubmitted(true);
    };
    if (submitted) {
        return (
            <div style={{ padding: "2rem" }}>
                <h2>送信完了！</h2>
                <p>誤入力いただいた内容は送信されました</p>
            </div>
        );
    }
    return (
        <div style={{ padding: "2rem" }}>
            <h1>お問い合わせフォーム</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="name">お名前:</label>
                    <br />
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "0.5rem" }}>
                    </textarea>
                </div>
                <button type="submit" style={{
                    padding: "0.5rem 1rem"
                }}>送信
                </button>
            </form>
        </div>
    );
}