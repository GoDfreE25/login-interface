import { useState } from "react";
import { LogoIcon } from "../../icons/logo";
import Button from "@mui/material/Button";
import { GoogleIcon } from "../../icons/google";
import { GitIcon } from "../../icons/git";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import "./login.scss";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login_container">
      <LogoIcon />
      <span className="title">Log in to your account</span>
      <div className="button_container">
        <Button
          fullWidth
          className="button"
          variant="outlined"
          size="large"
          startIcon={<GoogleIcon />}
        >
          Google
        </Button>
        <Button
          fullWidth
          className="button"
          variant="outlined"
          size="large"
          startIcon={<GitIcon />}
        >
          Github
        </Button>
      </div>
      <div className="separator_container">
        <div className="separator_border" />
        <span className="separator_title">OR</span>
        <div className="separator_border" />
      </div>
      <div className="fields_container">
        <TextField
          fullWidth
          id="outlined-basic"
          placeholder="Work email"
          variant="outlined"
          inputProps={{
            style: {
              height: 48,
              padding: "0 14px",
              borderRadius: "6px",
            },
          }}
        />
        <OutlinedInput
          fullWidth
          sx={{ height: "48px" }}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((show) => !show)}
                onMouseDown={(event) => event.preventDefault()}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          placeholder="Password"
        />

        <span className="forgot_pass_title">Forgot your password?</span>
      </div>
      <div className="footer_container">
        <Button
          sx={{ borderRadius: "8px", textTransform: 'none' }}
          fullWidth
          size="large"
          variant="contained"
        >
          Log in to Qencode
        </Button>
        <span className="footer_title">
          Is your company new to Qencode? <span className="footer_subtitle">Sign up</span>
        </span>
      </div>
    </div>
  );
};
