import { cn } from "~/utils";
import { PostDialog } from "~/components/PostDialog";

export function Nav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="border-b border-input">
      <div className="flex h-16 items-center px-4">
        <p className="text-lg text-gray-800">Upwork Blog</p>
        <nav
          className={cn(
            "mx-6 flex items-center space-x-4 lg:space-x-6",
            className
          )}
          {...props}
        />
        <div className="ml-auto flex items-center space-x-4">
          <PostDialog />
        </div>
      </div>
    </div>
  );
}
