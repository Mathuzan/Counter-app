import React, { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";


// Adding page spinner to the page.
const ImageRetrive = () => {
  useEffect(() => {
    getImageUrl();
  });

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
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
      })
      then(Response => {
        const (body)=Response
        setPost(body)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <img src={image} height={500} width={500} />

      <FadeLoader size={50} color={"#123abc"} loading={loading} />
      {post? post : <Backdrop className={classes.backdrop} open>
        <FadeLoader size={50} color={"#123abc"} loading={loading} />
      </Backdrop>}
    </div>
  );
};

export default ImageRetrive;
