import React from "react";

const ADS = ({type}: { type: number }) => {
    const types = {
        1: <Type1/>,
        2: <Type2/>,
    };

    return types[type];
}

const Type1 = () => {
    return (
        <ins className="adsbygoogle"
             style={{
                 display: 'inline-block',
                 width: '100%',
                 height: '90px'
             }}
             data-ad-client="ca-pub-5595968868369218"
             data-ad-slot="5271167652"></ins>
    )
}

const Type2 = () => {
    return (
        <ins className="adsbygoogle"
             style={{
                 display: 'block'
             }}
             data-ad-format="fluid"
             data-ad-layout-key="-g3-2+1r-k7+10m"
             data-ad-client="ca-pub-5595968868369218"
             data-ad-slot="7424356578"></ins>
    )
}

export default ADS