import Image from 'next/image';
import React from 'react';

const NotfoundPage = () => {
    return (
        <div>
           <Image
           src="/notFound.png"
              alt="Not Found"
                width={500}
                height={500}
              className="mx-auto mt-20"/>
        </div>
    );
};

export default NotfoundPage;