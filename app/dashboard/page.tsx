import Image from "next/image";

export default async function DashboardPage() {

    return (
        <>
            <h1>Hello from dashboard!</h1>
            <Image src="/logo.png" alt="logo" width={100} height={100}/>
        </>
    );
}