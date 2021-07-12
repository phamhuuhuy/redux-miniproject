import React from 'react';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images';
import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG}/>
      <Container>
        <Link to="/photos/add">Add new photo</Link>
      </Container>
    </div>
  );
}

export default MainPage;