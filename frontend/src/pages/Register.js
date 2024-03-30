import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextButton from '../components/TextButton';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const user_reg = /^[a-zA-Z0-9]{3,20}$/;
const email_reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const pass_reg = /^[a-zA-Z0-9]{6,20}$/;
///^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&]){8,}$/;
const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [matchEmail, setMatchEmail] = useState(false);

    const [password, setPassword] = useState('');
    const [validPass, setValidPass] = useState(false);
    const [passFocus, setPassFocus] = useState(false);
    
    const [matchPass, setMatchPass] = useState(false);
     
    const [errMsg, setErrMsg] = useState('');
    const [sucsessMsg, setSucsessMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = user_reg.test(username);
        console.log(result);
        console.log(username);
        setValidName(result);
    }, [username]);

    useEffect(() => {
        const result = email_reg.test(password);
        console.log(result);
        console.log(password);
        setValidEmail(result);
    }, [password, matchPass]);

    useEffect(() => {
        setErrMsg('');
    }, [username, email, password, matchPass]);
    

    const navigate = useNavigate();


    const handleRegister = () => {
    };





  return (
    // <section>
    //     <p ref={errRef} className={errMsg ? "errmsg" : "oops" }>{errMsg}</p>
    //     <h1>reegissssssssssssssssssssstgg</h1>
    // </section>
    
    <div className="flex flex-col items-center justify-center h-screen">
        <p ref={errRef} className={errMsg ? "errmsg" : "oops" }>{errMsg}</p>
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      <form>
        <label htmlFor='username'>
            Username:
            <span>
                <FontAwesomeIcon icon={faCheck} />
            </span>
        </label>
      </form>
      <input
        type="text"
        id='username'
        ref={userRef}
        placeholder="Username"
        value={username }
        onChange={(e) => setUsername(e.target.value)}
        required
        aria-invalid={validName ? 'false' : 'true'}
        aria-describedby="uidnote"
        onFocus={() => setUserFocus(true)}
        onBlur={() => setUserFocus(false)}
        className="border border-gray-300 rounded-md px-4 py-2 mb-2"
      />
      <p id='uidnote' className={ userFocus && username && !validName ? "instructions" : "offscreen"} >
        <FontAwesomeIcon icon={faInfoCircle} />
        4 to 24 characters<br/>
        must begin with a letter<br/>
        may contain letters, numbers, and hyphens
      </p>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 mb-2"
      />
      <button
        onClick={handleRegister}
        className="bg-blue-500 text-white rounded-md px-4 py-2"
      >
        Register
      </button>
      <div>
        <span>Already have an account?</span>
        <TextButton text="Login" onClick={() => navigate('/login')} />
      </div>
    </div>
  );
};

export default Register;
