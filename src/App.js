import { useState, useEffect } from 'react';
import { Amplify, API } from 'aws-amplify';
// import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

function App() {
  const [coins, updateCoins] = useState([]);
  const [input, updateInput] = useState({ limit: 5, start: 0 });

  const updateInputValues = (type, value) => {
    updateInput({ ...input, [type]: value });
  };

  const fetchCoins = async () => {
    const { limit, start } = input;
    const data = await API.get('apib8302c5a', `/coins?limit=${limit}&start=${start}`);
    // const data = await API.get('apib8302c5a', '/coins');
    updateCoins(data.coins);
  };

  useEffect(() => {
    fetchCoins();
  }, []);
  return (
    // <Authenticator>
    //   {({ signOut, user }) => (
    //     <main>
    //       <h1>
    //         Hello &nbsp;
    //         {user.username}
    //       </h1>
    //       <button type="button" onClick={signOut}>Sign out</button>
    //     </main>
    //   )}
    <>
      <input
        placeholder="limit"
        onChange={(e) => updateInputValues('limit', e.target.value)}
      />
      <input
        placeholder="start"
        onChange={(e) => updateInputValues('start', e.target.value)}
      />
      <button type="button" onClick={fetchCoins}>Fetch Coins</button>
      {
        coins.map((coin) => (
          <div key={coin.name}>
            <h2>
              {coin.name}
              -
              {coin.symbol}
            </h2>
            <h5>{coin.price_usd}</h5>
          </div>
        ))
      }
    </>
  // </Authenticator>
  );
}

export default App;
