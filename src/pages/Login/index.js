import React, { useState } from 'react';
import axios from 'axios';
import Header from '~/components/Layout/Header/';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = () => {
        const loginData = { email, password };

        axios
            .post('http://localhost:80/api/users/auth/login', loginData)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
                setLoginError('Sai tài khoản hoặc mật khẩu');
            });
    };

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Box sx={{ width: 400, margin: 'auto', mt: 4 }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Đăng nhập
                    </Typography>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    fullWidth
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Mật khẩu"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <Button
                                    type="button"
                                    variant="contained"
                                    sx={{ backgroundColor: '#f8452d', color: 'white' }}
                                    fullWidth
                                    onClick={handleSubmit}
                                >
                                    Đăng nhập
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    {loginError && (
                        <Typography variant="body2" color="error" align="center" sx={{ mt: 1, fontSize: '1.5rem' }}>
                            {loginError}
                        </Typography>
                    )}
                </Box>
            </div>
        </div>
    );
};

export default RegistrationForm;
