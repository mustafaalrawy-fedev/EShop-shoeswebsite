// import {Inter, Poppins} from 'next/font/google';
import {Inter, Poppins} from 'next/font/google';

const poppinsFont = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
});

const interFont = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-inter',
})

export {poppinsFont, interFont};