// ------------------------------------------------------------
// All Photos
// ------------------------------------------------------------

export default function Photos({ username, token, photos }) {

  return (
    <div className="profile_card">
      <div className="profile_card_header">
        Photos
        <div className="profile_header_link">See all photos</div>
      </div>
      <div className="profile_card_count">
        {photos?.length === 0
          ? ""
          : photos?.length === 1
          ? "1 Photo"
          : `${photos?.length} photos`}
      </div>
      <div className="profile_card_grid">
        {photos?.length &&
          photos?.map((img) => (
            <div className="profile_photo_card" key={img}>
              <img src={img} alt="" />
            </div>
          ))}
      </div>
    </div>
  );

}
