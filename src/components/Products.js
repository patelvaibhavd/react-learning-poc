import ProductCard  from "./ProductCard";
const Products = (props) => {
    return (
        <ul id="concepts">
            <ProductCard data={props.data[0]}></ProductCard>
            <ProductCard data={props.data[1]}></ProductCard>
            <ProductCard data={props.data[2]}></ProductCard>
        </ul>
    );
}

export default Products;