import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import recyclebin from '../layout/assets/icons/recycle-bin.png'

function Cart() {
    console.log('first')
    const { product } = useSelector((state: any) => state.product)
    const { carts } = useSelector((state: any) => state.cart)
    const selectedProduct = product?.products?.filter(item =>
        carts.includes(item.id),
    )
    console.log(selectedProduct)

    return (
        <div
            className=' group-hover:flex flex-col justify-start overflow-y-scroll py-4 px-3 absolute  z-10 bg-white rounded-lg shadow-md border-[1px] border-slate-300
        shadow-slate-600 w-[25rem] h-[28rem] top-[2rem] left-[1.7rem] md:left-[1rem]'
        >
            <div className='flex justify-between w-full items-center mb-2 px-3'>
                <p className='rtl '>2 کالا</p>
                <p className='text-cyan-500 text-[18px] cursor-pointer yekan'>
                    مشاهده سبد خرید
                </p>
            </div>

            <div className='grid'>
                {selectedProduct?.map(item => {
                    return (
                        <div
                            className='grid grid-cols-2 hover:shadow-2xl hover:z-20 p-2 border'
                            key={item.id}
                        >
                            <div className='object-fill w-full'>
                                <img
                                    src={item.pic}
                                    alt='productPic'
                                    className='w-full'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-sm '>{item.title}</p>
                                <div className='grid justify-items-end m-2'>
                                    <div className='flex m-2 items-center	'>
                                        {item.rating}
                                        <Image
                                            src={recyclebin}
                                            className='m-2'
                                            alt=''
                                        />
                                    </div>

                                    <div className='font-bold'>
                                        {item.price}
                                    </div>
                                    <button
                                        className=' w-7 h-7 rounded-full font-bold
                       text-green-700 hover:bg-green-500 hover:text-white text-center text-lg '
                                        onClick={() =>
                                            dispatch(AddToCart(item.id))
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}

                {/* <div className='w-full flex m-2'>
                    <div className='grid'>
                        <Image
                            className='h-20 w-28 justify-end'
                            src='https://dkstatics-public.digikala.com/digikala-products/b2c0eb53f0eeacdefb8771155bf5e4887222a654_1672051046.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
                        />
                        <div className='flex border-2 rounded justify-between p-1 text-red-500 text-xl items-center'>
                            <div className='text-2xl'>+</div>
                            <div className=' '>1</div>
                            <div>
                                <Image src={recyclebin} />
                            </div>
                        </div>
                    </div>

                    <div className='grid p-2'>
                        <p>لپ تاپ 13 اینچی اپل مدل MacBook Air MGN63 2020</p>
                        <p>موجود</p>
                        <p>54,890,000</p>
                    </div>
                </div> */}

                <hr />
                <div className='inset-x-0 bottom-0 flex justify-between font-bold m-2'>
                    <div>
                        <p>مبلغ قابل پرداخت: 1000000</p>
                    </div>
                    <div>
                        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                            ثبت سفارش
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
