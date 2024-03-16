import { useState } from "react";
import { LogoIcon } from "../../icons/logo";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./reset-password.scss";
import Label from "../../helper/label/label";

export const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login_container">
      <LogoIcon />
      <span className="title">Create new Password?</span>
      <div className="fields_container">
        <div>
          <Label>Password</Label>
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
        </div>
        <div>
          <Label>Confirm Password</Label>
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
        </div>
      </div>
      <div className="footer_container">
        <Button
          sx={{ borderRadius: "8px", textTransform: "none" }}
          fullWidth
          size="large"
          variant="contained"
        >
          Reset Password
        </Button>
      </div>
    </div>
  );
};
