import { RocketIcon } from "@radix-ui/react-icons";

export function Logo() {
  return (
    <div className="bg-primary h-6 w-6 flex items-center justify-center rounded-md text-primary-foreground">
      <RocketIcon className="w-3 h-3" />
    </div>
  );
}
