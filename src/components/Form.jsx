import React,{useState,useRef} from 'react';
// import { useEffect } from 'react';
import styles from './form.module.css';
const Form = () => {
const [form,setForm]=useState({
    // username:"",
    // email:"",
    // password:"",
    // age: 0,
    // isIndian: false,
});
const ref=useRef();
const passRef =useRef();
// mapping input with unique identifier
// onChange im getting unique identifier and the latest value
// updating form where ket- unique identifier and value=new value

const onChange = (e) => {
    let {type,name,value,checked,files} = e.target;
    // console.log(type,name,value,checked)
    if(type === "checkbox"){
        setForm({...form,
            [name]:checked});
    }
    else if(type ==="file"){
        setForm({...form,
            [name]:files});
    }
    else{
        setForm({...form,
            [name]:value});
    }
   
// console.log(name, target);


//  if(e.keyCode === 13) {
//      console.log("Press enter Key")
//  }

//  if(e.keyCode === 32) {
//      console.log("Press space button key")
//  }
};
// useEffect(()=> {
//     console.log(form);

// },[form]);
const handleOnSubmit=(e)=> {
    e.preventDefault();
// console.log(form)

if(!form.username){
    ref.current.focus();
    console.log(ref);
    ref.current.className += styles.redBorder;
}
else if(!form.password) passRef.current.focus();
}
  return (
    <div>Form
        <form onSubmit={handleOnSubmit}>
            <div>
                <label>Name :</label>
                <input 
                ref={ref}
                type="text" 
                name="username" 
                placeholder="Enter Name..." 
                // value={form.username} 
                onChange={onChange}
                // onKeyUp={onChange}
                // onKeyDown={onChange}
                // onClick={onChange}
                >
               </input>
            </div>
            <br />
            <div>
                <label>Age:</label>
                <input type="number"
                name="Age"
                placeholder="Enter Age..."
                // value={form.age}
                onChange={onChange}></input>
            </div>
            <br />
            <div>
                <label>Email:</label>
                <input
                passref={passRef}
                type="email" 
                name="email"
                placeholder="Enter Email..."
                // value={form.email} 
                onChange={onChange}>
                </input>
            </div>
            <br />
            <div>
                <label>Password</label>
                <input type="password"
                name="password"
                 placeholder="Enter password..."
                //  value={form.password}
                 onChange={onChange}>
               </input>
            </div>
            <br />
            <div>
                <label>City :</label>
                <select name="city" 
                // value={form.city}
                onChange={onChange}>
                    <option value="Pune">Pune</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                </select>
            </div>
            <br />
              <div>
                <input type="checkbox"
                name="isIndian"
                 checked={form.isIndian}
                 onChange={onChange}></input>
                <label>: Is Indian</label>
            </div>
            <br />
            <div>
                <div>
                <input type="radio"
                name="gender"
                value="Male"
                 onChange={onChange}></input>
                 <label>: Male</label>
                 </div>

             <div>
                
                <input type="radio"
                name="gender"
                value="Female"
                 onChange={onChange}></input>
                 <label>: Female</label>
                </div>
                </div>
                <div>
                <label>User Resume</label>
                <input type="file"
                accept='image/png, image/jpeg, application/pdf'
                name="resume"
                files={form.resume}
                 onChange={onChange}></input>
            </div>
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default Form;