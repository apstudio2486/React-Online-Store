import React from 'react'

export default function Todo(props) {

    function demo(e){
        e.preventDefault();
        const fname = this.props.Fname;
        alert(fname);
    }

  return (
    <div>
        <li className="todo stack-small">
            <div className="c-cb">
                <input id="todo-0" type="checkbox" defaultChecked={props.completed}/>
                <label className="todo-label" htmlFor="todo-0">
                {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                Edit <span className="visually-hidden">{props.name}</span>
                </button>
                <button type="button" className="btn btn__danger">
                Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </li>
        <form onSubmit={demo}>
             <input type='text' placeholder='enter' name='Fname' ></input>   
            <button type='submit'> DEMO </button>
        </form>
    </div>
  )
}
