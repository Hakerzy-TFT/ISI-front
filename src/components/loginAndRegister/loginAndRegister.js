import React from 'react'
import './loginAndRegister.css'
function loginAndRegister() {
    return (
        <div className="loginAndRegister">
            <div class="container">
                <label for="uname"><b>Login</b></label>
                <input type="text" placeholder="Wprowadź login" name="uname" required/>

                    <label for="psw"><b>Hasło</b></label>
                    <input type="password" placeholder="Wprowadź hasło" name="psw" required/>

                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember"/> Pamiętaj mnie
                        </label>
                </div>
                        <div class="container" style="background-color:#f1f1f1">
                            <button type="button" class="cancelbtn">Cancel</button>
                            <span class="psw"> <a href="#">Forgot password?</a></span>
                        </div>
        </div>

    )
}

export default loginAndRegister
