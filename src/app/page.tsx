import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button variant={"primary"} size="lg">
        primary
      </Button>
      <Button variant={"secondary"} size="lg">
        secondary
      </Button>
      <Button variant={"destructive"} size="lg">
        destructive
      </Button>
      <Button variant={"ghost"} size="lg">
        ghost
      </Button>
      <Button variant={"muted"} size="lg">
        muted
      </Button>
      <Button variant={"outline"} size="lg">
        outline
      </Button>
      <Button variant={"teritary"} size="lg">
        teritary
      </Button>
    </div>
  );
}
