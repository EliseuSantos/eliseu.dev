import Image from "next/image";
import Link from "next/link";

const TrustedCompany = ({imgUrl, altText}) => {
    return (
        <div className="swiper-slide px-5">
            <Link href="#" className="">
                <Image
                    src={imgUrl}
                    width="99"
                    height="21"
                    alt={altText}
                    priority
                    className="w-full h-auto"
                />
            </Link>
        </div>
    );
};

export default TrustedCompany;
