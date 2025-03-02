import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FormPage() {
  const router = useRouter();
  const { coupon } = router.query; // URLのクーポンコードを取得
  const [formURL, setFormURL] = useState("");

  useEffect(() => {
    const baseURL = "https://docs.google.com/forms/d/e/1FAIpQLSeNunnIpy_HVrEJ1JChSoOQcNHVz8fjmuXGpZD9kMefz6MYEA/viewform";
    const couponCode = coupon || "000000"; // デフォルト値
    setFormURL(`${baseURL}?usp=pp_url&entry.1072212678=${couponCode}`);
  }, [coupon]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>お申し込みフォーム</h1>
      <p>以下のフォームに必要事項を入力してください。</p>
      <div style={styles.formContainer}>
        {formURL && (
          <iframe 
            src={formURL} 
            style={styles.iframe}
          ></iframe>
        )}
      </div>
    </div>
  );
}

// スタイルオブジェクト
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    background: "#f8f8f8",
    minHeight: "100vh"
  },
  heading: {
    color: "#333"
  },
  formContainer: {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "white",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    overflow: "hidden" // 追加
  },
  iframe: {
    border: "none",
    width: "100%",
    height: "1000px", // フッターを隠すために調整
    overflow: "hidden" // 追加
  }
};
