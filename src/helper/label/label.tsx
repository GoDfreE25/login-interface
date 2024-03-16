import { Typography } from '@mui/material';
import './label.scss';

export type Props = {
  children: React.ReactNode;
};

export default function Label({ children }: Props) {
  return (
    <div className="label" >
      <Typography color="text.primary" fontWeight={500} variant="body1">
        {children}
      </Typography>
    </div>
  );
}
