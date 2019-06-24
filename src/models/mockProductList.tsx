import productImg from 'src/logo.svg';
import { IProductListItem } from '../components/ProductList/ProductList';

const name: string[] = [
    'Anya',
    'Jane',
    'Glory',
    'dmitry',
    'Sergo',
    'Broot'
];
const lengthName = name.length;

const getRandomName = () => {
    return name[Math.floor(Math.random() * (lengthName - 0) + 0)];
}

const mockProductList: IProductListItem[] = Array.from({ length: 192 }, (x, i) => ({
    img: productImg,
    title: getRandomName(), 
    text: "Fully-configurable"+i, 
    id: i
}));

export default mockProductList;