import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import LoginStyle from "../styles/Login.module.css";
import fontStyle from "../styles/fontStyle.module.css";
import Head from "next/head";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useMediaQuery from "@mui/material/useMediaQuery";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
export default function Login() {
  const mobile = useMediaQuery("(min-width:600px)");

  const [credentials, setcredentials] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

  const handleLogin = () => {
    router.push(`/login/${credentials.username.split("@")[0]}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setcredentials({ ...credentials, [name]: value });
  };

  //Formik
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      const { username, password } = values;

      router.push(`/login/${username.split("@")[0]}`);
    },
  });

  return (
    <div
      className={mobile ? LoginStyle.ParentDiv : LoginStyle.ParentDiv_mobile}
    >
      <Head>
        <title>Banking Application</title>
      </Head>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div className={mobile ? LoginStyle.Card : LoginStyle.Card_mobile}>
            <form onSubmit={formik.handleSubmit}>
              <div className={LoginStyle.LoginGrid}>
                <div className={LoginStyle.IconStyle}>
                  <img
                    width="96"
                    height="96"
                    src="https://img.icons8.com/fluency/96/user-male-circle--v1.png"
                    alt="user-male-circle--v1"
                  />
                </div>
                <div className={LoginStyle.login_align}>
                  <h1 className={fontStyle.login_font}>Login</h1>
                </div>
                <div className={LoginStyle.input_align}>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    type="text"
                    placeholder="Username*"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
                    error={
                      formik.touched.username && Boolean(formik.errors.username)
                    }
                  />
                </div>
                <div className={LoginStyle.input_align}>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                  />
                </div>
                <div className={LoginStyle.input_align}>
                  {" "}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    endIcon={<ExitToAppIcon />}
                  >
                    Log In
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}
