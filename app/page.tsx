import { Button } from "@/components";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Button variant="secondary" size="medium">
        Test
      </Button>
      <Button variant="primary" size="small">
        Test
      </Button>
      <Button variant="secondary">Test</Button>
    </main>
  );
}
