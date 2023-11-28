import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const context = createContext()

const ApiiData = (props) => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState(
    [
      {
        0: "7",
        1: "TEA 250 GM",
        2: "120.00",
        3: "42.00",
        4: "110.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/62da90a617625_1658491046tea 250 gm front.jpg",
        proid: "7",
        productname: "TEA 250 GM",
        mrp: "120.00",
        bv: "42.00",
        dp: "110.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/62da90a617625_1658491046tea 250 gm front.jpg"
      },
      {
        0: "2",
        1: "ARJUN CHAAL POWDER 250 GM",
        2: "299.00",
        3: "250.00",
        4: "250.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/62da8085dd630_1658486917arjun chal.jpg",
        proid: "2",
        productname: "ARJUN CHAAL POWDER 250 GM",
        mrp: "299.00",
        bv: "250.00",
        dp: "250.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/62da8085dd630_1658486917arjun chal.jpg"
      },
      {
        0: "16",
        1: "CHIA SEEDS 250GM",
        2: "360.00",
        3: "240.00",
        4: "299.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/62da90e081d8a_1658491104chia seed.jpg",
        proid: "16",
        productname: "CHIA SEEDS 250GM",
        mrp: "360.00",
        bv: "240.00",
        dp: "299.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/62da90e081d8a_1658491104chia seed.jpg"
      },
      {
        0: "18",
        1: "HARDE POWDER 200 GM",
        2: "250.00",
        3: "125.00",
        4: "250.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/62da90efb82aa_1658491119hardey powder.jpg",
        proid: "18",
        productname: "HARDE POWDER 200 GM",
        mrp: "250.00",
        bv: "125.00",
        dp: "250.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/62da90efb82aa_1658491119hardey powder.jpg"
      },
      {
        0: "52",
        1: "TEA 500 GM",
        2: "230.00",
        3: "80.00",
        4: "210.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/62dfcdf5e75fe_1658834421tea 500 gm.jpg",
        proid: "52",
        productname: "TEA 500 GM",
        mrp: "230.00",
        bv: "80.00",
        dp: "210.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/62dfcdf5e75fe_1658834421tea 500 gm.jpg"
      },
      {
        0: "60",
        1: "ASHWAGHANDHA",
        2: "180.00",
        3: "128.00",
        4: "160.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/638860a3e573b_1669882019ASHWAGANDA NEW.jpg",
        proid: "60",
        productname: "ASHWAGHANDHA",
        mrp: "180.00",
        bv: "128.00",
        dp: "160.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/638860a3e573b_1669882019ASHWAGANDA NEW.jpg"
      },
      {
        0: "76",
        1: "TEA 100 GM",
        2: "50.00",
        3: "17.00",
        4: "45.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/62dfcf3446275_1658834740tea 100 gm.jpg",
        proid: "76",
        productname: "TEA 100 GM",
        mrp: "50.00",
        bv: "17.00",
        dp: "45.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/62dfcf3446275_1658834740tea 100 gm.jpg"
      },
      {
        0: "75",
        1: "MORINGA POWDER 250 GM",
        2: "399.00",
        3: "224.00",
        4: "320.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/62da9be346560_1658493923MORINGA.jpg",
        proid: "75",
        productname: "MORINGA POWDER 250 GM",
        mrp: "399.00",
        bv: "224.00",
        dp: "320.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/62da9be346560_1658493923MORINGA.jpg"
      },
      {
        0: "81",
        1: "SAFED MUSLI POWDER 100 GM ",
        2: "350.00",
        3: "165.00",
        4: "300.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/62da9b3c6525e_1658493756musli.jpg",
        proid: "81",
        productname: "SAFED MUSLI POWDER 100 GM ",
        mrp: "350.00",
        bv: "165.00",
        dp: "300.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/62da9b3c6525e_1658493756musli.jpg"
      },
      {
        0: "102",
        1: "VALZON DISHWASH GEL 500 ML",
        2: "125.00",
        3: "33.00",
        4: "99.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6388602d1f185_1669881901dishwash gel.jpg",
        proid: "102",
        productname: "VALZON DISHWASH GEL 500 ML",
        mrp: "125.00",
        bv: "33.00",
        dp: "99.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6388602d1f185_1669881901dishwash gel.jpg"
      },
      {
        0: "101",
        1: "HING ZEERAVAN 100 GM ",
        2: "65.00",
        3: "12.40",
        4: "62.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6304a01fe5fc4_1661247519zeeravan 1.jpg",
        proid: "101",
        productname: "HING ZEERAVAN 100 GM ",
        mrp: "65.00",
        bv: "12.40",
        dp: "62.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6304a01fe5fc4_1661247519zeeravan 1.jpg"
      },
      {
        0: "100",
        1: "MOONGBADI 200 GM ",
        2: "89.00",
        3: "24.00",
        4: "80.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6304a001264bc_1661247489moongbadi 1.111.1.jpg",
        proid: "100",
        productname: "MOONGBADI 200 GM ",
        mrp: "89.00",
        bv: "24.00",
        dp: "80.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6304a001264bc_1661247489moongbadi 1.111.1.jpg"
      },
      {
        0: "99",
        1: "SOYA CHUNKS 220 GM ",
        2: "65.00",
        3: "23.60",
        4: "59.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63049fe79dbc0_1661247463soyachunks 1.1.1.jpg",
        proid: "99",
        productname: "SOYA CHUNKS 220 GM ",
        mrp: "65.00",
        bv: "23.60",
        dp: "59.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63049fe79dbc0_1661247463soyachunks 1.1.1.jpg"
      },
      {
        0: "97",
        1: "SABUDANA 500 GM ",
        2: "52.00",
        3: "9.80",
        4: "49.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63049f90b6530_1661247376sabudana 1-1.jpg",
        proid: "97",
        productname: "SABUDANA 500 GM ",
        mrp: "52.00",
        bv: "9.80",
        dp: "49.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63049f90b6530_1661247376sabudana 1-1.jpg"
      },
      {
        0: "96",
        1: "ZEERA 200 GM ",
        2: "84.00",
        3: "15.80",
        4: "79.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63244d274d12d_1663323431zeera 1.jpg",
        proid: "96",
        productname: "ZEERA 200 GM ",
        mrp: "84.00",
        bv: "15.80",
        dp: "79.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63244d274d12d_1663323431zeera 1.jpg"
      },
      {
        0: "95",
        1: "SOUNF 200 GM ",
        2: "72.00",
        3: "20.40",
        4: "68.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63244e207500f_1663323680sounf 1 1 1.jpg",
        proid: "95",
        productname: "SOUNF 200 GM ",
        mrp: "72.00",
        bv: "20.40",
        dp: "68.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63244e207500f_1663323680sounf 1 1 1.jpg"
      },
      {
        0: "94",
        1: "RAI 200 GM ",
        2: "49.00",
        3: "17.60",
        4: "44.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63244e97be492_1663323799rai 1.jpg",
        proid: "94",
        productname: "RAI 200 GM ",
        mrp: "49.00",
        bv: "17.60",
        dp: "44.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63244e97be492_1663323799rai 1.jpg"
      },
      {
        0: "93",
        1: "AJWAIN 100 GM ",
        2: "59.00",
        3: "21.20",
        4: "53.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63244f8e8ef67_1663324046ajwain new.jpg",
        proid: "93",
        productname: "AJWAIN 100 GM ",
        mrp: "59.00",
        bv: "21.20",
        dp: "53.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63244f8e8ef67_1663324046ajwain new.jpg"
      },
      {
        0: "85",
        1: "ALOEVERA HANDWASH 200 ML",
        2: "99.00",
        3: "45.00",
        4: "90.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/637f2c07667ba_16692787270011a9bd-0c26-4919-92ea-b47e31e69a0f.jpg",
        proid: "85",
        productname: "ALOEVERA HANDWASH 200 ML",
        mrp: "99.00",
        bv: "45.00",
        dp: "90.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/637f2c07667ba_16692787270011a9bd-0c26-4919-92ea-b47e31e69a0f.jpg"
      },
      {
        0: "121",
        1: "ROCK SALT 500 GM ",
        2: "65.00",
        3: "19.00",
        4: "49.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6386f8dfe4919_1669789919ROCK SALT.jpg",
        proid: "121",
        productname: "ROCK SALT 500 GM ",
        mrp: "65.00",
        bv: "19.00",
        dp: "49.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6386f8dfe4919_1669789919ROCK SALT.jpg"
      },
      {
        0: "122",
        1: "BLACK SALT 500 GM ",
        2: "65.00",
        3: "19.00",
        4: "49.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63885f8b0567d_1669881739BLACK SALT.jpg",
        proid: "122",
        productname: "BLACK SALT 500 GM ",
        mrp: "65.00",
        bv: "19.00",
        dp: "49.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63885f8b0567d_1669881739BLACK SALT.jpg"
      },
      {
        0: "86",
        1: "PROTEIN SHAMPOO WITH CONDITIONER 200 ML",
        2: "250.00",
        3: "111.00",
        4: "220.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63885f7051173_1669881712SHAMPOO.JPG1.jpg",
        proid: "86",
        productname: "PROTEIN SHAMPOO WITH CONDITIONER 200 ML",
        mrp: "250.00",
        bv: "111.00",
        dp: "220.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63885f7051173_1669881712SHAMPOO.JPG1.jpg"
      },
      {
        0: "120",
        1: "VALZON PANCH TULSI ",
        2: "199.00",
        3: "75.00",
        4: "169.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/639daf074ed61_1671278343IMG_9775.jpeg",
        proid: "120",
        productname: "VALZON PANCH TULSI ",
        mrp: "199.00",
        bv: "75.00",
        dp: "169.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/639daf074ed61_1671278343IMG_9775.jpeg"
      },
      {
        0: "88",
        1: "BELGIRI POWDER 200 GM ",
        2: "199.00",
        3: "106.00",
        4: "170.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63886073a4c0c_1669881971BELGIRI POWDER.jpg",
        proid: "88",
        productname: "BELGIRI POWDER 200 GM ",
        mrp: "199.00",
        bv: "106.00",
        dp: "170.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63886073a4c0c_1669881971BELGIRI POWDER.jpg"
      },
      {
        0: "124",
        1: "COMPOUND PHINAYAL ",
        2: "179.00",
        3: "64.00",
        4: "152.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63909bdf727bf_1670421471COMPOUND PHINAYAL.png",
        proid: "124",
        productname: "COMPOUND PHINAYAL ",
        mrp: "179.00",
        bv: "64.00",
        dp: "152.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63909bdf727bf_1670421471COMPOUND PHINAYAL.png"
      },
      {
        0: "125",
        1: "VALZON TOILET CLEANER ",
        2: "95.00",
        3: "25.00",
        4: "75.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63909c4e98db1_1670421582TOILET CLENAER.jpg",
        proid: "125",
        productname: "VALZON TOILET CLEANER ",
        mrp: "95.00",
        bv: "25.00",
        dp: "75.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/63909c4e98db1_1670421582TOILET CLENAER.jpg"
      },
      {
        0: "134",
        1: "VALZON CORIANDER POWDER 500 GM",
        2: "210.00",
        3: "58.00",
        4: "172.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6482e967d0201_1686301031coriander.jpg",
        proid: "134",
        productname: "VALZON CORIANDER POWDER 500 GM",
        mrp: "210.00",
        bv: "58.00",
        dp: "172.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6482e967d0201_1686301031coriander.jpg"
      },
      {
        0: "135",
        1: "VALZON RED CHILLI POWDER 500 GM",
        2: "249.00",
        3: "67.00",
        4: "199.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6482ea65366db_1686301285red_chili.jpg",
        proid: "135",
        productname: "VALZON RED CHILLI POWDER 500 GM",
        mrp: "249.00",
        bv: "67.00",
        dp: "199.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6482ea65366db_1686301285red_chili.jpg"
      },
      {
        0: "131",
        1: "VALZON RED CHILLI POWDER 200 GM ",
        2: "90.00",
        3: "32.00",
        4: "81.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6482f5f447030_1686304244red_chili.jpg",
        proid: "131",
        productname: "VALZON RED CHILLI POWDER 200 GM ",
        mrp: "90.00",
        bv: "32.00",
        dp: "81.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6482f5f447030_1686304244red_chili.jpg"
      },
      {
        0: "132",
        1: "VALZON GARAM MASALA 100 GM",
        2: "110.00",
        3: "35.00",
        4: "88.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6482f735d47de_1686304565chatmasala (1).png",
        proid: "132",
        productname: "VALZON GARAM MASALA 100 GM",
        mrp: "110.00",
        bv: "35.00",
        dp: "88.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6482f735d47de_1686304565chatmasala (1).png"
      },
      {
        0: "133",
        1: "VALZON CHAT MASALA 100 GM",
        2: "110.00",
        3: "41.00",
        4: "82.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6482f8540bd44_1686304852chat masala (1).jpg",
        proid: "133",
        productname: "VALZON CHAT MASALA 100 GM",
        mrp: "110.00",
        bv: "41.00",
        dp: "82.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6482f8540bd44_1686304852chat masala (1).jpg"
      },
      {
        0: "136",
        1: "CHLOROPHYLL JUICE 500 ML",
        2: "1299.00",
        3: "501.00",
        4: "1111.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64870197b798f_1686569367CHLOROPHYL JUICE .jpeg",
        proid: "136",
        productname: "CHLOROPHYLL JUICE 500 ML",
        mrp: "1299.00",
        bv: "501.00",
        dp: "1111.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64870197b798f_1686569367CHLOROPHYL JUICE .jpeg"
      },
      {
        0: "137",
        1: "SEA BUCKTHORN JUICE 500 ML ",
        2: "899.00",
        3: "302.00",
        4: "769.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6487027b4f49b_1686569595SEA BUKTHORN JUICE .jpeg",
        proid: "137",
        productname: "SEA BUCKTHORN JUICE 500 ML ",
        mrp: "899.00",
        bv: "302.00",
        dp: "769.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6487027b4f49b_1686569595SEA BUKTHORN JUICE .jpeg"
      },
      {
        0: "138",
        1: "VALZON DETERGENT MACHINE WASH 1 KG",
        2: "129.00",
        3: "30.00",
        4: "116.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6487040db0727_1686569997MACHINE WASH.jpeg",
        proid: "138",
        productname: "VALZON DETERGENT MACHINE WASH 1 KG",
        mrp: "129.00",
        bv: "30.00",
        dp: "116.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6487040db0727_1686569997MACHINE WASH.jpeg"
      },
      {
        0: "139",
        1: "VALZON DETERGENT POWDER ",
        2: "62.00",
        3: "14.00",
        4: "56.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/648704ca23776_1686570186DETERGENT POWDER .jpeg",
        proid: "139",
        productname: "VALZON DETERGENT POWDER ",
        mrp: "62.00",
        bv: "14.00",
        dp: "56.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/648704ca23776_1686570186DETERGENT POWDER .jpeg"
      },
      {
        0: "140",
        1: "VALZON DETERGENT CAKE 180 GM ",
        2: "15.00",
        3: "1.00",
        4: "10.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6487055d7272a_1686570333DETERGENT CAKE .jpeg",
        proid: "140",
        productname: "VALZON DETERGENT CAKE 180 GM ",
        mrp: "15.00",
        bv: "1.00",
        dp: "10.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6487055d7272a_1686570333DETERGENT CAKE .jpeg"
      },
      {
        0: "141",
        1: "VALZON LIQUID DETERGENT 500 ML",
        2: "100.00",
        3: "20.00",
        4: "90.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64870695cfe2e_1686570645LIQUID .jpeg",
        proid: "141",
        productname: "VALZON LIQUID DETERGENT 500 ML",
        mrp: "100.00",
        bv: "20.00",
        dp: "90.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64870695cfe2e_1686570645LIQUID .jpeg"
      },
      {
        0: "142",
        1: "VALZON GLASS CLEANER ",
        2: "100.00",
        3: "20.00",
        4: "90.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6487070619913_1686570758GLASS CLEANER .jpeg",
        proid: "142",
        productname: "VALZON GLASS CLEANER ",
        mrp: "100.00",
        bv: "20.00",
        dp: "90.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/6487070619913_1686570758GLASS CLEANER .jpeg"
      },
      {
        0: "129",
        1: "VALZON CORIANDER POWDER 200 GM ",
        2: "75.00",
        3: "35.00",
        4: "69.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64870d8d3d31c_1686572429CORIDNADER 200 GM.jpeg",
        proid: "129",
        productname: "VALZON CORIANDER POWDER 200 GM ",
        mrp: "75.00",
        bv: "35.00",
        dp: "69.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64870d8d3d31c_1686572429CORIDNADER 200 GM.jpeg"
      },
      {
        0: "128",
        1: "VALZON TURMERIC POWDER 200 GM ",
        2: "75.00",
        3: "34.00",
        4: "67.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64870d9ec7e89_1686572446TURMERIC 200 GM .jpeg",
        proid: "128",
        productname: "VALZON TURMERIC POWDER 200 GM ",
        mrp: "75.00",
        bv: "34.00",
        dp: "67.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64870d9ec7e89_1686572446TURMERIC 200 GM .jpeg"
      },
      {
        0: "146",
        1: "VALZON LEMON CONCENTRATE FLOOR CLEANER 200 ML",
        2: "170.00",
        3: "64.00",
        4: "152.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64898b7f90bb2_1686735743lemon concentrate .jpeg",
        proid: "146",
        productname: "VALZON LEMON CONCENTRATE FLOOR CLEANER 200 ML",
        mrp: "170.00",
        bv: "64.00",
        dp: "152.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64898b7f90bb2_1686735743lemon concentrate .jpeg"
      },
      {
        0: "145",
        1: "VALZON SANDAL CONCENTRATE FLOOR CLEANER 200 ML",
        2: "170.00",
        3: "64.00",
        4: "152.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64898b8d9e339_1686735757sandal concentrate .jpeg",
        proid: "145",
        productname: "VALZON SANDAL CONCENTRATE FLOOR CLEANER 200 ML",
        mrp: "170.00",
        bv: "64.00",
        dp: "152.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64898b8d9e339_1686735757sandal concentrate .jpeg"
      },
      {
        0: "144",
        1: "VALZON MOGRA CONCENTRATE FLOOR CLEANER 200 ML",
        2: "170.00",
        3: "64.00",
        4: "152.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64898b9c4d08b_1686735772mogra concentrate.jpeg",
        proid: "144",
        productname: "VALZON MOGRA CONCENTRATE FLOOR CLEANER 200 ML",
        mrp: "170.00",
        bv: "64.00",
        dp: "152.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64898b9c4d08b_1686735772mogra concentrate.jpeg"
      },
      {
        0: "143",
        1: "VALZON ROSE CONCENTRATED FLOOR CLEANER 200 ML",
        2: "170.00",
        3: "64.00",
        4: "152.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64898bae0e88b_1686735790rose concentrate.jpeg",
        proid: "143",
        productname: "VALZON ROSE CONCENTRATED FLOOR CLEANER 200 ML",
        mrp: "170.00",
        bv: "64.00",
        dp: "152.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64898bae0e88b_1686735790rose concentrate.jpeg"
      },
      {
        0: "127",
        1: "VALZON PREMIUM POHA 1 KG ",
        2: "80.00",
        3: "29.00",
        4: "70.00",
        5: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64898c014d69a_1686735873poha.jpeg",
        proid: "127",
        productname: "VALZON PREMIUM POHA 1 KG ",
        mrp: "80.00",
        bv: "29.00",
        dp: "70.00",
        proimg: "https://panel7.tspltest.com/ecommerce/images/products/vlz/64898c014d69a_1686735873poha.jpeg"
      }
    ])

  const [cartData, setCartData] = useState([])
  
  // function newRemoveData(i) {
  //   const indexOfItem = cartData.indexOf(i)
  //   const updateData = [...cartData]
  //   updateData.splice(indexOfItem, 1)
  //   setCartData(updateData)
  // }
  const addToCart = (id) => {
    const findData = productData.find((i) => i.proid == id)
    // setCartData([...cartData, {findData}])
    // console.log(productData.find((i)=>i.proid==id));
    cartData.push(findData)
    console.log(cartData);
  }

  const newRemoveData = (id) => {
    const findData = productData.find((i) => i.proid == id)
    const indexOfItem = cartData.indexOf(findData)
    // setCartData([...cartData, {findData}])
    // console.log(productData.find((i)=>i.proid==id));
    cartData.splice(indexOfItem,1)
    console.log(cartData);
    navigate("/cart")
  }
 
  //  useEffect(()=>{
  //   axios.get('https://fakestoreapi.com/products')
  //     .then(response => {
  //       console.log(response.data);
  //       setProductData(response.data);
  //     })
  //     .catch(error => {

  //       console.error('Error fetching data:', error);
  //     });

  //  },[])
  return (

    <div>
      <context.Provider value={{ cartData, productData, addToCart,newRemoveData}}>
        {props.children}
      </context.Provider>
    </div>
  )
}

export default ApiiData
