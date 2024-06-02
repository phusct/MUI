import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DialogBox = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Mở Hộp Thoại
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Sử Dụng Dịch Vụ Định Vị?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Cho phép ứng dụng sử dụng dịch vụ định vị của bạn để cải thiện trải nghiệm người dùng.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Hủy
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Đồng Ý
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogBox;
