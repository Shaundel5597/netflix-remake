import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className="nav">
                <button> Home </button>
                <button> Movies </button>
                <button> TV Shows </button>
                <button> Top Rated </button>
                <button> Upcoming </button>
                <button> For Shaundel </button>
            </div>
        )
    }
}

export default NavBar