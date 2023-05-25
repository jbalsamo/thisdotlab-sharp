import { NavLink } from "@solidjs/router";
import { cuteSharps } from "../pages/LikedSharps";

const Header = () => {
  return (
    <div>
      <h2 class="text-decoration-none">
        <NavLink href="/">Sharp Project Data</NavLink>
      </h2>
      <small>
        <NavLink href="/likedSharps">
          Liked Sharps {cuteSharps().length}
        </NavLink>
      </small>
    </div>
  );
};

export default Header;
