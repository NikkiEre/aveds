import './CatalogItem.css';

export function CatalogItem({item}) {
    return (
        <li className='catalog-item'>
            <img src={item.img} alt={item.title} />
            <h5 className='catalog-item__title'>{item.title}</h5>
            <hr className='catalog-item__hr'/>
            <p className='catalog-item__description'>{item.description}</p>
        </li>
    );
}