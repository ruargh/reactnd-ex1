import React, { Component } from 'react'

class MovieList extends Component {
  render() {
    return(
      <ul>
        {this.props.profiles.map(profile => {
          const userName = this.props.users[profile.userID].name
          const favMovie = this.props.movies[profile.favoriteMovieID].name
          return (
        <li key={profile.id}>{userName}'s favorite movie is {favMovie}.</li>
        )})}
      </ul>
      )
  }
}

export default MovieList