import Link from '../link/Link';

const link = {
  href: '/profile',
  name: 'Личный кабинет',
  current: false,
  icon: 'profile'
};

function Profile() {
  return (
    <Link { ...link } />
  );
}

export default Profile;