import React, { useState } from 'react';
import './Login.css';
import { bxHide, bxShow } from 'boxicons';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    };

    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember me:', rememberMe);
    };

    return (
        <div className='login'>
            <header>
                <div class="header-section">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/b079/030c/4972f8d743d4ee60546f484eb4d3ab9b?Expires=1681689600&Signature=bwsaPUAm~fW3IqNHZ-7uPGns8mX61KnM0ewuYr5hqr6c7R3Isf7Dd2ZQ9Frt1C4RPTraqNz-hkoAh6gPLfjKV0c-CrtudWiv2YYgOgAfEEQWU5cJ4tGni1eZBPWAzsdRtVP31h8Rx9cBpdsYYAfMKb~M7PfrLismlgIfUY2W8UNwcjJaHx-ygC2O8p~HxCdRHld6Xn0E5PpU3S2fS4b44BOirLUj2zzN2j5sPxccqUkNOdYE5ECY9oUEjSs6k3LRKHcl2StRCvv75AplEH3A5oMteX-L73xHmRWtV9OFx7hnq6vaVAQrTVG-FPnVAy3fBpNli6soCw1PyB1qf1FTMQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        width="125" height="95" alt="Logo" />
                    <div class="text-bottom-right"><span>i</span>ToConnect</div>
                </div>
            </header>
            <main>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div class="line-container">
                        <hr class="line" />
                        <span class="login-text">Login</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email/Phone</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder='Enter your Email/Phone'
                            required
                        />
                    </div>
                    <div className="form-group input-container">
                        <label htmlFor="password">Password</label>
                        <div className="password-input">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder='Enter password'
                                required
                            /><i
                                className={`password-icon ${passwordVisible ? 'bx bx-show' : 'bx bx-hide'
                                    }`}
                                onClick={handlePasswordVisibility}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                        />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <input type="submit" value="Login" />


                    <div className="forgot-link">
                        <a href="#">Forgot password?</a>
                    </div>

                    <div className='divider'><hr /></div>

                    <div className='links'>
                        <a href="#" className='account'>Don’t have an account?</a>
                        <a href="#" className='signup'>Sign Up</a>
                    </div>
                </form>
            </main>

            <footer className="footer">
                <div className='white-space'></div>
                <div className='footer-text'>
                <div className="footer-left">
                    <p>&copy; 2023 iToconnect --- - All Right Reserved</p>
                </div>
                <div className="footer-right">
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
                </div>
            </footer>
        </div>
    );
}

export default Login;
