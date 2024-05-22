import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userRedux';
import Swal from "sweetalert2";
import { deleteUser } from '../redux/apiCalls';
const Container = styled.div`
    width: 70%;
    margin: auto;
    display: flex;
    padding: 30px;
    /* justify-content: center; */
    align-items: center;
    height: 100vh;
    flex-direction: column;
`
const Setting = styled.div`
    text-align: center;
margin: 20px 0;
`
const Text = styled.p`
    font-size: 20px;
    font-weight: 500;
    margin-top: 40px;
    color: #7f7e7e;
    border-bottom: 1px solid #e7e7e7;
    cursor: pointer;
`
function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const userId = useSelector((state) => state.user.currentUser?._id);
    const user = useSelector((state) => state.user);
    const handleLogout = async () => {
        Swal.fire({
            title: "Are you sure you want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, logout!",
            cancelButtonText: "No, stay logged in",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logout())
                localStorage.removeItem('user');
                Swal.fire({
                    title: "Logged out!",
                    text: "You have been logged out successfully.",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                }).then(() => {
                    setTimeout(() => {
                        navigate("/");
                    }, 1500);
                });
            }
        });
    };

    const handleDeleteAccount = () => {
        Swal.fire({
            title: 'Are you sure you want to delete your account?',
            text: "This action cannot be undone!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep my account',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(userId, dispatch)
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your account has been deleted.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
        });
    };


    return (
        <Container>
            <h1>Profile Settings</h1>
            <Setting>
                <h2>Account Management</h2>
                <Text onClick={handleLogout}>Logout</Text>
                <Text onClick={handleDeleteAccount}>
                    Delete My Account
                </Text>
                <Text>Change Password</Text>
            </Setting>
        </Container>
    );
}
export default Profile