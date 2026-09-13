import './globals.css';import Header from '../components/Header';import Footer from '../components/Footer';import type {Metadata} from 'next';
export const metadata:Metadata={title:'Ashish — Data Analytics & Economics',description:'Personal portfolio and blog for Ashish, focused on data analytics, economics, econometrics and research.',openGraph:{title:'Ashish — Data Analytics & Economics',description:'Portfolio, research and writing.'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <><Header/><main>{children}</main><Footer/></>}
