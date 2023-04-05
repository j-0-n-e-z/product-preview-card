import './App.css'

export default function App() {
	return <div className='w-full h-screen grid lg:place-items-center justify-items-center bg-cream'>
		<main className='flex lg:flex-row flex-col lg:mt-0 mt-7 lg:w-[600px] lg:h-[450px] w-11/12 h-fit bg-white rounded-xl overflow-hidden'>
			<section className='lg:w-1/2 w-full'>
				<img className='lg:block hidden' src='./images/image-product-desktop.jpg' alt="product" />
				<img className='block lg:hidden' src='./images/image-product-mobile.jpg' alt="product" />
			</section>
			<section className='flex flex-col lg:w-1/2 w-full lg:h-full lg:px-8 px-6 lg:py-8 py-6'>
				<p className='font-[Montserrat] uppercase tracking-widest text-xs text-darkGrayishBlue lg:mb-5 mb-3'>perfume</p>
				<h2 className='font-[Fraunces] text-veryDarkBlue text-[32px] leading-8 lg:mb-6 mb-4'>Gabrielle Essence Eau De Parfum</h2>
				<p className='font-[Montserrat] font-medium text-[14px] text-darkGrayishBlue leading-[1.45rem] lg:mb-5 mb-4'>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
					Perfumer-Creator for the House of CHANEL.</p>
				<div className="flex items-center gap-5 lg:mb-0 mb-3">
					<p className="font-[Fraunces] text-darkCyan text-[32px]">$149.99</p>
					<small className="font-[Montserrat] line-through text-darkGrayishBlue">$169.99</small>
				</div>
				<button className='font-[Montserrat] text-sm font-bold w-full mt-auto py-[14px] rounded-lg bg-darkCyan text-white grid place-items-center grid-flow-col justify-center gap-3 hover:bg-veryDarkBlue transition'>
				<img src="./images/icon-cart.svg" alt="cart" />	Add to Cart</button>
			</section>
		</main>
	</div>
}
