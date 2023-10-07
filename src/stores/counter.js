import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'Adidas Bag EC Organizer ', 
      img: 'https://image.makewebeasy.net/makeweb/m_1920x0/EnWusCjgL/ADIDAS/__ED6877_01_standard.jpg', 
      price: 700 },
    { name: ' Converse  สะพายข้าง ',
      img: 'https://p-th.ipricegroup.com/210496133308d01e0cfec4dd1bca8a88fd8fab17_0.jpg', 
      price: 1200 },
    { name: ' FILA Legacy green ',
      img: 'https://img.priceza.com/img1/314/0859/314-20230714164650-145305336609862078.jpg',
      price: 500 },
    { name: 'FILA Legacy blue ',
      img: 'https://img.priceza.com/img1/314/0859/314-20230714170713-145306560007418956.jpg',
      price: 490 },
    { name: ' Crossbody Bag Heritage Smit BA5898-010 BK ',
      img: 'https://img.priceza.com/img2/7077/0753/7077-20210630055218-86449510392640149.jpg',
      price: 900 },
    { name: ' CONVERSE MANHATTAN DUFFLE BAG ', 
      img: 'https://img.priceza.com/img2/314/0677/314-20200812085115-58638724325038351.jpg',
      price: 1000 },
    { name: ' Converse Borderline mini bag (1620) ',
      img: 'https://img.priceza.com/img2/314/0676/314-20200812055424-58628110915572881.jpg',
      price: 1400 },
    { name: ' Nike Bag Women GYM Club ',
      img: 'https://img.priceza.com/img1/7077/1587/7077-20230715115320-145374128972654971.jpg',
      price: 1500 },
    { name: 'Shoulder bag fashion ',
      img: 'https://img.priceza.com/img1/314/0911/314-20230728193054-146524814943219393.jpg',
      price: 300 },
    { name: ' NEOCROC SEASONAL ',
      img: 'https://www.lacoste.co.th/pub/media/catalog/product//9/_/9_s_nu4290nz_l76_nu4290nz_l76_32.jpg',
      price: 2520 },


  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});