/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        appDir: true,
    },

    env: {
         ENVIRONMENT_URL: "http://localhost:3000",
        // ENVIRONMENT_URL: "https://master.d24sycgowgt1de.amplifyapp.com",
        DB_URL: "mongodb+srv://homiemusa:djrefuge@cluster0.ufagbex.mongodb.net/likes",
        CLOUND_NAME:"xycoders",
        CLOUDINARY_API_KEY: "837887428819121",
        CLOUDINARY_API_SECRET: "fxqLgjYaglPh0PViyCbB-cseWoE",
        NEXTAUTH_SECRET: "refugewisemusawagole",
        STRIPE_PUBLIC_KEY: 'pk_test_51AXQQfDtSmo7ipf18rtyXOfKlXbzQBjm3hq7TQJIFFIcBbLrufa3chFTWAt17h9ck3dZX3RJagPqYxvOmRpjTIjx00P80JJDxI',
        STRIPE_PRIVATE_KEY: 'sk_test_51AXQQfDtSmo7ipf134DFxpL3fH75bb9QY8IjxvCXgeYPDCxZfqMARGQxUmSZXV1eQy3cuEnA2ljw7hcrXiYFlVVm00YiGlvmSP',
    },
    images: {
        domains: ["res.cloudinary.com"],
    }
};
 
module.exports = nextConfig


// mongodb+srv://homiemusa:<password>@cluster0.ufagbex.mongodb.net/
// DB_URL: "mongodb+srv://homiemusa:djrefuge@cluster0.fk517ja.mongodb.net/npcdatabase?retryWrites=true&w=majority",
