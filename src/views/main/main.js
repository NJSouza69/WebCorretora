import './main.css';

import HeaderBar from '../../components/header/header-bar';
import MediaCard from '../../components/card/card';

function Main() {
  return (

    <div className="Cards">
      <div>
        <HeaderBar/>
      </div>

      <div>
        <MediaCard />
      </div>

    </div>
  );
}

export default Main;
