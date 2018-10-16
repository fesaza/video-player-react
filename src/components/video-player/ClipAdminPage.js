import React from 'react';
import ClipAdmin from './ClipAdmin';
import { EditCapabilitiesContext } from '../../utils/Utils';

const ClipAdminPage = () => (
  <EditCapabilitiesContext.Provider value={false}>
    <ClipAdmin />
  </EditCapabilitiesContext.Provider>
);

export default ClipAdminPage;
