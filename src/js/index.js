import 'whatwg-fetch';
import { polyfill as promisePolyfill } from 'es6-promise';

import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

import App from './App';
import '../scss/index.scss';


const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjdqchrz42wx90169m1tb92i0' });

// const wsLink = new WebSocketLink({
//     uri: 'wss://subscriptions.ap-northeast-1.graph.cool/v1/cjdqchrz42wx90169m1tb92i0',
//     options: {
//         reconnect: true
//     }
// })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
promisePolyfill();

const element = document.getElementById('content');
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , element);

document.body.classList.remove('loading');
