import React, { Component } from 'react';

import { Lupa } from '../svgs/svgs';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            term: '',
        };


        this.submit = this.submit.bind(this);
        this.changeTerm = this.changeTerm.bind(this);

    }

    changeTerm(event) {
        this.setState({ term: event.target.value });
    }

    submit(event) {
        if (this.state.term != '') {
            let url = `https://api.github.com/users/${this.state.term}`;

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    this.setState({ results: data });
                    this.props.sendDataResult(this.state.results);
                }).catch((error) => {
                    console.error(error, "Carregamento da Api falhou!")
                });
        }


        event.preventDefault();


    }

    render() {

        return (
            <div className="form">
                <form className="form__form" onSubmit={this.submit}>
                    <input className="form__input shadow Text-Style-2 " onChange={this.changeTerm} />

                    <div className="form__btn-content">
                        <label>
                            <Lupa />
                            <input className="form__btn" type="submit" value="" />
                        </label >
                    </div>
                </form>
            </div>
        )
    }
}
export default Form;
