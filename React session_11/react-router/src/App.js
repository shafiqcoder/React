import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom";
// useParams Hook let you access the dynamic params that your routes may have

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Launch">Launch</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Launch" element={<Launch />}>
          <Route path="/" element={<LaunchIndex />} />
          {/* This is nested route, so use need to use outlet in launch  */}
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router >
  );
}
function Home() {
  return (<div>

    <h1>
      Welcome to Home!
  </h1>
  </div>)
};

function Launch() {
  return (<div>
    <h1>
      Welcome to Launch!
  </h1>
    <Outlet />
  </div>)
};

function LaunchIndex() {
  return (<div className="productContainer">
    <ul>
      {Object.entries(shoes).map(([slug, { name, img }]) => (
        <div key={slug}>
          <Link className="link" to={`/launch/${slug}`}>
            <h3>{name}</h3>
            <img src={img} alt={name} height={250} />
          </Link>
        </div>
      ))}
    </ul>

  </div>)
}

function LaunchShoe() {
  const { slug } = useParams();
  const shoe = shoes[slug];
  if (!shoe) {
    return <h2>Not Found!</h2>;
  }
  const { name, img } = shoe;
  return (<div>
    <h2>{name}</h2>
    <img src={img} alt={name} />
  </div>)
}
function NotFound() {
  return <div>
    <h1>Not Found!</h1>
    <p>Sorry your page is not found.</p>
  </div>
}

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-3-valor-blu": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-londo": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blu": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};
export default App;