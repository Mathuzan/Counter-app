import React, { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

const ImageRetrive = () => {
  useEffect(() => {
    getImageUrl();
  });

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const url =
    //   "https://cloudflare-ipfs.com/ipfs/QmfMKDqPWR833dMfGkW38usYS9GsGK2v1t3SF2aWrYZtHz";

    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(url);
    //     const json = await response.json();
    //     json.then(setLoading(true))
    //     console.log(json);
    //   } catch (error) {
    //     console.log("error", error);
    //   }

    // };

    // fetchData();
    getImageUrl();
  }, []);

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
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      {loading && loading == true ? (
        <FadeLoader size={50} color={"#123abc"} loading={loading} />
      ) : (
        <div>
          <img src={image} height={500} width={500} />
        </div>
      )}
    </>
  );
};

export default ImageRetrive;
