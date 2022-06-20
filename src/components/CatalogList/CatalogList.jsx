import { CatalogItem } from '../CatalogItem/CatalogItem';
import './CatalogList.css';

const catalog_cards = [
    {
        title: 'Онлайн-прием',
        description: 'Рыба текст',
        img: './img/item_1.svg'

    },
    {
        title: 'Экстренный Случай',
        description: 'Рыба текст',
        img: './img/item_2.svg'

    },
    {
        title: 'Лечение рака',
        description: 'Рыба текст',
        img: './img/item_3.svg'

    },
];

export function CatalogList() {
    return (
        <ul className='catalog-list'>
            {
                catalog_cards.map((card) => <CatalogItem item={card} key={card.title} />)
            }
        </ul>
    )
}