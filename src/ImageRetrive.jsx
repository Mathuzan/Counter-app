import React, { useEffect, useState } from "react";

const ImageRetrive = () => {
  useEffect(() => {
    getImageUrl();
  });

  const [image, setImage] = useState("");

  const getImageUrl = () => {

    var fetchUrl =
      "https://cloudflare-ipfs.com/ipfs/QmfMKDqPWR833dMfGkW38usYS9GsGK2v1t3SF2aWrYZtHz";
    fetch(fetchUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resjson) => {
        console.log(resjson);
        setImage(resjson.image);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <img src={image} height={500} width={500} />

    </div>
  );
};

export default ImageRetrive;
