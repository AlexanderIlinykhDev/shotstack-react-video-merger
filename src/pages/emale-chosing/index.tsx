import { useStore } from "../../store";
import { Typography, Input, Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./welcome-page.module.scss";
import { validateEmail } from "./helpers";
const { Title } = Typography;

export default function EmaleChosing() {
  const [localEmail, setLocalEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  let navigate = useNavigate();
  const setEmail = useStore((state) => state.setEmail);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validateEmail(localEmail)) {
      setErrorMsg("e-mail format is invalid!");
    } else {
      setErrorMsg("");
      setEmail(localEmail);
      navigate("/filenames-setting");
    }
  };

  const handleEmailChange = (e: any) => {
    setLocalEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <Typography>
        <Title>Welcome!</Title>
      </Typography>
      <Input
        status={errorMsg ? "error" : ""}
        placeholder="Please type your e-mail!"
        onChange={handleEmailChange}
        className={styles.input}
      />
      <div>
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          disabled={!Boolean(localEmail)}
        >
          Next
        </Button>
        {errorMsg && <p className={styles.error}>{errorMsg}</p>}
      </div>
    </form>
  );
}
