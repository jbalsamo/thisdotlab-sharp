import { limit, offset } from "../pages/Home";
import { cuteSharps, setCuteSharps } from "../pages/LikedSharps";

const likeSharps = (sharp) => {
  setCuteSharps([sharp, ...cuteSharps()]);
};

const unLikeSharps = (sharpId) => {
  const sharpState = cuteSharps()?.filter(
    (item) => item.project_title !== sharpId
  );
  setCuteSharps(sharpState);
};

const sharpIsCute = (sharpId) => {
  const sharps = cuteSharps()?.filter((item) => item.project_title === sharpId);
  return sharps?.length > 0;
};

const SharpCard = ({ sharp }) => {
  return (
    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        Type is {sharp.project_output_type}
      </div>
      <div class="card-body">
        <p>
          <b>Title:</b> {sharp.project_title}
        </p>
        <p>
          <b>Contributors:</b> {sharp.contributors_team}
        </p>
        <p class="card-text">
          <b>Description:</b> {sharp.project_description}
        </p>
      </div>
      <div class="card-footer">
        {sharpIsCute(sharp.project_title) ? (
          <button
            class="btn btn-danger"
            onclick={() => unLikeSharps(sharp.project_title)}
          >
            UnLike
          </button>
        ) : (
          <button class="btn btn-primary" onclick={() => likeSharps(sharp)}>
            Like
          </button>
        )}
      </div>
    </div>
  );
};

export default SharpCard;
