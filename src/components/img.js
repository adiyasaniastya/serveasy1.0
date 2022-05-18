import React from 'react';

import app_store from './Assets/img/app_store.svg';
import emblem from './Assets/img/emblem.svg';
import logoFB from './Assets/img/Facebook.svg';
import logoFixed from './Assets/img/fixed_org.svg';
import GooglePlay from './Assets/img/googleplay.svg';
import logoIG from './Assets/img/Instagram.svg';
import logoJumboHP from './Assets/img/jumbo_hp.svg';
import logoFooter from './Assets/img/logo_footer.svg';
import logoKonsul from './Assets/img/org_konsul.svg';
import logoServis from './Assets/img/org_servis.svg';
import logoTesti from './Assets/img/testimoni.svg';
import logoTW from './Assets/img/Twitter.svg';
import logoAkun from './Assets/img/works_account.svg';
import logoAman from './Assets/img/works_secure.svg';
import logoEnjoy from './Assets/img/works_smile.svg';
import logoYT from './Assets/img/Youtube.svg';

const img = {
    app_store: app_store,
    emblem: emblem,
    logoFB: logoFB,
    logoFixed: logoFixed,
    GooglePlay: GooglePlay,
    logoIG: logoIG,
    logoJumboHP: logoJumboHP,
    logoFooter: logoFooter,
    logoKonsul: logoKonsul,
    logoServis: logoServis,
    logoTesti: logoTesti,
    logoTW: logoTW,
    logoAkun: logoAkun,
    logoAman: logoAman,
    logoEnjoy: logoEnjoy,
    logoYT: logoYT,
}

export default function img(props) {
    const Gambar = img[props.gbr];
    return <Gambar  />;
  }
