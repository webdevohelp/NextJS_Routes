import { useRouter } from 'next/router';

function ClientProjectsPage() {
    const router = useRouter();
    console.log(router.query);

    const loadProjectHandler = () => {
        // load data...
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {
                id: 'max',
                clientprojectid: 'z',
            },
        });
    };

    return (
        <div>
            <h1>The Projects of given client.</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}

export default ClientProjectsPage;
