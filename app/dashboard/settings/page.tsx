import Image from "next/image";

export default async function SettingsPage() {

    return (
        <>
            <h1>Hello from settings!</h1>
            <Image src="/logo.png" alt="logo" width={100} height={100}/>
        </>
    );
}