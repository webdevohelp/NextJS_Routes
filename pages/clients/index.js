import Link from 'next/link';

function ClientsPage() {
    const clients = [
        {
            id: 'shu',
            name: 'Shubhang',
        },
        {
            id: 'max',
            name: 'Donkey',
        },
    ];
    return (
        <div>
            <h1>Clients page</h1>
            <ul>
                {clients.map((data) => {
                    return (
                        <li key={`clients/${data.id}`}>
                            <Link
                                href={{
                                    pathname: '/clients/[id]',
                                    query: {
                                        id: data.id,
                                    },
                                }}
                            >
                                {data.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ClientsPage;
