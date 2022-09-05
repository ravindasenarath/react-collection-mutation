import React, { useMemo, useState } from 'react';
import './App.css';
import styled from 'styled-components';

type User = {
  firstname: string;
  lastName: string;
  age: number;
}

const UserRow = styled.div`
  display: flex;
  flex-direction: column;
`

const UserTile = styled.div`
  padding: 5px;
`

const ButtonRow = styled.div`
  display:flex;
  align-items: center;
`

const App = () => {

  const [users, setUsers] = useState<Array<User>>([{firstname: 'John', lastName: 'Doe', age: 24}]);

  const handleButtonClickNewArray = () => {
    setUsers([...users, {firstname: 'John ' , lastName: 'Doe ' + users.length, age: 4}]);
  }
  const handleButtonClickMutateArray = () => {
    setUsers(users => {
      users.push({firstname: 'John ' , lastName: 'Doe ' + users.length, age: 4})
      return users;
    })
  }

  const userNames = useMemo(() => {
    return users.map(user => `${user.firstname} ${user.lastName}`)
  }, [users])

  return (
    <div className="App">
      <header className="App-header">
        <UserRow>
          {
            userNames.map(userName => (<UserTile>{userName}</UserTile>))
          }
        </UserRow>
        <ButtonRow>
          <button onClick={handleButtonClickNewArray}>Add User ( New Array )</button>
        </ButtonRow>
        <ButtonRow>
          <button onClick={handleButtonClickMutateArray}>Add User ( Mutate Array )</button>
        </ButtonRow>
      </header>
    </div>
  );
}

export default App;
