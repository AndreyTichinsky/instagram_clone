import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthenticationScreen } from './screens/AuthenticationScreen';
import { NotMatchScreen } from "./screens/NotMatchScreen";
import { RedirectComponent } from "./screens/RedirectComponent";
import { InstagramComponent } from "./screens/InstagramComponent";
import './App.css';

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AuthenticationScreen} />
        <Route exact path="/auth" component={RedirectComponent} />
        <Route exact path="/instagram" component={InstagramComponent} />
        <Route path="*" component={NotMatchScreen} />
      </Switch>
    </BrowserRouter>
    {/* <Query
      query={gql`
        {
          photos {
            url
            author
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.photos.map((photo) => (
          <div key={photo.url}>
            {photo.author}
            <img src={photo.url} alt={photo.author} />
          </div>
        ));
      }}
    </Query> */}
  </>
);

export default App;
