import React from 'react';
import ClipAdmin from './ClipAdmin';
import { EditCapabilitiesContext } from '../../utils/Utils';

const PlayList = () => (
  <EditCapabilitiesContext.Provider value={true}>
    <ClipAdmin />
  </EditCapabilitiesContext.Provider>
);

export default PlayList;
