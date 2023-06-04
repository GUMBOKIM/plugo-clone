export interface Product {
    productId: number;
    name: string;
    desc: string;
    price: number;
    isStock: boolean;
    stock?: number;
    images: string[];
    colorOption?: string[];
    options?: {
        optionId: number;
        optionName: string;
        items: {
           itemId: number;
           itemName: string;
           images: string[];
           stock: number;
           price: number;
        }[]
    }[];
}

const ProductData: Product[]  = [
    {
        productId: 1,
        name: "이상해씨",
        desc: "태어나서부터 얼마 동안은 등의 씨앗으로부터 영양을 공급받아 크게 성장한다.",
        price: 10000,
        isStock: true,
        stock: 3,
        images: ["https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000101.png"]
    },
    {
        productId: 2,
        name: "이상해풀",
        desc: "등의 봉오리가 부풀어 오르면 달콤한 냄새가 감돌기 시작한다. 큰 꽃이 필 조짐이다.",
        price: 20000,
        isStock: true,
        stock: 100,
        images: ["https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000201.png"]
    },
    {
        productId: 3,
        name: "이상해꽃",
        desc: "비가 내린 다음 날은 등의 꽃향기가 강해진다. 향기에 이끌려 포켓몬이 모여든다.",
        price: 30000,
        isStock: false,
        stock: 0,
        images: ["https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000301.png"]
    },
    {
        productId: 4,
        name: "파이리",
        desc: "파이리 꼬리의 불꽃은 생명의 등불이다. 건강할 때는 불꽃도 강하게 타오른다.",
        price: 10000,
        isStock: true,
        stock: 100,
        images: ["https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000401.png"]
    },
    {
        productId: 5,
        name: "리자드",
        desc: "리자드가 사는 바위산을 한밤중에 올려다보면 꼬리의 불꽃이 별처럼 보인다.",
        price: 20000,
        isStock: true,
        stock: 100,
        images: ["https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000501.png"]
    },
    {
        productId: 6,
        name: "리자몽",
        desc: "힘든 싸움을 경험한 리자몽일수록 불꽃 온도가 높아진다고 전해진다.",
        price: 30000,
        isStock: false,
        stock: 0,
        images: ["https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000601.png"]
    },
    {
        productId: 7,
        name: "이브이",
        desc: "환경 변화에 곧바로 적응할 수 있도록 여러 형태로 진화할 수 있는 가능성을 가지고 있다.",
        price: 40000,
        isStock: true,
        images: [
            "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013301.png",
            "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013401.png",
            "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013501.png",
            "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013601.png",
        ],
        colorOption: ["brown", "blue", "yellow", "red"],
        options: [
            {
                optionId: 1,
                optionName: "진화",
                items: [
                    {
                        itemId: 1,
                        itemName: "샤미드",
                        images: ["https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013401.png"],
                        stock: 100,
                        price: 40001,
                    },
                    {
                        itemId: 2,
                        itemName: "쥬피썬더",
                        images: ["https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013501.png"],
                        stock: 200,
                        price: 40002,
                    },
                    {
                        itemId: 3,
                        itemName: "부스터",
                        images: ["https://data1.pokemonkorea.co.kr/newdata/pokedex/full/013601.png"],
                        stock: 0,
                        price: 40000,
                    }
                ]
            }
        ]
    },
]

export default ProductData;