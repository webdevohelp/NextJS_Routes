import { useRouter } from 'next/router';

const PortfolioProjectPage = () => {
    const router = useRouter();

    console.log('router.pathname: ', router.pathname);
    console.log(' router.query: ', router.query);

    return <h1>portfolio project</h1>;
};
export default PortfolioProjectPage;
