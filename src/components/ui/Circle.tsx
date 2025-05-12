// components/Circle.tsx
import React from 'react';

type CircleProps = React.HTMLAttributes<HTMLDivElement> & {
    size: number | string;
};

const Circle: React.FC<CircleProps> = ({ size, style, ...rest }) => {
    const dimension = typeof size === 'number' ? `${size}px` : size;

    return (
        <div
            {...rest}
            style={{
                width: dimension,
                height: dimension,
                borderRadius: '50%',
                display: 'inline-block',
                ...style,
            }}
        />
    );
};

export default Circle;
