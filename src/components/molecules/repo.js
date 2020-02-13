import React, { Component } from 'react';
import { Star } from '../svgs/svgs';
import NotFound from './notFound';
class Repo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }

    submit() {

        let url = `https://api.github.com/users/${this.props.login}/repos`;

        fetch(url)
            .then(response => response.json())
            .then((data) => {
                console.log(data, "sdsadasdas")
                this.setState({ results: data });
            }).catch((error) => {
                console.error(error, "Carregamento da Api falhou!")
            });


        console.log(this.state.results)
    }

    componentDidMount() {
        this.submit();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.login !== undefined) {

            if (prevProps.login !== this.props.login) {
                this.submit();
            }
        } else {
            return;
        }

    }

    render() {

        const { results } = this.state;
        return (
            <div className="repo">

                <ul className="repo__list">
                    {
                        results.length > 0 ?
                            results.map((item) =>
                                <li className="repo__item" key={item.id}>
                                    <h2 className="repo__name Repos">{item.name}</h2>
                                    <span className="repo__description Text-Style-2 ">{item.description} </span>
                                    <div className="repo__stars Text-Style-2"> <Star />{item.stargazers_count}</div>
                                </li>) : < NotFound />
                    }
                </ul>
            </div>
        )
    }
}
export default Repo;
