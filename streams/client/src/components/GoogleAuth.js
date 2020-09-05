import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '709456919114-ldcp3ceolodk27cn7voqvo4l1tt7cg3i.apps.googleusercontent.com',
        scope: 'email',
      });
    });

    const as = window.gapi.client.getAuthInstance();
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
