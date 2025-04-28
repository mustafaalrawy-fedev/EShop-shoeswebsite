import MainHeading from '../MainHeading';
import ContactUsForm from './ContactUsForm';

export default function ContactUsSection() {
    return (
        <section className="container w-full mt-20  text-mainTextColor dark:text-mainTextDarkColor">
            <MainHeading name='Contact Us'>
                <>
                    Feel Free To Get in touch with us via the form Below <br /> or using the contact details provided
                </>
            </MainHeading>
            <ContactUsForm />
        </section >
    )
}