import React, { useRef, useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    const countUp = (e) => {
        setCount(
            (current) => current + 1
        )
    }
    const countDown = (e) => {
        setCount(
            (current) => current>0 ?current - 1 :current
        )
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={countUp}>+1</button>
            <button onClick={countDown}>-1</button>
        </div>
    );
}

function OneInputSample(){
    const [inputs, setInputs] = useState('');
    const onChange = (e) => {
        setInputs(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setInputs('');
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input placeholder='name' onChange={onChange} value={inputs} />
                <button>Reset</button>
            </form>
            <div>
                <b>value: {inputs}</b>
            </div>
        </div>
    );
}

function InputSample() {
    const [inputs, setInputs] = useState({
        name:'',
        nick:''
    })
    const {name, nick} = inputs;
    const nameInput = useRef();

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        })
    };
  
    const onSubmit = (e) => {
        e.preventDefault();
        setInputs({
            name:'',
            nick:''
        })
        nameInput.current.focus();
    };
  
    return (
      <div>
        <form onSubmit={onSubmit}>
            <input 
                placeholder="name" 
                name="name" 
                value={name} 
                onChange={onChange} 
                ref={nameInput}
            />
            <input 
                placeholder="nick" 
                name="nick" 
                value={nick} 
                onChange={onChange}
            />
            <button>reset</button>
        </form>
        <div>
          <b>value: </b>
          {name} ({nick})
        </div>
      </div>
    );
}

export default InputSample;