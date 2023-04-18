import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';
import { UserInterface } from '../../models/UserModel';
import { userService } from '../../services/UserService';
import { useDispatch } from 'react-redux';
import { loginRedux } from '../../app/authSlice';
import { toastAlerts } from '../../helpers/toastAlerts';
import GoogleAuth from '../GoogleAuth/GoogleAuth';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { register, handleSubmit } = useForm<UserInterface>();
  const dispatch = useDispatch()
  async function loginForm(data: UserInterface) {
    try {

      const res = await userService.Login(data);
      if (res.status === 200) {
        handleClose();
        toastAlerts.toastSuccess("Login successfull")
        dispatch(loginRedux(res.data))
      }
    } catch (e: any) {
      toastAlerts.toastError(e.response.data)
    }
  }
  return (
    <div className='authForm'>
      <button style={{fontSize:'14px'}} className='authFormBtn' onClick={handleOpen}>Login</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Login: </h2>
          <div className="register-form-container">
            <form onSubmit={handleSubmit(loginForm)}>
              <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                />
              </div>
              <button type="submit">Login</button>
            </form>
            <GoogleAuth handleClose={handleClose} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}