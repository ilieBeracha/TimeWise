import "./GoogleAuth.css";
import jwtDecode from 'jwt-decode';
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { loginRedux } from "../../app/authSlice";
import { toastAlerts } from "../../helpers/toastAlerts";
import { userService } from "../../services/UserService";

function GoogleAuth({ handleClose }: { handleClose: any }): JSX.Element {
    const dispatch = useDispatch();

    async function googleLogin(data: any) {
        const userData: any = {
            firstName: data.given_name,
            lastName: data.family_name,
            email: data.email,
        }
        try {
            const res = await userService.googleLogin(userData);
            if (res.status === 200) {
                handleClose();
                dispatch(loginRedux(res.data))
                toastAlerts.toastSuccess("Register successfull")
            }
        } catch (e: any) {
            toastAlerts.toastError(e.response.data)

        }
    }
    return (
        <div className="GoogleAuth">
            <GoogleLogin
                onSuccess={(credentialResponse: any) => {
                    const userData = jwtDecode(credentialResponse.credential);
                    googleLogin(userData);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                useOneTap
                // type="icon"
                auto_select={false}
            />
        </div>
    );
}

export default GoogleAuth;
