import { DishCart } from "@/types/dishes"
import styles from "./CartList.module.scss"
import LoadingSpinner from "../ui/LoadingSpinner/LoadingSpinner"
import CartItem from "../CartItem/CartItem"

const CartList = ({data} : {data: DishCart[]}) => {
    if(data && data?.length && data.length > 0){
        return <div className={styles.container}>
            {data.map((el)=>(
                <CartItem item={el} key={el.id}/>
            ))}
        </div>
    }
    return <LoadingSpinner/>
}

export default CartList
