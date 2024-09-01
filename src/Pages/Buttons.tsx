import { Button } from "@/components/ui/button";
function ButtonPage() {
  return (
    <div className="flex flex-col gap-4 mb-2 mt-2">
      <h1 className="font-semibold text-ellipsis">List of Buttons</h1>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
      <Button disabled>Disabled Button</Button>
    </div>
  );
}

export default ButtonPage;
