import Image from "next/image";

export default function Home() {
    return (
        <>
            <h1>Hello from landing!</h1>
            <Image src="/logo.png" alt="logo" width={100} height={100}/>
        </>
    );
}
