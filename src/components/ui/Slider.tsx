'use client';

import React, { HTMLAttributes } from 'react';
import SlickSlider, { Settings } from 'react-slick';
import "@/import_wrappers/react-slick";

type SliderProps = {
    settings?: Settings;
    children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Slider: React.FC<SliderProps> = ({ settings = {}, children, ...rest }) => {
    return (
        <SlickSlider {...settings} {...rest as any}>
            {children}
        </SlickSlider>
    );
};

export default Slider;
