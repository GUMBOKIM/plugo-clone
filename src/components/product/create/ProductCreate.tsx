import * as S from "./ProductCreate.style";
import useProductQuery from "../../../hook/query/useProductQuery";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const ProductCreate = () => {
    const navigate = useNavigate();
    const {createProduct} = useProductQuery();
    const {mutate} = createProduct;

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [images, setImages] = useState<string[]>([]);

    const handleClickImageAdd = () => {
        const input = prompt("이미지 url을 추가해주세요");
        if (input !== null && input !== "") {
            setImages((prev) => [...prev, input]);
        }
    }

    const handleClickImageRemove = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
    }

    const handleClickCreateButton = () => {
        mutate({
            name,
            desc,
            price,
            stock,
            isStock: stock > 0,
            images
        }, {
            onSuccess: (productId) => navigate(`/product/${productId}`)
        })
    }

    return (
        <S.Container>
            <div>상품명 : <input value={name} onChange={(e) => setName(e.target.value)} type="text"/></div>
            <div>설명 : <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text"/></div>
            <div>가격 : <input value={price} onChange={(e) => setPrice(Number(e.target.value))} type="number"/></div>
            <div>재고 : <input value={stock} onChange={(e) => setStock(Number(e.target.value))} type="number"/></div>
            <div>
                <div>이미지 <button onClick={handleClickImageAdd}>추가</button></div>
            </div>
            {images.length > 0 && <div><span>누르면 삭제 됩니다.</span></div>}
            <div>
                {images.map((image, index) => <img key={image + index} width={100} height={100} src={image}
                                                   onClick={() => handleClickImageRemove(index)}/>)}
            </div>
            <button type="button" onClick={handleClickCreateButton}>생성</button>
        </S.Container>
    )
}

export default ProductCreate;