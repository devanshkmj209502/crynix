import { useEffect, useState } from "react";
import "./Login.css";

function Login({ setIsLoggedIn }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  /* ===== CHECK IF USER ALREADY LOGGED IN ===== */
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  /* ===== GENERATE OTP ===== */
  const generateOtp = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  /* ===== SEND OTP ===== */
  const sendOtp = () => {
    if (!email) return alert("Enter Email ID");

    const newOtp = generateOtp();
    setGeneratedOtp(newOtp);
    setStep(2);
    setTimeLeft(30);

    console.log("Demo OTP:", newOtp);
    alert(`Demo OTP: ${newOtp}`);
  };

  /* ===== VERIFY OTP ===== */
  const verifyOtp = () => {
    if (otp === generatedOtp && timeLeft > 0) {
      localStorage.setItem("isLoggedIn", "true"); // SAVE LOGIN
      setIsLoggedIn(true);
    } else {
      alert("Invalid or expired OTP");

      // BACK TO EMAIL STEP
      setStep(1);
      setOtp("");
      setGeneratedOtp("");
      setTimeLeft(0);
    }
  };

  /* ===== COUNTDOWN ===== */
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          alert("OTP expired, request again");
          setStep(1);
          setOtp("");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="login-container">
      <h1>Login</h1>

      {step === 1 && (
        <>
          <input
            type="email"
            placeholder="Enter Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <p style={{ marginBottom: "10px", color: "#555" }}>
            OTP expires in <strong>{timeLeft}s</strong>
          </p>

          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
    </div>
  );
}

export default Login;
