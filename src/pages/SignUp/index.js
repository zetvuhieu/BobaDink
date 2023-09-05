import React, { useState } from 'react';
import axios from 'axios';
import Header from '~/components/Layout/Header/';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const [SignupError, setSignupError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation logic can be added here if needed

        // Sending data to the server using axios
        axios
            .post('http://localhost:80/api/users/auth/signup', formData)
            .then((response) => {
                console.log(response.data);
                setSignupError('Đăng ký thành công');
            })
            .catch((error) => {
                console.error(error);
                setSignupError('Đăng ký chưa thành công');
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
                        Đăng ký
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="firstName"
                                    label="Họ"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={formData.surname}
                                    onChange={handleChange}
                                    error={Boolean(errors.surname)}
                                    helperText={errors.surname}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="lastName"
                                    label="Tên"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={formData.username}
                                    onChange={handleChange}
                                    error={Boolean(errors.username)}
                                    helperText={errors.username}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="email"
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="phone"
                                    label="Số điện thoại"
                                    type="tel"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    error={Boolean(errors.phoneNumber)}
                                    helperText={errors.phoneNumber}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="password"
                                    label="Mật khẩu"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    error={Boolean(errors.password)}
                                    helperText={errors.password}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ backgroundColor: '#f8452d', color: 'white' }}
                                    fullWidth
                                >
                                    Đăng ký
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    {SignupError && (
                        <Typography variant="body2" color="error" align="center" sx={{ mt: 1, fontSize: '1.5rem' }}>
                            {SignupError}
                        </Typography>
                    )}
                </Box>
            </div>
        </div>
    );
};

export default RegistrationForm;
