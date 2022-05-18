import React from 'react';

import app_store from './Assets/img/app_store.svg';
import emblem from './Assets/img/emblem.svg';
import Facebook from './Assets/img/Facebook.svg';
import fixed_org from './Assets/img/fixed_org.svg';
import GooglePlay from './Assets/img/googleplay.svg';
import Instagram from './Assets/img/Instagram.svg';
import jumbo_hp from './Assets/img/jumbo_hp.svg';
import logo_footer from './Assets/img/logo_footer.svg';
import org_konsul from './Assets/img/org_konsul.svg';
import org_jemput from './Assets/img/org_jemput.svg';
import org_servis from './Assets/img/org_servis.svg';
import testimoni from './Assets/img/testimoni.svg';
import Twitter from './Assets/img/Twitter.svg';
import works_account from './Assets/img/works_account.svg';
import works_secure from './Assets/img/works_secure.svg';
import works_smile from './Assets/img/works_smile.svg';
import Youtube from './Assets/img/Youtube.svg';

const imej = {
    app_store: app_store,
    emblem: emblem,
    Facebook: Facebook,
    fixed_org: fixed_org,
    googleplay: googleplay,
    Instagram: Instagram,
    jumbo_hp: jumbo_hp,
    logo_footer: logo_footer,
    org_konsul: org_konsul,
    org_jemput: org_jemput,
    org_servis: org_servis,
    testimoni: testimoni,
    Twitter: Twitter,
    works_account: works_account,
    works_secure: works_secure,
    works_smile: works_smile,
    Youtube: Youtube,
}

export default function imej(props) {
    const Gambar = imej[props.gbr];
    return <Gambar  />;
  }
