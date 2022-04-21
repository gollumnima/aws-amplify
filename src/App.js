import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>
            Hello &nbsp;
            {user.username}
          </h1>
          <button type="button" onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default withAuthenticator(App);
