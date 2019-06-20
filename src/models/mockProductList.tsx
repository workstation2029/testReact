import productImg from 'src/logo.svg';
import { IProductListItem } from '../components/ProductList/ProductList';

const mockProductList: IProductListItem[] = Array.from({ length: 192 }, (x, i) => ({
    img: productImg,
    title: "Anya"+i, 
    text: "Fully-configurable"+i, 
    id: i
}));

export default mockProductList;