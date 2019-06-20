import { IProductListItem } from '../components/ProductList/ProductList';

const mockProductList: IProductListItem[] = Array.from({ length: 192 }, (x, i) => ({
    title: "Anya"+i, 
    text: "Fully-configurable"+i, 
    id: i
}));

export default mockProductList;