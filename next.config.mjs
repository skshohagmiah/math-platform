/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"placehold.co"
            },{
                hostname:'plus.unsplash.com'
            }
        ]
    }
};

export default nextConfig;
