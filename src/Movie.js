import React, { Component } from 'react';
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="joker">
            {this.props.movies && this.props.movies.filter(el => el.name.toLowerCase().includes(this.props.input.toLowerCase().trim()) && el.rating < this.props.star).map(el => {
                return (
                    <div className="photo">
                        <div className="text">
                            <p>{el.name}</p>
                            <p>{"".padEnd(el.rating, "⭐")}</p>
                        </div>
                        <div className="logo">
                            <img src={el.img} />
                        </div>
                    </div>
                )
            })}
        </div>);
    }
}
export default Movie;