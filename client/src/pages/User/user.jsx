import Footer from "../../components/Footer/footer";
import Navigation from "../../components/Navigation/navigation";
import Account from "../../components/Account/account";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserHeader from "../../components/UserHeader/userHeader";
import { profilePost } from "../../Store/profileSlice";

function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.login);

  useEffect(() => {
    if (token) {
      dispatch(profilePost(token));
    } else {
      navigate("/");
    }
  }, [token]);

  const accountContent = [
    {
      id: 1,
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      id: 2,
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      id: 3,
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="page-container">
        <div className="main bg-dark">
          <UserHeader />
          <h2 className="sr-only">Accounts</h2>
          {accountContent.map((account) => (
            <Account
              key={account.id}
              title={account.title}
              amount={account.amount}
              description={account.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default User;
