const RoadMapItem = ({ id, icon, title, text,text1 }) => {
  return (
    <div
      className={
        id % 2 === 0
          ? `v2_roadmap_card_item v2_roadmap_card_item_odd`
          : `v2_roadmap_card_item v2_roadmap_card_item_even`
      }
    >
      <div className="v2_roadmap_card_box"></div>
      <div className="v2_roadmap_card_content">
        <h3>
          {title}{" "}
          <span>
            <img src={icon} alt="bithu nft road map" />
          </span>
        </h3>
        <p>{text}</p>
        <p>{text1}</p>
      </div>
    </div>
  );
};

export default RoadMapItem;
