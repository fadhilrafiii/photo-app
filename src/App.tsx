import React from 'react';

import PhotosPage from 'Pages/Photos';

import Button, { ButtonSize, ButtonTheme } from 'Components/Button';
import Icon from 'Components/Icons';
import { IconName } from 'Components/Icons/enum';
import Navbar from 'Components/Navbar';

import { Colors } from 'Shared/Constants/Colors';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="page-container">
        <div className="page-content">
          <PhotosPage />
          <span className="floating-button">
            <Button theme={ButtonTheme.Tertiary} buttonSize={ButtonSize.Large} isCircleButton>
              <Icon name={IconName.Add} fill={Colors.White} size={18} />
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
