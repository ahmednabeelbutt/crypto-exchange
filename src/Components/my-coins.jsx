import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedCoin } from '../redux/actions/user-actions';

const CoinsComponent = ({user}) => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleTransfer = (coin) => {
    console.log(`Edit action for user with ID: ${coin.coinName}`);
    dispatch(setSelectedCoin(coin));
    navigate('/transfer');
    // Implement your edit logic here
  };
    
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Coin</th>
          <th>Quantity</th>
          <th>Rate</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {user.coinsData.map(item => (
          <tr key={item.coinID}>
            <td>{item.coinName}</td>
            <td>{item.coinQuantity}</td>
            <td>{item.coinRate}</td>
            <td>
              <button className="btn btn-primary btn-md"
               onClick={() => handleTransfer(item)}
               disabled={item.coinQuantity <= 0}
               >
                   Transfer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CoinsComponent;
