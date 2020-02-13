import React, { Component } from 'react';
import { Followers, Repositorie, Location, Star, Organization } from '../svgs/svgs';
class Profile extends Component {
    render() {

        const { name, login, company, avatar_url, location, public_repos, followers, publicGists } = this.props;
        return (

            <div className="profile">
                <h1 className="profile__title Text-Style-2 ">Github <span className="profile__title--highlight  ">search</span> </h1>
                {avatar_url && <img className="profile__img" src={avatar_url} />}
                {name && <span className="profile__name UserName">{name} </span>}
                {login && <h2 className="profile__login Text-Style-2 "> {login} </h2>}
                {company && <span className="profile__company Text-Style-2 "><Organization />{company}</span>}
                {location && <span className="profile__location Text-Style-2 "><Location />{location} </span>}
                <span className="profile__star Text-Style-2 "><Star />{publicGists}</span>
                {public_repos && <span className="profile__public-repos Text-Style-2 "><Repositorie />{public_repos} </span>}
                {followers && <span className="profile__followers Text-Style-2 "><Followers />{followers} </span>}
            </div>
        )
    }
}



export default Profile;
