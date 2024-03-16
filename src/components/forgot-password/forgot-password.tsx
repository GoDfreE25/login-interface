import { LogoIcon } from "../../icons/logo";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./forgot-password.scss";

export const ForgotPassword = () => {
  return (
    <div className="forgot_pass_container">
      <LogoIcon />
      <span className="title">Forgot Password?</span>
      <div className="field_container">
        <TextField
          fullWidth
          id="outlined-basic"
          placeholder="Enter your email"
          variant="outlined"
          inputProps={{
            style: {
              height: 48,
              padding: "0 14px",
              borderRadius: "6px",
            },
          }}
        />
      </div>
      <div className="footer_container">
        <Button
          sx={{ borderRadius: "8px", textTransform: "none" }}
          fullWidth
          size="large"
          variant="contained"
        >
          Send
        </Button>
        <Button
        className="cancel_button"
          sx={{ borderRadius: "8px", textTransform: "none" }}
          fullWidth
          size="large"
          variant="outlined"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};
