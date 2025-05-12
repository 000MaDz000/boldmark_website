// components/Feature.tsx
import React from 'react';

type FeatureProps = React.HTMLAttributes<HTMLDivElement> & {
    icon: React.ReactNode;
    title: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, className = '', style, ...rest }) => {
    return (
        <div
            className={`flex items-center gap-2 ${className}`}
            style={style}
            {...rest}
        >
            <div className="flex-shrink-0">{icon}</div>
            <h3 className="text-base font-semibold">{title}</h3>
        </div>
    );
};

export default Feature;
