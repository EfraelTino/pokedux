import {StarOutlined} from '@ant-design/icons';
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import './PokemonList';

const PokemonCard = ({ name }) => {
    return (
        <Card 
        className='card'
        title= {name}
        cover={<img src='' alt=''
            extra= {<StarOutlined />}
        />}
        >
            <Meta 
                description='Fire, magic'
            />
        </Card>
    );
}

export default PokemonCard;