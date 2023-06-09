import StarIcon from '/public/assets/star_icon.png';
import Image from 'next/image';
export default function StarRating({ rating }: { rating: number }) {
    const starArr = [];
    for (let i = 0; i < rating; i++) {
        starArr[i] = 1;
    }

    return (
        <>
            {starArr.map((e, i) => {
                return (
                    <Image key={i} src={StarIcon} alt="Rating Star Icon" height={20} width={20} className="inline" />
                );
            })}
        </>
    );
}
