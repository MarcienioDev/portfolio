"use client"

import TiltedCard from "./TiltedCard";

export default function cardProfile() {
    return (
        <TiltedCard
            imageSrc="/assets/photo.jpg"
            altText="Eu"
            captionText="Eu"
            containerHeight="350px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
                    <p className="text-white font-semibold text-center">
                        Desenvolvedor Web
                    </p>
            }
        />
    );
}
