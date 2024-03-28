function Butto(){
    return (
        <div>
            <button>{ool.name}</button>
        </div>
    );
}

const ool = {
    name: 'bbab',
    id: 123
}

const ttt = [
    {
        name: 'dsmnflkm',
        id: 125453
    },
    {
        name: 'bbdddddab',
        id: 9999
    }
]

export default function God(){
    return (
        <div>
            {ttt.map((name,id) => (
                <>
                <h1>{id}</h1>
                <h1>{name.id}</h1>
                </>
            ))
            }
            <img src="./ta.jpg" alt="This shit is always show up if you know how to fix it pls tell me"/>
            <h1 className="mt-60 rounded-full border-4 border-sky-500 py-12 text-5xl text-center text-fuchsia-500">
                Hey bro you just found god HERE.
            </h1>
            <Butto />
        </div>
    );
}