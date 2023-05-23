import Link from "../../link/Link";

import styles from "./ProfileButton.module.css";

const link = {
  href: "/profile",
  name: "Личный кабинет",
  current: false,
  icon: "profile",
};

function ProfileButton() {
  return (
    <div className={styles.profile}>
      <Link {...link} />
    </div>
  );
}

export default ProfileButton;
