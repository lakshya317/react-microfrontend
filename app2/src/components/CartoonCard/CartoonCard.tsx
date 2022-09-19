import React from 'react';
import './CartoonCard.scss';

interface cartoonType {
    id: number;
    title: string;
    year: number;
    genre: Array<string>;
    image: string;
}

interface CartoonCardProps {
    cartoon: cartoonType;
}

function CartoonCard(props: CartoonCardProps) {
    const { cartoon }: { cartoon: cartoonType } = props;

    return (
        <div className="cartoon-card">
            <img className="cartoon-image" src={cartoon.image} alt={cartoon.title} />
            <div className="cartoon-info">
                <div className="cartoon-title">{cartoon.title}</div>
                <div className="cartoon=year">{cartoon.year}</div>
                <div className="cartoon-genres">
                    {cartoon.genre.map((genreItem) => {
                        return (
                            <div key={genreItem} className="cartoon-genre">
                                {genreItem}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CartoonCard;
