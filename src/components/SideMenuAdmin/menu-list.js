import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import paths from '../../constants/path';

const listLinks = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.Order,
        icon: WorkOutlineIcon
    },
    {
        id: 2,
        label: 'Listar Produtos',
        link: paths.Products,
        icon: ShoppingCartIcon
        
    },
    {
        id: 3,
        label: 'Novo Produtos',
        link: paths.NewProducts,
        icon: AddIcon
    }
]

export default listLinks