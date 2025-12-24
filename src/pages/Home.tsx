import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl py-4">Starter React + Tailwind 🚀</h1>
            <Button>Clique ici</Button>
            <Card>Coucou</Card>
            <Card>Lorem ipsum</Card>
        </div>
    );
}
