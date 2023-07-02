
import productImg1 from "./../assets/img/products/product-1.jpg";
import productImg2 from "./../assets/img/products/product-2.jpg";
import productImg3 from "./../assets/img/products/product-3.jpg";
import productImg4 from "./../assets/img/products/product-4.jpg";
import productImg5 from "./../assets/img/products/product-5.jpg";
import productImg6 from "./../assets/img/products/product-6.jpg";
import productImg7 from "./../assets/img/products/product-7.jpg";
import productImg8 from "./../assets/img/products/product-8.jpg";
import productImg9 from "./../assets/img/products/product-9.jpg";

const products = [
  {
    id: "pr-1",
    title: "Cristal (pink carnations with mix flowers)",
    price: 100.00,
    discount: 0.1,
    get discountPrice() {
      return this.price - this.price * this.discount;
    },
    img: productImg1,
    isOnSale: true,
    isSoldOut: false,
    rate: 99,
    date: "10.10.2022",
    amount: 10,
  },
  {
    id: "pr-2",
    title: "Milana (bouquet with garden roses)",
    price: 245.00,
    discount: 0,
    get discountPrice() {
      return this.price - this.price * this.discount;
    },
    img: productImg2,
    isOnSale: false,
    isSoldOut: true,
    rate: 98,
    date: "09.13.2023",
    amount: 0,
  },
  {
    id: "pr-3",
    title: "Diamond bouquet pink roses",
    price: 125.00,
    discount: 0,
    get discountPrice() {
      return this.price - this.price * this.discount;
    },
    img: productImg3,
    isOnSale: false,
    isSoldOut: false,
    rate: 85,
    date: "08.15.2023",
    amount: 10,
  },
  {
    id: "pr-4",
    title: "Bouquet Hyacinth pink",
    price: 150.00,
    discount: 0,
    get discountPrice() {
      return this.price - this.price * this.discount;
    },
    img: productImg4,
    isOnSale: false,
    isSoldOut: false,
    rate: 66,
    date: "08.16.2023",
    amount: 10,
  },
  {
    id: "pr-5",
    title: "Bouquet rose bush odilia",
    price: 245.00,
    discount: 0,
    get discountPrice() {
      return this.price - this.price * this.discount;
    },
    img: productImg5,
    isOnSale: false,
    isSoldOut: false,
    rate: 22,
    date: "01.21.2023",
    amount: 10,
  },
  {
    id: "pr-6",
    title: "Bouquet of delicate carnation rose",
    price: 210.00,
    discount: 0.25,
    get discountPrice() {
      return this.price - this.price * this.discount;
    },
    img: productImg6,
    isOnSale: true,
    isSoldOut: false,
    rate: 100,
    date: "02.14.2023",
    amount: 10,
  },
  {
    id: "pr-7",
    title: "45 red France roses",
    price: 150.00,
    discount: 0.4,
    get discountPrice() {
      return this.price - this.price * this.discount;
    },
    img: productImg7,
    isOnSale: true,
    isSoldOut: false,
    rate: 66,
    date: "05.14.2023",
    amount: 10,
  },
  {
    id: "pr-8",
    title: "Annet (white dahlias)",
    price: 245.00,
    img: productImg8,
    discount: 0.5,
    get discountPrice() {
      return this.price - this.price * this.discount;
    },
    isOnSale: true,
    isSoldOut: true,
    rate: 33,
    date: "06.14.2023",
    amount: 0,
  },
  {
    id: "pr-9",
    title: "Garden roses in a bouquets",
    price: 120.00,
    discount: 0.3,
    get discountPrice() {
      return this.price - this.price * this.discount;
    },
    img: productImg9,
    isOnSale: true,
    isSoldOut: false,
    rate: 86,
    date: "04.04.2023",
    amount: 10,
  },
];

export default products;
