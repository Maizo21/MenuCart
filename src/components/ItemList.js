import { useState, useEffect } from "react";
import Item from "./Item";
import Loading from "./Loading";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemList = (data) => {
  let [itemData, setItemData] = useState(null);
  /* 
  let allItemsData = new Promise((response, reject) => {
    setTimeout(() => {
      response([
        {
          image:
            "https://img.gkbcdn.com/s3/p/2019-07-12/global-version-xiaomi-mi-a3-6-088-inch-4gb-64gb-smartphone-blue-1574132697059.jpg",
          title: "Xiaomi Mi A3",
          description:
            "6.088 Inch HD+Screen 4G LTE Smartphone Snapdragon 665 4GB 64GB 48.0MP+8.0MP+2.0MP",
          id: 1,
          stock: 10,
          price: 8888,
        },
        {
          image:
            "https://p4.wallpaperbetter.com/wallpaper/424/884/942/4k-samsung-galaxy-s9-wallpaper-preview.jpg",
          title: "Samsung Galaxy S9",
          description:
            "Sistema Operativo: Android 8 Cámara principal: 12 MP Cámara frontal: 8 MP ºBatería: 3000 mAh.",
          id: 2,
          stock: 8,
          price: 10999,
        },
        {
          image:
            "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg",
          title: "iPhone 12 Pro",
          description:
            "Procesador: Apple A14 Bionic Sistema Operativo: iOS 14  Memoria Interna: 128 GB, 256 GB.",
          id: 3,
          stock: 5,
          price: 5000,
        },
        {
          image:
            "https://m.media-amazon.com/images/I/616L4JGA0pL._AC_SX466_.jpg",
          title: "Huawei P40 5G",
          description:
            "Procesador HiSilicon Kirin 990 5G Cámara frontal de 32 MP Capacidad de la batería: 3800 mAh",
          id: 4,
          stock: 2,
          price: 2000,
        },
      ]);
    }, 2000);
  });
*/
  useEffect(() => {
    if (!itemData) {
      setItemData(data);
    }
    console.log(data);
  }, [itemData]);

  return (
    <>
      {!itemData ? <Loading /> : null}
      <div className="container itemList-container">
        <div className="d-flex gap-2 flex-wrap">
          {itemData &&
            itemData != null &&
            itemData.data.map((item_data) => <Item item={item_data} />)}
        </div>
      </div>
    </>
  );
};

export default ItemList;
