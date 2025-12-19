import { use } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/userContext';

const Dashboard = () => {
  const { isLoggedIn } = useUser();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <h1>Ласкаво просимо в особистий кабінет</h1>;
};

export default Dashboard;
