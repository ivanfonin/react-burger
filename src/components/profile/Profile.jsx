import Link from '../link/Link';

import styles from './Profile.module.css';

const link = {
  href: '/profile',
  name: 'Личный кабинет',
  current: false,
  icon: 'profile'
};

function Profile() {
  return (
    <div className={ styles.profile }>
      <Link { ...link } />
    </div>
  );
}

export default Profile;