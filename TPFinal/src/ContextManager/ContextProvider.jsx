import React,{createContext, useContext, useState, useEffect} from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {
    const products = [
        {
            nombre: "Notebook Gamer Acer Nitro 5 15.6",
            precio: 505999,
            id: 1,
            stock: 3,
            descripcion: "FHD Core i5 11400H 8GB 256GB SSD NVMe GTX 1650 W11 Home GAME PASS ULTIMATE 1 MONTH",
            imagen: "https://mexx-img-2019.s3.amazonaws.com/Notebook-Gamer-Acer-Nitro-5-Ryzen-7-8Gb-Ssd-512Gb-GTX1650-4Gb-15-Win11_45290_1.jpeg"
        },
        {
            nombre: "Galaxy S21 FE 5G",
            precio: 274999,
            id: 2,
            stock: 12,
            descripcion: "Fotografía profesional en tu bolsillo Descubre infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Pon a prueba tu creatividad y juega con la iluminación, diferentes planos y efectos para obtener grandes resultados. Perfecta para los amantes del plano detalle. Su zoom óptico te ofrecerá la posibilidad de realizar acercamientos sin que tus capturas pierdan calidad.",
            imagen: "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-g990ezaaaro/gallery/ar-galaxy-s21-fe-g990-408811-sm-g990ezaaaro-530832016"
        },
        {
            nombre: "Monitor LG UltraWide 26WQ500 LCD 25.7",
            precio: 106999,
            id: 3,
            stock: 4,
            descripcion: "Este monitor te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 2560 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Una de sus virtudes es que posee pantalla antirreflejo, de esta manera no verás reflejado lo que está detrás de vos y vas a evitar forzar tu vista para enfocar el contenido. Su tiempo de respuesta de 5 ms lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.",
            imagen: "https://app.contabilium.com/files/explorer/20302/Productos-Servicios/concepto-9327724.jpg"
        },
        {
            nombre: "Teclado mecánico Corsair Rapidfire K70",
            precio: 184999,
            id: 4,
            stock: 25,
            descripcion: "Distinción a todo color. Su retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados. Tecnología antighosting. Este dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.",
            imagen: "https://d2ulnfq8we0v3.cloudfront.net/cdn/703127/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/7/b/7b50c670b4caee39a3200683bb19424f_11.jpg"
        },
        {
            nombre: "Mouse Logitech G502",
            precio: 37999,
            id: 5,
            stock: 18,
            descripcion: "Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.",
            imagen: "https://logitechar.vtexassets.com/arquivos/ids/157034/910-005550_2.png?v=636985500388200000"
        },
        {
            nombre: "Notebook Dell XPS 13",
            precio: 129999,
            id: 6,
            stock: 3,
            descripcion: "Caracteristicas Basicas: -Intel Core i7-1250U de 12.ª generación (12 MB de caché, 10 núcleos, hasta 4,70 GHz Turbo)-Pantalla 13",
            imagen: "https://www.inovamusicnet.com/wp-content/uploads/2021/12/91gwcae38L._AC_SL1500_.jpg"
        },
        {
            nombre: "iPhone 13 Pro",
            precio: 949999,
            id: 7,
            stock: 3,
            descripcion: "Un sistema de cámaras revolucionario. Una pantalla con una respuesta tan fluida que cada toque parece magia.",
            imagen: "https://www.macstation.com.ar/img/productos/2595-2.jpg"
        },
        {
            nombre: "Monitor ASUS ROG Swift",
            precio: 391899,
            id: 8,
            stock: 6,
            descripcion: "Un monitor de alta frecuencia de actualización diseñado para gamers.",
            imagen: "https://mexx-img-2019.s3.amazonaws.com/Monitor-Gamer-25-Asus-Rog-Swift-Full-Hd-360Hz-1Ms-PG259QNR_44670_1.jpeg"
        },
        {
            nombre: "Teclado inalámbrico Microsoft",
            precio: 13299,
            id: 9,
            stock: 35,
            descripcion: "Microsoft es sinónimo de calidad desde hace más de 40 años. Su misión es dotar de medios a todas las personas y organizaciones del planeta para que sean más productivas. Los kits de teclados y mouses de esta marca poseen una alta durabilidad y ofrecen soluciones variadas destinadas a un público general.",
            imagen: "https://www.marstech.com.ar/Temp/App_WebSite/App_PictureFiles/Items/885370997712_800.jpg"
        },
        {
            nombre: "Mouse Razer DeathAdder",
            precio: 22999,
            id: 10,
            stock: 24,
            descripcion: "Desde 2005 Razer es la marca líder de estilo de vida para jugadores. Ha diseñado y construido el ecosistema de hardware, software y servicios más grande del mundo. La ubicación de cada botón y curva de los mouses Razer se crearon para adaptarse perfectamente a tu mano. Gracias a estos dispositivos, conseguirás una experiencia de juego cómoda y placentera.",
            imagen: "https://www.qloud.ar/SITES/IMG/gaming-point-06-2021/221_13-10-2022-12-10-52-concepto-7414849_ccexpress.png"
        },
        {
            nombre: "Notebook HP Spectre x360",
            precio: 688999,
            id: 11,
            stock: 4,
            descripcion: "Una notebook convertible elegante y poderosa para usuarios exigentes. Ajusta automáticamente el color y el brillo de la pantalla según el entorno donde te encuentres para lograr el máximo confort ocular. Colores increíblemente vividos con 100% la gama de colores DCI-P3. Cómoda para tus ojos pantalla Eyesafe que minimiza la luz azul. Siempre protegido: sistema de bloqueo de la cámara infraroja antihackers. Botón para silenciar tu micrófono cuando no está en uso.",
            imagen: "https://www.hp.com/content/dam/sites/worldwide/personal-computers/commercial/laptops/high-performance-2-in-1-laptops/Innovation%20-%20Image%20-%20Mobile.png"
        },
        {
            nombre: "Google Pixel 6",
            precio: 142999,
            id: 12,
            stock: 6,
            descripcion: "Doble cámara y más detalles Sus 2 cámaras traseras de 12.2 Mpx/12 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo. Además, el dispositivo cuenta con cámara frontal de 8 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas. Más para ver Con su pantalla OLED de 6.1, disfruta de colores intensos y mayor nitidez en todos tus contenidos.",
            imagen: "https://m.media-amazon.com/images/I/61PW24157AL._AC_SL1500_.jpg"
        },
        {
            nombre: "Monitor MSI Optix G241",
            precio: 139999,
            id: 13,
            stock: 8,
            descripcion: "Disfruta de todas las cualidades que el monitor MSI G241 tiene para ofrecerte. Percibe las imágenes de una manera completamente diferente y complementa cualquier espacio ya sea en tu hogar u oficina. Un monitor a la medida Gracias a su pantalla LCD obtendrás gráficas con gran nitidez, colores vivos y atractivos. Una experiencia visual de calidad Este monitor de 23.8 te proporcionará comodidad para estudiar, trabajar o ver una película en tus tiempos de ocio.",
            imagen: "https://www.venex.com.ar/products_images/1677583697_msi-3.png"
        },
        {
            nombre: "Teclado gaming HyperX Alloy",
            precio: 53399,
            id: 14,
            stock: 19,
            descripcion: "El HyperX Alloy FPS Pro es para el jugador FPS que desea un teclado sin tenkey (TKL) fiable y preciso que le permita aumentar su espacio del escritorio. Este teclado de 87 teclas proporciona todo lo que un jugador profesional necesita, pero sin el teclado numérico.",
            imagen: "https://media.solotodo.com/media/products/822679_picture_1538897604.jpg"
        },
        {
            nombre: "Mouse inalámbrico Logitech Serie G Lightspeed G305 black",
            precio: 25999,
            id: 15,
            stock: 29,
            descripcion: "Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos. Los dispositivos Logitech cuentan con un diseño ergonómico pensado para tu confort. Lightspeed es una tecnología ultrarrápida y confiable con desempeño probado en competencias por profesionales. No vuelvas a preocuparte por la duración de la batería. Simplemente, el mouse se mantiene cargado.",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_977588-MLA51172463642_082022-O.webp"
        }
    ];
    
    const getProductById = (id) =>{
        return products.find(producto => producto.id === Number(id))
    }
    const getProductCartById = (id) => {
        return cart.find(producto => producto.id === Number(id))
    }
    const [cart, setCart] = useState([])
    const isInCart = (id) => cart.some(producto => producto.id === Number(id))

    const addProductCart = (id, quantity) =>{
        if(isInCart(id)){
            setCart (cart.map(product =>{
                if(product.id == id){
                    product.quantity = quantity
                }
                return product
            }))
        }else{
            setCart ([...cart, {...getProductById(id), quantity: quantity}])
        }
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(product => total += product.precio * product.quantity)
        return total
    }

    const [searchProduct, setSearchProduct] = useState("")
    const [currentProducts, setCurrentProducts] = useState(products)
    useEffect(()=>{
    setCurrentProducts(products.filter(producto => producto.nombre.toLowerCase().includes(searchProduct.toLowerCase())))
    }, [searchProduct])

    return (
    <Context.Provider value={{products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal, setCurrentProducts,searchProduct, currentProducts, setSearchProduct}}>
        {children}
    </Context.Provider>
    )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider