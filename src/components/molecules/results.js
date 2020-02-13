import React, { Component } from 'react';
import Repo from '../molecules/repo';
import Profile from '../molecules/profile';
import Form from '../molecules/form';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultSearch: [],
        };

        this.changeDataResult = this.changeDataResult.bind(this);

    }

    changeDataResult(event) {
        console.log(event)
        this.setState({ resultSearch: event });

    }


    render() {
        console.log(this.props, "props")
        console.log(this.state.resultSearch, "results")
        const { resultSearch } = this.state;

        const { name, login, company, avatar_url, location, public_repos, followers, public_gists } = this.props.location.state.item.results;
        return (
            <div className="results">

                <div className="results__container">
                    <div className="results__profile">
                        {resultSearch != '' ?
                            <Profile
                                avatar_url={resultSearch.avatar_url}
                                name={resultSearch.name}
                                login={resultSearch.login}
                                company={resultSearch.company}
                                location={resultSearch.location}
                                public_repos={resultSearch.public_repos}
                                followers={resultSearch.followers}
                                publicGists={resultSearch.public_gists}
                            /> :
                            <Profile
                                avatar_url={avatar_url}
                                name={name}
                                login={login}
                                company={company}
                                location={location}
                                public_repos={public_repos}
                                followers={followers}
                                publicGists={public_gists}
                            />}
                    </div>
                    <div className="results__repo">
                        <Form sendDataResult={this.changeDataResult} />
                        <div>
                            {
                                resultSearch != '' ?
                                    <Repo login={resultSearch.login} /> :
                                    <Repo login={login} />

                            }

                        </div>

                    </div>

                </div>


            </div>
        )

    }


}



export default Results;
