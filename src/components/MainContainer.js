import React, { Component } from 'react';
import ListItems from './ListItems';
import NewItemBox from './NewItemBox';
import Logo  from './Logo';
import FooterDescription from './FooterDescription';
import reactMixin from 'react-mixin';
import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

let firetebaseRef = {};
let items = [];

const firebaseConfig = {
  apiKey: "AIzaSyDZKkJFmvcURYCniEv5HC1TPZgVGzAdUJ4",
  authDomain: "livelistreactfirebase.firebaseapp.com",
  databaseURL: "https://livelistreactfirebase.firebaseio.com",
  storageBucket: "livelistreactfirebase.appspot.com",
  messagingSenderId: "194967700029"
};

export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      snapshotHasbeenRetrieved: false
    };

    this.handleSubmit = this.handleSubmit;
  }

  componentWillMount() {
    Firebase.initializeApp(firebaseConfig);
    firetebaseRef = Firebase.database().ref("list");

    // The line below is commented because it results in a update into this.state.items per each data inside of "list" node on the database.
    // I prefer to call render() only once so, I handled it after doing a single loop after retriving the snapshot with the last 20 registers.
    //this.bindAsArray(ref, "items");

    this.captureInitialSnapshot();
  }

  render() {
    return  <div>
      <header>
        <Logo />
      </header>
      <ListItems items={this.state.items}/>
      <NewItemBox handleSubmit={this.handleSubmit} />
      <footer>
        <FooterDescription />
      </footer>
    </div>
  }

  // this function will add a new child ir our database node (list).
  handleSubmit (e) {
    e.preventDefault();
    firetebaseRef.push(document.getElementById('itemInput').value);
  }

  // capturing the first snapshot with the last 20 registers.
  captureInitialSnapshot() {
    firetebaseRef.limitToLast(20).once('value', (dataSnapshot) => {
      dataSnapshot.forEach((childSnapshot) => {
        var item = { value :  childSnapshot.val() };

        item['key'] = childSnapshot.key;
        items.push(item);
      });

      this.startCaptureAddedChilds();

      this.setState({
        items: items,
        snapshotHasbeenRetrieved: true
      });
    });
  }

  // after the initial snapshot has been retrieved it's time to handle the next data.
  startCaptureAddedChilds() {
    firetebaseRef.limitToLast(1).on('child_added', (dataSnapshot) => {
      var newItem = { value :  dataSnapshot.val(), key: dataSnapshot.key };

      // this condition checks whether the initial snapshot has already captured or not.
      if((!this.state.items.length && !this.state.snapshotHasbeenRetrieved) || this.state.items.some((addedItem, index, array) =>
        addedItem.key === newItem.key )
      ){
        return;
      }

      items.push(newItem);

      this.setState({
        items: items
      });
    });
  }
}

// Used ReactMixin module to work with react mixins and ES6 way.
reactMixin(MainContainer.prototype, ReactFireMixin)
