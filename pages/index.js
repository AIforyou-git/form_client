import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FormPage() {
  const router = useRouter();
  const { coupon } = router.query;
  const [formURL, setFormURL] = useState("");

  useEffect(() => {
    const baseURL = "https://docs.google.com/forms/d/e/1FAIpQLSeNunnIpy_HVrEJ1JChSoOQcNHVz8fjmuXGpZD9kMefz6MYEA/viewform";
    const couponCode = coupon || "000000";
    setFormURL(`${baseURL}?usp=pp_url&entry.1072212678=${couponCode}`);
  }, [coupon]);

  return (
    <div style={styles.container}>
      {/* ❌ ここにあった h1 や p を削除 */}
      <div style={styles.iframeWrapper}>
        {formURL && <iframe src={formURL} style={styles.iframe}></iframe>}
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
  iframeWrapper: {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "white",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    height: "810px",
    overflow: "hidden",
    position: "relative"
  },
  iframe: {
    border: "none",
    width: "100%",
    height: "1000px",
    position: "absolute",
    top: "0",
    left: "0"
  }
};
