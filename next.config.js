const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
const nextConfig ={
    env:{
        appName:"Apel",
    },
    async rewrites(){
        return [
            {
                source:'/login',
                destination:'/auth/login'
            }
        ]
    }
}
module.exports = withBundleAnalyzer(nextConfig)