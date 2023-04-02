import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Register.css';
import { useForm } from 'react-hook-form';
import { UserInterface } from '../../models/UserModel';
import { userService } from '../../services/UserService';
import { useDispatch } from 'react-redux';
import { loginRedux } from '../../app/authSlice';
import { toastAlerts } from '../../helpers/toastAlerts';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { gmailService } from '../../services/GmailService';
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

export default function Register() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { register, handleSubmit } = useForm<UserInterface>()
  const dispatch = useDispatch();

  async function registerForm(data: UserInterface) {
    try {
      console.log(data);
      const res = await userService.Register(data);
      if (res.status === 200) {
        handleClose();
        dispatch(loginRedux(res.data))
        toastAlerts.toastSuccess("Register successfull")
      }
    } catch (e: any) {
      toastAlerts.toastError(e.response.data)
    }
  }

  // async function googleLogin(data: any) {
  //   console.log(data);
  //   const userData: any = {
  //     firstName: data.given_name,
  //     lastName: data.family_name,
  //     email: data.email,
  //   }
  //   console.log(userData);

  //   try {
  //     const res = await userService.googleLogin(userData);
  //     if (res.status === 200) {
  //       handleClose();
  //       dispatch(loginRedux(res.data))
  //       toastAlerts.toastSuccess("Register successfull")
  //     }
  //   } catch (e: any) {
  //     toastAlerts.toastError(e.response.data)

  //   }
  // }

  return (
    <div className='authForm'>
      <div className='authFormBtn'>
        <button onClick={handleOpen}>Register</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Register: </h2>
          <div className="register-form-container">
            <form method="post" onSubmit={handleSubmit(registerForm)}>
              <div className="input-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName")}
                />
              </div>
              <div className="input-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  {...register("lastName")}
                />
              </div>
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
              <button type="submit">Register</button>
            </form>
            {/* <GoogleLogin
              onSuccess={(credentialResponse: any) => {
                const userData = jwtDecode(credentialResponse.credential);
                googleLogin(userData);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />; */}
            <GoogleAuth handleClose={handleClose} />



          </div>
        </Box>
      </Modal>
    </div>
  );
}