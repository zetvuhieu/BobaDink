import React, { useState } from 'react';
import axios from 'axios';
import Header from '~/components/Layout/Header/';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';

const initialValues = {
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
};

const validationSchema = Yup.object({
    email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
    username: Yup.string().required('Tên người dùng là bắt buộc'),
    password: Yup.string()
        .required('Mật khẩu là bắt buộc')
        .matches(
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/,
            'Mật khẩu phải chứa ít nhất 6 kí tự, bao gồm ít nhất 1 chữ hoa và 1 kí tự đặc biệt',
        ),
    surname: Yup.string().required('Tên người dùng là bắt buộc'),
    phoneNumber: Yup.string().required('Số điện thoại là bắt buộc'),
});

const RegistrationForm = () => {
    const handleSubmit = (values) => {
        axios
            .post('/api/register', values)
            .then((response) => {
                console.log(response.data);
                // Thực hiện các hành động sau khi đăng ký thành công
            })
            .catch((error) => {
                console.error(error);
                // Hiển thị thông báo lỗi đăng ký
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
                    <Formik initialValues={initialValues} validationSchema={validationSchema}>
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Field name="surname">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Họ"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                error={Boolean(field.error)}
                                                helperText={field.error}
                                            />
                                        )}
                                    </Field>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field name="username">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Tên"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                error={Boolean(field.error)}
                                                helperText={field.error}
                                            />
                                        )}
                                    </Field>
                                </Grid>
                                <Grid item xs={12}>
                                    <Field name="email">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Email"
                                                type="email"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                error={Boolean(field.error)}
                                                helperText={field.error}
                                            />
                                        )}
                                    </Field>
                                </Grid>
                                <Grid item xs={12}>
                                    <Field name="phoneNumber">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Số điện thoại"
                                                type="tel"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                error={Boolean(field.error)}
                                                helperText={field.error}
                                            />
                                        )}
                                    </Field>
                                </Grid>
                                <Grid item xs={12}>
                                    <Field name="password">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Mật khẩu"
                                                type="password"
                                                variant="outlined"
                                                fullWidth
                                                required
                                                error={Boolean(field.error)}
                                                helperText={field.error}
                                            />
                                        )}
                                    </Field>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: 2 }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ backgroundColor: '#f8452d', color: 'white' }}
                                        fullWidth
                                        onClick={handleSubmit}
                                    >
                                        Đăng ký
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </Box>
            </div>
        </div>
    );
};

export default RegistrationForm;
