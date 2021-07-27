import { useContext } from 'react';
import { SliderContext } from '../../store/Slider.context';
import Body from './subcomponents/body/Body';
import Buttons from './subcomponents/buttons/Buttons';
import useSlider from '../../hooks/useSlider.js';

import img1 from '../../images/works1.jpg';
import img2 from '../../images/works2.jpg';
import img3 from '../../images/works3.jpg';
import img4 from '../../images/works4.jpg';

import styles from './Slider.module.css';
import Pagination from './subcomponents/pagination/Pagination';

const images = [
    {
        src: img1,
        alt: 'photo1',
        active: false,
    },
    {
        src: img2,
        alt: 'photo2',
        active: true,
    },
    {
        src: img3,
        alt: 'photo3',
        active: false,
    },
    {
        src: img4,
        alt: 'photo4',
        active: false,
    },
];

const Slider = () => {
    const { changeImage, sliderImages } = useSlider(images);
    const { pagination } = useContext(SliderContext);

    const nextImage = () => changeImage(true);
    const prevImage = () => changeImage(false);
    const certainImage = index => changeImage(null, index);

    const imageIndex = sliderImages.findIndex(img => img.active);
    const numberOfImages = sliderImages.length;

    return (
        <div className={styles.slider}>
            <Body images={sliderImages} />
            <Buttons
                numberOfImages={numberOfImages}
                imageIndex={imageIndex}
                nextImage={nextImage}
                prevImage={prevImage}
            />
            {pagination && (
                <Pagination
                    changeImage={certainImage}
                    imageIndex={imageIndex}
                    numberOfImages={numberOfImages}
                />
            )}
        </div>
    );
};

export default Slider;
