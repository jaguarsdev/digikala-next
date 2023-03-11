import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import recyclebin from '../layout/assets/icons/recycle-bin.png'
import { RemoveCart } from '@/redux/cartStore'

function SearchBox() {
    const dispatch = useDispatch()
    const { product } = useSelector((state: any) => state.product)
    const { searchvalue } = useSelector((state: any) => state.search)
    console.log(product.products)
    return (
        <div
            className='hidden group-hover:flex flex-col py-4 px-3 absolute  z-10 bg-white rounded-lg shadow-md
            border-[1px] border-slate-300
        shadow-slate-600 w-full md:w-2/4 max-h-80 top-10 right-0 md:left-[1.7rem] md:left-[1rem] overflow-y-scroll'
        >
            {/* <div className='flex justify-center font-bold w-full items-center mb-4 px-3'> */}
            {/* <p className='text-center'>2 کالا در سبد خرید شما موجود است</p> */}
            {/* <p className='text-cyan-500 text-[18px] cursor-pointer yekan'>
                    مشاهده سبد خرید
                </p> */}
            {/* </div> */}
                {searchvalue !== ''
                    ? product?.products
                          .filter((item: any) => {
                              const searchvaluelower = searchvalue.toLowerCase()
                              const titlelower = item.title.toLowerCase()
                              return titlelower.indexOf(searchvaluelower) > -1
                          })
                          .map((item: any) => {
                              return (
                                  <div
                                      className='grid grid-cols-5 p-2 border'
                                      key={item.id}
                                  >
                                      <div className='object-fill col-span-1 w-full'>
                                          <img
                                              src={item.pic}
                                              alt='productPic'
                                              className='w-full'
                                          />
                                      </div>
                                      <div className='flex items-center col-span-4'>
                                          <p className='text-sm '>
                                              {item.title}
                                          </p>
                                          {/* <div className='grid justify-items-end m-2'>
                                              <div className='font-bold'>
                                                  {parseInt(
                                                      item.price,
                                                  ).toLocaleString()}
                                              </div>
                                          </div> */}
                                      </div>
                                  </div>
                              )
                          })
                    : null}
            {/* <div className='absolute left-0 w-full bottom-0 flex items-center justify-between font-bold p-3 bg-white'>
                <div>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                        ثبت سفارش
                    </button>
                </div>
            </div> */}
        </div>
    )
}

export default SearchBox
