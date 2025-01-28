import "./App.css";
import AuthComponent from "./components/dashboard/AuthComponent";
import Dashboard from "./components/MainDashboard/Dashboard";

function App() {
  return (
    <AuthComponent>
      {({ user, loading, error, dispatch: authDispatch }) => {
        return <Dashboard user={user} />;
      }}
    </AuthComponent>
  );
}

export default App;
