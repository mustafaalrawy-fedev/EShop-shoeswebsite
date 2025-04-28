import Link from "next/link"

export default function Logo() {
    return (
        <div>
            <h1 className='font-bold text-2xl text-mainTextColor dark:text-mainTextDarkColor main-transition'>
                <Link href="/">
                    EShoes
                </Link>
            </h1>
        </div>
    )
}